export default function Contacto() {
  return (
    <section id="contacto" style={{ padding: '5rem var(--space-8)', background: 'linear-gradient(135deg,#1a4a8a,#0f2d5e)', color: '#fff' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
          ¿Tienes una vivienda o buscas habitación?
        </h2>
        <p style={{ opacity: 0.85, marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Cuéntanos tu caso y te respondemos en menos de 24 horas.
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <input type="text" placeholder="Tu nombre" required style={{
            padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)',
            border: 'none', fontSize: '1rem', width: '100%'
          }} />
          <input type="email" placeholder="Tu email" required style={{
            padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)',
            border: 'none', fontSize: '1rem', width: '100%'
          }} />
          <select style={{
            padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)',
            border: 'none', fontSize: '1rem', width: '100%', color: '#6b7280'
          }}>
            <option value="">Soy propietario / Busco habitación</option>
            <option value="propietario">Soy propietario</option>
            <option value="inquilino">Busco habitación</option>
          </select>
          <textarea placeholder="Cuéntanos tu caso brevemente" rows={4} style={{
            padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)',
            border: 'none', fontSize: '1rem', width: '100%', resize: 'vertical'
          }} />
          <button type="submit" style={{
            background: '#fff', color: 'var(--color-primary)',
            padding: '0.9rem', borderRadius: 'var(--radius-md)',
            fontWeight: 700, fontSize: '1rem'
          }}>Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}
