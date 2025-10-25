# IPMTTI Notification System Setup Guide

This document explains how to set up the enhanced notification system for the IPMTTI website that sends form submissions via email and WhatsApp.

## Overview

When users submit either the "Application" form or "Contact Us" form, the system automatically performs three actions in parallel:

1. **Email Notification** - Sends formatted HTML email with PDF attachment to `international.machinery.inst@gmail.com`
2. **WhatsApp Text Message** - Sends summary text to `+254715016300`
3. **WhatsApp PDF Document** - Sends the same PDF as a document attachment

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

### Email Configuration (Required)
```bash
# SMTP Configuration for sending emails
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
MAIL_FROM=your-email@gmail.com
```

**Gmail Setup:**
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: Google Account → Security → App passwords
3. Use the App Password as `SMTP_PASS`

### WhatsApp Cloud API Configuration (Required)
```bash
# WhatsApp Cloud API credentials
WHATSAPP_ACCESS_TOKEN=your-whatsapp-access-token
WHATSAPP_PHONE_ID=your-phone-number-id
WHATSAPP_TO=254715016300
```

**WhatsApp Business API Setup:**
1. Create a Meta for Developers account
2. Create a WhatsApp Business App
3. Get your Access Token and Phone Number ID from the app dashboard
4. The phone number should be in format `254715016300` (without +)

### Optional: File Storage for WhatsApp PDFs
```bash
# Supabase configuration for PDF storage (optional)
SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_BUCKET=your-bucket-name
```

**Note:** If Supabase is not configured, WhatsApp will only receive text messages without PDF attachments.

## Testing the System

### 1. Test Email Configuration
```bash
# Test with a simple curl request
curl -X POST http://localhost:3000/api/sendMessage \
  -H "Content-Type: application/json" \
  -d '{
    "type": "contact",
    "data": {
      "firstName": "Test",
      "lastName": "User",
      "email": "test@example.com",
      "phone": "+254700000000",
      "course": "Driving",
      "message": "This is a test message",
      "date": "2024-01-01T00:00:00.000Z"
    }
  }'
```

### 2. Test Application Form
```bash
curl -X POST http://localhost:3000/api/sendMessage \
  -H "Content-Type: application/json" \
  -d '{
    "type": "application",
    "data": {
      "fullName": "Test Applicant",
      "emailAddress": "applicant@example.com",
      "mobileNumber": "+254700000000",
      "course": "Plant Operator",
      "message": "Test application submission",
      "date": "2024-01-01T00:00:00.000Z"
    }
  }'
```

### 3. Expected Response
```json
{
  "ok": true,
  "email": true,
  "whatsappText": true,
  "whatsappDocument": true,
  "mediaUrl": "Uploaded"
}
```

## Email Templates

### Contact Form Email
- **Subject:** "New Contact Message - [Name]"
- **Content:** Formatted HTML with contact details
- **Attachment:** PDF with form data

### Application Form Email
- **Subject:** "New Application Submission - [Name]"
- **Content:** Formatted HTML with application details and urgent action notice
- **Attachment:** PDF with application data

## WhatsApp Messages

### Text Message Format
```
New Contact Message Received:
Name: John Doe
Email: john@example.com
Phone: +254700000000
Course: Driving
Message: I'm interested in the driving course
A detailed PDF copy has also been sent to your WhatsApp and email.
```

### Document Message
- **Type:** Document
- **Caption:** "New Contact Message (PDF)" or "New Application Submission (PDF)"
- **File:** PDF attachment with form data

## Troubleshooting

### Email Issues
1. **Authentication Failed:** Check SMTP credentials and app password
2. **Connection Timeout:** Verify SMTP_HOST and SMTP_PORT
3. **TLS Issues:** Set SMTP_SECURE=true for port 465

### WhatsApp Issues
1. **Invalid Token:** Verify WHATSAPP_ACCESS_TOKEN
2. **Phone ID Error:** Check WHATSAPP_PHONE_ID format
3. **Message Failed:** Ensure phone number is in correct format (254715016300)

### PDF Issues
1. **No PDF Attachment:** Check if Supabase is configured for file storage
2. **PDF Generation Error:** Verify pdfkit dependency is installed

## Logs and Debugging

The system logs all operations to the console:
- Email sending status
- WhatsApp text message status
- WhatsApp document status
- File upload status

Check Vercel function logs for detailed error information.

## Security Notes

1. **Never commit `.env.local` to version control**
2. **Use environment variables in production (Vercel)**
3. **Rotate WhatsApp access tokens regularly**
4. **Use app passwords for Gmail, not your main password**

## Production Deployment

1. Add all environment variables to your Vercel project settings
2. Test the system with real form submissions
3. Monitor logs for any issues
4. Set up error alerting if needed

## Support

For issues with:
- **Email setup:** Check Gmail SMTP documentation
- **WhatsApp API:** Refer to Meta's WhatsApp Business API docs
- **Supabase storage:** Check Supabase storage documentation
