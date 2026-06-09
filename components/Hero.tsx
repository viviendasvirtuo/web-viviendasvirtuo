export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #1a4a8a 0%, #0f2d5e 100%)',
      color: '#fff', padding: '7rem var(--space-8) 6rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '1.5rem' }}>
          Gestión profesional de alquiler
        </p>
        <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
          Tu vivienda genera ingresos.<br />Nosotros nos encargamos de todo.
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.85, marginBottom: '2.5rem', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
          Tres sistemas de alquiler adaptados a tu propiedad y a tu perfil: coliving, temporal y vacacional.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#propietarios" style={{
            background: '#fff', color: 'var(--color-primary)',
            padding: '0.85rem 2rem', borderRadius: 'var(--radius-md)',
            fontWeight: 700, fontSize: '1rem'
          }}>Soy propietario</a>
          <a href="#inquilinos" style={{
            border: '2px solid rgba(255,255,255,0.6)', color: '#fff',
            padding: '0.85rem 2rem', borderRadius: 'var(--radius-md)',
            fontWeight: 600, fontSize: '1rem'
          }}>Busco habitación</a>
        </div>
      </div>
    </section>
  );
}
