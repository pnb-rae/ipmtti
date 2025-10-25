import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';

// Optional: Supabase upload for generating a public media URL for WhatsApp attachments
// Only used if server env provides SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY and SUPABASE_BUCKET
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

// Simple in-memory rate limiter (per Vercel instance)
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 10; // 10 requests per window per IP
const ipToTimestamps: Record<string, number[]> = {};

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const list = ipToTimestamps[ip] || [];
  const pruned = list.filter((t) => t > windowStart);
  pruned.push(now);
  ipToTimestamps[ip] = pruned;
  return pruned.length > RATE_LIMIT_MAX;
}

const contactSchema = z.object({
  type: z.literal('contact'),
  data: z.object({
    firstName: z.string().min(1).max(100),
    lastName: z.string().min(1).max(100),
    email: z.string().email().max(200),
    phone: z.string().max(30).optional(),
    course: z.string().max(200).optional(),
    message: z.string().min(1).max(2000),
    date: z.string().datetime().optional(),
    // Honeypot field (should be empty)
    hp: z.string().max(0).optional(),
    // Time-to-submit in ms to deter bots (should be >= 1000)
    tts: z.number().optional(),
  }),
});

const applicationSchema = z.object({
  type: z.literal('application'),
  data: z.object({
    fullName: z.string().min(1).max(200),
    emailAddress: z.string().email().max(200),
    mobileNumber: z.string().min(7).max(30),
    course: z.string().min(1).max(200),
    message: z.string().max(2000).optional(),
    date: z.string().datetime().optional(),
    hp: z.string().max(0).optional(),
    tts: z.number().optional(),
  }),
});

type Payload = z.infer<typeof contactSchema> | z.infer<typeof applicationSchema>;

const REQUIRED_EMAIL_TO = 'international.machinery.inst@gmail.com';
const WHATSAPP_TO_DEFAULT = '254715016300'; // WhatsApp Cloud API uses format without +

function sanitize(str: unknown): string {
  return String(str ?? '').toString().replace(/[\r\n\t]+/g, ' ').trim();
}

function generatePdfBuffer(title: string, fields: Record<string, string>, formType: 'contact' | 'application'): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    const chunks: Buffer[] = [];

    doc.on('data', (chunk) => chunks.push(chunk as Buffer));
    doc.on('error', (err) => reject(err));
    doc.on('end', () => resolve(Buffer.concat(chunks)));

    // Header
    doc.fontSize(24).text('IPMTTI', { align: 'center' });
    doc.fontSize(16).text(title, { align: 'center' });
    doc.moveDown(2);

    // Add timestamp
    doc.fontSize(10).text(`Generated: ${new Date().toLocaleString()}`, { align: 'right' });
    doc.moveDown();

    // Content
    doc.fontSize(12);
    Object.entries(fields).forEach(([label, value]) => {
      if (value && value.trim()) {
        doc.font('Helvetica-Bold').text(`${label}:`, { continued: true });
        doc.font('Helvetica').text(` ${value}`);
        doc.moveDown(0.5);
      }
    });

    // Footer
    doc.moveDown(2);
    doc.fontSize(10).text('International Plant Machinery & Technical Training Institute', { align: 'center' });
    doc.text('Happy Valley, Thika. Off Garissa Road, Thika, Kiambu County, Kenya', { align: 'center' });
    doc.text('Email: international.machinery.inst@gmail.com | Phone: +254 715 016 300', { align: 'center' });

    doc.end();
  });
}

async function uploadToSupabaseIfConfigured(filePath: string, fileBuffer: Buffer, contentType: string): Promise<string | null> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const bucket = process.env.SUPABASE_BUCKET;

  if (!url || !key || !bucket) return null;

  const supabase = createClient(url, key);
  const { data, error } = await supabase.storage.from(bucket).upload(filePath, fileBuffer, {
    upsert: true,
    contentType,
  });
  if (error) return null;

  const { data: pub } = supabase.storage.from(bucket).getPublicUrl(data.path);
  return pub?.publicUrl || null;
}

async function sendEmailWithPdf(opts: { subject: string; html: string; pdfBuffer: Buffer; pdfFilename: string; to?: string }) {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = port === 465; // true for 465, false for 587
  const user = process.env.SMTP_USER || process.env.GMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
  const from = process.env.MAIL_FROM || user;

  if (!user || !pass || !from) {
    throw new Error('Missing SMTP credentials (SMTP_USER/GMAIL_USER and SMTP_PASS/GMAIL_APP_PASSWORD).');
  }

  const transporter = nodemailer.createTransport({ 
    host, 
    port, 
    secure, 
    auth: { user, pass },
    // Additional options for better compatibility
    tls: {
      rejectUnauthorized: false
    }
  });

  await transporter.sendMail({
    from,
    to: opts.to || REQUIRED_EMAIL_TO,
    subject: opts.subject,
    html: opts.html,
    attachments: [
      {
        filename: opts.pdfFilename,
        content: opts.pdfBuffer,
        contentType: 'application/pdf',
      },
    ],
  });
}

