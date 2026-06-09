const beneficios = [
  'Gestión integral sin que tengas que preocuparte de nada',
  'Selección y control de inquilinos con criterio',
  'Máxima rentabilidad según el sistema elegido',
  'Informes claros y comunicación directa',
  'Sin sorpresas: sabes exactamente qué hacer y cuánto ganar',
];

export default function Propietarios() {
  return (
    <section id="propietarios" style={{ padding: '5rem var(--space-8)', background: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Para propietarios</p>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Tu propiedad trabaja para ti.<br />Tú no tienes que trabajar por ella.
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Nos ocupamos de todo el proceso: publicación, selección, contratos, cobros y resolución de incidencias. Tú recibes los ingresos.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {beneficios.map((b) => (
              <li key={b} style={{ display: 'flex', gap: '0.75rem', color: 'var(--color-text-muted)' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>✓</span> {b}
              </li>
            ))}
          </ul>
          <a href="#contacto" style={{
            display: 'inline-block', background: 'var(--color-primary)', color: '#fff',
            padding: '0.85rem 2rem', borderRadius: 'var(--radius-md)', fontWeight: 700
          }}>Quiero saber más</a>
        </div>
        <div style={{
          background: 'linear-gradient(135deg,#1a4a8a,#0f2d5e)',
          borderRadius: 'var(--radius-lg)', height: '380px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '1.1rem', opacity: 0.9
        }}>
          Imagen propiedad
        </div>
      </div>
    </section>
  );
}
