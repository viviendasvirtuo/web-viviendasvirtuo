'use client';
export default function Inquilinos() {
  const ventajas = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: 'Habitaciones verificadas',
      desc: 'Fotos reales, descripción honesta. Sin sorpresas al llegar.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
      ),
      title: 'Contratos claros',
      desc: 'Documentación en regla, condiciones transparentes desde el primer día.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.46 16z"/>
        </svg>
      ),
      title: 'Soporte real',
      desc: 'Equipo humano accesible para cualquier incidencia. Respondemos de verdad.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Proceso ágil',
      desc: 'Desde que contactas hasta que tienes llaves: menos de 72 horas en la mayoría de casos.',
    },
  ];

  return (
    <section id="inquilinos" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px, 100%), 1fr))',
          gap: 'var(--space-16)',
          alignItems: 'center',
        }}>
          <div>
            <p className="section-label">Para inquilinos</p>
            <h2 className="section-title">Encuentra tu espacio.<br />Sin complicaciones.</h2>
            <p className="section-subtitle" style={{ marginBottom: 'var(--space-8)' }}>
              Habitaciones y apartamentos bien gestionados en Barcelona. Proceso sencillo, contratos en regla y soporte real cuando lo necesitas.
            </p>
            <a href="#contacto" className="btn btn-primary btn-lg">
              Buscar habitación
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </a>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-4)',
          }}>
            {ventajas.map(v => (
              <div key={v.title} style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{
                  width: '44px', height: '44px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-primary-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--space-3)',
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-text)', marginBottom: 'var(--space-2)' }}>{v.title}</h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
