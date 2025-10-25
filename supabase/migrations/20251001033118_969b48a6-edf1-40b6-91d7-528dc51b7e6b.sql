-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create applications table
CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Personal Information
  full_name TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  id_number TEXT NOT NULL,
  gender TEXT NOT NULL CHECK (gender IN ('Male', 'Female', 'Other')),
  nationality TEXT NOT NULL,
  religion TEXT,
  
  -- Contact Information
  postal_address TEXT,
  po_box TEXT,
  code TEXT,
  town TEXT,
  county TEXT,
  home_district TEXT,
  mobile_number TEXT NOT NULL,
  email_address TEXT NOT NULL,
  
  -- Course Information
  course TEXT NOT NULL,
  student_type TEXT NOT NULL CHECK (student_type IN ('Boarder', 'Day Scholar')),
  
  -- Guardian/Next of Kin
  guardian_name TEXT NOT NULL,
  guardian_contact TEXT NOT NULL,
  guardian_relationship TEXT,
  guardian_address TEXT,
  guardian_occupation TEXT,
  
  -- How they found us
  referral_source TEXT,
  referral_other TEXT,
  
  -- Medical Information
  pre_existing_conditions TEXT,
  current_medications TEXT,
  heart_conditions TEXT,
  allergies TEXT,
  preferred_hospital TEXT,
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  blood_group TEXT,
  
  -- Education Background
  previous_school TEXT,
  academic_qualifications TEXT,
  
  -- Agreement Acknowledgments
  school_rules_accepted BOOLEAN DEFAULT false,
  hostel_rules_accepted BOOLEAN DEFAULT false,
  photo_consent_accepted BOOLEAN DEFAULT false,
  fee_agreement_accepted BOOLEAN DEFAULT false,
  
  -- File attachments (stored as file URLs or paths)
  id_copy_url TEXT,
  passport_photos_url TEXT,
  driving_license_url TEXT,
  payment_receipt_url TEXT,
  
  -- PDF generated from submission
  generated_pdf_url TEXT,
  
  -- Status tracking
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'under_review', 'accepted', 'rejected')),
  admin_notes TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to insert applications
CREATE POLICY "Anyone can submit applications"
ON public.applications
FOR INSERT
TO public
WITH CHECK (true);

-- Policy: Allow all to read applications
CREATE POLICY "Allow all to read applications"
ON public.applications
FOR SELECT
TO public
USING (true);

-- Policy: Allow updates for admin
CREATE POLICY "Allow updates for admin"
ON public.applications
FOR UPDATE
TO public
USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_applications_updated_at
BEFORE UPDATE ON public.applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster queries
CREATE INDEX idx_applications_email ON public.applications(email_address);
CREATE INDEX idx_applications_status ON public.applications(status);
CREATE INDEX idx_applications_created_at ON public.applications(created_at DESC);