export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      noticias: {
        Row: {
          id: number
          titulo: string
          resumen: string
          contenido: string
          imagen_url: string | null
          fecha_publicacion: string
          categoria: 'evento' | 'noticia' | 'logro' | 'anuncio'
          destacada: boolean
          publicada: boolean
          slug: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          titulo: string
          resumen: string
          contenido: string
          imagen_url?: string | null
          fecha_publicacion?: string
          categoria?: 'evento' | 'noticia' | 'logro' | 'anuncio'
          destacada?: boolean
          publicada?: boolean
          slug: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          titulo?: string
          resumen?: string
          contenido?: string
          imagen_url?: string | null
          fecha_publicacion?: string
          categoria?: 'evento' | 'noticia' | 'logro' | 'anuncio'
          destacada?: boolean
          publicada?: boolean
          slug?: string
          created_at?: string
          updated_at?: string
        }
      }
      mensajes_contacto: {
        Row: {
          id: number
          nombre: string
          email: string
          telefono: string
          nivel_interes: 'inicial' | 'primario' | 'secundario' | 'general'
          mensaje: string
          leido: boolean
          created_at: string
        }
        Insert: {
          id?: number
          nombre: string
          email: string
          telefono: string
          nivel_interes?: 'inicial' | 'primario' | 'secundario' | 'general'
          mensaje: string
          leido?: boolean
          created_at?: string
        }
        Update: {
          id?: number
          nombre?: string
          email?: string
          telefono?: string
          nivel_interes?: 'inicial' | 'primario' | 'secundario' | 'general'
          mensaje?: string
          leido?: boolean
          created_at?: string
        }
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
  }
}
