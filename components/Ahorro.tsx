'use client';
import Link from 'next/link';

export default function Ahorro() {
  return (
    <section style={{ padding: 'clamp(48px,7vw,88px) 0', background: '#f0f4fa' }}>
      <div className="container">
        <div style={{
          background: 'white',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(36px,5vw,64px) clamp(28px,5vw,72px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0 4px 24px rgba(26,74,138,0.07), 0 1px 4px rgba(26,74,138,0.05)',
          border: '1px solid #e2e8f4',
          gap: '0',
        }}>

          {/* Eyebrow */}
          <p style={{
            color: 'var(--color-primary)',
            fontWeight: 700,
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>Ahorro real</p>

          {/* Título */}
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 1.2rem + 2.5vw, 2.8rem)',
            fontWeight: 900,
            color: 'var(--color-text)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            maxWidth: '680px',
          }}>
            Hasta{' '}
            <span style={{ color: 'var(--color-primary)' }}>400€ menos al mes</span>
            {' '}que un alquiler tradicional
          </h2>

          {/* Texto de apoyo */}
          <p style={{
            fontSize: 'clamp(0.95rem, 0.85rem + 0.5vw, 1.15rem)',
            color: 'var(--color-text-muted)',
            lineHeight: 1.7,
            maxWidth: '520px',
            marginBottom: '32px',
          }}>
            En Coliving y Temporal, el precio incluye suministros, limpieza y mantenimiento.
            Sin comisiones ni sorpresas.
          </p>

          {/* Pills de qué incluye */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '36px',
          }}>
            {['Luz, agua y gas', 'Wifi incluido', 'Limpieza semanal', 'Mantenimiento 24h', 'Sin comisión de agencia'].map((item) => (
              <span key={item} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: '#1a4a8a',
                background: '#eef3fb',
                border: '1px solid #d0ddf5',
                borderRadius: 'var(--radius-full)',
                padding: '5px 14px',
              }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1a4a8a" strokeWidth="3" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/coliving"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--color-primary)',
              color: 'white',
              fontWeight: 700,
              fontSize: 'var(--text-base)',
              padding: '13px 28px',
              borderRadius: 'var(--radius-lg)',
              textDecoration: 'none',
              transition: 'background 0.18s ease, transform 0.18s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#0f2d5e';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-primary)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            }}
          >
            Ver habitaciones disponibles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

        </div>
      </div>
    </section>
  );
}
