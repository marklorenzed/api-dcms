export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      appointment: {
        Row: {
          clinic: number | null
          created_at: string
          id: number
          patient: number | null
        }
        Insert: {
          clinic?: number | null
          created_at?: string
          id?: number
          patient?: number | null
        }
        Update: {
          clinic?: number | null
          created_at?: string
          id?: number
          patient?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "appointment_clinic_fkey"
            columns: ["clinic"]
            isOneToOne: false
            referencedRelation: "clinic"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointment_patient_fkey"
            columns: ["patient"]
            isOneToOne: false
            referencedRelation: "patient"
            referencedColumns: ["id"]
          },
        ]
      }
      clinic: {
        Row: {
          address: string | null
          created_at: string
          id: number
          name: string
        }
        Insert: {
          address?: string | null
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          address?: string | null
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      dentist: {
        Row: {
          contact_number: number | null
          created_at: string
          id: number
          name: string
        }
        Insert: {
          contact_number?: number | null
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          contact_number?: number | null
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      patient: {
        Row: {
          address: string | null
          contact_number: number | null
          created_at: string
          email: string | null
          ext: string | null
          first_name: string | null
          id: number
          last_name: string | null
          middle_name: string | null
          sex: string | null
        }
        Insert: {
          address?: string | null
          contact_number?: number | null
          created_at?: string
          email?: string | null
          ext?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          middle_name?: string | null
          sex?: string | null
        }
        Update: {
          address?: string | null
          contact_number?: number | null
          created_at?: string
          email?: string | null
          ext?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          middle_name?: string | null
          sex?: string | null
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
