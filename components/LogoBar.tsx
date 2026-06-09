'use client';
export default function LogoBar() {
  const items = [
    'Gestión integral 360°',
    'Contratos y documentación',
    'Selección de inquilinos',
    'Mantenimiento incluido',
    'Liquidación mensual',
    'Sin preocupaciones',
  ];

  return (
    <section style={{
      background: 'var(--color-primary)',
      padding: 'var(--space-4) 0',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        gap: 'var(--space-12)',
        animation: 'scrollTicker 25s linear infinite',
        width: 'max-content',
      }}>
        {[...items, ...items].map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
            color: 'rgba(255,255,255,0.9)',
            fontSize: 'var(--text-sm)',
            fontWeight: 500,
            whiteSpace: 'nowrap',
          }}>
            <span style={{ color: '#60a5fa', fontSize: '1.2em' }}>✦</span>
            {item}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scrollTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*="scrollTicker"] { animation: none; }
        }
      `}</style>
    </section>
  );
}
