export default function Propietarios() {
  const beneficios = [
    { icon: '💰', title: 'Ingresos garantizados', desc: 'Liquidación puntual cada mes. Sin retrasos, sin excusas.' },
    { icon: '🔑', title: 'Gestión 100% delegada', desc: 'Desde la búsqueda de inquilinos hasta el mantenimiento. Tú solo cobras.' },
    { icon: '📋', title: 'Contratos y legal', desc: 'Toda la documentación en regla. Nos encargamos de todo el papeleo.' },
    { icon: '🛠️', title: 'Mantenimiento incluido', desc: 'Red de proveedores propia. Incidencias resueltas en menos de 48h.' },
    { icon: '📊', title: 'Informes mensuales', desc: 'Transparencia total. Sabes exactamente qué pasa con tu propiedad.' },
    { icon: '🚀', title: 'Máxima rentabilidad', desc: 'Elegimos el sistema que genera más ingresos para tu perfil de propiedad.' },
  ];

  return (
    <section id="propietarios" className="section section-alt">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))',
          gap: 'var(--space-16)',
          alignItems: 'center',
        }}>
          {/* Texto */}
          <div>
            <p className="section-label">Para propietarios</p>
            <h2 className="section-title">Rentabiliza tu vivienda sin<br />mover un dedo</h2>
            <p className="section-subtitle" style={{ marginBottom: 'var(--space-10)' }}>
              Olvídate de inquilinos que no pagan, averías de madrugada o contratos mal redactados. Nosotros nos hacemos cargo de absolutamente todo.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 'var(--space-4)',
              marginBottom: 'var(--space-8)',
            }}>
              {beneficios.map(b => (
                <div key={b.title} style={{
                  padding: 'var(--space-5)',
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: 'var(--space-2)' }}>{b.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: 'var(--space-1)' }}>{b.title}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{b.desc}</div>
                </div>
              ))}
            </div>

            <a href="#contacto" className="btn btn-primary btn-lg">
              Quiero rentabilizar mi propiedad
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Tarjeta visual */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-10)',
              color: '#fff',
              boxShadow: 'var(--shadow-xl)',
            }}>
              <div style={{ fontSize: 'var(--text-xs)', opacity: 0.7, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>Propietario ejemplo</div>
              <div style={{ fontSize: 'var(--text-2xl)', fontFamily: 'var(--font-display)', fontWeight: 900, marginBottom: 'var(--space-1)' }}>+€1.240/mes</div>
              <div style={{ fontSize: 'var(--text-sm)', opacity: 0.75, marginBottom: 'var(--space-8)' }}>Piso 4 hab. · Sistema Coliving</div>
              {[
                { label: 'Ocupación media', val: '97%' },
                { label: 'Incidencias este mes', val: '0' },
                { label: 'Próxima liquidación', val: '1 jul' },
              ].map(row => (
                <div key={row.label} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: 'var(--space-3) 0',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                  fontSize: 'var(--text-sm)',
                }}>
                  <span style={{ opacity: 0.7 }}>{row.label}</span>
                  <span style={{ fontWeight: 700 }}>{row.val}</span>
                </div>
              ))}
              <div style={{ marginTop: 'var(--space-6)', fontSize: 'var(--text-xs)', opacity: 0.55, textAlign: 'center' }}>
                Vista del panel del propietario
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
