import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Alquiler Vacacional para Propietarios — Viviendas Virtuo',
  description: 'Maximiza la rentabilidad de tu apartamento con gestión vacacional profesional en Barcelona. Airbnb, Booking y más, sin ocuparte de nada.',
};

const pasos = [
  {
    num: '01',
    title: 'Análisis y licencia',
    desc: 'Verificamos si tu vivienda dispone de licencia turística o te orientamos en el proceso. Sin licencia válida no operamos: tu seguridad legal es prioritaria.',
  },
  {
    num: '02',
    title: 'Puesta a punto profesional',
    desc: 'Fotografía profesional de alta calidad, equipamiento de bienvenida, amenities premium y presentación de cada rincón para maximizar la conversión en reservas.',
  },
  {
    num: '03',
    title: 'Publicación en todas las plataformas',
    desc: 'Tu apartamento en Airbnb, Booking, Vrbo y portales especializados, con textos optimizados y estrategia de precio dinámico según temporada y demanda.',
  },
  {
    num: '04',
    title: 'Atención al huésped 24/7',
    desc: 'Gestión de mensajes, preguntas, incidencias durante la estancia y valoraciones. El huésped siempre tiene respuesta; tú nunca ves el teléfono.',
  },
  {
    num: '05',
    title: 'Check-in, check-out y limpieza',
    desc: 'Recibimiento del huésped (presencial o con caja de llaves), revisión del estado del apartamento en cada salida y limpieza profesional entre estancias.',
  },
  {
    num: '06',
    title: 'Reporting y liquidación mensual',
    desc: 'Recibes un informe mensual detallado: ingresos, ocupación, valoraciones y propuestas de mejora. Transferencia puntual en cada cierre de mes.',
  },
];

