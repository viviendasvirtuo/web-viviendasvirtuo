export default function Testimonios() {
  const testimonios = [
    {
      nombre: 'Carlos M.',
      tipo: 'Propietario · Coliving',
      texto: 'Llevaba años con el piso a medio ocupar y con problemas de pagos. Con Virtuo llevo 8 meses con ocupación total y sin un solo problema.',
      rating: 5,
      acento: 'var(--color-coliving)',
      acentoTag: 'Coliving',
    },
    {
      nombre: 'Laura P.',
      tipo: 'Propietario · Vacacional',
      texto: 'El apartamento de la playa estaba cogiendo polvo. Ahora genera más en temporada alta que todo el año anterior con alquiler tradicional.',
      rating: 5,
      acento: 'var(--color-vacacional)',
      acentoTag: 'Vacacional',
    },
    {
      nombre: 'Andrés T.',
      tipo: 'Inquilino · Temporal',
      texto: 'Vine por trabajo tres meses. Todo estaba impecable, el contrato era claro y cualquier duda la resolvieron al momento. Volvería sin dudarlo.',
      rating: 5,
      acento: 'var(--color-temporal)',
      acentoTag: 'Temporal',
    },
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <div
          style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', flexWrap: 'wrap',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-12)',
          }}
        >
          <div>
            <p className="section-label">Lo que dicen</p>
            <h2 className="section-title" style={{ margin: 0 }}>Propietarios e inquilinos satisfechos</h2>
          </div>
          {/* Estrellas promedio */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexShrink: 0 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-text)', marginLeft: '4px' }}>5.0</span>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)' }}>media</span>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: 'var(--space-5)',
          }}
        >
          {testimonios.map(t => (
            <blockquote
              key={t.nombre}
              style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-8)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex', flexDirection: 'column', gap: 'var(--space-5)',
                margin: 0,
              }}
            >
              {/* Estrellas */}
              <div style={{ display: 'flex', gap: '3px' }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              {/* Texto */}
              <p
                style={{
                  fontSize: 'var(--text-base)', color: 'var(--color-text)',
                  lineHeight: 1.7, flex: 1, fontStyle: 'italic',
                }}
              >
                &ldquo;{t.texto}&rdquo;
              </p>

              {/* Autor */}
              <footer
                style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 'var(--space-4)',
                  borderTop: '1px solid var(--color-border)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  {/* Avatar inicial */}
                  <div
                    style={{
                      width: '36px', height: '36px',
                      borderRadius: '50%',
                      background: `${t.acento}15`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 'var(--text-sm)', fontWeight: 800,
                      color: t.acento,
                      fontFamily: 'var(--font-display)',
                      flexShrink: 0,
                    }}
                  >
                    {t.nombre[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>{t.nombre}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)' }}>{t.tipo}</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
