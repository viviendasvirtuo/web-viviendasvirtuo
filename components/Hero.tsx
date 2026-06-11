import Link from 'next/link';
import Image from 'next/image';

const stats = [
  { num: '+30%', label: 'Más rentabilidad vs alquiler tradicional' },
  { num: '72h',  label: 'Tiempo medio hasta primera reserva' },
  { num: '100%', label: 'Gestión completa sin intervención tuya' },
];

const tickerItems = [
  'Coliving · alquiler por habitaciones',
  'Temporal · estancias de 1 a 6 meses',
  'Vacacional · apartamento completo',
  'Sin preocupaciones · máxima rentabilidad',
  'Gestión profesional · Barcelona',
  'Selección de inquilinos · garantía de cobro',
];

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        overflow: 'hidden',
      }}
    >
      {/* Imagen de fondo */}
      <Image
        src="/images/hero_virtuo.jpg"
        alt=""
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        sizes="100vw"
        priority
      />

      {/* Overlay solo en zona izquierda del texto */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(9,21,37,0.82) 0%, rgba(9,21,37,0.55) 45%, rgba(9,21,37,0.0) 75%)',
      }} />
      {/* Gradiente inferior para ticker */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(9,21,37,0.65) 0%, transparent 18%)',
      }} />

      {/* Contenido */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: '130px',
          paddingBottom: '80px',
          paddingLeft: 'clamp(var(--space-4), 3vw, var(--space-8))',
          paddingRight: 'clamp(var(--space-4), 3vw, var(--space-8))',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '680px',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.10)',
            border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: 'var(--radius-full)',
            padding: '0.35rem 1rem 0.35rem 0.6rem',
            marginBottom: 'var(--space-8)',
            backdropFilter: 'blur(12px)',
            width: 'fit-content',
          }}
        >
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
          <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.05em' }}>
            Gestión profesional de alquiler · Barcelona
          </span>
        </div>

        {/* Titular */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-hero)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.07,
            marginBottom: 'var(--space-6)',
            letterSpacing: '-0.025em',
            textShadow: '0 2px 16px rgba(0,0,0,0.35)',
          }}
        >
          Tu vivienda genera ingresos.
          <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}>
            Nosotros lo gestionamos todo.
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            fontSize: 'var(--text-lg)',
            color: 'rgba(255,255,255,0.72)',
            marginBottom: 'var(--space-10)',
            lineHeight: 1.7,
            maxWidth: '48ch',
            textShadow: '0 1px 8px rgba(0,0,0,0.3)',
          }}
        >
          Tres sistemas de alquiler adaptados a tu propiedad. Sin esfuerzo de tu parte, con rentabilidad máxima garantizada.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <Link href="/contacto" className="btn btn-white btn-lg">
            Soy propietario
          </Link>
          <a href="#inquilinos" className="btn btn-ghost-white btn-lg">
            Busco habitación
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`hero-stat${i < stats.length - 1 ? ' hero-stat-border' : ''}`}>
              <div style={{ fontSize: 'var(--text-2xl)', fontFamily: 'var(--font-display)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>
                {stat.num}
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)', marginTop: '6px', lineHeight: 1.4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker inferior */}
      <div
        aria-hidden="true"
        style={{
          position: 'relative', zIndex: 2, width: '100%', overflow: 'hidden',
          borderTop: '1px solid rgba(255,255,255,0.10)',
          background: 'rgba(9,21,37,0.45)',
          backdropFilter: 'blur(8px)',
          padding: '14px 0',
        }}
      >
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Flecha scroll */}
      <a
        href="#sistemas"
        aria-label="Ver sistemas"
        className="hero-scroll-arrow"
        style={{
          position: 'absolute', bottom: '4.5rem', right: 'clamp(var(--space-8), 4vw, var(--space-16))',
          zIndex: 3,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </a>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex; width: max-content;
          animation: ticker 28s linear infinite;
          will-change: transform;
        }
        .ticker-track:hover { animation-play-state: paused; }
        .ticker-item {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 0 var(--space-8);
          font-size: var(--text-xs); font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(255,255,255,0.5); white-space: nowrap;
        }
        .ticker-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: rgba(255,255,255,0.25); flex-shrink: 0;
        }
        .hero-scroll-arrow { color: rgba(255,255,255,0.35); transition: color 0.2s ease; }
        .hero-scroll-arrow:hover { color: rgba(255,255,255,0.8); }
        .hero-stats {
          display: flex; flex-direction: row; align-items: stretch;
          gap: 0; margin-top: var(--space-16); flex-wrap: nowrap;
        }
        .hero-stat { flex: 1 1 0; min-width: 0; padding-right: var(--space-6); }
        .hero-stat-border {
          border-right: 1px solid rgba(255,255,255,0.12);
          margin-right: var(--space-6);
        }
        @media (max-width: 768px) {
          .hero-stats {
            flex-direction: column; gap: var(--space-5); margin-top: var(--space-10);
          }
          .hero-stat { padding-right: 0; }
          .hero-stat-border {
            border-right: none; margin-right: 0;
            padding-bottom: var(--space-5);
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
        }
      `}</style>
    </section>
  );
}
