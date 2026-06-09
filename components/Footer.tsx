export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--color-surface-dark)',
      color: 'rgba(255,255,255,0.7)',
      padding: 'var(--space-16) 0 var(--space-8)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
          gap: 'var(--space-10)',
          marginBottom: 'var(--space-12)',
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
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: '#fff' }}>Virtuo</span>
            </div>
            <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.65, maxWidth: '28ch', marginBottom: 'var(--space-4)' }}>
              Gestión profesional de alquiler en Barcelona. Coliving, temporal y vacacional.
            </p>
          </div>

          {/* Sistemas */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', marginBottom: 'var(--space-4)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Sistemas</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', listStyle: 'none' }}>
              {['Coliving', 'Temporal', 'Vacacional'].map(s => (
                <li key={s}><a href="#sistemas" style={{ fontSize: 'var(--text-sm)', transition: 'color var(--transition)' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'}>{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Para */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', marginBottom: 'var(--space-4)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Para ti</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', listStyle: 'none' }}>
              {[{ href: '#propietarios', label: 'Propietarios' }, { href: '#inquilinos', label: 'Inquilinos' }, { href: '#como-funciona', label: 'Cómo funciona' }, { href: '#contacto', label: 'Contacto' }].map(l => (
                <li key={l.label}><a href={l.href} style={{ fontSize: 'var(--text-sm)', transition: 'color var(--transition)' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', marginBottom: 'var(--space-4)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Contacto</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
              <span>hola@viviendasvirtuo.com</span>
              <span>+34 900 000 000</span>
              <span>Barcelona, Catalunya</span>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-3)',
          fontSize: 'var(--text-xs)',
          color: 'rgba(255,255,255,0.4)',
        }}>
          <span>© {year} Viviendas Virtuo. Todos los derechos reservados.</span>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <a href="/privacidad" style={{ color: 'inherit', transition: 'color var(--transition)' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.8)'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)'}>Política de privacidad</a>
            <a href="/aviso-legal" style={{ color: 'inherit', transition: 'color var(--transition)' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.8)'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)'}>Aviso legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
