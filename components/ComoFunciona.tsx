export default function ComoFunciona() {
  const pasos = [
    {
      num: '01',
      titulo: 'Nos contactas',
      desc: 'Rellenas el formulario o nos llamas. Cuéntanos qué tipo de propiedad tienes y qué esperas de la gestión.',
      detalle: '~5 minutos',
    },
    {
      num: '02',
      titulo: 'Analizamos tu propiedad',
      desc: 'Visitamos la propiedad, analizamos su potencial y te presentamos un informe con la rentabilidad estimada según cada sistema.',
      detalle: '24-48h después',
    },
    {
      num: '03',
      titulo: 'Firmamos y preparamos',
      desc: 'Firmamos el contrato de gestión y nosotros nos encargamos de todo: fotografías, publicación, preparación del espacio.',
      detalle: 'Primera semana',
    },
    {
      num: '04',
      titulo: 'Tú cobras, nosotros gestionamos',
      desc: 'A partir de aquí recibes tu renta puntualmente y un informe mensual. Nosotros nos ocupamos del resto para siempre.',
      detalle: 'Mes a mes',
    },
  ];

  return (
    <>
      <style>{`
        .como { background: var(--color-bg); }
        .como__header {
          text-align: center;
          margin-bottom: var(--space-12);
        }
        .como__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-4);
          position: relative;
        }
        .como__grid::before {
          content: '';
          position: absolute;
          top: 28px;
          left: calc(12.5% + 20px);
          right: calc(12.5% + 20px);
          height: 1px;
          background: var(--color-border);
          z-index: 0;
        }
        .paso {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .paso__num {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--color-primary);
          color: #fff;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-5);
          box-shadow: var(--shadow-md);
          flex-shrink: 0;
        }
        .paso__titulo {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          color: var(--color-text);
          margin-bottom: var(--space-3);
        }
        .paso__desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: var(--space-3);
        }
        .paso__detalle {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
        }
        .como__cta {
          text-align: center;
          margin-top: var(--space-12);
          padding: var(--space-10);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          border-radius: var(--radius-xl);
          color: #fff;
        }
        .como__cta-title {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          font-weight: 700;
          margin-bottom: var(--space-3);
        }
        .como__cta-desc {
          color: rgba(255,255,255,0.7);
          margin-bottom: var(--space-6);
          font-size: 0.95rem;
        }
        @media (max-width: 768px) {
          .como__grid { grid-template-columns: 1fr 1fr; }
          .como__grid::before { display: none; }
        }
        @media (max-width: 480px) {
          .como__grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="section como" id="como-funciona">
        <div className="container">
          <div className="como__header">
            <span className="section-label">El proceso</span>
            <h2 className="section-title">Cómo funciona</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>De la primera llamada a ingresos recurrentes en menos de dos semanas.</p>
          </div>

          <div className="como__grid">
            {pasos.map(p => (
              <div key={p.num} className="paso">
                <div className="paso__num">{p.num}</div>
                <h3 className="paso__titulo">{p.titulo}</h3>
                <p className="paso__desc">{p.desc}</p>
                <span className="paso__detalle">{p.detalle}</span>
              </div>
            ))}
          </div>

          <div className="como__cta">
            <h3 className="como__cta-title">¿Listo para empezar?</h3>
            <p className="como__cta-desc">El primer análisis de tu propiedad es gratuito y sin compromiso.</p>
            <a href="#contacto" className="btn btn-white">
              Solicitar análisis gratuito
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