const ventajas = [
  { icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-11h-2v4l3.5 2.1.8-1.2-2.3-1.4V9z', title: 'Máxima rentabilidad por m²', desc: 'El vacacional es el modelo con mayor ingreso potencial por noche. Virtuo lo optimiza al máximo.' },
  { icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z', title: 'Precios dinámicos', desc: 'Ajustamos el precio según temporada, eventos y demanda en tiempo real. Nunca dejas dinero encima de la mesa.' },
  { icon: 'M5 3l14 9-14 9V3z', title: 'Visibilidad en todas las plataformas', desc: 'Airbnb, Booking, Vrbo y más. Un único punto de gestión para todas las reservas.' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Protección frente a incidencias', desc: 'Supervisamos el estado del apartamento en cada check-out. Documentamos cualquier desperfecto.' },
  { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10', title: 'Piso siempre impecable', desc: 'Limpieza profesional entre cada estancia. El apartamento que tu huésped recibe es siempre perfecto.' },
  { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75', title: 'Gestión de valoraciones', desc: 'Respondemos a todas las reseñas y trabajamos para mantener una puntuación top en todas las plataformas.' },
];

const faqs = [
  {
    q: '¿Necesito licencia turística para alquilar vacacional en Barcelona?',
    a: 'Sí. En Barcelona es obligatorio disponer de licencia de apartamento turístico (HUT) para operar en plataformas como Airbnb. Virtuo verifica el estado de tu licencia antes de comenzar y puede orientarte en el proceso si aún no la tienes.',
  },
  {
    q: '¿Qué tipo de propiedad es ideal para el modelo vacacional?',
    a: 'Apartamentos completos (no habitaciones) en Barcelona ciudad, preferiblemente en Eixample, Gràcia, Sant Martí, Poblenou o el Gótico. Zonas con alta demanda turística y buena calificación en plataformas.',
  },
  {
    q: '¿Cuánto puedo ganar con mi apartamento?',
    a: 'Depende de la ubicación, el tamaño y la temporada. Un apartamento de 2 habitaciones bien ubicado puede generar entre 2.000 y 4.500€ mensuales en temporada alta. Hacemos un cálculo estimado gratuito.',
  },
  {
    q: '¿Puedo usar el piso para uso personal en determinadas fechas?',
    a: 'Sí. Bloqueamos las fechas que necesitas con antelación suficiente. El apartamento es tuyo y decides cuándo está disponible para huéspedes.',
  },
  {
    q: '¿Cómo se gestionan los daños de los huéspedes?',
    a: 'Realizamos una inspección exhaustiva en cada check-out. Airbnb y Booking tienen protocolos de reclamación que gestionamos nosotros. Los depósitos de seguridad están activos en todas las reservas.',
  },
  {
    q: '¿Qué plataformas incluye el servicio?',
    a: 'Airbnb, Booking.com, Vrbo y portales especializados en Barcelona. Gestionamos calendarios, precios y comunicación desde un único panel centralizado.',
  },
  {
    q: '¿Cuánto cuesta el servicio de gestión vacacional?',
    a: 'Trabajamos con una comisión sobre los ingresos generados, sin cuotas fijas de entrada. Te detallamos el porcentaje y todo lo incluido en el análisis gratuito.',
  },
];

export default function PropietariosVacacionalPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #7c2d00 0%, #c45e00 100%)',
          paddingTop: '140px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div className="container">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fdba74', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Vacacional · Para propietarios</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '24px' }}>
                  Máxima rentabilidad.<br />
                  <span style={{ color: '#fdba74' }}>Tu apartamento en todas las plataformas.</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '520px', lineHeight: 1.7, marginBottom: '40px' }}>
                  Gestionamos tu apartamento turístico de principio a fin: publicación en Airbnb y Booking, atención al huésped 24/7, limpieza, check-in y reporting mensual. Tú solo cobras.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#c45e00' }}>
                    Calcular rentabilidad de mi piso
                  </Link>
                  <a href="#como-trabajamos" className="btn btn-lg" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)' }}>
                    Cómo trabajamos →
                  </a>
                </div>
              </div>
              {/* Métricas hero */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { num: 'hasta x3', label: 'más ingresos vs alquiler anual en temporada alta' },
                  { num: '4,8★', label: 'valoración media de nuestros apartamentos en plataformas' },
                  { num: '100%', label: 'gestión externalizada — tú no haces nada' },
                ].map((m) => (
                  <div key={m.num} style={{ background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 'var(--radius-xl)', padding: '24px 28px', backdropFilter: 'blur(8px)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 900, color: 'white', lineHeight: 1 }}>{m.num}</div>
                    <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'var(--text-sm)', marginTop: '6px' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── QUÉ ES EL VACACIONAL VIRTUO ──────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 24px 64px rgba(196,94,0,0.12)', background: '#fef3e2' }}>
                <Image
                  src="/images/vacacional-apartamento.webp"
                  alt="Apartamento turístico gestionado por Viviendas Virtuo en Barcelona"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.96)', borderRadius: 'var(--radius-lg)', padding: '14px 20px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 900, color: '#c45e00', lineHeight: 1 }}>4,8 ★</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '3px' }}>puntuación media en plataformas</div>
                </div>
              </div>
              <div>
                <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Qué es el Vacacional Virtuo?</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  Tu apartamento como hotel boutique. Sin que seas el hotelero.
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '20px' }}>
                  El modelo vacacional es el que mayor rentabilidad genera por m², pero también el que más gestión requiere. Virtuo asume toda esa operativa: plataformas, huéspedes, limpieza, incidencias y reporting.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '32px' }}>
                  Trabajamos exclusivamente con apartamentos que cumplen la normativa vigente. La licencia turística es obligatoria en Barcelona y nosotros la verificamos antes de empezar.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {['Apartamento completo', 'Licencia turística requerida', 'Barcelona ciudad'].map((tag) => (
                    <span key={tag} style={{ background: '#fff7ed', border: '1px solid rgba(196,94,0,0.15)', borderRadius: '999px', padding: '6px 16px', fontSize: 'var(--text-xs)', fontWeight: 600, color: '#c45e00' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── REQUISITOS ───────────────────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff7ed' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Tu piso encaja?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Perfil ideal de apartamento para Vacacional</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.7 }}>
                No cualquier piso es apto. Estos son los requisitos para operar con éxito en el mercado turístico barcelonés.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
              {[
                { icon: '📜', req: 'Licencia turística (HUT)', detail: 'Imprescindible en Barcelona. Virtuo verifica su estado y vigencia antes de comenzar la gestión.' },
                { icon: '🏠', req: 'Apartamento completo', detail: 'El modelo vacacional es para unidades completas, no habitaciones individuales.' },
                { icon: '📍', req: 'Ubicación turística', detail: 'Eixample, Gràcia, Gótico, Barceloneta, Poblenou, Sant Martí. Zonas con alta demanda de viajeros.' },
                { icon: '✨', req: 'Buena presentación', detail: 'No necesitas reforma, pero sí un espacio limpio, ordenado y fotogénico. Virtuo te asesora si hay que mejorarlo.' },
              ].map((item) => (
                <div key={item.req} style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.2rem', lineHeight: 1 }}>{item.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text)' }}>{item.req}</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CÓMO TRABAJAMOS ──────────────────────────────── */}
        <section id="como-trabajamos" style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)', scrollMarginTop: '80px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>El proceso</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>De la primera llamada a la primera reserva</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.7 }}>
                En menos de 10 días tu apartamento ya está publicado y recibiendo reservas.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {pasos.map((paso) => (
                <div key={paso.num} style={{ background: '#f8f9fc', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '20px', right: '24px', fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 900, color: 'rgba(196,94,0,0.06)', lineHeight: 1 }}>{paso.num}</div>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff7ed', border: '2px solid rgba(196,94,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-sm)', color: '#c45e00' }}>{paso.num}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>{paso.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{paso.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VENTAJAS ─────────────────────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff7ed' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Ventajas</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                Gestión vacacional sin complicaciones
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {ventajas.map((v, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(196,94,0,0.08)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c45e00" strokeWidth="1.8" aria-hidden="true">
                    <path d={v.icon} />
                  </svg>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>{v.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Preguntas frecuentes</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Todo lo que necesitas saber</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, i) => (
                <details key={i} name="faq" style={{ background: '#f8f9fc', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                  <summary style={{ padding: '20px 24px', cursor: 'pointer', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    {faq.q}
                    <span style={{ flexShrink: 0, color: '#c45e00', fontSize: '1.25rem', fontWeight: 400 }}>+</span>
                  </summary>
                  <p style={{ padding: '0 24px 20px', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ────────────────────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'linear-gradient(135deg, #7c2d00 0%, #c45e00 100%)', textAlign: 'center' }}>
          <div className="container">
            <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>¿Listo para empezar?</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
              Calcula la rentabilidad real de tu apartamento.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              Sin compromiso. En 24h te decimos cuánto puede generar tu piso con gestión vacacional profesional.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: '#c45e00', fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Solicitar análisis gratuito</Link>
              <Link href="/propietarios" style={{ display: 'inline-flex', alignItems: 'center', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver otros sistemas</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
