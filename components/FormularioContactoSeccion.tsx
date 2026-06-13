'use client';

const TALLY_PROPIETARIO = 'https://tally.so/r/n0NyGB';
const TALLY_INQUILINO = 'https://tally.so/r/2EaJNe';

interface Props {
  tipo: 'propietario' | 'inquilino';
  color: string;
}

const INFO = {
  propietario: {
    telefono: '+34 611 806 603',
    telefonoHref: 'tel:+34611806603',
    email: 'propietarios@viviendasvirtuo.com',
    emailHref: 'mailto:propietarios@viviendasvirtuo.com',
    tituloFormulario: 'Auditoría Técnica de Viabilidad Residencial',
    descripcion: 'Analizamos tu propiedad y te decimos qué sistema maximiza tu rentabilidad. Sin compromiso.',
    cta: 'Iniciar auditoría gratuita →',
    pasos: ['Cuestionario rápido (5 min)', 'Análisis personalizado de tu propiedad', 'Propuesta sin compromiso en 24h'],
    icono: '🏠',
    titulo: '¿Tienes una vivienda en Barcelona?',
    subtitulo: 'Cuéntanos tu caso y te explicamos qué sistema encaja mejor con tu propiedad.',
  },
  inquilino: {
    telefono: '+34 611 806 603',
    telefonoHref: 'tel:+34611806603',
    email: 'inquilinos@viviendasvirtuo.com',
    emailHref: 'mailto:inquilinos@viviendasvirtuo.com',
    tituloFormulario: 'Solicitud de Estancia',
    descripcion: 'Cuéntanos qué buscas: zona, duración y presupuesto. Te encontramos la opción ideal.',
    cta: 'Solicitar estancia →',
    pasos: ['Cuestionario rápido (3 min)', 'Te presentamos opciones adaptadas', 'Respuesta en menos de 24h'],
    icono: '👤',
    titulo: '¿Listo para encontrar tu hogar?',
    subtitulo: 'Escríbenos y te ayudamos a encontrar la opción perfecta para ti en Barcelona.',
  },
};

export default function FormularioContactoSeccion({ tipo, color }: Props) {
  const info = INFO[tipo];
  const tallyUrl = tipo === 'propietario' ? TALLY_PROPIETARIO : TALLY_INQUILINO;

  function handleTally() {
    window.open(tallyUrl, '_blank', 'noopener,noreferrer');
  }

  return (
    <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
      <div className="container">

        {/* Cabecera */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: color, fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Contacto
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '12px' }}>
            {info.titulo}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            {info.subtitulo}
          </p>
        </div>

        {/* Grid info + CTA */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'start',
        }}>

          {/* Columna izquierda: datos de contacto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-6)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
            }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)' }}>
                ¿Prefieres contactar directamente?
              </h3>

              <a href={info.telefonoHref} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textDecoration: 'none' }}>
                <span style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-full)', background: '#e8f0fa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>📞</span>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Teléfono</div>
                  <div style={{ fontWeight: 700, color: color, fontSize: 'var(--text-base)' }}>{info.telefono}</div>
                </div>
              </a>

              <a href={info.emailHref} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textDecoration: 'none' }}>
                <span style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-full)', background: '#e8f0fa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>✉️</span>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Email</div>
                  <div style={{ fontWeight: 600, color: color, fontSize: 'var(--text-sm)', wordBreak: 'break-all' }}>{info.email}</div>
                </div>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <span style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-full)', background: '#e8f0fa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>📍</span>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Zona de actuación</div>
                  <div style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: 'var(--text-sm)' }}>Barcelona y área metropolitana</div>
                </div>
              </div>
            </div>

            <div style={{ background: '#f0f4fa', borderRadius: 'var(--radius-xl)', padding: 'var(--space-5)' }}>
              <p style={{ color: color, fontWeight: 700, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-1)' }}>⚡ Respuesta en &lt;24h</p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.6, margin: 0 }}>
                Todos los mensajes son leídos por el equipo de Virtuo. Nunca hablarás con un bot.
              </p>
            </div>
          </div>

          {/* Columna derecha: CTA Tally */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-8)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-5)',
          }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: 'var(--radius-full)',
              background: color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.6rem',
            }}>
              {info.icono}
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)',
                fontWeight: 800,
                color: 'var(--color-text)',
                marginBottom: 'var(--space-2)',
                lineHeight: 1.2,
              }}>
                {info.tituloFormulario}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.7 }}>
                {info.descripcion}
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {info.pasos.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                  <span style={{ color: color, fontWeight: 700, fontSize: '1rem' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={handleTally}
              style={{
                background: color,
                color: 'white',
                fontWeight: 700,
                fontSize: 'var(--text-base)',
                padding: 'var(--space-4) var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'center',
                transition: 'filter 200ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.12)')}
              onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(1)')}
            >
              {info.cta}
            </button>

            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textAlign: 'center', margin: 0 }}>
              Sin compromiso · Abre en nueva pestaña
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
