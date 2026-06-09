export default function ComoFunciona() {
  const pasos = [
    {
      num: '01',
      title: 'Nos cuentas tu situación',
      desc: 'Rellenas el formulario o nos llamas. En menos de 24h un experto analiza tu propiedad y te propone el sistema más rentable.',
    },
    {
      num: '02',
      title: 'Firmamos el acuerdo de gestión',
      desc: 'Contrato claro, sin letra pequeña. Defines qué quieres delegar y nosotros nos encargamos de todo lo demás.',
    },
    {
      num: '03',
      title: 'Preparamos la propiedad',
      desc: 'Home staging, fotografías profesionales, publicación en plataformas y selección de los primeros inquilinos.',
    },
    {
      num: '04',
      title: 'Tú cobras, nosotros gestionamos',
      desc: 'Cada mes recibes la liquidación con informe detallado. Cualquier incidencia la resolvemos sin molestarte.',
    },
  ];

  return (
    <section id="como-funciona" className="section section-dark">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
          <p className="section-label" style={{ color: '#60a5fa' }}>El proceso</p>
          <h2 className="section-title section-title--white">Cómo funciona</h2>
          <p className="section-subtitle section-subtitle--white" style={{ margin: '0 auto' }}>
            Cuatro pasos para pasar de propietario preocupado a propietario tranquilo.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
          gap: 'var(--space-6)',
          position: 'relative',
        }}>
          {pasos.map((paso, i) => (
            <div key={paso.num} style={{
              padding: 'var(--space-8)',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              position: 'relative',
              transition: 'all var(--transition)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(255,255,255,0.09)';
              el.style.borderColor = 'rgba(255,255,255,0.2)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(255,255,255,0.05)';
              el.style.borderColor = 'rgba(255,255,255,0.1)';
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3.5rem',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.1)',
                lineHeight: 1,
                marginBottom: 'var(--space-4)',
              }}>{paso.num}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-lg)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: 'var(--space-3)',
              }}>{paso.title}</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{paso.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
