const sistemas = [
  {
    titulo: 'Coliving',
    descripcion: 'Alquiler por habitaciones a medio-largo plazo. Ideal para viviendas con varias habitaciones que quieres rentabilizar al máximo de forma estable.',
    cta: 'Ver sistema coliving',
  },
  {
    titulo: 'Temporal',
    descripcion: 'Alquiler por habitaciones o estancias de corta duración. Perfecto para rotativos, trabajadores desplazados o estudiantes de ciclos cortos.',
    cta: 'Ver sistema temporal',
  },
  {
    titulo: 'Vacacional',
    descripcion: 'Alquiler del apartamento completo para estancias turísticas. Máxima rentabilidad en zonas con alta demanda vacacional.',
    cta: 'Ver sistema vacacional',
  },
];

export default function Sistemas() {
  return (
    <section id="sistemas" style={{ padding: '5rem var(--space-8)', background: '#f0f4fa' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Nuestros sistemas</p>
        <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.5rem)', fontWeight: 800, marginBottom: '3rem' }}>Elige el modelo que encaja con tu vivienda</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
          {sistemas.map((s) => (
            <div key={s.titulo} style={{
              background: '#fff', borderRadius: 'var(--radius-lg)',
              padding: '2rem', boxShadow: 'var(--shadow-md)',
              display: 'flex', flexDirection: 'column', gap: '1rem'
            }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary)' }}>{s.titulo}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{s.descripcion}</p>
              <a href="#contacto" style={{
                marginTop: 'auto', fontSize: '0.9rem', fontWeight: 600,
                color: 'var(--color-primary)', textDecoration: 'underline'
              }}>{s.cta} →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
