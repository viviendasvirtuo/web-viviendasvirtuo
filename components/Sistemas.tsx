'use client';
import Link from 'next/link';

const sistemas = [
  {
    id: 'coliving',
    href: '/coliving',
    badge: 'Coliving',
    badgeClass: 'badge-coliving',
    title: 'Alquiler por habitaciones a largo plazo',
    desc: 'Ideal para viviendas compartidas. Gestionamos cada habitación de forma independiente con contratos estables, selección de perfiles compatibles y máxima ocupación garantizada.',
    colorRaw: '#1a4a8a',
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
  },
  {
    id: 'temporal',
    href: '/temporal',
    badge: 'Temporal',
    badgeClass: 'badge-temporal',
    title: 'Estancias de 1 a 6 meses para trabajo y estudio',
    desc: 'Para trabajadores desplazados y estudiantes de ciclos cortos. Flexibilidad total en duración, máxima rotación controlada y precio por encima del alquiler tradicional.',
    colorRaw: '#1e7a5a',
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
  },
  {
    id: 'vacacional',
    href: '/vacacional',
    badge: 'Vacacional',
    badgeClass: 'badge-vacacional',
    title: 'Apartamento completo para turismo',
    desc: 'Máxima rentabilidad por noche. Gestionamos la presencia en plataformas (Airbnb, Booking), comunicación con huéspedes, limpiezas y toda la operativa sin que intervengas.',
    colorRaw: '#c84820',
    features: [
      'Alta en Airbnb, Booking y más',
      'Pricing dinámico por temporada',
      'Gestión completa de huéspedes',
      'Rentabilidad máxima del mercado',
    ],
    meta: [
      { label: 'Ideal para', val: 'Apartamentos' },
      { label: 'Rentabilidad', val: 'Máxima' },
      { label: 'Estabilidad', val: 'Media' },
    ],
  },
];

export default function Sistemas() {
  return (
    <section id="sistemas" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">

        {/* Cabecera */}
        <div style={{ marginBottom: 'var(--space-12)' }}>
          <p className="section-label">Nuestros sistemas</p>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
            }}
          >
            <h2 className="section-title" style={{ margin: 0, maxWidth: '22ch' }}>
              Tres modelos. Una sola gestión.
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '44ch', margin: 0 }}>
              No somos una inmobiliaria. Somos especialistas en gestión de alquiler con tres sistemas distintos para maximizar la rentabilidad de tu vivienda.
            </p>
          </div>
        </div>

        {/* Grid asimétrico: usa clases CSS, NO style inline para grid-column */}
        <div className="sistemas-grid">
          {sistemas.map((s, i) => (
            <article
              key={s.id}
              className={`sistema-card${i === 0 ? ' sistema-card--grande' : ' sistema-card--pequena'}`}
              style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                display: 'flex',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Franja de color: lateral (grande) o superior (pequeñas) — controlada por CSS */}
              <div
                className={i === 0 ? 'franja-lateral' : 'franja-superior'}
                style={{ background: s.colorRaw, flexShrink: 0 }}
              />

              <div
                className={i === 0 ? 'card-inner--grande' : 'card-inner--pequena'}
                style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
              >
                {/* Badge */}
                <span
                  className={`badge ${s.badgeClass}`}
                  style={{ marginBottom: 'var(--space-4)', alignSelf: 'flex-start' }}
                >
                  {s.badge}
                </span>

                {/* Título */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: i === 0 ? 'var(--text-xl)' : 'var(--text-lg)',
                    fontWeight: 800,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-3)',
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.title}
                </h3>

                {/* Descripción */}
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.7,
                    marginBottom: 'var(--space-6)',
                    flex: i === 0 ? 1 : undefined,
                    maxWidth: i === 0 ? '52ch' : '38ch',
                  }}
                >
                  {s.desc}
                </p>

                {/* Features — solo card grande */}
                {i === 0 && (
                  <ul
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 'var(--space-2)',
                      marginBottom: 'var(--space-8)',
                      listStyle: 'none',
                    }}
                  >
                    {s.features.map(f => (
                      <li
                        key={f}
                        style={{
                          display: 'flex', alignItems: 'flex-start',
                          gap: 'var(--space-2)', fontSize: 'var(--text-sm)',
                        }}
                      >
                        <svg
                          width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke={s.colorRaw} strokeWidth="3"
                          style={{ flexShrink: 0, marginTop: '4px' }}
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span style={{ color: 'var(--color-text-muted)' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Meta + CTA */}
                <div
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 'var(--space-4)',
                    paddingTop: 'var(--space-6)',
                    borderTop: '1px solid var(--color-border)',
                  }}
                >
                  <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
                    {s.meta.map(m => (
                      <div key={m.label}>
                        <div style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--color-text-faint)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          marginBottom: '3px',
                        }}>
                          {m.label}
                        </div>
                        <div style={{
                          fontSize: 'var(--text-sm)',
                          fontWeight: 700,
                          color: s.colorRaw,
                        }}>
                          {m.val}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={s.href}
                    className="btn btn-outline btn-sm"
                    style={{ borderColor: `${s.colorRaw}40`, color: s.colorRaw, whiteSpace: 'nowrap' }}
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

        <style>{`
          /* Grid desktop */
          .sistemas-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-5);
          }
          /* Card grande ocupa 2 columnas */
          .sistema-card--grande {
            grid-column: span 2;
            flex-direction: row;
          }
          /* Card pequeña: 1 columna */
          .sistema-card--pequena {
            grid-column: span 1;
            flex-direction: column;
          }
          /* Franjas de color */
          .franja-lateral {
            width: 6px;
            height: auto;
          }
          .franja-superior {
            width: auto;
            height: 4px;
          }
          /* Padding inner */
          .card-inner--grande {
            padding: var(--space-10);
          }
          .card-inner--pequena {
            padding: var(--space-7);
          }
          /* Hover */
          .sistema-card {
            transition: box-shadow 0.25s ease, transform 0.25s ease;
          }
          .sistema-card:hover {
            box-shadow: var(--shadow-lg);
            transform: translateY(-3px);
          }
          /* ── MOBILE ── */
          @media (max-width: 900px) {
            .sistemas-grid {
              grid-template-columns: 1fr;
            }
            .sistema-card--grande,
            .sistema-card--pequena {
              grid-column: span 1;
              flex-direction: column;
            }
            .franja-lateral {
              width: auto;
              height: 4px;
            }
            .card-inner--grande {
              padding: var(--space-7);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
