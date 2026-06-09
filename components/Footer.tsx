'use client';
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--color-surface-dark)',
      color: 'rgba(255,255,255,0.7)',
      padding: 'var(--space-12) 0 var(--space-8)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
          gap: 'var(--space-10)',
          marginBottom: 'var(--space-10)',
        }}>
          {/* Marca */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-4)' }}>
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <rect width="36" height="36" rx="8" fill="#1a4a8a"/>
                <path d="M8 22L18 10L28 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 22V28H23V22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="15.5" y="23.5" width="5" height="4.5" rx="1" fill="white"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>Viviendas Virtuo</span>
            </div>
            <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.65, maxWidth: '28ch' }}>
              Gestión profesional de alquiler en Barcelona. Coliving, temporal y vacacional.
            </p>
          </div>

          {/* Sistemas */}
          <div>
            <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: '#fff', marginBottom: 'var(--space-4)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Sistemas</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {['Coliving', 'Temporal', 'Vacacional'].map(s => (
                <li key={s}><a href="#sistemas" style={{ fontSize: 'var(--text-sm)', transition: 'color var(--transition)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = ''}>
                  {s}
                </a></li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: '#fff', marginBottom: 'var(--space-4)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Contacto</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
              <li>+34 900 000 000</li>
              <li>hola@viviendasvirtuo.com</li>
              <li>Barcelona y área metropolitana</li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-3)',
          fontSize: 'var(--text-xs)',
        }}>
          <span>© {year} Viviendas Virtuo. Todos los derechos reservados.</span>
          <span>Gestión profesional de alquiler · Barcelona</span>
        </div>
      </div>
    </footer>
  );
}
