import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { applicationId } = await req.json();

    if (!applicationId) {
      throw new Error("Application ID is required");
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch the application
    const { data: application, error: fetchError } = await supabase
      .from("applications")
      .select("*")
      .eq("id", applicationId)
      .single();

    if (fetchError || !application) {
      throw new Error("Application not found");
    }

    // Send email to admin
    const adminEmailHTML = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #1a56db; border-bottom: 2px solid #1a56db; padding-bottom: 10px;">
              New Application Received - IPMTTI
            </h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1a56db;">Personal Information</h3>
              <p><strong>Name:</strong> ${application.full_name}</p>
              <p><strong>Email:</strong> ${application.email_address}</p>
              <p><strong>Phone:</strong> ${application.mobile_number}</p>
              <p><strong>ID Number:</strong> ${application.id_number}</p>
              <p><strong>Gender:</strong> ${application.gender}</p>
              <p><strong>Date of Birth:</strong> ${application.date_of_birth}</p>
              
              <h3 style="color: #1a56db; margin-top: 20px;">Course & Type</h3>
              <p><strong>Course:</strong> ${application.course}</p>
              <p><strong>Student Type:</strong> ${application.student_type}</p>
              
              <h3 style="color: #1a56db; margin-top: 20px;">Guardian Information</h3>
              <p><strong>Guardian:</strong> ${application.guardian_name}</p>
              <p><strong>Contact:</strong> ${application.guardian_contact}</p>
              
              <h3 style="color: #1a56db; margin-top: 20px;">Location</h3>
              <p><strong>County:</strong> ${application.county}</p>
              <p><strong>District:</strong> ${application.home_district}</p>
              
              ${application.allergies ? `
              <h3 style="color: #1a56db; margin-top: 20px;">Medical Notes</h3>
              <p><strong>Allergies:</strong> ${application.allergies}</p>
              ` : ''}
              
              ${application.pre_existing_conditions ? `
              <p><strong>Pre-existing Conditions:</strong> ${application.pre_existing_conditions}</p>
              ` : ''}
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
              <p style="margin: 0;"><strong>Application ID:</strong> ${application.id}</p>
              <p style="margin: 5px 0 0 0;"><strong>Submitted:</strong> ${new Date(application.created_at).toLocaleString()}</p>
            </div>
            
            <p style="color: #666; font-size: 12px; margin-top: 20px;">
              This is an automated notification from the IPMTTI application system.
            </p>
          </div>
        </body>
      </html>
    `;

    // Send email to applicant
    const applicantEmailHTML = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #1a56db; border-bottom: 2px solid #1a56db; padding-bottom: 10px;">
              Application Received - IPMTTI
            </h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p>Dear ${application.full_name},</p>
              
              <p>Thank you for submitting your application to the International Plant Machinery Training Institute (IPMTTI).</p>
              
              <p><strong>Application Details:</strong></p>
              <ul style="line-height: 1.8;">
                <li><strong>Course:</strong> ${application.course}</li>
                <li><strong>Student Type:</strong> ${application.student_type}</li>
                <li><strong>Application ID:</strong> ${application.id}</li>
                <li><strong>Submitted:</strong> ${new Date(application.created_at).toLocaleString()}</li>
              </ul>
              
              <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #1a56db; margin-top: 0;">Next Steps</h3>
                <ol style="margin: 10px 0;">
                  <li>Our admissions team will review your application within 2-3 business days</li>
                  <li>We will contact you via email or phone for any additional requirements</li>
                  <li>Once approved, you will receive an admission letter</li>
                </ol>
              </div>
              
              <p><strong>Questions?</strong> Contact us:</p>
              <ul style="list-style: none; padding: 0;">
                <li>📞 Phone: +254 725 782 912</li>
                <li>📧 Email: international.machinery.inst@gmail.com</li>
                <li>📍 Location: Happy Valley, Thika, Kiambu County, Kenya</li>
              </ul>
            </div>
            
            <p style="color: #666; font-size: 12px; margin-top: 20px;">
              This is an automated confirmation from IPMTTI. Please do not reply to this email.
            </p>
          </div>
        </body>
      </html>
    `;

    // Note: Since we don't have Resend configured, we'll log the emails
    // In production, you would use Resend or another email service here
    console.log("Admin email would be sent to: international.machinery.inst@gmail.com");
    console.log("Applicant email would be sent to:", application.email_address);

    // For now, return success without actual email sending
    // To enable real emails, user needs to configure Resend API key
    return new Response(
      JSON.stringify({
        success: true,
        message: "Application processed successfully",
        note: "Email service not configured. Contact admin for setup."
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error: any) {
    console.error("Error processing application:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to process application" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
