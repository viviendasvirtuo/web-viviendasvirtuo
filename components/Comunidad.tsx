'use client';
import Link from 'next/link';

export default function Comunidad() {
  return (
    <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Más que un piso</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 1.2rem + 2.5vw, 2.6rem)', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '20px' }}>Comunidad, también incluida</h2>
          <p style={{ fontSize: 'clamp(0.95rem, 0.85rem + 0.5vw, 1.1rem)', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '36px' }}>
            Conoce a otros profesionales, estudiantes y nómadas digitales. Organizamos eventos, grupos por afinidades y facilitamos que conectes desde el primer día.
          </p>
          <Link
            href="/coliving"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--color-primary)', color: 'white', fontWeight: 700, fontSize: 'var(--text-base)', padding: '13px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', transition: 'background 0.18s ease, transform 0.18s ease' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#0f2d5e'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
          >
            Conoce la comunidad
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
