import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { tipo, nombre, email, telefono, sistema, mensaje, created_at } = body;

    if (!nombre || !email) {
      return NextResponse.json(
        { error: 'Nombre y email son obligatorios' },
        { status: 400 }
      );
    }

    const { error } = await supabase.from('leads').insert([
      {
        tipo,
        nombre,
        email,
        telefono: telefono || null,
        sistema: sistema || null,
        mensaje: mensaje || null,
        created_at,
      },
    ]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Error al guardar el mensaje' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
