const pasos = [
  { n: '01', titulo: 'Cuéntanos tu caso', texto: 'Contacta y cuéntanos qué tienes: tipo de vivienda, ubicación y disponibilidad.' },
  { n: '02', titulo: 'Te recomendamos el sistema', texto: 'Analizamos tu propiedad y te proponemos el modelo que maximiza tu rentabilidad.' },
  { n: '03', titulo: 'Nos encargamos de todo', texto: 'Publicación, selección, contratos, cobros y gestión diaria. Tú solo recibes informes.' },
];

export default function ComoFunciona() {
  return (
    <section style={{ padding: '5rem var(--space-8)', background: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Cómo funciona</p>
        <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.5rem)', fontWeight: 800, marginBottom: '3rem' }}>Tres pasos y tu vivienda ya trabaja</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '2rem' }}>
          {pasos.map((p) => (
            <div key={p.n} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', opacity: 0.15 }}>{p.n}</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: '-1.5rem' }}>{p.titulo}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
