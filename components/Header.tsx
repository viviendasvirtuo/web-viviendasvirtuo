'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sistemasOpen, setSistemasOpen] = useState(false);
  const [propietariosOpen, setPropietariosOpen] = useState(false);
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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isTransparent = isHome && !scrolled && !menuOpen;
  const textColor = isTransparent ? 'rgba(255,255,255,0.85)' : 'var(--color-text-muted)';
  const activeColor = isTransparent ? 'white' : 'var(--color-primary)';

  const sistemas = [
    { href: '/coliving',   label: 'Coliving',    desc: 'Habitaciones a medio-largo plazo' },
    { href: '/temporal',   label: 'Temporal',    desc: 'Estancias de 1 a 6 meses' },
    { href: '/vacacional', label: 'Vacacional',  desc: 'Apartamento completo para turistas' },
  ];

  const propietariosSub = [
    { href: '/propietarios/coliving',   label: 'Coliving',    desc: 'Alquiler por habitaciones' },
    { href: '/propietarios/temporal',   label: 'Temporal',    desc: 'Estancias cortas gestionadas' },
    { href: '/propietarios/vacacional', label: 'Vacacional',  desc: 'Máxima rentabilidad turística' },
  ];

  const isPropietariosActive = pathname.startsWith('/propietarios');
  const isSistemasActive = ['/coliving', '/temporal', '/vacacional'].includes(pathname);

  return (
    <>
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
          <nav aria-label="Navegación principal" style={{ display: 'flex', gap: '2px', alignItems: 'center' }} className="nav-desktop">

            {/* Sistemas — dropdown */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setSistemasOpen(true)}
              onMouseLeave={() => setSistemasOpen(false)}>
              <button style={{
                fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 500,
                color: isSistemasActive ? activeColor : textColor,
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

            {/* Propietarios — dropdown */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setPropietariosOpen(true)}
              onMouseLeave={() => setPropietariosOpen(false)}>
              <button style={{
                fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 500,
                color: isPropietariosActive ? activeColor : textColor,
                padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-md)',
                transition: 'all var(--transition)', background: 'transparent', border: 'none',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
              }}>
                Propietarios
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: propietariosOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}>
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              {propietariosOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
                  background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)',
                  boxShadow: '0 16px 40px rgba(13,27,46,0.12)', padding: '8px', minWidth: '240px', zIndex: 100,
                }}>
                  <Link href="/propietarios" style={{
                    display: 'block', padding: '10px 14px', borderRadius: 'var(--radius-lg)',
                    textDecoration: 'none', transition: 'background 150ms',
                    borderBottom: '1px solid var(--color-border)', marginBottom: '4px',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#f0f4fa'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-primary)' }}>Vista general</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>Compara los 3 sistemas</div>
                  </Link>
                  {propietariosSub.map(s => (
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
              { href: '/inquilinos',     label: 'Inquilinos' },
              { href: '/sobre-nosotros', label: 'Nosotros' },
              { href: '/contacto',       label: 'Contacto' },
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

          {/* Botón hamburguesa */}
          <button
            className="nav-mobile-btn"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(prev => !prev)}
            style={{
              flexDirection: 'column', gap: '5px', padding: '8px',
              color: isTransparent ? 'white' : 'var(--color-primary)',
              background: 'transparent', border: 'none', cursor: 'pointer',
            }}
          >
            <span style={{
              display: 'block', width: '22px', height: '2px', background: 'currentColor',
              borderRadius: '2px',
              transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none',
              transition: 'transform 250ms cubic-bezier(0.16,1,0.3,1)',
            }}/>
            <span style={{
              display: 'block', width: '22px', height: '2px', background: 'currentColor',
              borderRadius: '2px',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 200ms',
            }}/>
            <span style={{
              display: 'block', width: '22px', height: '2px', background: 'currentColor',
              borderRadius: '2px',
              transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
              transition: 'transform 250ms cubic-bezier(0.16,1,0.3,1)',
            }}/>
          </button>
        </div>
      </header>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menú de navegación"
        aria-modal="true"
        style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 999,
          padding: 'var(--space-6)',
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: 'var(--space-1)',
          borderTop: '1px solid var(--color-border)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <p style={{
          fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--color-text-muted)',
          padding: 'var(--space-2) 0', marginBottom: '4px',
        }}>Sistemas de alquiler</p>

        {sistemas.map(s => (
          <Link key={s.href} href={s.href} onClick={() => setMenuOpen(false)} style={{
            display: 'flex', flexDirection: 'column',
            padding: 'var(--space-3) var(--space-3)',
            borderRadius: 'var(--radius-lg)',
            background: '#f0f4fa',
            textDecoration: 'none', marginBottom: '6px',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-primary)' }}>{s.label}</span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginTop: '2px' }}>{s.desc}</span>
          </Link>
        ))}

        <div style={{ height: '1px', background: 'var(--color-border)', margin: 'var(--space-3) 0' }} />

        <p style={{
          fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--color-text-muted)',
          padding: 'var(--space-2) 0', marginBottom: '4px',
        }}>Para propietarios</p>

        <Link href="/propietarios" onClick={() => setMenuOpen(false)} style={{
          display: 'flex', flexDirection: 'column',
          padding: 'var(--space-3) var(--space-3)',
          borderRadius: 'var(--radius-lg)',
          background: '#edf2fb',
          textDecoration: 'none', marginBottom: '6px',
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-primary)' }}>Vista general</span>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginTop: '2px' }}>Compara los 3 sistemas</span>
        </Link>

        {propietariosSub.map(s => (
          <Link key={s.href} href={s.href} onClick={() => setMenuOpen(false)} style={{
            display: 'flex', flexDirection: 'column',
            padding: 'var(--space-3) var(--space-3)',
            borderRadius: 'var(--radius-lg)',
            background: '#f0f4fa',
            textDecoration: 'none', marginBottom: '6px',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-primary)' }}>{s.label}</span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginTop: '2px' }}>{s.desc}</span>
          </Link>
        ))}

        <div style={{ height: '1px', background: 'var(--color-border)', margin: 'var(--space-3) 0' }} />

        {[
          { href: '/inquilinos',     label: 'Inquilinos' },
          { href: '/sobre-nosotros', label: 'Sobre nosotros' },
          { href: '/faq',            label: 'Preguntas frecuentes' },
          { href: '/contacto',       label: 'Contacto' },
        ].map(link => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 700,
            color: pathname === link.href ? 'var(--color-primary)' : 'var(--color-text)',
            padding: 'var(--space-3) 0',
            borderBottom: '1px solid var(--color-border)',
            display: 'block', textDecoration: 'none',
          }}>{link.label}</Link>
        ))}

        <Link
          href="/contacto"
          onClick={() => setMenuOpen(false)}
          className="btn btn-primary btn-lg"
          style={{
            marginTop: 'var(--space-6)',
            textAlign: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
          }}
        >
          Hablar con un experto
        </Link>
      </div>

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-mobile-btn { display: none !important; }

        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
