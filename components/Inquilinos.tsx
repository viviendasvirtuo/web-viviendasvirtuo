export default function Inquilinos() {
  const ventajas = [
    { icon: '✅', text: 'Habitaciones verificadas y en perfecto estado' },
    { icon: '⚡', text: 'Respuesta rápida a incidencias — máx. 48h' },
    { icon: '📄', text: 'Contratos claros y transparentes' },
    { icon: '🤝', text: 'Trato humano, no burocracia fría' },
    { icon: '🏠', text: 'Zonas comunes cuidadas y limpias' },
    { icon: '📱', text: 'Comunicación directa con el equipo gestor' },
  ];

  const tipos = [
    { badge: 'Coliving', desc: 'Habitación en piso compartido. Ambiente cuidado, vecinos seleccionados.', color: 'var(--color-coliving)' },
    { badge: 'Temporal', desc: 'Para estancias cortas: trabajo, formación, proyectos.', color: 'var(--color-temporal)' },
    { badge: 'Vacacional', desc: 'Apartamento completo para disfrutar sin ataduras.', color: 'var(--color-vacacional)' },
  ];

  return (
    <section id="inquilinos" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
          <p className="section-label">Para inquilinos</p>
          <h2 className="section-title">Vive en un espacio bien gestionado</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            No es solo alquilar. Es vivir en un espacio donde alguien responde, cuida y resuelve. Eso es lo que ofrecemos.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px,100%), 1fr))',
          gap: 'var(--space-12)',
          alignItems: 'center',
        }}>
          {/* Ventajas */}
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-8)',
            }}>
              {ventajas.map(v => (
                <div key={v.text} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)',
                  padding: 'var(--space-4)',
                  background: 'var(--color-surface)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  fontSize: 'var(--text-sm)',
                }}>
                  <span style={{ flexShrink: 0 }}>{v.icon}</span>
                  <span style={{ color: 'var(--color-text)', lineHeight: 1.45 }}>{v.text}</span>
                </div>
              ))}
            </div>

            <a href="#contacto" className="btn btn-primary btn-lg">
              Buscar habitación disponible
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </a>
          </div>

          {/* Tipos de alojamiento */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {tipos.map(t => (
              <div key={t.badge} style={{
                padding: 'var(--space-5) var(--space-6)',
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                borderLeft: `4px solid ${t.color}`,
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ fontWeight: 700, color: t.color, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-1)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.badge}</div>
                <div style={{ fontSize: 'var(--text-base)', color: 'var(--color-text)' }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
