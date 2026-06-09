export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #0d1b2e 0%, #1a4a8a 50%, #0f2d5e 100%)',
      overflow: 'hidden',
    }}>
      {/* Patrón decorativo */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}/>

      {/* Círculo decorativo */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: '-10%', top: '10%',
        width: 'clamp(300px, 50vw, 700px)',
        height: 'clamp(300px, 50vw, 700px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}/>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '760px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 'var(--radius-full)',
            padding: '0.4rem 1rem',
            marginBottom: 'var(--space-6)',
            backdropFilter: 'blur(8px)',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', flexShrink: 0 }}/>
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Gestión profesional de alquiler · Barcelona
            </span>
          </div>

          {/* Titular */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-hero)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: 'var(--space-6)',
            letterSpacing: '-0.02em',
          }}>
            Tu vivienda genera ingresos.
            <span style={{
              display: 'block',
              background: 'linear-gradient(90deg, #60a5fa, #a5f3fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Nosotros lo gestionamos todo.
            </span>
          </h1>

          {/* Subtítulo */}
          <p style={{
            fontSize: 'var(--text-lg)',
            color: 'rgba(255,255,255,0.75)',
            marginBottom: 'var(--space-10)',
            maxWidth: '52ch',
            lineHeight: 1.65,
          }}>
            Tres sistemas de alquiler adaptados a tu propiedad: coliving, temporal y vacacional. Sin esfuerzo de tu parte, con rentabilidad máxima.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <a href="#contacto" className="btn btn-white btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Soy propietario
            </a>
            <a href="#inquilinos" className="btn btn-ghost-white btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Busco habitación
            </a>
          </div>

          {/* Social proof */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 'var(--space-6)',
            marginTop: 'var(--space-12)',
            flexWrap: 'wrap',
          }}>
            {[
              { num: '3', label: 'Sistemas de alquiler' },
              { num: '100%', label: 'Gestión completa' },
              { num: '0', label: 'Preocupaciones tuyas' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: 'var(--text-2xl)', fontFamily: 'var(--font-display)', fontWeight: 900, color: '#fff' }}>{stat.num}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em', textTransform: 'uppercase', marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flecha scroll */}
      <a href="#sistemas" aria-label="Ver más" style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.4)',
        animation: 'fadeUp 1s 0.8s both',
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </a>
    </section>
  );
}
