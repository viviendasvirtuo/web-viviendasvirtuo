import Link from 'next/link';

export default function ComoFunciona() {
  const pasos = [
    {
      num: '01',
      title: 'Contacta con nosotros',
      desc: 'Rellena el formulario o llámanos. En menos de 24h un experto de Virtuo se pone en contacto contigo para conocer tu situación.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.46 16z"/>
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Analizamos y recomendamos',
      desc: 'Estudiamos tu propiedad, zona y objetivos. Te presentamos el sistema más rentable con una estimación de ingresos real y sin compromiso.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Firmamos y activamos',
      desc: 'Contrato claro y transparente. Nos encargamos de la preparación, fotografías y publicación. Tu vivienda está activa en pocos días.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Cobras cada mes',
      desc: 'Liquidación puntual con informe detallado. Tú ves los números en tiempo real, nosotros hacemos todo el trabajo.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
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

        {/* Grid 2x2 — mismo formato que tarjetas de Inquilinos */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-4)',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {pasos.map(paso => (
            <div
              key={paso.num}
              style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                minWidth: 0,
              }}
            >
              <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-3)', lineHeight: 0 }}>
                {paso.icon}
              </div>
              <h3
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  marginBottom: 'var(--space-2)',
                }}
              >
                {paso.title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-xs)',
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
    </section>
  );
}
