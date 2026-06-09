import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Lead = {
  tipo: 'propietario' | 'inquilino';
  sistema?: 'coliving' | 'temporal' | 'vacacional' | 'sin_definir';
  nombre: string;
  email?: string;
  telefono: string;
  mensaje?: string;
  ciudad?: string;
  canal?: string;
};
