'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Contacto — Viviendas Virtuo',
  description: 'Contacta con Viviendas Virtuo. Propietarios y inquilinos, estamos a tu disposición. Respuesta en menos de 24 horas.',
};

export default function ContactoPage() {
  const [tipo, setTipo] = useState<'propietario' | 'inquilino'>('propietario');
  const [sistema, setSistema] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviando(true);
    setError('');
    const form = e.currentTarget;
    const data = {
      tipo,
      nombre: (form.elements.namedItem('nombre') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      telefono: (form.elements.namedItem('telefono') as HTMLInputElement).value,
      sistema: sistema,
      mensaje: (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value,
      created_at: new Date().toISOString(),
    };

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Error al enviar');
      setEnviado(true);
    } catch {
      setError('Ha habido un problema al enviar. Inténtalo de nuevo o escríbenos directamente.');
    } finally {
      setEnviando(false);
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{
          background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 100%)',
          paddingTop: '140px', paddingBottom: '64px',
        }}>
          <div className="container" style={{ maxWidth: '680px' }}>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '16px',
            }}>
              Hablemos
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', lineHeight: 1.7 }}>
              Cuéntanos tu situación y te respondemos en menos de 24 horas. Sin compromiso.
            </p>
          </div>
        </section>

        {/* FORMULARIO */}
        <section style={{ padding: 'clamp(48px,8vw,96px) 0', background: 'var(--color-bg)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: '64px', alignItems: 'start' }}>

            {/* FORM */}
            {!enviado ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                {/* Tipo */}
                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '10px' }}>
                    Soy…
                  </label>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {(['propietario', 'inquilino'] as const).map(t => (
                      <button key={t} type="button" onClick={() => setTipo(t)} style={{
                        flex: 1, padding: '12px', borderRadius: 'var(--radius-lg)', cursor: 'pointer',
                        border: tipo === t ? '2px solid var(--color-primary)' : '1.5px solid var(--color-border)',
                        background: tipo === t ? '#e8f0fa' : 'var(--color-surface)',
                        color: tipo === t ? 'var(--color-primary)' : 'var(--color-text-muted)',
                        fontWeight: tipo === t ? 700 : 500, fontSize: 'var(--text-sm)',
                        transition: 'all 180ms',
                      }}>
                        {t === 'propietario' ? '🏠 Propietario' : '🙋 Inquilino / Huésped'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sistema */}
                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '10px' }}>
                    Me interesa el sistema…
                  </label>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {['Coliving', 'Temporal', 'Vacacional', 'No lo sé aún'].map(s => (
                      <button key={s} type="button" onClick={() => setSistema(s)} style={{
                        padding: '8px 16px', borderRadius: 'var(--radius-full)', cursor: 'pointer',
                        border: sistema === s ? '2px solid var(--color-primary)' : '1.5px solid var(--color-border)',
                        background: sistema === s ? 'var(--color-primary)' : 'var(--color-surface)',
                        color: sistema === s ? 'white' : 'var(--color-text-muted)',
                        fontWeight: 600, fontSize: 'var(--text-sm)', transition: 'all 180ms',
                      }}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nombre + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label htmlFor="nombre" style={{ display: 'block', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '6px' }}>Nombre *</label>
                    <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" style={{
                      width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-lg)',
                      border: '1.5px solid var(--color-border)', background: 'var(--color-surface)',
                      fontSize: 'var(--text-base)', color: 'var(--color-text)', outline: 'none',
                    }} />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '6px' }}>Email *</label>
                    <input id="email" name="email" type="email" required placeholder="tu@email.com" style={{
                      width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-lg)',
                      border: '1.5px solid var(--color-border)', background: 'var(--color-surface)',
                      fontSize: 'var(--text-base)', color: 'var(--color-text)', outline: 'none',
                    }} />
                  </div>
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" style={{ display: 'block', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '6px' }}>Teléfono</label>
                  <input id="telefono" name="telefono" type="tel" placeholder="+34 600 000 000" style={{
                    width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-lg)',
                    border: '1.5px solid var(--color-border)', background: 'var(--color-surface)',
                    fontSize: 'var(--text-base)', color: 'var(--color-text)', outline: 'none',
                  }} />
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" style={{ display: 'block', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '6px' }}>
                    {tipo === 'propietario' ? 'Cuéntanos sobre tu vivienda' : 'Cuéntanos qué buscas'}
                  </label>
                  <textarea id="mensaje" name="mensaje" rows={4} placeholder={
                    tipo === 'propietario'
                      ? 'Ubicación, número de habitaciones, situación actual...'
                      : 'Zona, fechas, presupuesto aproximado...'
                  } style={{
                    width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-lg)',
                    border: '1.5px solid var(--color-border)', background: 'var(--color-surface)',
                    fontSize: 'var(--text-base)', color: 'var(--color-text)', outline: 'none',
                    resize: 'vertical', minHeight: '120px', fontFamily: 'inherit',
                  }} />
                </div>

                {error && (
                  <p style={{ color: '#c0392b', fontSize: 'var(--text-sm)', background: '#fdf0ef', border: '1px solid #f5c6c2', borderRadius: 'var(--radius-md)', padding: '12px 16px' }}>
                    {error}
                  </p>
                )}

                <button type="submit" disabled={enviando} style={{
                  background: enviando ? 'var(--color-text-muted)' : 'var(--color-primary)',
                  color: 'white', fontWeight: 700, fontSize: 'var(--text-base)',
                  padding: '15px 32px', borderRadius: 'var(--radius-lg)', cursor: enviando ? 'not-allowed' : 'pointer',
                  border: 'none', transition: 'background 200ms', alignSelf: 'flex-start',
                }}>
                  {enviando ? 'Enviando…' : 'Enviar mensaje →'}
                </button>
              </form>
            ) : (
              <div style={{
                background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)', padding: '48px 40px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '12px' }}>
                  ¡Mensaje recibido!
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.7, maxWidth: '400px', margin: '0 auto 32px' }}>
                  Nos pondremos en contacto contigo en menos de 24 horas. Gracias por confiar en Virtuo.
                </p>
                <Link href="/" style={{
                  display: 'inline-flex', alignItems: 'center', background: 'var(--color-primary)',
                  color: 'white', fontWeight: 700, padding: '12px 24px',
                  borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-sm)',
                }}>
                  Volver al inicio
                </Link>
              </div>
            )}

            {/* SIDEBAR INFO */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '16px' }}>
                  ¿Prefieres llamar?
                </h3>
                <a href="tel:+34900000000" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-lg)', textDecoration: 'none', marginBottom: '8px' }}>
                  📞 +34 900 000 000
                </a>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', margin: 0 }}>Lunes a viernes, 9h – 19h</p>
              </div>

              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '16px' }}>
                  ¿O por email?
                </h3>
                <a href="mailto:hola@viviendasvirtuo.com" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: 'var(--text-sm)', textDecoration: 'none' }}>
                  hola@viviendasvirtuo.com
                </a>
              </div>

              <div style={{ background: '#f0f4fa', borderRadius: 'var(--radius-xl)', padding: '24px' }}>
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', marginBottom: '8px' }}>⚡ Respuesta en &lt;24h</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.6, margin: 0 }}>
                  Todos los mensajes son leídos por el equipo de Virtuo. Nunca hablarás con un bot.
                </p>
              </div>

              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '24px' }}>
                <p style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '12px' }}>¿No sabes qué sistema elegir?</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { href: '/coliving', label: 'Ver Coliving' },
                    { href: '/temporal', label: 'Ver Temporal' },
                    { href: '/vacacional', label: 'Ver Vacacional' },
                  ].map(l => (
                    <Link key={l.href} href={l.href} style={{ fontSize: 'var(--text-sm)', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>
                      {l.label} →
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <style>{`
          @media (max-width: 768px) {
            .container > form + aside,
            .container > div + aside {
              display: none;
            }
            .container {
              grid-template-columns: 1fr !important;
            }
            input, textarea {
              font-size: 16px !important;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
