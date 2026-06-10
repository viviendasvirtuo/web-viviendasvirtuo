import Link from 'next/link';

const stats = [
  { num: '+30%', label: 'Más rentabilidad vs alquiler tradicional' },
  { num: '72h',  label: 'Tiempo medio hasta primera reserva' },
  { num: '100%', label: 'Gestión completa sin intervención tuya' },
];

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(160deg, #091525 0%, #0f2d5e 45%, #1a4a8a 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Ruido de grano muy sutil */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px',
        }}
      />

      {/* Círculo atmosférico derecho */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-8%', top: '5%',
          width: 'clamp(380px, 52vw, 800px)',
          height: 'clamp(380px, 52vw, 800px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 40%, rgba(26,74,138,0.35) 0%, transparent 65%)',
          border: '1px solid rgba(255,255,255,0.04)',
        }}
      />
      {/* Anillo interior */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '2%', top: '18%',
          width: 'clamp(200px, 28vw, 440px)',
          height: 'clamp(200px, 28vw, 440px)',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      />

      <div
        className="container"
        style={{ position: 'relative', zIndex: 1, paddingTop: '130px', paddingBottom: '100px' }}
      >
        <div style={{ maxWidth: '780px' }}>

          {/* Badge de estado */}
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
            <span
              style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#4ade80', flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 'var(--text-xs)', fontWeight: 600,
                color: 'rgba(255,255,255,0.8)', letterSpacing: '0.05em',
              }}
            >
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
            <span
              style={{
                display: 'block',
                color: 'rgba(255,255,255,0.45)',
                fontWeight: 700,
              }}
            >
              Nosotros lo gestionamos todo.
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: 'var(--space-10)',
              maxWidth: '50ch',
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
          <div
            style={{
              display: 'flex',
              alignItems: 'stretch',
              gap: '0',
              marginTop: 'var(--space-16)',
              flexWrap: 'wrap',
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  paddingRight: 'var(--space-8)',
                  paddingLeft: i > 0 ? 'var(--space-8)' : undefined,
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : undefined,
                }}
              >
                <div
                  style={{
                    fontSize: 'var(--text-2xl)', fontFamily: 'var(--font-display)',
                    fontWeight: 900, color: '#fff', letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.45)',
                    marginTop: '6px', maxWidth: '18ch', lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flecha scroll — CSS hover, sin onMouseEnter/Leave */}
      <a
        href="#sistemas"
        aria-label="Ver sistemas"
        className="hero-scroll-arrow"
        style={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)',
          animation: 'fadeUp 1s 1s both',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </a>

      <style>{`
        .hero-scroll-arrow {
          color: rgba(255,255,255,0.3);
          transition: color 0.2s ease;
        }
        .hero-scroll-arrow:hover {
          color: rgba(255,255,255,0.7);
        }
      `}</style>
    </section>
  );
}
