export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          min-height: 100dvh;
          background: linear-gradient(150deg, #0f2d5e 0%, #1a4a8a 45%, #1e3a6e 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 60vw;
          height: 60vw;
          max-width: 800px;
          background: radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero::after {
          content: '';
          position: absolute;
          bottom: -10%;
          left: -5%;
          width: 40vw;
          height: 40vw;
          max-width: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero__inner {
          max-width: var(--content-lg);
          margin-inline: auto;
          padding: var(--space-16) var(--space-6);
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-16);
          align-items: center;
        }
        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.9);
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: var(--space-6);
        }
        .hero__badge-dot {
          width: 6px;
          height: 6px;
          background: #60a5fa;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        .hero__title {
          font-family: var(--font-display);
          font-size: var(--text-hero);
          font-weight: 800;
          line-height: 1.1;
          color: #fff;
          margin-bottom: var(--space-6);
          letter-spacing: -0.02em;
        }
        .hero__title span {
          color: #93c5fd;
        }
        .hero__subtitle {
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
          margin-bottom: var(--space-10);
          max-width: 46ch;
        }
        .hero__ctas {
          display: flex;
          gap: var(--space-3);
          flex-wrap: wrap;
          margin-bottom: var(--space-12);
        }
        .hero__stats {
          display: flex;
          gap: var(--space-8);
          padding-top: var(--space-8);
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .hero__stat-number {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }
        .hero__stat-label {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.55);
          margin-top: 0.25rem;
          font-weight: 500;
        }
        .hero__visual {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }
        .hero__card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          backdrop-filter: blur(8px);
        }
        .hero__card-title {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: var(--space-2);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }
        .hero__card-title-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
        }
        .hero__card-desc {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.5;
        }
        .hero__card-tag {
          display: inline-block;
          margin-top: var(--space-3);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
        }
        @media (max-width: 900px) {
          .hero__inner {
            grid-template-columns: 1fr;
            gap: var(--space-12);
          }
          .hero__visual { display: none; }
          .hero__stats { gap: var(--space-6); }
        }
      `}</style>

      <section className="hero">
        <div className="hero__inner">
          <div>
            <div className="hero__badge">
              <span className="hero__badge-dot"></span>
              Gestión profesional de alquiler · Barcelona
            </div>

            <h1 className="hero__title">
              Tu vivienda genera<br />
              ingresos.<br />
              <span>Nosotros nos<br />encargamos de todo.</span>
            </h1>

            <p className="hero__subtitle">
              Tres sistemas de alquiler adaptados a tu propiedad: coliving, temporal y vacacional. Sin preocupaciones, sin gestiones, con rentabilidad máxima.
            </p>

            <div className="hero__ctas">
              <a href="#contacto" className="btn btn-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Soy propietario
              </a>
              <a href="#inquilinos" className="btn btn-ghost-white">
                Busco habitación
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

            <div className="hero__stats">
              <div>
                <div className="hero__stat-number">3</div>
                <div className="hero__stat-label">Sistemas de alquiler</div>
              </div>
              <div>
                <div className="hero__stat-number">100%</div>
                <div className="hero__stat-label">Gestión integral</div>
              </div>
              <div>
                <div className="hero__stat-number">0</div>
                <div className="hero__stat-label">Preocupaciones</div>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__card">
              <div className="hero__card-title">
                <div className="hero__card-title-icon" style={{ background: 'rgba(96,165,250,0.2)' }}>🏘️</div>
                Coliving
              </div>
              <div className="hero__card-desc">Alquiler por habitaciones a medio-largo plazo. Ingresos estables y predecibles.</div>
              <span className="hero__card-tag" style={{ background: 'rgba(96,165,250,0.15)', color: '#93c5fd' }}>Más estable</span>
            </div>

            <div className="hero__card">
              <div className="hero__card-title">
                <div className="hero__card-title-icon" style={{ background: 'rgba(167,139,250,0.2)' }}>📋</div>
                Temporal
              </div>
              <div className="hero__card-desc">Habitaciones para trabajadores y estudiantes de ciclos cortos. Rotación gestionada.</div>
              <span className="hero__card-tag" style={{ background: 'rgba(167,139,250,0.15)', color: '#c4b5fd' }}>Flexible</span>
            </div>

            <div className="hero__card">
              <div className="hero__card-title">
                <div className="hero__card-title-icon" style={{ background: 'rgba(251,191,36,0.2)' }}>✈️</div>
                Vacacional
              </div>
              <div className="hero__card-desc">Apartamento completo para turismo. Máxima rentabilidad por noche.</div>
              <span className="hero__card-tag" style={{ background: 'rgba(251,191,36,0.15)', color: '#fcd34d' }}>Máxima rentabilidad</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
