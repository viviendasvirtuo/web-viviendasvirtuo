'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sistemasOpen, setSistemasOpen] = useState(false);
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

  const isTransparent = isHome && !scrolled;
  const textColor = isTransparent ? 'rgba(255,255,255,0.85)' : 'var(--color-text-muted)';
  const activeColor = isTransparent ? 'white' : 'var(--color-primary)';

  const sistemas = [
    { href: '/coliving', label: 'Coliving', desc: 'Habitaciones a medio-largo plazo' },
    { href: '/temporal', label: 'Temporal', desc: 'Estancias de 1 a 6 meses' },
    { href: '/vacacional', label: 'Vacacional', desc: 'Apartamento completo para turistas' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: isTransparent ? 'transparent' : 'rgba(255,255,255,0.96)',
      backdropFilter: isTransparent ? 'none' : 'blur(16px)',
      borderBottom: isTransparent ? '1px solid transparent' : '1px solid rgba(26,74,138,0.1)',
      transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
      boxShadow: isTransparent ? 'none' : '0 4px 24px rgba(13,27,46,0.06)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

        {/* Logo */}
        <Link href="/" aria-label="Viviendas Virtuo" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none' }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <rect width="36" height="36" rx="8" fill="#1a4a8a"/>
            <path d="M8 22L18 10L28 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 22V28H23V22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="15.5" y="23.5" width="5" height="4.5" rx="1" fill="white"/>
          </svg>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: isTransparent ? 'white' : 'var(--color-primary)', transition: 'color 300ms', letterSpacing: '-0.01em' }}>Virtuo</span>
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navegación principal" className="nav-desktop" style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>

          {/* Sistemas — dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setSistemasOpen(true)}
            onMouseLeave={() => setSistemasOpen(false)}>
            <button style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 500,
              color: ['/coliving','/temporal','/vacacional'].includes(pathname) ? activeColor : textColor,
              padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-md)',
              transition: 'all var(--transition)', background: 'transparent', border: 'none',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
            }}>
              Sistemas
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: sistemasOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}>
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            {sistemasOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
                background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)',
                boxShadow: '0 16px 40px rgba(13,27,46,0.12)', padding: '8px', minWidth: '220px', zIndex: 100,
              }}>
                {sistemas.map(s => (
                  <Link key={s.href} href={s.href} style={{
                    display: 'block', padding: '10px 14px', borderRadius: 'var(--radius-lg)',
                    textDecoration: 'none', transition: 'background 150ms',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#f0f4fa'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
                    <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-primary)' }}>{s.label}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>{s.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { href: '/propietarios', label: 'Propietarios' },
            { href: '/inquilinos', label: 'Inquilinos' },
            { href: '/contacto', label: 'Contacto' },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 500,
              color: pathname === link.href ? activeColor : textColor,
              padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-md)',
              transition: 'all var(--transition)', textDecoration: 'none',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = activeColor;
              (e.currentTarget as HTMLElement).style.background = isTransparent ? 'rgba(255,255,255,0.12)' : '#e8f0fa';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = pathname === link.href ? activeColor : textColor;
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
          color: 'white', textDecoration: 'none',
        }}>
          Hablar con un experto
        </Link>

        {/* Hamburguesa */}
        <button className="nav-mobile-btn" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '8px', color: isTransparent ? 'white' : 'var(--color-primary)' }}>
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'currentColor', borderRadius: '2px', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none', transition: 'transform 250ms' }}/>
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'currentColor', borderRadius: '2px', opacity: menuOpen ? 0 : 1, transition: 'opacity 250ms' }}/>
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'currentColor', borderRadius: '2px', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none', transition: 'transform 250ms' }}/>
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, top: '72px', background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(20px)', padding: 'var(--space-6)', display: 'flex',
          flexDirection: 'column', gap: 'var(--space-1)', borderTop: '1px solid var(--color-border)', overflowY: 'auto',
        }}>
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', padding: 'var(--space-2) 0', marginBottom: '4px' }}>Sistemas</p>
          {sistemas.map(s => (
            <Link key={s.href} href={s.href} onClick={() => setMenuOpen(false)} style={{
              display: 'flex', flexDirection: 'column', padding: 'var(--space-3) var(--space-3)',
              borderRadius: 'var(--radius-lg)', background: '#f0f4fa', textDecoration: 'none', marginBottom: '6px',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-primary)' }}>{s.label}</span>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginTop: '2px' }}>{s.desc}</span>
            </Link>
          ))}
          <div style={{ height: '1px', background: 'var(--color-border)', margin: 'var(--space-3) 0' }} />
          {[
            { href: '/propietarios', label: 'Propietarios' },
            { href: '/inquilinos', label: 'Inquilinos' },
            { href: '/contacto', label: 'Contacto' },
          ].map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 700,
              color: 'var(--color-text)', padding: 'var(--space-3) 0',
              borderBottom: '1px solid var(--color-border)', display: 'block', textDecoration: 'none',
            }}>{link.label}</Link>
          ))}
          <Link href="/contacto" onClick={() => setMenuOpen(false)} className="btn btn-primary btn-lg"
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
