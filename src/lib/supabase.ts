import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para las noticias
export interface Noticia {
  id: number;
  titulo: string;
  resumen: string;
  contenido: string;
  imagen_url: string | null;
  fecha_publicacion: string;
  categoria: 'evento' | 'noticia' | 'logro' | 'anuncio' | 'inscripcion';
  destacada: boolean;
  publicada: boolean;
  slug: string;
  created_at: string;
}

// Tipos para mensajes de contacto
export type EstadoMensaje = 'nuevo' | 'leido' | 'en_proceso' | 'contactado' | 'respondido' | 'archivado';

export interface MensajeContacto {
  id?: number;
  nombre: string;
  email: string;
  telefono: string;
  nivel_interes: 'inicial' | 'primario' | 'secundario' | 'general';
  mensaje: string;
  created_at?: string;
  estado?: EstadoMensaje;
  notas_internas?: string;
  fecha_contacto?: string;
  atendido_por?: string;
}

// Funciones para obtener noticias
export async function obtenerUltimasNoticias(limite: number = 3): Promise<Noticia[]> {
  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('publicada', true)
    .order('fecha_publicacion', { ascending: false })
    .limit(limite);

  if (error) {
    console.error('Error al obtener noticias:', error);
    return [];
  }

  return data || [];
}

export async function obtenerNoticiasDestacadas(): Promise<Noticia[]> {
  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('publicada', true)
    .eq('destacada', true)
    .order('fecha_publicacion', { ascending: false })
    .limit(3);

  if (error) {
    console.error('Error al obtener noticias destacadas:', error);
    return [];
  }

  return data || [];
}

// Obtener la publicación de inscripción activa (la más reciente publicada)
export async function obtenerPublicacionInscripcion(): Promise<Noticia | null> {
  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('publicada', true)
    .eq('categoria', 'inscripcion')
    .order('fecha_publicacion', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error('Error al obtener publicación de inscripción:', error);
    return null;
  }

  return data;
}

export async function obtenerTodasLasNoticias(): Promise<Noticia[]> {
  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('publicada', true)
    .order('fecha_publicacion', { ascending: false });

  if (error) {
    console.error('Error al obtener todas las noticias:', error);
    return [];
  }

  return data || [];
}

export async function obtenerNoticiaPorSlug(slug: string): Promise<Noticia | null> {
  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error al obtener noticia:', error);
    return null;
  }

  return data;
}

// Función para enviar mensaje de contacto
export async function enviarMensajeContacto(mensaje: Omit<MensajeContacto, 'id' | 'created_at' | 'estado'>): Promise<boolean> {
  const { error } = await supabase
    .from('mensajes_contacto')
    .insert({ ...mensaje, estado: 'nuevo' } as never);

  if (error) {
    console.error('Error al enviar mensaje:', error);
    return false;
  }

  return true;
}

// Funciones para gestión de mensajes (admin)
export async function obtenerMensajes(filtroEstado?: EstadoMensaje): Promise<MensajeContacto[]> {
  let query = supabase
    .from('mensajes_contacto')
    .select('*')
    .order('created_at', { ascending: false });

  if (filtroEstado) {
    query = query.eq('estado', filtroEstado);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error al obtener mensajes:', error);
    return [];
  }

  return data || [];
}

export async function actualizarEstadoMensaje(
  id: number,
  estado: EstadoMensaje,
  notas?: string,
  atendidoPor?: string
): Promise<boolean> {
  const updateData: Partial<MensajeContacto> = { estado };

  if (notas !== undefined) {
    updateData.notas_internas = notas;
  }

  if (atendidoPor) {
    updateData.atendido_por = atendidoPor;
  }

  if (estado === 'contactado' || estado === 'respondido') {
    updateData.fecha_contacto = new Date().toISOString();
  }

  const { error } = await supabase
    .from('mensajes_contacto')
    .update(updateData as never)
    .eq('id', id);

  if (error) {
    console.error('Error al actualizar mensaje:', error);
    return false;
  }

  return true;
}

export async function obtenerMensajePorId(id: number): Promise<MensajeContacto | null> {
  const { data, error } = await supabase
    .from('mensajes_contacto')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error al obtener mensaje:', error);
    return null;
  }

  return data;
}

export async function contarMensajesPorEstado(): Promise<Record<EstadoMensaje, number>> {
  const estados: EstadoMensaje[] = ['nuevo', 'leido', 'en_proceso', 'contactado', 'respondido', 'archivado'];
  const conteo: Record<string, number> = {};

  for (const estado of estados) {
    const { count, error } = await supabase
      .from('mensajes_contacto')
      .select('*', { count: 'exact', head: true })
      .eq('estado', estado);

    conteo[estado] = error ? 0 : (count || 0);
  }

  return conteo as Record<EstadoMensaje, number>;
}
