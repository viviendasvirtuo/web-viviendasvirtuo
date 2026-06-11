import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tipo, nombre, email, telefono, sistema, mensaje } = body;

    // Solo nombre y teléfono son obligatorios (email es opcional)
    if (!nombre?.trim() || !telefono?.trim()) {
      return NextResponse.json(
        { error: 'Nombre y teléfono son obligatorios' },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error('Faltan variables de entorno de Supabase');
      return NextResponse.json(
        { error: 'Error de configuración del servidor' },
        { status: 500 }
      );
    }

    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from('leads').insert([{
      tipo: tipo || 'propietario',
      nombre: nombre.trim(),
      email: email?.trim() || null,
      telefono: telefono.trim(),
      sistema: sistema || null,
      mensaje: mensaje?.trim() || null,
      fecha_alta: new Date().toISOString(),
    }]);

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
