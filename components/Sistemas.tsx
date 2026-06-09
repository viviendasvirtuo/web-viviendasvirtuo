'use client';
const sistemas = [
  {
    id: 'coliving',
    badge: 'Coliving',
    badgeClass: 'badge-coliving',
    title: 'Alquiler por habitaciones a largo plazo',
    desc: 'Ideal para viviendas compartidas. Gestionamos cada habitación de forma independiente con contratos estables, selección de perfiles compatibles y máxima ocupación garantizada.',
    color: '#1a4a8a',
    features: [
      'Contratos individuales por habitación',
      'Selección y verificación de inquilinos',
      'Gestión de zonas comunes',
      'Ingresos estables mes a mes',
    ],
    ideal: 'Pisos de 3+ habitaciones',
    rentabilidad: 'Alta',
    estabilidad: 'Máxima',
  },
  {
    id: 'temporal',
    badge: 'Temporal',
    badgeClass: 'badge-temporal',
    title: 'Estancias cortas para trabajo y estudio',
    desc: 'Para trabajadores desplazados, estudiantes de máster o ciclos cortos. Flexibilidad en duración, máxima rotación controlada y precio por encima del mercado tradicional.',
    color: '#1e7a5a',
    features: [
      'Estancias de 1 a 6 meses',
      'Check-in y check-out incluidos',
      'Limpieza y mantenimiento',
      'Precio superior al alquiler tradicional',
    ],
    ideal: 'Pisos céntricos amueblados',
    rentabilidad: 'Muy alta',
    estabilidad: 'Alta',
  },
  {
    id: 'vacacional',
    badge: 'Vacacional',
    badgeClass: 'badge-vacacional',
    title: 'Apartamento completo para turismo',
    desc: 'Máxima rentabilidad por noche. Gestionamos la presencia en plataformas (Airbnb, Booking), la comunicación con huéspedes, limpiezas y toda la operativa.',
    color: '#c84820',
    features: [
      'Alta en Airbnb, Booking y más',
      'Pricing dinámico por temporada',
      'Gestión completa de huéspedes',
      'Rentabilidad máxima del mercado',
    ],
    ideal: 'Apartamentos turísticos',
    rentabilidad: 'Máxima',
    estabilidad: 'Media',
  },
];

export default function Sistemas() {
  return (
    <section id="sistemas" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
          <p className="section-label">Nuestros sistemas</p>
          <h2 className="section-title">Elige el modelo que mejor se adapta<br />a tu propiedad</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            No somos una inmobiliaria tradicional. Somos una empresa de gestión especializada con tres sistemas distintos para maximizar la rentabilidad de tu vivienda.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
          gap: 'var(--space-6)',
        }}>
          {sistemas.map(s => (
            <article key={s.id} style={{
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)',
              transition: 'all var(--transition-slow)',
              display: 'flex',
              flexDirection: 'column',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-6px)';
              el.style.boxShadow = 'var(--shadow-xl)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'none';
              el.style.boxShadow = 'var(--shadow-md)';
            }}>
              <div style={{
                background: s.color,
                padding: 'var(--space-8) var(--space-8) var(--space-6)',
              }}>
                <span className={`badge ${s.badgeClass}`} style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', marginBottom: 'var(--space-4)' }}>
                  {s.badge}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1.2,
                }}>
                  {s.title}
                </h3>
              </div>

              <div style={{ padding: 'var(--space-6) var(--space-8)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)', lineHeight: 1.65 }}>
                  {s.desc}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-6)', flex: 1 }}>
                  {s.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span style={{ color: 'var(--color-text)' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-4)',
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: 'var(--space-6)',
                }}>
                  {[{ label: 'Ideal para', val: s.ideal }, { label: 'Rentabilidad', val: s.rentabilidad }, { label: 'Estabilidad', val: s.estabilidad }].map(m => (
                    <div key={m.label} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>{m.label}</div>
                      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: s.color }}>{m.val}</div>
                    </div>
                  ))}
                </div>

                <a href="#contacto" className="btn btn-outline" style={{ borderColor: s.color, color: s.color, justifyContent: 'center' }}>
                  Me interesa este sistema
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
