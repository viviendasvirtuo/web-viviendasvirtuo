'use client';
import Link from 'next/link';

const SISTEMAS = [
  {
    id: 'coliving',
    badge: 'Coliving',
    title: 'Habitación a largo plazo',
    desc: 'Comunidad de convivencia, suministros incluidos, zonas comunes cuidadas. Ideal si te quedas 3+ meses.',
    bg: '#1a4a8a',
    features: [
      'Suministros incluidos',
      'Contratos estables',
      'Zonas comunes gestionadas',
      'Comunidad seleccionada',
    ],
  },
  {
    id: 'temporal',
    badge: 'Temporal',
    title: 'Estancia de 1 a 6 meses',
    desc: 'Perfecto para proyectos, másters o rotaciones. Flexibilidad sin sacrificar comodidad.',
    bg: '#0d9e6e',
    features: [
      'Estancias de 1 a 6 meses',
      'Check-in y check-out incluidos',
      'Limpieza y mantenimiento',
      'Precio todo incluido',
    ],
  },
  {
    id: 'vacacional',
    badge: 'Vacacional',
    title: 'Apartamento completo',
    desc: 'Para turistas o visitas puntuales. Apartamento íntegro, equipado y listo para disfrutar.',
    bg: '#c45e00',
    features: [
      'Apartamento completo para ti',
      'Totalmente equipado',
      'Gestión profesional',
      'Atención 24h',
    ],
  },
];

interface SistemaCardsProps {
  /** Prefijo de ruta. Por defecto apunta a /inquilinos/{id}.
   *  Pasa "/propietarios" para que apunte a /propietarios/{id}. */
  basePath?: string;
}

export default function SistemaCards({ basePath = '/inquilinos' }: SistemaCardsProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px,100%), 1fr))', gap: '24px' }}>
      {SISTEMAS.map((s) => {
        const href = `${basePath}/${s.id}`;
        return (
          <article
            key={s.id}
            style={{
              background: s.bg,
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.28)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)';
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
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-6)', listStyle: 'none', flex: 1, padding: 0 }}>
                {s.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ color: 'rgba(255,255,255,0.85)' }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div style={{
                marginTop: 'auto',
                paddingTop: 'var(--space-5)',
                borderTop: '1px solid rgba(255,255,255,0.2)',
              }}>
                <Link
                  href={href}
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
                  Ver {s.badge.toLowerCase()}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
