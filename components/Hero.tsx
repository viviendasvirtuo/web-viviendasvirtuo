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
        background: 'linear-gradient(160deg, #091525 0%, #0f2d5e 45%, #1a4a8a 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Grano sutil */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px',
        }}
      />

      {/* Imagen hero — solo desktop, lado derecho */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 0, top: 0, bottom: 0,
          width: '46%',
          zIndex: 0,
        }}
        className="hero-img-wrap"
      >
        <Image
          src="/images/hero_virtuo.png"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="46vw"
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0f2d5e 0%, rgba(15,45,94,0.6) 40%, rgba(15,45,94,0) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #091525 0%, transparent 30%)' }} />
      </div>

      {/*
        Columna izquierda: ocupa el 54% del ancho (lo que no es imagen).
        El bloque de texto dentro tiene margin-left:auto para quedar
        pegado al borde derecho de esa columna, rozando la imagen.
        Padding derecho de seguridad: 3rem.
      */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: '130px',
          paddingBottom: '80px',
          paddingLeft: 'clamp(var(--space-4), 3vw, var(--space-8))',
          paddingRight: 0,
          width: '54%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        className="hero-col"
      >
        {/* margin-left:auto empuja el bloque hacia la derecha de la columna */}
        <div style={{ marginLeft: 'auto', maxWidth: '58ch', paddingRight: 'clamp(var(--space-6), 3vw, var(--space-12))' }}>

          {/* Badge */}
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: 'var(--radius-full)',
              padding: '0.35rem 1rem 0.35rem 0.6rem',
              marginBottom: 'var(--space-8)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.05em' }}>
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
            }}
          >
            Tu vivienda genera ingresos.
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.45)', fontWeight: 700 }}>
              Nosotros lo gestionamos todo.
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: 'var(--space-10)',
              lineHeight: 1.7,
            }}
          >
            Tres sistemas de alquiler adaptados a tu propiedad. Sin esfuerzo de tu parte, con rentabilidad máxima garantizada.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <Link href="/contacto" className="btn btn-white btn-lg">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Soy propietario
            </Link>
            <a href="#inquilinos" className="btn btn-ghost-white btn-lg">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              Busco habitación
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', alignItems: 'stretch', gap: '0', marginTop: 'var(--space-16)', flexWrap: 'wrap' }}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  paddingRight: 'var(--space-8)',
                  paddingLeft: i > 0 ? 'var(--space-8)' : undefined,
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : undefined,
                }}
              >
                <div style={{ fontSize: 'var(--text-2xl)', fontFamily: 'var(--font-display)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.45)', marginTop: '6px', maxWidth: '18ch', lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker inferior */}
      <div
        aria-hidden="true"
        style={{
          position: 'relative', zIndex: 2, width: '100%', overflow: 'hidden',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.03)',
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
          position: 'absolute', bottom: '4.5rem', left: '50%',
          transform: 'translateX(-50%)',
          animation: 'fadeUp 1s 1s both',
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
          display: flex; gap: 0; width: max-content;
          animation: ticker 28s linear infinite;
          will-change: transform;
        }
        .ticker-track:hover { animation-play-state: paused; }
        .ticker-item {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 0 var(--space-8);
          font-size: var(--text-xs); font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(255,255,255,0.45); white-space: nowrap;
        }
        .ticker-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: rgba(255,255,255,0.25); flex-shrink: 0;
        }
        .hero-scroll-arrow { color: rgba(255,255,255,0.3); transition: color 0.2s ease; }
        .hero-scroll-arrow:hover { color: rgba(255,255,255,0.7); }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @media (max-width: 768px) {
          .hero-img-wrap { display: none; }
          .hero-col { width: 100% !important; padding-right: var(--space-6) !important; }
          .hero-col > div { margin-left: 0 !important; max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
