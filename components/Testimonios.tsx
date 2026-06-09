export default function Testimonios() {
  // Testimonios estáticos (la web cargará los de Supabase cuando existan)
  const testimonios = [
    {
      nombre: 'Carlos M.',
      tipo: 'Propietario',
      sistema: 'Coliving',
      texto: 'Llevaba años con el piso a medio ocupar y con problemas de pagos. Con Virtuo llevo 8 meses con ocupación total y sin un solo problema.',
      valoracion: 5,
      color: 'var(--color-coliving)',
    },
    {
      nombre: 'Laura P.',
      tipo: 'Propietario',
      sistema: 'Vacacional',
      texto: 'El apartamento de la playa estaba cogiendo polvo. Ahora genera más en temporada que todo el año anterior con alquiler tradicional.',
      valoracion: 5,
      color: 'var(--color-vacacional)',
    },
    {
      nombre: 'Andrés T.',
      tipo: 'Inquilino',
      sistema: 'Temporal',
      texto: 'Vine por trabajo tres meses. Todo estaba impecable, el contrato era claro y cualquier duda la resolvieron al momento.',
      valoracion: 5,
      color: 'var(--color-temporal)',
    },
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
          <p className="section-label">Lo que dicen</p>
          <h2 className="section-title">Propietarios e inquilinos satisfechos</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'var(--space-6)',
        }}>
          {testimonios.map(t => (
            <blockquote key={t.nombre} style={{
              padding: 'var(--space-8)',
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
            }}>
              {/* Estrellas */}
              <div style={{ display: 'flex', gap: '3px' }}>
                {Array.from({ length: t.valoracion }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text)', lineHeight: 1.65, fontStyle: 'italic', flex: 1 }}>
                &ldquo;{t.texto}&rdquo;
              </p>

              <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>{t.nombre}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)' }}>{t.tipo}</div>
                </div>
                <span style={{
                  fontSize: 'var(--text-xs)', fontWeight: 700,
                  color: t.color,
                  background: `${t.color}18`,
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>{t.sistema}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
