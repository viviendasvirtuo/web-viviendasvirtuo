'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // En home hacemos scroll suave a secciones; en subpáginas navegamos a la ruta
  const navLinks = [
    { href: isHome ? '#sistemas' : '/#sistemas', label: 'Sistemas' },
    { href: '/propietarios', label: 'Propietarios' },
    { href: '/inquilinos', label: 'Inquilinos' },
    { href: isHome ? '#como-funciona' : '/#como-funciona', label: 'Cómo funciona' },
    { href: '/contacto', label: 'Contacto' },
  ];

  const isTransparent = isHome && !scrolled;

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: isTransparent ? 'transparent' : 'rgba(255,255,255,0.96)',
      backdropFilter: isTransparent ? 'none' : 'blur(16px)',
      borderBottom: isTransparent ? '1px solid transparent' : '1px solid rgba(26,74,138,0.1)',
      transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
      boxShadow: isTransparent ? 'none' : '0 4px 24px rgba(13,27,46,0.06)',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '72px',
      }}>
        {/* Logo */}
        <Link href="/" aria-label="Viviendas Virtuo" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none' }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <rect width="36" height="36" rx="8" fill="#1a4a8a"/>
            <path d="M8 22L18 10L28 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 22V28H23V22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="15.5" y="23.5" width="5" height="4.5" rx="1" fill="white"/>
          </svg>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.2rem',
            color: isTransparent ? 'white' : 'var(--color-primary)',
            transition: 'color 300ms',
            letterSpacing: '-0.01em',
          }}>Virtuo</span>
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navegación principal" style={{
          display: 'flex', gap: 'var(--space-1)', alignItems: 'center',
        }} className="nav-desktop">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              fontWeight: 500,
              color: isTransparent ? 'rgba(255,255,255,0.85)' : 'var(--color-text-muted)',
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              transition: 'all var(--transition)',
              textDecoration: 'none',
              ...(pathname === link.href ? { color: isTransparent ? 'white' : 'var(--color-primary)', fontWeight: 600 } : {}),
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = isTransparent ? 'white' : 'var(--color-primary)';
              (e.currentTarget as HTMLElement).style.background = isTransparent ? 'rgba(255,255,255,0.12)' : 'var(--color-primary-light, #e8f0fa)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = isTransparent ? 'rgba(255,255,255,0.85)' : 'var(--color-text-muted)';
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <Link href="/contacto" className="btn btn-primary btn-sm nav-desktop" style={{
          background: isTransparent ? 'rgba(255,255,255,0.15)' : 'var(--color-primary)',
          border: isTransparent ? '1.5px solid rgba(255,255,255,0.5)' : 'none',
          backdropFilter: isTransparent ? 'blur(8px)' : 'none',
          color: 'white',
          textDecoration: 'none',
        }}>
          Hablar con un experto
        </Link>

        {/* Hamburguesa */}
        <button
          className="nav-mobile-btn"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px', padding: '8px',
            color: isTransparent ? 'white' : 'var(--color-primary)',
          }}>
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: 'currentColor', borderRadius: '2px',
            transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none',
            transition: 'transform 250ms',
          }}/>
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: 'currentColor', borderRadius: '2px',
            opacity: menuOpen ? 0 : 1, transition: 'opacity 250ms',
          }}/>
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: 'currentColor', borderRadius: '2px',
            transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
            transition: 'transform 250ms',
          }}/>
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, top: '72px',
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(20px)',
          padding: 'var(--space-8) var(--space-6)',
          display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
          borderTop: '1px solid var(--color-border)',
          animation: 'fadeIn 200ms ease',
        }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)',
                fontWeight: 700,
                color: 'var(--color-text)',
                padding: 'var(--space-3) 0',
                borderBottom: '1px solid var(--color-border)',
                display: 'block',
                textDecoration: 'none',
              }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contacto"
            onClick={() => setMenuOpen(false)}
            className="btn btn-primary btn-lg"
            style={{ marginTop: 'var(--space-6)', textAlign: 'center', justifyContent: 'center', textDecoration: 'none' }}>
            Hablar con un experto
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
