export default function Propietarios() {
  const ventajas = [
    { icon: '💰', titulo: 'Ingresos garantizados', desc: 'Recibes tu renta puntualmente cada mes, independientemente de lo que pase con los inquilinos.' },
    { icon: '📋', titulo: 'Cero gestiones', desc: 'Nosotros nos ocupamos de contratos, incidencias, pagos, limpiezas y todo lo demás.' },
    { icon: '🔍', titulo: 'Inquilinos verificados', desc: 'Seleccionamos y verificamos a cada inquilino. Tú no tienes que conocerlos ni tratar con ellos.' },
    { icon: '📊', titulo: 'Informes mensuales', desc: 'Recibes un informe detallado con ingresos, gastos y estado de tu propiedad cada mes.' },
    { icon: '🛠️', titulo: 'Mantenimiento incluido', desc: 'Gestionamos incidencias y reparaciones con nuestra red de proveedores de confianza.' },
    { icon: '📱', titulo: 'Seguimiento en tiempo real', desc: 'Accede a tu panel de propietario para ver el estado de tu propiedad en cualquier momento.' },
  ];

  return (
    <>
      <style>{`
        .propietarios {
          background: var(--color-primary-dark);
          position: relative;
          overflow: hidden;
        }
        .propietarios::before {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(180deg, rgba(26,74,138,0.4) 0%, transparent 100%);
          pointer-events: none;
        }
        .propietarios__inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: var(--space-16);
          align-items: start;
        }
        .propietarios__left { position: sticky; top: 100px; }
        .propietarios__label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          color: #93c5fd;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: var(--space-5);
        }
        .propietarios__title {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          margin-bottom: var(--space-5);
          letter-spacing: -0.01em;
        }
        .propietarios__desc {
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          margin-bottom: var(--space-8);
          font-size: 1rem;
        }
        .propietarios__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4);
        }
        .ventaja-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          transition: background var(--transition), border-color var(--transition);
        }
        .ventaja-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.15);
        }
        .ventaja-card__icon {
          font-size: 1.6rem;
          margin-bottom: var(--space-3);
          display: block;
        }
        .ventaja-card__titulo {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.95rem;
          color: #fff;
          margin-bottom: var(--space-2);
        }
        .ventaja-card__desc {
          font-size: 0.83rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.55;
        }
        @media (max-width: 900px) {
          .propietarios__inner { grid-template-columns: 1fr; gap: var(--space-10); }
          .propietarios__left { position: static; }
          .propietarios__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .propietarios__grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="section propietarios" id="propietarios">
        <div className="container">
          <div className="propietarios__inner">
            <div className="propietarios__left">
              <div className="propietarios__label">Para propietarios</div>
              <h2 className="propietarios__title">
                Rentabiliza tu propiedad sin dedicarle un minuto
              </h2>
              <p className="propietarios__desc">
                Nos convertimos en tu gestor integral. Tú cobras, nosotros trabajamos. Sin llamadas de inquilinos, sin incidencias de madrugada, sin papeleo.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <a href="#contacto" className="btn btn-white">
                  Quiero saber más
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="#como-funciona" className="btn btn-ghost-white">Ver cómo funciona</a>
              </div>
            </div>

            <div className="propietarios__grid">
              {ventajas.map(v => (
                <div key={v.titulo} className="ventaja-card">
                  <span className="ventaja-card__icon">{v.icon}</span>
                  <div className="ventaja-card__titulo">{v.titulo}</div>
                  <div className="ventaja-card__desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
