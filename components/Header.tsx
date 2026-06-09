'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'Coliving', href: '#sistemas' },
    { label: 'Temporal', href: '#sistemas' },
    { label: 'Vacacional', href: '#sistemas' },
    { label: 'Propietarios', href: '#propietarios' },
    { label: 'Cómo funciona', href: '#como-funciona' },
  ];

  return (
    <>
      <style>{`
        .header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: all 200ms ease;
        }
        .header--scrolled {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }
        .header--top {
          background: transparent;
        }
        .header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          max-width: var(--content-lg);
          margin-inline: auto;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }
        .logo__mark {
          width: 36px;
          height: 36px;
        }
        .logo__text {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: -0.02em;
          transition: color 200ms;
        }
        .logo__text--dark { color: var(--color-primary); }
        .logo__text--light { color: #fff; }
        .nav { display: flex; align-items: center; gap: 0.25rem; }
        .nav__link {
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 200ms;
          text-decoration: none;
        }
        .nav__link--dark {
          color: var(--color-text-muted);
        }
        .nav__link--dark:hover {
          color: var(--color-primary);
          background: var(--color-primary-light);
        }
        .nav__link--light { color: rgba(255,255,255,0.85); }
        .nav__link--light:hover {
          color: #fff;
          background: rgba(255,255,255,0.12);
        }
        .header__cta { margin-left: 0.75rem; }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          color: inherit;
        }
        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 99;
          background: rgba(15,45,94,0.97);
          backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          padding: 2rem 1.5rem;
          transform: translateX(100%);
          transition: transform 300ms cubic-bezier(0.16,1,0.3,1);
        }
        .mobile-menu--open { transform: translateX(0); }
        .mobile-menu__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }
        .mobile-menu__links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }
        .mobile-menu__link {
          display: block;
          padding: 1rem 0;
          color: rgba(255,255,255,0.9);
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 600;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          text-decoration: none;
          transition: color 200ms;
        }
        .mobile-menu__link:hover { color: #fff; }
        .mobile-menu__cta {
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        @media (max-width: 768px) {
          .nav { display: none; }
          .header__cta { display: none; }
          .mobile-toggle { display: flex; }
        }
      `}</style>

      <header className={`header ${scrolled ? 'header--scrolled' : 'header--top'}`}>
        <div className="header__inner">
          <a href="/" className="logo">
            <svg className="logo__mark" viewBox="0 0 36 36" fill="none" aria-label="Virtuo">
              <rect width="36" height="36" rx="8" fill="#1a4a8a"/>
              <path d="M8 10h4l6 14 6-14h4L18 28 8 10z" fill="white"/>
              <circle cx="18" cy="10" r="2.5" fill="#60a5fa"/>
            </svg>
            <span className={`logo__text ${scrolled ? 'logo__text--dark' : 'logo__text--light'}`}>
              Viviendas Virtuo
            </span>
          </a>

          <nav className="nav">
            {links.map(l => (
              <a key={l.label} href={l.href}
                className={`nav__link ${scrolled ? 'nav__link--dark' : 'nav__link--light'}`}>
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contacto" className="header__cta btn btn-primary" style={{ fontSize: '0.875rem', padding: '0.55rem 1.25rem', minHeight: '40px' }}>
            Contactar
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            style={{ color: scrolled ? 'var(--color-text)' : '#fff' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__header">
          <a href="/" className="logo" onClick={() => setOpen(false)}>
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="rgba(255,255,255,0.15)"/>
              <path d="M8 10h4l6 14 6-14h4L18 28 8 10z" fill="white"/>
            </svg>
            <span style={{ color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>Viviendas Virtuo</span>
          </a>
          <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', padding: '0.5rem' }} aria-label="Cerrar menú">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="mobile-menu__links">
          {links.map(l => (
            <a key={l.label} href={l.href} className="mobile-menu__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="mobile-menu__cta">
          <a href="#contacto" className="btn btn-white" onClick={() => setOpen(false)} style={{ justifyContent: 'center' }}>Soy propietario</a>
          <a href="#inquilinos" className="btn btn-ghost-white" onClick={() => setOpen(false)} style={{ justifyContent: 'center' }}>Busco habitación</a>
        </div>
      </div>
    </>
  );
}
