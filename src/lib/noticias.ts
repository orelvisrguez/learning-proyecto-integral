import { supabase, type Noticia } from './supabase';

// Crear slug desde título
export function crearSlug(titulo: string): string {
  return titulo
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .replace(/[^a-z0-9\s-]/g, '') // Solo letras, números, espacios y guiones
    .replace(/\s+/g, '-') // Espacios a guiones
    .replace(/-+/g, '-') // Múltiples guiones a uno
    .replace(/^-|-$/g, ''); // Remover guiones al inicio/final
}

// Crear noticia
export async function crearNoticia(noticia: {
  titulo: string;
  resumen: string;
  contenido: string;
  categoria: 'evento' | 'noticia' | 'logro' | 'anuncio' | 'inscripcion';
  imagen_url?: string;
  destacada?: boolean;
  publicada?: boolean;
}): Promise<{ data: Noticia | null; error: string | null }> {
  const slug = crearSlug(noticia.titulo);

  const { data, error } = await supabase
    .from('noticias')
    .insert({
      ...noticia,
      slug,
      fecha_publicacion: new Date().toISOString(),
    } as never)
    .select()
    .single();

  if (error) {
    console.error('Error al crear noticia:', error);
    return { data: null, error: error.message };
  }

  return { data: data as Noticia, error: null };
}

// Actualizar noticia
export async function actualizarNoticia(
  id: number,
  updates: Partial<{
    titulo: string;
    resumen: string;
    contenido: string;
    categoria: 'evento' | 'noticia' | 'logro' | 'anuncio' | 'inscripcion';
    imagen_url: string;
    destacada: boolean;
    publicada: boolean;
  }>
): Promise<{ data: Noticia | null; error: string | null }> {
  // Si se actualiza el título, actualizar también el slug
  const updateData: Record<string, unknown> = { ...updates };
  if (updates.titulo) {
    updateData.slug = crearSlug(updates.titulo);
  }

  const { data, error } = await supabase
    .from('noticias')
    .update(updateData as never)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error al actualizar noticia:', error);
    return { data: null, error: error.message };
  }

  return { data: data as Noticia, error: null };
}

// Eliminar noticia
export async function eliminarNoticia(id: number): Promise<{ success: boolean; error: string | null }> {
  const { error } = await supabase
    .from('noticias')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar noticia:', error);
    return { success: false, error: error.message };
  }

  return { success: true, error: null };
}

// Obtener todas las noticias (incluyendo no publicadas - para admin)
export async function obtenerTodasLasNoticias(): Promise<Noticia[]> {
  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .order('fecha_publicacion', { ascending: false });

  if (error) {
    console.error('Error al obtener noticias:', error);
    return [];
  }

  return (data as Noticia[]) || [];
}

// Obtener noticia por ID
export async function obtenerNoticiaPorId(id: number): Promise<Noticia | null> {
  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error al obtener noticia:', error);
    return null;
  }

  return data as Noticia;
}

// Subir imagen
export async function subirImagen(file: File): Promise<{ url: string | null; error: string | null }> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
  const filePath = `noticias/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('imagenes')
    .upload(filePath, file);

  if (uploadError) {
    console.error('Error al subir imagen:', uploadError);
    return { url: null, error: uploadError.message };
  }

  const { data } = supabase.storage
    .from('imagenes')
    .getPublicUrl(filePath);

  return { url: data.publicUrl, error: null };
}