async function sendWhatsAppText(opts: { body: string; to?: string }) {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_ID;

  if (!accessToken || !phoneId) {
    console.log('WhatsApp credentials not configured, skipping text message');
    return { skipped: true } as const;
  }

  const url = `https://graph.facebook.com/v18.0/${phoneId}/messages`;
  const payload = {
    messaging_product: 'whatsapp',
    to: opts.to || WHATSAPP_TO_DEFAULT,
    type: 'text',
    text: {
      body: opts.body
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('WhatsApp text message failed:', error);
      return { skipped: true, error } as const;
    }

    const result = await response.json();
    console.log('WhatsApp text message sent:', result);
    return { skipped: false, result } as const;
  } catch (error) {
    console.error('WhatsApp text message error:', error);
    return { skipped: true, error } as const;
  }
}

async function sendWhatsAppDocument(opts: { mediaUrl: string; caption: string; to?: string }) {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_ID;

  if (!accessToken || !phoneId) {
    console.log('WhatsApp credentials not configured, skipping document message');
    return { skipped: true } as const;
  }

  const url = `https://graph.facebook.com/v18.0/${phoneId}/messages`;
  const payload = {
    messaging_product: 'whatsapp',
    to: opts.to || WHATSAPP_TO_DEFAULT,
    type: 'document',
    document: {
      link: opts.mediaUrl,
      caption: opts.caption
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('WhatsApp document message failed:', error);
      return { skipped: true, error } as const;
    }

    const result = await response.json();
    console.log('WhatsApp document message sent:', result);
    return { skipped: false, result } as const;
  } catch (error) {
    console.error('WhatsApp document message error:', error);
    return { skipped: true, error } as const;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const requestId = Math.random().toString(36).slice(2);
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';

    if (isRateLimited(ip)) {
      return res.status(429).json({ error: 'Too Many Requests' });
    }

    // Validate and parse
    const raw = req.body;
    let payload: Payload;
    try {
      if (raw?.type === 'contact') payload = contactSchema.parse(raw);
      else if (raw?.type === 'application') payload = applicationSchema.parse(raw);
      else return res.status(400).json({ error: 'Invalid payload type' });
    } catch (e: any) {
      return res.status(400).json({ error: 'Validation failed', details: e?.errors || String(e) });
    }

    // Bot protections
    const hp = (payload as any)?.data?.hp;
    const tts = (payload as any)?.data?.tts;
    if (hp) {
      return res.status(200).json({ ok: true }); // silently accept honeypot
    }
    if (typeof tts === 'number' && tts < 800) {
      return res.status(400).json({ error: 'Form submitted too quickly' });
    }

    const submittedAt = new Date(payload.data.date || Date.now()).toISOString();

    let title = '';
    let fields: Record<string, string> = {};
    let emailSubject = '';
    let emailHtml = '';
    let whatsappText = '';

    if (payload.type === 'contact') {
      const d = payload.data;
      title = 'Contact Form Submission';
      fields = {
        'Name': `${sanitize(d.firstName)} ${sanitize(d.lastName)}`.trim(),
        'Email': sanitize(d.email),
        'Phone': sanitize(d.phone),
        'Course of Interest': sanitize(d.course),
        'Message': sanitize(d.message),
        'Submission Date': new Date(submittedAt).toLocaleString(),
      };
      emailSubject = `New Contact Message - ${fields['Name']}`;
      emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2c3e50; }
            .value { margin-top: 5px; }
            .message { background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 10px 0; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📧 New Contact Form Submission</h2>
              <p>You have received a new contact form submission from the IPMTTI website.</p>
            </div>
            
            <div class="field">
              <div class="label">👤 Name:</div>
              <div class="value">${fields['Name']}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${fields['Email']}">${fields['Email']}</a></div>
            </div>
            
            <div class="field">
              <div class="label">📱 Phone:</div>
              <div class="value">${fields['Phone'] || 'Not provided'}</div>
            </div>
            
            <div class="field">
              <div class="label">🎓 Course of Interest:</div>
              <div class="value">${fields['Course of Interest'] || 'Not specified'}</div>
            </div>
            
            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="message">${fields['Message']}</div>
            </div>
            
            <div class="field">
              <div class="label">📅 Submission Date:</div>
              <div class="value">${fields['Submission Date']}</div>
            </div>
            
            <div class="footer">
              <p><strong>International Plant Machinery & Technical Training Institute</strong></p>
              <p>Happy Valley, Thika. Off Garissa Road, Thika, Kiambu County, Kenya</p>
              <p>Email: international.machinery.inst@gmail.com | Phone: +254 715 016 300</p>
            </div>
          </div>
        </body>
        </html>
      `;
      whatsappText = `New Contact Message Received:
Name: ${fields['Name']}
Email: ${fields['Email']}
Phone: ${fields['Phone'] || 'Not provided'}
Course: ${fields['Course of Interest'] || 'Not specified'}
Message: ${fields['Message']}
A detailed PDF copy has also been sent to your WhatsApp and email.`;
    } else {
      const d = payload.data;
      title = 'Application Submission';
      fields = {
        'Full Name': sanitize(d.fullName),
        'Email': sanitize(d.emailAddress),
        'Phone': sanitize(d.mobileNumber),
        'Course Applied For': sanitize(d.course),
        'Message': sanitize(d.message),
        'Submission Date': new Date(submittedAt).toLocaleString(),
      };
      emailSubject = `New Application Submission - ${fields['Full Name']}`;
      emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Application Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2c3e50; }
            .value { margin-top: 5px; }
            .message { background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 10px 0; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
            .urgent { background: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; border-radius: 5px; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🎓 New Application Submission</h2>
              <p>You have received a new student application from the IPMTTI website.</p>
            </div>
            
            <div class="urgent">
              <strong>⚠️ Action Required:</strong> Please review this application and contact the applicant within 24-48 hours.
            </div>
            
            <div class="field">
              <div class="label">👤 Full Name:</div>
              <div class="value">${fields['Full Name']}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${fields['Email']}">${fields['Email']}</a></div>
            </div>
            
            <div class="field">
              <div class="label">📱 Phone:</div>
              <div class="value"><a href="tel:${fields['Phone']}">${fields['Phone']}</a></div>
            </div>
            
            <div class="field">
              <div class="label">🎓 Course Applied For:</div>
              <div class="value"><strong>${fields['Course Applied For']}</strong></div>
            </div>
            
            <div class="field">
              <div class="label">💬 Additional Message:</div>
              <div class="message">${fields['Message'] || 'No additional message provided'}</div>
            </div>
            
            <div class="field">
              <div class="label">📅 Submission Date:</div>
              <div class="value">${fields['Submission Date']}</div>
            </div>
            
            <div class="footer">
              <p><strong>International Plant Machinery & Technical Training Institute</strong></p>
              <p>Happy Valley, Thika. Off Garissa Road, Thika, Kiambu County, Kenya</p>
              <p>Email: international.machinery.inst@gmail.com | Phone: +254 715 016 300</p>
            </div>
          </div>
        </body>
        </html>
      `;
      whatsappText = `New Application Received:
Name: ${fields['Full Name']}
Email: ${fields['Email']}
Phone: ${fields['Phone']}
Course: ${fields['Course Applied For']}
Message: ${fields['Message'] || 'No additional message'}
A detailed PDF copy has also been sent to your WhatsApp and email.`;
    }

    const pdfBuffer = await generatePdfBuffer(title, fields, payload.type);
    const pdfFilename = `${payload.type}-${Date.now()}.pdf`;

    // Upload to Supabase (if configured) to obtain a public URL for WhatsApp media
    const mediaUrl = await uploadToSupabaseIfConfigured(`form-pdfs/${pdfFilename}`, pdfBuffer, 'application/pdf');

    // Execute all three actions in parallel
    const results = await Promise.allSettled([
      // 1. Send email with PDF attachment
      sendEmailWithPdf({ 
        subject: emailSubject, 
        html: emailHtml, 
        pdfBuffer, 
        pdfFilename 
      }),
      
      // 2. Send WhatsApp text message
      sendWhatsAppText({ 
        body: whatsappText, 
        to: process.env.WHATSAPP_TO || WHATSAPP_TO_DEFAULT 
      }),
      
      // 3. Send WhatsApp document (if mediaUrl is available)
      mediaUrl ? sendWhatsAppDocument({ 
        mediaUrl, 
        caption: `New ${payload.type === 'contact' ? 'Contact Message' : 'Application Submission'} (PDF)`,
        to: process.env.WHATSAPP_TO || WHATSAPP_TO_DEFAULT 
      }) : Promise.resolve({ skipped: true })
    ]);

    // Log results for debugging (mask PII)
    console.log(`[${requestId}] Email result:`, results[0].status);
    console.log(`[${requestId}] WhatsApp text result:`, results[1].status);
    console.log(`[${requestId}] WhatsApp document result:`, results[2].status);

    // Check if at least email was sent successfully
    const emailSuccess = results[0].status === 'fulfilled';
    const whatsappTextSuccess = results[1].status === 'fulfilled' && !(results[1] as any).value?.skipped;
    const whatsappDocSuccess = results[2].status === 'fulfilled' && !(results[2] as any).value?.skipped;

    if (!emailSuccess) {
      console.error('Email sending failed:', results[0]);
      return res.status(500).json({ 
        error: 'Failed to send email notification',
        details: results[0].status === 'rejected' ? results[0].reason : 'Unknown error'
      });
    }

    return res.status(200).json({ 
      ok: true, 
      email: emailSuccess,
      whatsappText: whatsappTextSuccess,
      whatsappDocument: whatsappDocSuccess,
      mediaUrl: mediaUrl ? 'Uploaded' : 'Not uploaded (no storage configured)',
      requestId
    });
  } catch (err: any) {
    console.error('sendMessage error', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}


