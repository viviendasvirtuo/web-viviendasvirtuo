import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

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

export async function insertarLead(lead: Lead) {
  const { data, error } = await supabase
    .from('leads')
    .insert([{ ...lead, canal: 'web', estado: 'NUEVO' }]);
  if (error) throw error;
  return data;
}
