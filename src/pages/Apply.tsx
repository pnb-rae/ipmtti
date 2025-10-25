import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon, Upload, FileText, CheckCircle, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import TermsDialog from "@/components/TermsDialog";
import SEOHead from "@/components/SEOHead";

const applicationSchema = z.object({
  // Personal Information
  fullName: z.string().min(2, "Full name is required").max(100),
  dateOfBirth: z.date({ required_error: "Date of birth is required" }),
  idNumber: z.string().min(6, "Valid ID number is required").max(20),
  gender: z.enum(["Male", "Female", "Other"]),
  nationality: z.string().min(2).max(50),
  religion: z.string().max(50).optional(),
  
  // Contact Information
  postalAddress: z.string().max(100).optional(),
  poBox: z.string().max(20).optional(),
  code: z.string().max(10).optional(),
  town: z.string().max(50).optional(),
  county: z.string().min(2).max(50),
  homeDistrict: z.string().min(2).max(50),
  mobileNumber: z.string().min(10, "Valid phone number is required").max(15),
  emailAddress: z.string().email("Valid email is required").max(255),
  
  // Course Information
  course: z.string().min(2, "Please select a course"),
  studentType: z.enum(["Boarder", "Day Scholar"]),
  
  // Guardian/Next of Kin
  guardianName: z.string().min(2, "Guardian name is required").max(100),
  guardianContact: z.string().min(10, "Guardian contact is required").max(15),
  guardianRelationship: z.string().max(50).optional(),
  guardianAddress: z.string().max(200).optional(),
  guardianOccupation: z.string().max(100).optional(),
  
  // Referral
  referralSource: z.string().optional(),
  referralOther: z.string().max(100).optional(),
  
  // Medical Information
  preExistingConditions: z.string().max(500).optional(),
  currentMedications: z.string().max(500).optional(),
  heartConditions: z.string().max(500).optional(),
  allergies: z.string().max(500).optional(),
  preferredHospital: z.string().max(100).optional(),
  emergencyContactName: z.string().min(2, "Emergency contact is required").max(100),
  emergencyContactPhone: z.string().min(10, "Emergency contact phone is required").max(15),
  bloodGroup: z.string().max(10).optional(),
  
  // Education
  previousSchool: z.string().max(100).optional(),
  academicQualifications: z.string().max(200).optional(),
  
  // Agreements
  termsAccepted: z.boolean().refine(val => val === true, "You must accept the terms and conditions"),
  schoolRulesAccepted: z.boolean().refine(val => val === true, "You must accept the school rules"),
  hostelRulesAccepted: z.boolean().optional(),
  photoConsentAccepted: z.boolean().refine(val => val === true, "You must provide photo consent"),
  feeAgreementAccepted: z.boolean().refine(val => val === true, "You must accept the fee agreement"),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

const Apply = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      studentType: "Day Scholar",
      termsAccepted: false,
      schoolRulesAccepted: false,
      hostelRulesAccepted: false,
      photoConsentAccepted: false,
      feeAgreementAccepted: false,
    },
  });

  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true);

    try {
      // Insert application into database
      const { data: application, error } = await supabase
        .from('applications')
        .insert([{
          full_name: data.fullName,
          date_of_birth: format(data.dateOfBirth, "yyyy-MM-dd"),
          id_number: data.idNumber,
          gender: data.gender,
          nationality: data.nationality,
          religion: data.religion || null,
          postal_address: data.postalAddress || null,
          po_box: data.poBox || null,
          code: data.code || null,
          town: data.town || null,
          county: data.county,
          home_district: data.homeDistrict,
          mobile_number: data.mobileNumber,
          email_address: data.emailAddress,
          course: data.course,
          student_type: data.studentType,
          guardian_name: data.guardianName,
          guardian_contact: data.guardianContact,
          guardian_relationship: data.guardianRelationship || null,
          guardian_address: data.guardianAddress || null,
          guardian_occupation: data.guardianOccupation || null,
          referral_source: data.referralSource || null,
          referral_other: data.referralOther || null,
          pre_existing_conditions: data.preExistingConditions || null,
          current_medications: data.currentMedications || null,
          heart_conditions: data.heartConditions || null,
          allergies: data.allergies || null,
          preferred_hospital: data.preferredHospital || null,
          emergency_contact_name: data.emergencyContactName,
          emergency_contact_phone: data.emergencyContactPhone,
          blood_group: data.bloodGroup || null,
          previous_school: data.previousSchool || null,
          academic_qualifications: data.academicQualifications || null,
          terms_accepted: data.termsAccepted,
          school_rules_accepted: data.schoolRulesAccepted,
          hostel_rules_accepted: data.hostelRulesAccepted || false,
          photo_consent_accepted: data.photoConsentAccepted,
          fee_agreement_accepted: data.feeAgreementAccepted,
        }])
        .select()
        .single();

      if (error) throw error;

      // Send email + WhatsApp via serverless API with attached PDF
      const resp = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'application',
          data: {
            fullName: data.fullName,
            emailAddress: data.emailAddress,
            mobileNumber: data.mobileNumber,
            course: data.course,
            message: `Application submitted in portal. DB id: ${application.id}`,
            date: new Date().toISOString(),
          }
        }),
      });

      if (!resp.ok) {
        const errorData = await resp.json();
        console.error('sendMessage failed:', errorData);
        toast({
          title: "Application Submitted",
          description: "We saved your application but couldn't notify via email/WhatsApp. We'll contact you soon.",
          variant: "destructive",
        });
      } else {
        const result = await resp.json();
        if (result.ok) {
          toast({
            title: "Application Submitted Successfully!",
            description: "✅ Your application has been sent via Email and WhatsApp! We'll contact you within 24-48 hours.",
          });
        } else {
          toast({
            title: "Application Submitted",
            description: "We saved your application but couldn't notify via email/WhatsApp. We'll contact you soon.",
            variant: "destructive",
          });
        }
      }

      setIsSuccess(true);
      form.reset();
    } catch (error: any) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or contact us via WhatsApp: +254 725 782912",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-card-foreground mb-2">Application Submitted!</h1>
              <p className="text-muted-foreground">
                Thank you for applying to IPMTTI. We've sent a confirmation email to your inbox.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Our admissions team will review your application and contact you within 2-3 business days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setIsSuccess(false)}>
                  Submit Another Application
                </Button>
                <Button variant="outline" asChild>
                  <a href="/">Back to Home</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <SEOHead 
        title="Apply to IPMTTI | Admissions Form"
        description="Apply online to IPMTTI in Thika, Kenya. Accredited by NITA, NTSA, and KNEC. Join programs in driving, plant operation, engineering, and ICT."
        keywords="apply IPMTTI, admission form, vocational training application, NITA accredited admissions, NTSA driving school application, KNEC certificate programs"
        canonical="/apply"
        ogImage="/og-image.png"
      />
      {/* JSON-LD: FAQ about Admissions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "When are the next intakes?",
                "acceptedAnswer": { "@type": "Answer", "text": "Rolling intakes with new classes starting every Monday for Driving & Plant Operation; major intakes in January, May and September for Engineering and ICT." }
              },
              {
                "@type": "Question",
                "name": "What documents do I need to apply?",
                "acceptedAnswer": { "@type": "Answer", "text": "National ID or Passport, KCPE/KCSE certificate (where applicable), and one passport photo. Additional documents may be requested for select programs." }
              },
              {
                "@type": "Question",
                "name": "Is accommodation available?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, hostel options are available near campus for boarding students. Contact admissions for current availability and rates." }
              },
              {
                "@type": "Question",
                "name": "How do I pay fees?",
                "acceptedAnswer": { "@type": "Answer", "text": "We support flexible payment plans. Fees can be paid via bank, mobile money, or in person at the office. Obtain an official receipt for every payment." }
              }
            ]
          })
        }}
      />
      {/* JSON-LD: Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ipmtti.co.ke" },
              { "@type": "ListItem", "position": 2, "name": "Apply", "item": "https://ipmtti.co.ke/apply" }
            ]
          })
        }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-card-foreground mb-4">Apply to IPMTTI</h1>
          <p className="text-lg text-muted-foreground">
            Complete this application form to join the International Plant Machinery & Technical Training Institute. 
            Your responses will be reviewed by our admissions team.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground flex items-center">
                <FileText className="w-6 h-6 mr-2 text-primary" />
                Personal Information
              </h2>
              
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of Birth *</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1940-01-01")
                            }
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="idNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ID / Passport Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter ID or passport number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-2 focus:ring-primary focus:ring-offset-2">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nationality *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Kenyan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="religion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Religion</FormLabel>
                      <FormControl>
                        <Input placeholder="Optional" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground">Contact Information</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="mobileNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="+254..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="county"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>County *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your county" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="homeDistrict"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Home District *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your district" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="town"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Town</FormLabel>
                      <FormControl>
                        <Input placeholder="Optional" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Course Selection */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground">Course Selection</h2>

              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Course *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="focus:ring-2 focus:ring-primary focus:ring-offset-2">
                          <SelectValue placeholder="Choose your course" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Driving">Driving</SelectItem>
                        <SelectItem value="Plant Operator">Plant Operator</SelectItem>
                        <SelectItem value="Driving & Plant">Driving & Plant</SelectItem>
                        <SelectItem value="Plant Mechanic">Plant Mechanic</SelectItem>
                        <SelectItem value="Plumbing">Plumbing</SelectItem>
                        <SelectItem value="Electrical Installation">Electrical Installation</SelectItem>
                        <SelectItem value="Masonry">Masonry</SelectItem>
                        <SelectItem value="Carpentry & Joinery">Carpentry & Joinery</SelectItem>
                        <SelectItem value="Painting">Painting</SelectItem>
                        <SelectItem value="Welding & Fabrication">Welding & Fabrication</SelectItem>
                        <SelectItem value="Motor Vehicle Electrician">Motor Vehicle Electrician</SelectItem>
                        <SelectItem value="Motor Vehicle Mechanic">Motor Vehicle Mechanic</SelectItem>
                        <SelectItem value="Computer Packages & ICT">Computer Packages & ICT</SelectItem>
                        
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="studentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student Type *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="focus:ring-2 focus:ring-primary focus:ring-offset-2">
                          <SelectValue placeholder="Select student type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Day Scholar">Day Scholar</SelectItem>
                        <SelectItem value="Boarder">Boarder</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Guardian Information */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground">Guardian / Next of Kin</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="guardianName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Guardian Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="guardianContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Guardian Contact *</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="guardianRelationship"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Relationship</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Parent, Sibling, Spouse" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Medical Information */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground">Medical Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="emergencyContactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Emergency Contact Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Who to contact in emergencies" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="emergencyContactPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Emergency Contact Phone *</FormLabel>
                      <FormControl>
                        <Input placeholder="Emergency phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="allergies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Known Allergies</FormLabel>
                    <FormControl>
                      <Textarea placeholder="List any allergies (optional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preExistingConditions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pre-existing Medical Conditions</FormLabel>
                    <FormControl>
                      <Textarea placeholder="List any conditions we should know about (optional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Agreements */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground">Terms & Agreements</h2>

              <FormField
                control={form.control}
                name="termsAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I have read and accept the Terms and Conditions *
                      </FormLabel>
                      <FormDescription>
                        Including all institute policies and student obligations.{" "}
                        <TermsDialog type="terms" />
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="schoolRulesAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I have read and accept the School Rules and Regulations *
                      </FormLabel>
                      <FormDescription>
                        Including attendance requirements, conduct guidelines, and disciplinary policies.{" "}
                        <TermsDialog type="school-rules" />
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="feeAgreementAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I accept the Fee Payment Agreement *
                      </FormLabel>
                      <FormDescription>
                        I understand the fee structure and payment terms.{" "}
                        <TermsDialog type="fee-agreement" />
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="photoConsentAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I grant permission for use of photographs *
                      </FormLabel>
                      <FormDescription>
                        For school promotional purposes only.{" "}
                        <TermsDialog type="photo-consent" />
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hostelRulesAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I accept the Hostel Rules (if applicable)
                      </FormLabel>
                      <FormDescription>
                        Only required for boarding students.{" "}
                        <TermsDialog type="hostel-rules" />
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" className="transition-transform hover:scale-105" onClick={() => form.reset()}>
                Clear Form
              </Button>
              <Button type="submit" size="lg" disabled={isSubmitting} className="min-w-[200px] transition-transform hover:scale-105 disabled:hover:scale-100 disabled:opacity-70">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Apply;
