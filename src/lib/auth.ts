import { supabase } from './supabase';

export interface User {
  id: string;
  email: string;
  role?: string;
}

// Iniciar sesión con email y contraseña
export async function signIn(email: string, password: string): Promise<{ user: User | null; error: string | null }> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { user: null, error: error.message };
  }

  if (data.user) {
    return {
      user: {
        id: data.user.id,
        email: data.user.email || '',
        role: data.user.user_metadata?.role || 'admin',
      },
      error: null,
    };
  }

  return { user: null, error: 'Error desconocido' };
}

// Cerrar sesión
export async function signOut(): Promise<void> {
  await supabase.auth.signOut();
}

// Obtener usuario actual
export async function getCurrentUser(): Promise<User | null> {
  const { data: { session } } = await supabase.auth.getSession();

  if (session?.user) {
    return {
      id: session.user.id,
      email: session.user.email || '',
      role: session.user.user_metadata?.role || 'admin',
    };
  }

  return null;
}

// Verificar si hay sesión activa
export async function isAuthenticated(): Promise<boolean> {
  const { data: { session } } = await supabase.auth.getSession();
  return !!session;
}

// Crear usuario administrador (solo para uso inicial)
export async function createAdminUser(email: string, password: string): Promise<{ success: boolean; error: string | null }> {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        role: 'admin',
      },
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, error: null };
}
