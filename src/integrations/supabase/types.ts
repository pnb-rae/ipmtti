export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      applications: {
        Row: {
          academic_qualifications: string | null
          admin_notes: string | null
          allergies: string | null
          blood_group: string | null
          code: string | null
          county: string | null
          course: string
          created_at: string
          current_medications: string | null
          date_of_birth: string
          driving_license_url: string | null
          email_address: string
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          fee_agreement_accepted: boolean | null
          full_name: string
          gender: string
          generated_pdf_url: string | null
          guardian_address: string | null
          guardian_contact: string
          guardian_name: string
          guardian_occupation: string | null
          guardian_relationship: string | null
          heart_conditions: string | null
          home_district: string | null
          hostel_rules_accepted: boolean | null
          id: string
          id_copy_url: string | null
          id_number: string
          mobile_number: string
          nationality: string
          passport_photos_url: string | null
          payment_receipt_url: string | null
          photo_consent_accepted: boolean | null
          po_box: string | null
          postal_address: string | null
          pre_existing_conditions: string | null
          preferred_hospital: string | null
          previous_school: string | null
          referral_other: string | null
          referral_source: string | null
          religion: string | null
          school_rules_accepted: boolean | null
          status: string | null
          student_type: string
          submitted_at: string | null
          town: string | null
          updated_at: string
        }
        Insert: {
          academic_qualifications?: string | null
          admin_notes?: string | null
          allergies?: string | null
          blood_group?: string | null
          code?: string | null
          county?: string | null
          course: string
          created_at?: string
          current_medications?: string | null
          date_of_birth: string
          driving_license_url?: string | null
          email_address: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          fee_agreement_accepted?: boolean | null
          full_name: string
          gender: string
          generated_pdf_url?: string | null
          guardian_address?: string | null
          guardian_contact: string
          guardian_name: string
          guardian_occupation?: string | null
          guardian_relationship?: string | null
          heart_conditions?: string | null
          home_district?: string | null
          hostel_rules_accepted?: boolean | null
          id?: string
          id_copy_url?: string | null
          id_number: string
          mobile_number: string
          nationality: string
          passport_photos_url?: string | null
          payment_receipt_url?: string | null
          photo_consent_accepted?: boolean | null
          po_box?: string | null
          postal_address?: string | null
          pre_existing_conditions?: string | null
          preferred_hospital?: string | null
          previous_school?: string | null
          referral_other?: string | null
          referral_source?: string | null
          religion?: string | null
          school_rules_accepted?: boolean | null
          status?: string | null
          student_type: string
          submitted_at?: string | null
          town?: string | null
          updated_at?: string
        }
        Update: {
          academic_qualifications?: string | null
          admin_notes?: string | null
          allergies?: string | null
          blood_group?: string | null
          code?: string | null
          county?: string | null
          course?: string
          created_at?: string
          current_medications?: string | null
          date_of_birth?: string
          driving_license_url?: string | null
          email_address?: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          fee_agreement_accepted?: boolean | null
          full_name?: string
          gender?: string
          generated_pdf_url?: string | null
          guardian_address?: string | null
          guardian_contact?: string
          guardian_name?: string
          guardian_occupation?: string | null
          guardian_relationship?: string | null
          heart_conditions?: string | null
          home_district?: string | null
          hostel_rules_accepted?: boolean | null
          id?: string
          id_copy_url?: string | null
          id_number?: string
          mobile_number?: string
          nationality?: string
          passport_photos_url?: string | null
          payment_receipt_url?: string | null
          photo_consent_accepted?: boolean | null
          po_box?: string | null
          postal_address?: string | null
          pre_existing_conditions?: string | null
          preferred_hospital?: string | null
          previous_school?: string | null
          referral_other?: string | null
          referral_source?: string | null
          religion?: string | null
          school_rules_accepted?: boolean | null
          status?: string | null
          student_type?: string
          submitted_at?: string | null
          town?: string | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
