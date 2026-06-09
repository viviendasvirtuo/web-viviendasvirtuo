import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
