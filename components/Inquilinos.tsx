export default function Inquilinos() {
  const items = [
    { icon: '✅', titulo: 'Habitaciones verificadas', desc: 'Todas las habitaciones están revisadas, equipadas y en buen estado antes de que llegues.' },
    { icon: '⚡', titulo: 'Respuesta rápida', desc: 'Cualquier incidencia se gestiona en menos de 48h. Tienes un interlocutor directo siempre.' },
    { icon: '📃', titulo: 'Contratos claros', desc: 'Sin letra pequeña. Contratos legales, transparentes y adaptados a tu situación.' },
    { icon: '🌐', titulo: 'Todo incluido', desc: 'Wi-Fi, suministros y servicios básicos incluidos según la modalidad. Sin sorpresas al final del mes.' },
  ];

  return (
    <>
      <style>{`
        .inquilinos { background: var(--color-surface); }
        .inquilinos__inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: var(--space-16);
          align-items: center;
        }
        .inquilinos__items {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4);
        }
        .inquilinos__item {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
        }
        .inquilinos__item-icon {
          font-size: 1.5rem;
          margin-bottom: var(--space-3);
          display: block;
        }
        .inquilinos__item-titulo {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--color-text);
          margin-bottom: var(--space-2);
        }
        .inquilinos__item-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.55;
        }
        .inquilinos__cta-box {
          background: var(--color-primary-light);
          border: 1px solid rgba(26,74,138,0.12);
          border-radius: var(--radius-xl);
          padding: var(--space-8);
        }
        .inquilinos__cta-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.4rem;
          color: var(--color-primary-dark);
          margin-bottom: var(--space-3);
          line-height: 1.25;
        }
        .inquilinos__cta-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: var(--space-6);
          line-height: 1.6;
        }
        .inquilinos__tipos {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          margin-bottom: var(--space-6);
        }
        @media (max-width: 900px) {
          .inquilinos__inner { grid-template-columns: 1fr; gap: var(--space-10); }
          .inquilinos__items { order: 2; }
          .inquilinos__cta-box { order: 1; }
        }
        @media (max-width: 480px) {
          .inquilinos__items { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="section inquilinos" id="inquilinos">
        <div className="container">
          <div className="inquilinos__inner">
            <div className="inquilinos__items">
              <div style={{ gridColumn: '1 / -1', marginBottom: 'var(--space-4)' }}>
                <span className="section-label">Para inquilinos</span>
                <h2 className="section-title">Habitaciones bien gestionadas, nada más</h2>
                <p className="section-subtitle">No somos un portal de anuncios. Somos la empresa que gestiona la vivienda donde vas a vivir.</p>
              </div>
              {items.map(item => (
                <div key={item.titulo} className="inquilinos__item">
                  <span className="inquilinos__item-icon">{item.icon}</span>
                  <div className="inquilinos__item-titulo">{item.titulo}</div>
                  <div className="inquilinos__item-desc">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="inquilinos__cta-box">
              <h3 className="inquilinos__cta-title">¿Buscas habitación o alojamiento en Barcelona?</h3>
              <p className="inquilinos__cta-desc">Cuéntanos qué necesitas: coliving estable, alquiler temporal o estancia vacacional. Te buscamos la opción ideal.</p>
              <div className="inquilinos__tipos">
                <span className="badge badge-blue">Coliving</span>
                <span className="badge badge-purple">Temporal</span>
                <span className="badge badge-orange">Vacacional</span>
              </div>
              <a href="#contacto" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Consultar disponibilidad
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
