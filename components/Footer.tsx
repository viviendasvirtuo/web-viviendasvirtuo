import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--color-surface-dark)',
        color: 'rgba(255,255,255,0.55)',
        paddingTop: 'var(--space-16)',
        paddingBottom: 'var(--space-8)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 'var(--space-10)',
            marginBottom: 'var(--space-12)',
          }}
        >
          {/* Marca */}
          <div style={{ gridColumn: '1' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex', alignItems: 'center',
                gap: '10px', marginBottom: 'var(--space-4)',
                textDecoration: 'none',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <rect width="36" height="36" rx="8" fill="#1a4a8a"/>
                <path d="M8 22L18 10L28 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 22V28H23V22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="15.5" y="23.5" width="5" height="4.5" rx="1" fill="white"/>
              </svg>
              <span
                style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '1.1rem', color: '#fff',
                }}
              >
                Viviendas Virtuo
              </span>
            </Link>
            <p
              style={{
                fontSize: 'var(--text-sm)', lineHeight: 1.7,
                maxWidth: '30ch', marginBottom: 'var(--space-6)',
              }}
            >
              Gestión profesional de alquiler en Barcelona. Coliving, temporal y vacacional.
            </p>
            {/* Contacto rápido */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <a
                href="tel:+34900000000"
                className="footer-link"
                style={{
                  fontSize: 'var(--text-sm)', display: 'flex',
                  alignItems: 'center', gap: 'var(--space-2)',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.46 16z"/>
                </svg>
                +34 900 000 000
              </a>
              <a
                href="mailto:hola@viviendasvirtuo.com"
                className="footer-link"
                style={{
                  fontSize: 'var(--text-sm)', display: 'flex',
                  alignItems: 'center', gap: 'var(--space-2)',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                hola@viviendasvirtuo.com
              </a>
            </div>
          </div>

          {/* Sistemas */}
          <div>
            <h3
              style={{
                fontSize: 'var(--text-xs)', fontWeight: 700,
                color: 'rgba(255,255,255,0.3)', marginBottom: 'var(--space-5)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              Sistemas
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {[
                { href: '/coliving', label: 'Coliving' },
                { href: '/temporal', label: 'Temporal' },
                { href: '/vacacional', label: 'Vacacional' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link" style={{ fontSize: 'var(--text-sm)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3
              style={{
                fontSize: 'var(--text-xs)', fontWeight: 700,
                color: 'rgba(255,255,255,0.3)', marginBottom: 'var(--space-5)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              Empresa
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {[
                { href: '/sobre-nosotros', label: 'Sobre nosotros' },
                { href: '/faq', label: 'Preguntas frecuentes' },
                { href: '/contacto', label: 'Contacto' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link" style={{ fontSize: 'var(--text-sm)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perfil */}
          <div>
            <h3
              style={{
                fontSize: 'var(--text-xs)', fontWeight: 700,
                color: 'rgba(255,255,255,0.3)', marginBottom: 'var(--space-5)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}
            >
              Para ti
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {[
                { href: '/propietarios', label: 'Soy propietario' },
                { href: '/inquilinos', label: 'Busco habitación' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link" style={{ fontSize: 'var(--text-sm)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divisor + legal */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: 'var(--space-6)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-3)',
            fontSize: 'var(--text-xs)',
          }}
        >
          <span>© {year} Viviendas Virtuo. Todos los derechos reservados.</span>
          <div style={{ display: 'flex', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
            <a href="#" className="footer-link-legal">Política de privacidad</a>
            <a href="#" className="footer-link-legal">Aviso legal</a>
            <a href="#" className="footer-link-legal">Cookies</a>
          </div>
        </div>

        {/* CSS hover sin JS — compatible con Server Components */}
        <style>{`
          .footer-link {
            color: rgba(255,255,255,0.55);
            text-decoration: none;
            transition: color 0.2s ease;
          }
          .footer-link:hover {
            color: #fff;
          }
          .footer-link-legal {
            color: rgba(255,255,255,0.55);
            text-decoration: none;
            transition: color 0.2s ease;
          }
          .footer-link-legal:hover {
            color: rgba(255,255,255,0.8);
          }
          @media (max-width: 900px) {
            footer .container > div:first-child {
              grid-template-columns: 1fr 1fr;
            }
            footer .container > div:first-child > div:first-child {
              grid-column: span 2;
            }
          }
          @media (max-width: 540px) {
            footer .container > div:first-child {
              grid-template-columns: 1fr;
            }
            footer .container > div:first-child > div:first-child {
              grid-column: span 1;
            }
          }
        `}</style>
      </div>
    </footer>
  );
}
