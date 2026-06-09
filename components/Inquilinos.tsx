export default function Inquilinos() {
  return (
    <section id="inquilinos" style={{ padding: '5rem var(--space-8)', background: '#f0f4fa' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Para inquilinos</p>
        <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
          Habitaciones bien gestionadas.<br />Sin sorpresas.
        </h2>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Encontrar una habitación con Viviendas Virtuo es sencillo y transparente. Sabes lo que hay, lo que pagas y con quién tratas.
        </p>
        <a href="#contacto" style={{
          display: 'inline-block', background: 'var(--color-primary)', color: '#fff',
          padding: '0.85rem 2rem', borderRadius: 'var(--radius-md)', fontWeight: 700
        }}>Busco habitación</a>
      </div>
    </section>
  );
}
