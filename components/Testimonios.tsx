'use client';
import Link from 'next/link';

const testimonios = [
  {
    nombre: 'Laura M.',
    lugar: 'Madrid, España',
    texto: 'He vivido en 3 pisos compartidos en Barcelona y este es el primero donde todo funciona. Suministros incluidos, limpieza semanal y el equipo responde rápido. Recomiendo Viviendas Virtuo 100%.',
    sistema: 'Coliving',
    color: '#0453ab',
    iniciales: 'LM',
  },
  {
    nombre: 'Carlos R.',
    lugar: 'México D.F., México',
    texto: 'La flexibilidad del alquiler temporal me salvó durante mi máster. Pude alquilar por 5 meses sin problemas. Todo correcto y sin sorpresas.',
    sistema: 'Temporal',
    color: '#008f58',
    iniciales: 'CR',
  },
  {
    nombre: 'Sophie L.',
    lugar: 'París, Francia',
    texto: 'El apartamento vacacional estaba impecable, tal cual las fotos. La atención 24h nos ayudó con un problema de la calefacción a las 10pm. Repetiremos.',
    sistema: 'Vacacional',
    color: '#c45e00',
    iniciales: 'SL',
  },
];

export default function Testimonios() {
  return (
    <section style={{
      padding: 'clamp(60px, 8vw, 100px) 0',
      background: '#ffffff',
    }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{
            color: 'var(--color-primary)',
            fontWeight: 700,
            fontSize: 'var(--text-sm)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>Opiniones reales</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            fontWeight: 800,
            color: 'var(--color-text)',
            lineHeight: 1.2,
          }}>Lo que dicen nuestros inquilinos</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {testimonios.map((t) => (
            <div key={t.nombre} style={{
              background: '#ffffff',
              border: '1px solid #e8ecf2',
              borderRadius: 'var(--radius-xl)',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
            }}
            >
              {/* Estrellas */}
              <div style={{ display: 'flex', gap: '3px' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: '#f59e0b', fontSize: '1rem' }}>★</span>
                ))}
              </div>

              {/* Texto */}
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text)',
                lineHeight: 1.7,
                margin: 0,
                flexGrow: 1,
              }}>
                &ldquo;{t.texto}&rdquo;
              </p>

              {/* Autor */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '8px', borderTop: '1px solid #f0f2f5' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: t.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                }}>
                  {t.iniciales}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <p style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', margin: 0 }}>{t.nombre}</p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', margin: 0 }}>{t.lugar}</p>
                </div>
                <span style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: t.color,
                  background: `${t.color}14`,
                  border: `1px solid ${t.color}30`,
                  borderRadius: '9999px',
                  padding: '3px 10px',
                  flexShrink: 0,
                }}>
                  {t.sistema}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="#" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: 'var(--text-sm)',
            fontWeight: 600,
            color: 'var(--color-primary)',
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            transition: 'border-color 0.15s ease',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'var(--color-primary)'}
          onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent'}
          >
            <span>Ver todas las opiniones en Google</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
