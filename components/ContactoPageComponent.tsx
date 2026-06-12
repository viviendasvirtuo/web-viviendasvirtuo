'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TALLY_PROPIETARIO = 'https://tally.so/r/n0NyGB';
const TALLY_INQUILINO   = 'https://tally.so/r/2EaJNe';

const INFO = {
  propietario: {
    telefono: '+34 611 806 603',
    telefonoHref: 'tel:+34611806603',
    email: 'propietarios@viviendasvirtuo.com',
    emailHref: 'mailto:propietarios@viviendasvirtuo.com',
    tituloFormulario: 'Auditoría Técnica de Viabilidad Residencial',
    descripcion: 'Analizamos tu propiedad y te decimos qué sistema maximiza tu rentabilidad. Sin compromiso.',
    cta: 'Iniciar auditoría gratuita →',
    bloqueColor: '#0f2d5e',
    icono: '🏠',
  },
  inquilino: {
    telefono: '+34 611 806 603',
    telefonoHref: 'tel:+34611806603',
    email: 'inquilinos@viviendasvirtuo.com',
    emailHref: 'mailto:inquilinos@viviendasvirtuo.com',
    tituloFormulario: 'Solicitud de Estancia',
    descripcion: 'Cuéntanos qué buscas: zona, duración y presupuesto. Te encontramos la opción ideal.',
    cta: 'Solicitar estancia →',
    bloqueColor: '#1a4a8a',
    icono: '👤',
  },
};

export default function ContactoPageComponent() {
  const [tipo, setTipo] = useState<'propietario' | 'inquilino'>('propietario');
  const info = INFO[tipo];

  function handleTally() {
    const url = tipo === 'propietario' ? TALLY_PROPIETARIO : TALLY_INQUILINO;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section style={{
          background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 100%)',
          paddingTop: '140px',
          paddingBottom: '64px',
        }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Contacto
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}>
              Hablemos de lo que necesitas
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'var(--text-lg)', lineHeight: 1.7 }}>
              Sin compromiso. En menos de 24 horas un experto de Virtuo se pone en contacto contigo.
            </p>
          </div>
        </section>

        {/* CUERPO */}
        <section style={{ padding: 'clamp(48px, 8vw, 96px) 0', background: 'var(--color-bg)' }}>
          <div className="container">

            {/* SELECTOR TIPO */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-4)',
              maxWidth: '640px',
              margin: '0 auto var(--space-12)',
            }}>
              {(['propietario', 'inquilino'] as const).map(t => {
                const active = tipo === t;
                const bg = active ? INFO[t].bloqueColor : 'var(--color-surface)';
                const color = active ? 'white' : 'var(--color-text-muted)';
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTipo(t)}
                    style={{
                      padding: 'var(--space-6) var(--space-4)',
                      borderRadius: 'var(--radius-xl)',
                      border: active ? `2px solid ${INFO[t].bloqueColor}` : '2px solid var(--color-border)',
                      background: bg,
                      color,
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 200ms',
                      boxShadow: active ? 'var(--shadow-lg)' : 'none',
                    }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>{INFO[t].icono}</div>
                    <div style={{ fontWeight: 800, fontSize: 'var(--text-base)', marginBottom: 'var(--space-1)' }}>
                      {t === 'propietario' ? 'Soy Propietario' : 'Busco Alojamiento'}
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', opacity: 0.75, lineHeight: 1.4 }}>
                      {t === 'propietario' ? 'Quiero rentabilizar mi piso' : 'Busco habitación o apartamento'}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* GRID INFO + CTA */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))',
              gap: 'var(--space-12)',
              alignItems: 'start',
            }}>

              {/* LATERAL: datos de contacto dinámicos */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>

                <div style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-6)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: 'var(--space-1)' }}>
                    ¿Prefieres contactar directamente?
                  </h3>

                  <a href={info.telefonoHref} style={{
                    display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                    textDecoration: 'none',
                  }}>
                    <span style={{
                      width: '42px', height: '42px', borderRadius: 'var(--radius-full)',
                      background: '#e8f0fa', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0,
                    }}>📞</span>
                    <div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Teléfono</div>
                      <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: 'var(--text-base)' }}>{info.telefono}</div>
                    </div>
                  </a>

                  <a href={info.emailHref} style={{
                    display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                    textDecoration: 'none',
                  }}>
                    <span style={{
                      width: '42px', height: '42px', borderRadius: 'var(--radius-full)',
                      background: '#e8f0fa', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0,
                    }}>✉️</span>
                    <div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Email</div>
                      <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: 'var(--text-sm)', wordBreak: 'break-all' }}>{info.email}</div>
                    </div>
                  </a>

                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                  }}>
                    <span style={{
                      width: '42px', height: '42px', borderRadius: 'var(--radius-full)',
                      background: '#e8f0fa', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0,
                    }}>📍</span>
                    <div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Zona de actuación</div>
                      <div style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: 'var(--text-sm)' }}>Barcelona y área metropolitana</div>
                    </div>
                  </div>
                </div>

                {/* Nota confianza */}
                <div style={{
                  background: '#f0f4fa',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-5)',
                }}>
                  <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-1)' }}>⚡ Respuesta en &lt;24h</p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.6, margin: 0 }}>
                    Todos los mensajes son leídos por el equipo de Virtuo. Nunca hablarás con un bot.
                  </p>
                </div>

                {/* Links sistemas */}
                <div style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-5)',
                }}>
                  <p style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: 'var(--space-3)' }}>
                    ¿No sabes qué sistema elegir?
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
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
              </div>

              {/* BLOQUE CTA TALLY */}
              <div style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-8)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-5)',
              }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: 'var(--radius-full)',
                  background: info.bloqueColor,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem',
                }}>
                  {info.icono}
                </div>

                <div>
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 800,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-2)',
                    lineHeight: 1.2,
                  }}>
                    {info.tituloFormulario}
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.7 }}>
                    {info.descripcion}
                  </p>
                </div>

                {/* Qué esperar */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {(
                    tipo === 'propietario'
                      ? ['Cuestionario rápido (5 min)', 'Análisis personalizado de tu propiedad', 'Propuesta sin compromiso en 24h']
                      : ['Cuestionario rápido (3 min)', 'Te presentamos opciones adaptadas', 'Respuesta en menos de 24h']
                  ).map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                      <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1rem' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={handleTally}
                  style={{
                    background: info.bloqueColor,
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 'var(--text-base)',
                    padding: 'var(--space-4) var(--space-6)',
                    borderRadius: 'var(--radius-lg)',
                    border: 'none',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'center',
                    transition: 'filter 200ms',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.12)')}
                  onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(1)')}
                >
                  {info.cta}
                </button>

                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textAlign: 'center', margin: 0 }}>
                  Sin compromiso · Abre en nueva pestaña
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
