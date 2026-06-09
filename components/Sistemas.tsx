export default function Sistemas() {
  const sistemas = [
    {
      id: 'coliving',
      emoji: '🏘️',
      tag: 'Coliving',
      tagColor: 'badge-blue',
      titulo: 'Alquiler por habitaciones',
      subtitulo: 'Medio y largo plazo',
      descripcion: 'Ideal para pisos con varias habitaciones. Gestionamos inquilinos, contratos, pagos y convivencia. Ingresos estables mes a mes sin que tengas que intervenir.',
      para: 'Propietarios que quieren estabilidad y previsibilidad.',
      beneficios: ['Inquilinos verificados', 'Contratos LAU gestionados', 'Cobro garantizado', 'Gestión de incidencias'],
      acento: '#1a4a8a',
      fondo: 'linear-gradient(135deg, #e8eef7 0%, #f0f5ff 100%)',
    },
    {
      id: 'temporal',
      emoji: '📋',
      tag: 'Temporal',
      tagColor: 'badge-purple',
      titulo: 'Alquiler de corta duración',
      subtitulo: 'Para trabajadores y estudiantes',
      descripcion: 'Habitaciones para profesionales en desplazamiento, estudiantes de ciclos cortos o proyectos temporales. Más rotación, mayor ingreso por ocupación.',
      para: 'Propietarios que buscan flexibilidad y mayor rendimiento.',
      beneficios: ['Check-in y check-out gestionados', 'Perfiles profesionales', 'Precios dinámicos', 'Sin burocracia para ti'],
      acento: '#7c3aed',
      fondo: 'linear-gradient(135deg, #f3e8ff 0%, #faf5ff 100%)',
    },
    {
      id: 'vacacional',
      emoji: '✈️',
      tag: 'Vacacional',
      tagColor: 'badge-orange',
      titulo: 'Apartamento completo para turistas',
      subtitulo: 'Máxima rentabilidad',
      descripcion: 'Gestionamos tu apartamento en plataformas como Airbnb y Booking. Fotografías profesionales, pricing dinámico, atención 24h al viajero y limpieza tras cada estancia.',
      para: 'Propietarios que quieren maximizar ingresos por noche.',
      beneficios: ['Gestión en Airbnb y Booking', 'Fotografía profesional', 'Pricing dinámico', 'Limpieza entre huéspedes'],
      acento: '#c2410c',
      fondo: 'linear-gradient(135deg, #fff7ed 0%, #fffbf5 100%)',
    },
  ];

  return (
    <>
      <style>{`
        .sistemas { background: var(--color-bg); }
        .sistemas__header {
          text-align: center;
          margin-bottom: var(--space-12);
        }
        .sistemas__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .sistema-card {
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          transition: box-shadow var(--transition), transform var(--transition);
          display: flex;
          flex-direction: column;
        }
        .sistema-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .sistema-card__top {
          padding: var(--space-8);
          flex: 1;
        }
        .sistema-card__emoji {
          font-size: 2.5rem;
          margin-bottom: var(--space-4);
          display: block;
        }
        .sistema-card__titulo {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 0.25rem;
          line-height: 1.2;
        }
        .sistema-card__sub {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--color-text-faint);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: var(--space-4);
        }
        .sistema-card__desc {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin-bottom: var(--space-6);
        }
        .sistema-card__beneficios {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
        .sistema-card__beneficio {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }
        .sistema-card__beneficio::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-primary);
          flex-shrink: 0;
        }
        .sistema-card__bottom {
          padding: var(--space-6) var(--space-8);
          border-top: 1px solid var(--color-border);
          background: var(--color-surface);
        }
        .sistema-card__para {
          font-size: 0.8rem;
          color: var(--color-text-faint);
          margin-bottom: var(--space-4);
        }
        @media (max-width: 900px) {
          .sistemas__grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 640px) and (max-width: 900px) {
          .sistemas__grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <section className="section sistemas" id="sistemas">
        <div className="container">
          <div className="sistemas__header">
            <span className="section-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Nuestros sistemas
            </span>
            <h2 className="section-title" style={{ fontSize: 'var(--text-xl)' }}>Tres formas de rentabilizar tu propiedad</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Cada sistema está diseñado para un perfil de propiedad y objetivo de rentabilidad distinto. Nosotros te asesoramos cuál encaja mejor.</p>
          </div>

          <div className="sistemas__grid">
            {sistemas.map(s => (
              <div key={s.id} className="sistema-card" style={{ background: s.fondo }}>
                <div className="sistema-card__top">
                  <span className="sistema-card__emoji">{s.emoji}</span>
                  <div>
                    <span className={`badge ${s.tagColor}`} style={{ marginBottom: 'var(--space-3)' }}>{s.tag}</span>
                  </div>
                  <h3 className="sistema-card__titulo">{s.titulo}</h3>
                  <div className="sistema-card__sub">{s.subtitulo}</div>
                  <p className="sistema-card__desc">{s.descripcion}</p>
                  <ul className="sistema-card__beneficios">
                    {s.beneficios.map(b => (
                      <li key={b} className="sistema-card__beneficio">{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="sistema-card__bottom">
                  <div className="sistema-card__para">✓ {s.para}</div>
                  <a href="#contacto" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}>
                    Me interesa el {s.tag}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
