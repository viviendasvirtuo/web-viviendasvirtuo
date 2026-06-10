'use client';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  const plataformas = [
    { name: 'Airbnb', label: 'Airbnb' },
    { name: 'Booking.com', label: 'Booking.com' },
    { name: 'Idealista', label: 'idealista' },
    { name: 'Fotocasa', label: 'fotocasa' },
    { name: 'Habitaclia', label: 'habitaclia' },
  ];

  const emails = [
    { addr: 'contacto@viviendasvirtuo.com', label: 'contacto@viviendasvirtuo.com' },
    { addr: 'inquilinos@viviendasvirtuo.com', label: 'inquilinos@' },
    { addr: 'propietarios@viviendasvirtuo.com', label: 'propietarios@' },
    { addr: 'servicios@viviendasvirtuo.com', label: 'servicios@' },
  ];

  const rrss = [
    {
      href: 'https://www.instagram.com/viviendasvirtuo/',
      label: 'Instagram',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
      ),
    },
    {
      href: 'https://www.linkedin.com/company/viviendas-virtuo/?viewAsMember=true',
      label: 'LinkedIn',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      href: 'https://www.facebook.com/profile.php?id=61581523952813',
      label: 'Facebook',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
    {
      href: 'https://api.whatsapp.com/send/?phone=34611806603&text&type=phone_number&app_absent=0',
      label: 'WhatsApp',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      ),
    },
  ];

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
          {/* Marca + contacto */}
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
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>
                Viviendas Virtuo
              </span>
            </Link>

            <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.7, maxWidth: '30ch', marginBottom: 'var(--space-5)' }}>
              Espacios que conectan, hogares que inspiran.
            </p>

            {/* Dirección */}
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <a
                href="https://maps.google.com/?q=Gran+Via+de+les+Corts+Catalanes+613+Barcelona"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{ fontSize: 'var(--text-xs)', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.5 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: '2px', flexShrink: 0 }} aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Gran Via de les Corts Catalanes, 613<br/>08007 Barcelona</span>
              </a>
            </div>

            {/* Teléfono */}
            <div style={{ marginBottom: 'var(--space-3)' }}>
              <a href="tel:+34611806603" className="footer-link"
                style={{ fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.46 16z"/>
                </svg>
                611 806 603
              </a>
            </div>

            {/* Emails */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: 'var(--space-6)' }}>
              {emails.map(e => (
                <a key={e.addr} href={`mailto:${e.addr}`} className="footer-link"
                  style={{ fontSize: 'var(--text-xs)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  {e.addr}
                </a>
              ))}
            </div>

            {/* RRSS */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: 'var(--space-6)' }}>
              {rrss.map(r => (
                <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer"
                  aria-label={r.label} className="footer-link"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '36px', height: '36px',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    transition: 'background 0.2s ease, color 0.2s ease',
                  }}>
                  {r.icon}
                </a>
              ))}
            </div>

            {/* Publicamos en */}
            <div>
              <p style={{
                fontSize: 'var(--text-xs)', fontWeight: 600,
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                marginBottom: 'var(--space-3)',
              }}>
                Publicamos en
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {plataformas.map(p => (
                  <span key={p.name} style={{
                    fontSize: 'var(--text-xs)',
                    color: 'rgba(255,255,255,0.45)',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 'var(--radius-full)',
                    padding: '3px 10px',
                    whiteSpace: 'nowrap',
                  }}>
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sistemas */}
          <div>
            <h3 style={{
              fontSize: 'var(--text-xs)', fontWeight: 700,
              color: 'rgba(255,255,255,0.3)', marginBottom: 'var(--space-5)',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
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
            <h3 style={{
              fontSize: 'var(--text-xs)', fontWeight: 700,
              color: 'rgba(255,255,255,0.3)', marginBottom: 'var(--space-5)',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
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

          {/* Para ti */}
          <div>
            <h3 style={{
              fontSize: 'var(--text-xs)', fontWeight: 700,
              color: 'rgba(255,255,255,0.3)', marginBottom: 'var(--space-5)',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
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

            {/* PROPIA */}
            <div style={{
              marginTop: 'var(--space-8)',
              padding: '16px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
            }}>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px', lineHeight: 1.5 }}>
                Usamos IA para escalar.
              </p>
              <a
                href="https://www.skool.com/propia/about?ref=6946773d52054c38a5c8850136224c11"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '12px', fontWeight: 700,
                  color: '#fff',
                  textDecoration: 'none',
                  background: '#1a4a8a',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#0f2d5e')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1a4a8a')}
              >
                Únete a PROPIA →
              </a>
            </div>
          </div>
        </div>

        {/* Divisor + legal */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-3)',
          fontSize: 'var(--text-xs)',
        }}>
          <span>© {year} Viviendas Virtuo. Todos los derechos reservados.</span>
          <div style={{ display: 'flex', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
            <a href="#" className="footer-link-legal">Política de privacidad</a>
            <a href="#" className="footer-link-legal">Aviso legal</a>
            <a href="#" className="footer-link-legal">Cookies</a>
          </div>
        </div>

        <style>{`
          .footer-link { color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s ease; }
          .footer-link:hover { color: #fff; }
          .footer-link-legal { color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s ease; }
          .footer-link-legal:hover { color: rgba(255,255,255,0.8); }
          @media (max-width: 900px) {
            footer .container > div:first-child { grid-template-columns: 1fr 1fr; }
            footer .container > div:first-child > div:first-child { grid-column: span 2; }
          }
          @media (max-width: 540px) {
            footer .container > div:first-child { grid-template-columns: 1fr; }
            footer .container > div:first-child > div:first-child { grid-column: span 1; }
          }
        `}</style>
      </div>
    </footer>
  );
}
