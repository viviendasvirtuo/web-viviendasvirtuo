'use client';
import Link from 'next/link';

const sistemas = [
  {
    id: 'coliving',
    href: '/coliving',
    badge: 'Coliving',
    title: 'Alquiler por habitaciones a largo plazo',
    desc: 'Ideal para viviendas compartidas. Gestionamos cada habitación de forma independiente con contratos estables, selección de perfiles compatibles y máxima ocupación garantizada.',
    bg: '#1a4a8a',
    bgDark: '#0f2d5e',
    features: [
      'Contratos individuales por habitación',
      'Selección y verificación de inquilinos',
      'Gestión de zonas comunes',
      'Ingresos estables mes a mes',
    ],
    meta: [
      { label: 'Ideal para', val: 'Pisos 3+ hab.' },
      { label: 'Rentabilidad', val: 'Alta' },
      { label: 'Estabilidad', val: 'Máxima' },
    ],
    nota: null,
  },
  {
    id: 'temporal',
    href: '/temporal',
    badge: 'Temporal',
    title: 'Estancias de 1 a 6 meses para trabajo y estudio',
    desc: 'Para trabajadores desplazados y estudiantes de ciclos cortos. Flexibilidad total en duración, máxima rotación controlada y precio por encima del alquiler tradicional.',
    bg: '#0d9e6e',
    bgDark: '#0a7a54',
    features: [
      'Estancias de 1 a 6 meses',
      'Check-in y check-out incluidos',
      'Limpieza y mantenimiento',
      'Precio superior al mercado',
    ],
    meta: [
      { label: 'Ideal para', val: 'Pisos céntricos' },
      { label: 'Rentabilidad', val: 'Muy alta' },
      { label: 'Estabilidad', val: 'Alta' },
    ],
    nota: null,
  },
  {
    id: 'vacacional',
    href: '/vacacional',
    badge: 'Vacacional',
    title: 'Gestión de apartamentos turísticos con licencia',
    desc: 'Máxima rentabilidad por noche para propietarios que ya disponen de licencia turística. Gestionamos plataformas, huéspedes, limpiezas y toda la operativa.',
    bg: '#c45e00',
    bgDark: '#9a4900',
    features: [
      'Gestión en Airbnb, Booking y más',
      'Pricing dinámico por temporada',
      'Gestión completa de huéspedes',
      'Informes mensuales de rentabilidad',
    ],
    meta: [
      { label: 'Requiere', val: 'Licencia turística' },
      { label: 'Rentabilidad', val: 'Máxima' },
      { label: 'Zonas', val: 'No BCN ciudad' },
    ],
    nota: 'Disponible en municipios con licencias turísticas vigentes (Badalona, área metropolitana y otras localidades). Barcelona ciudad no concede nuevas licencias.',
  },
];

export default function Sistemas() {
  return (
    <section id="sistemas" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">

        {/* Cabecera */}
        <div style={{ marginBottom: 'var(--space-12)' }}>
          <p className="section-label">Nuestros sistemas</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <h2 className="section-title" style={{ margin: 0, maxWidth: '22ch' }}>
              Tres modelos. Una sola gestión.
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '44ch', margin: 0 }}>
              No somos una inmobiliaria. Somos especialistas en gestión de alquiler con tres sistemas distintos para maximizar la rentabilidad de tu vivienda.
            </p>
          </div>
        </div>

        {/* 3 tarjetas en fila */}
        <div className="sistemas-grid">
          {sistemas.map((s) => (
            <article
              key={s.id}
              className="sistema-card"
              style={{
                background: s.bg,
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 'var(--space-8)' }}>

                {/* Badge */}
                <span style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  marginBottom: 'var(--space-5)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.7)',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 'var(--radius-full)',
                  padding: '4px 12px',
                }}>
                  {s.badge}
                </span>

                {/* Título */}
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: 'var(--space-3)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                }}>
                  {s.title}
                </h3>

                {/* Descripción */}
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(255,255,255,0.80)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-6)',
                }}>
                  {s.desc}
                </p>

                {/* Features */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-6)', listStyle: 'none', flex: 1 }}>
                  {s.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span style={{ color: 'rgba(255,255,255,0.85)' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Nota legal si existe */}
                {s.nota && (
                  <div style={{
                    background: 'rgba(0,0,0,0.2)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 'var(--radius-md)',
                    padding: '10px 12px',
                    marginBottom: 'var(--space-4)',
                  }}>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
                      ⚠️ {s.nota}
                    </p>
                  </div>
                )}

                {/* Meta + CTA */}
                <div style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 'var(--space-4)',
                  paddingTop: 'var(--space-5)',
                  borderTop: '1px solid rgba(255,255,255,0.2)',
                }}>
                  <div style={{ display: 'flex', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
                    {s.meta.map(m => (
                      <div key={m.label}>
                        <div style={{
                          fontSize: 'var(--text-xs)',
                          color: 'rgba(255,255,255,0.55)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          marginBottom: '3px',
                        }}>
                          {m.label}
                        </div>
                        <div style={{
                          fontSize: 'var(--text-sm)',
                          fontWeight: 700,
                          color: '#ffffff',
                        }}>
                          {m.val}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={s.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      color: '#ffffff',
                      textDecoration: 'none',
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '8px 16px',
                      whiteSpace: 'nowrap',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                  >
                    Ver sistema
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
