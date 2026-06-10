import { createClient } from '@supabase/supabase-js';

// Cliente lazy: se crea solo cuando se llama, nunca en build time
let _supabase: ReturnType<typeof createClient> | null = null;

export function getSupabaseClient() {
  if (_supabase) return _supabase;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Faltan variables de entorno: NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY');
  }

  _supabase = createClient(supabaseUrl, supabaseAnonKey);
  return _supabase;
}

// Alias para compatibilidad con código existente
export const supabase = new Proxy({} as ReturnType<typeof createClient>, {
  get(_target, prop) {
    return (getSupabaseClient() as any)[prop];
  },
});
