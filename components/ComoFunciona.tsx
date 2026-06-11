import Link from 'next/link';

export default function ComoFunciona() {
  const pasos = [
    {
      num: '01',
      title: 'Contacta con nosotros',
      desc: 'Rellena el formulario o llámanos. En menos de 24h un experto de Virtuo se pone en contacto contigo para conocer tu situación.',
    },
    {
      num: '02',
      title: 'Analizamos y recomendamos',
      desc: 'Estudiamos tu propiedad, zona y objetivos. Te presentamos el sistema más rentable con una estimación de ingresos real y sin compromiso.',
    },
    {
      num: '03',
      title: 'Firmamos y activamos',
      desc: 'Contrato claro y transparente. Nos encargamos de la preparación, fotografías y publicación. Tu vivienda está activa en pocos días.',
    },
    {
      num: '04',
      title: 'Cobras cada mes',
      desc: 'Liquidación puntual con informe detallado. Tú ves los números en tiempo real, nosotros hacemos todo el trabajo.',
    },
  ];

  return (
    <section id="como-funciona" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">

        {/* Cabecera */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
          <p className="section-label">El proceso</p>
          <h2 className="section-title">
            De propietario preocupado<br />a propietario tranquilo
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Cuatro pasos para que tu vivienda empiece a generar ingresos sin que tengas que gestionar nada.
          </p>
        </div>

        {/* Timeline */}
        <div className="cf-grid">
          {/* Línea conectora — solo desktop */}
          <div className="cf-linea" aria-hidden="true" />

          {pasos.map((paso, i) => (
            <div
              key={paso.num}
              style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-8) var(--space-6)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: '40px', height: '40px',
                  borderRadius: '50%',
                  background: i === 0 ? 'var(--color-primary)' : 'var(--color-surface)',
                  border: `2px solid ${i === 0 ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 'var(--space-5)',
                }}
              >
                <span
                  style={{
                    fontSize: 'var(--text-xs)', fontWeight: 900,
                    color: i === 0 ? '#fff' : 'var(--color-text-faint)',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {paso.num}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  marginBottom: 'var(--space-3)',
                  lineHeight: 1.3,
                }}
              >
                {paso.title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {paso.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
          <Link href="/contacto" className="btn btn-primary btn-lg">
            Empezar ahora — es gratis
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        .cf-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-4);
          position: relative;
        }
        .cf-linea {
          position: absolute;
          top: 28px;
          left: calc(12.5% + 20px);
          right: calc(12.5% + 20px);
          height: 1px;
          background: linear-gradient(90deg, var(--color-primary) 0%, rgba(26,74,138,0.15) 100%);
          z-index: 0;
        }
        @media (max-width: 900px) {
          .cf-grid {
            grid-template-columns: 1fr 1fr;
          }
          .cf-linea {
            display: none;
          }
        }
        @media (max-width: 540px) {
          .cf-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
