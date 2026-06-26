import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HabitacionesDestacadas from '@/components/HabitacionesDestacadas';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Alquiler Vacacional en Barcelona — Viviendas Virtuo',
  description: 'Apartamentos vacacionales en Barcelona gestionados profesionalmente. Estancias cortas para turismo y viajes de negocio. Reserva sin complicaciones.',
};

const VACACIONAL_ORANGE = '#c45e00';
const VACACIONAL_ORANGE_DARK = '#a34d00';
const VACACIONAL_ACCENT = '#f5a742';
const COLIVING_BLUE = '#0453ab';
const TEMPORAL_GREEN = '#008f58';

const TALLY_INQUILINO = 'https://tally.so/r/2EaJNe';

const faqs = [
  { q: '¿Qué tipo de alojamiento es el vacacional?', a: 'Un apartamento completo para ti, equipado y listo para disfrutar tu estancia turística o visita puntual en Barcelona. Privacidad total, sin compartir.' },
  { q: '¿Qué incluye el apartamento?', a: 'Apartamento íntegro totalmente equipado: cocina, ropa de cama, toallas, wifi y todo lo necesario para una estancia cómoda. Con atención 24h durante tu estancia.' },
  { q: '¿Cómo reservo?', a: 'Puedes reservar a través de las plataformas donde publicamos (Airbnb, Booking y otras) o contactando directamente con nosotros para consultar disponibilidad.' },
  { q: '¿Hay estancia mínima?', a: 'Depende del apartamento y la temporada. Te confirmamos las condiciones de cada alojamiento al consultar disponibilidad.' },
  { q: '¿Qué pasa si tengo un problema durante la estancia?', a: 'Tienes atención 24h. Cualquier incidencia se resuelve rápido para que tu estancia sea perfecta de principio a fin.' },
  { q: '¿Cómo es el check-in y el check-out?', a: 'Coordinamos contigo la entrada y salida de forma sencilla. Te damos todas las instrucciones de acceso con antelación.' },
  { q: '¿Se pide depósito de seguridad?', a: 'Sí, las reservas pueden incluir un depósito de seguridad estándar según la plataforma, que se gestiona y se devuelve tras el check-out si todo está correcto.' },
];

export default function AlquilerVacacionalPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ position: 'relative', paddingTop: '140px', paddingBottom: '80px', overflow: 'hidden', minHeight: '520px' }}>
          <Image
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80&auto=format&fit=crop"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${VACACIONAL_ORANGE_DARK}e0 0%, ${VACACIONAL_ORANGE}cc 100%)` }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 70% 50%, ${VACACIONAL_ACCENT}1a 0%, transparent 60%)`, pointerEvents: 'none' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inicio</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Alquiler Vacacional</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: VACACIONAL_ACCENT, display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Vacacional · Para inquilinos</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '20px', maxWidth: '680px' }}>
              Apartamento completo en Barcelona{' '}
              <span style={{ color: VACACIONAL_ACCENT }}>listo para disfrutar</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '540px', lineHeight: 1.7, marginBottom: '40px' }}>
              Apartamentos de alquiler vacacional gestionados al detalle. Para turistas y viajeros de negocio que quieren la comodidad de un hogar sin las complicaciones de un hotel.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#apartamentos" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: VACACIONAL_ORANGE, fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver apartamentos disponibles</a>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Contactar</Link>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div>
                <p style={{ color: VACACIONAL_ORANGE, fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Lo que obtienes</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>El apartamento completo para ti, sin intermediarios</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '24px', fontSize: 'var(--text-base)' }}>Apartamentos enteros para uso exclusivo. Más espacio, más privacidad y más comodidad que cualquier habitación de hotel al mismo precio o menos.</p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '32px', fontSize: 'var(--text-base)' }}>Gestión profesional incluida: check-in organizado, limpieza entre estancias y atención ante cualquier incidencia durante tu estancia.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {[
                    'Apartamento completo de uso exclusivo',
                    'Totalmente equipado: cocina, ropa de cama, toallas',
                    'Wifi de alta velocidad incluido',
                    'Check-in y check-out flexible con gestión profesional',
                    'Limpieza incluida en la reserva',
                    'Atención durante toda la estancia',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={VACACIONAL_ORANGE} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#apartamentos" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: VACACIONAL_ORANGE, color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver disponibilidad →</a>
              </div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: `0 20px 60px ${VACACIONAL_ORANGE}1f` }}>
                <Image
                  src="/images/vacacional.webp"
                  alt="Apartamento vacacional gestionado por Viviendas Virtuo en Barcelona"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.95)', borderRadius: 'var(--radius-lg)', padding: '12px 16px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 900, color: VACACIONAL_ORANGE, lineHeight: 1 }}>Apartamento completo</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>uso exclusivo para ti</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARA QUIÉN */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>¿Este alquiler vacacional es para ti?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '20px' }}>
              {[
                { tipo: 'Turista en Barcelona', desc: 'Más comodidad y espacio que un hotel, con la libertad de un hogar propio.' },
                { tipo: 'Viajero de negocios', desc: 'Cocina, escritorio y wifi. Todo lo que necesitas para trabajar y descansar.' },
                { tipo: 'Familia o grupo', desc: 'Espacio suficiente para todos, sin pagar varias habitaciones de hotel.' },
                { tipo: 'Escapada de fin de semana', desc: 'Reserva para pocos días y disfruta Barcelona sin complicaciones.' },
              ].map((p, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '28px 20px', border: '1px solid var(--color-border)' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: VACACIONAL_ORANGE, marginBottom: '14px' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>{p.tipo}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APARTAMENTOS */}
        <div id="apartamentos">
          <HabitacionesDestacadas sistema="vacacional" />
        </div>

        {/* OTROS SISTEMAS */}
        <section style={{ padding: 'clamp(40px,6vw,80px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', marginBottom: '32px' }}>¿Buscas otro tipo de alojamiento?</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/coliving" style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '28px 24px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', flex: '1 1 280px', maxWidth: '360px' }}>
                <span style={{ fontSize: '2rem', lineHeight: 1 }}>🛋️</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: COLIVING_BLUE, margin: 0 }}>Coliving</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>¿Buscas quedarte una temporada? Habitación privada con comunidad incluida.</p>
                <span style={{ marginTop: '4px', fontWeight: 700, fontSize: 'var(--text-sm)', color: COLIVING_BLUE }}>Ver coliving →</span>
              </Link>
              <Link href="/temporal" style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '28px 24px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', flex: '1 1 280px', maxWidth: '360px' }}>
                <span style={{ fontSize: '2rem', lineHeight: 1 }}>🗓️</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: TEMPORAL_GREEN, margin: 0 }}>Alquiler temporal</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>¿Solo necesitas unas semanas o meses? Estancias flexibles de corta duración.</p>
                <span style={{ marginTop: '4px', fontWeight: 700, fontSize: 'var(--text-sm)', color: TEMPORAL_GREEN }}>Ver temporal →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FORMULARIO CONTACTO */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container" style={{ maxWidth: '640px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p style={{ color: VACACIONAL_ORANGE, fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Te interesa?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '16px' }}>Solicita información sobre alquiler vacacional</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.7 }}>Dinos tus fechas y buscamos el apartamento perfecto para ti en Barcelona.</p>
            </div>
            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: 'clamp(28px,5vw,48px)', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Cuestionario rápido (3 min)',
                  'Te buscamos el apartamento ideal para tus fechas',
                  'Sin comisiones ocultas',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={VACACIONAL_ORANGE} strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={TALLY_INQUILINO}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: VACACIONAL_ORANGE, color: 'white', fontWeight: 700, fontSize: 'var(--text-base)', padding: '15px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', width: '100%', textAlign: 'center' }}
              >
                Solicitar información →
              </a>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textAlign: 'center', margin: 0 }}>Sin compromiso · Abre en nueva pestaña</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#fff7ed' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: VACACIONAL_ORANGE, fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>FAQ</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Preguntas frecuentes sobre Alquiler Vacacional</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, i) => (
                <details key={i} name="faq" style={{ background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                  <summary style={{ padding: '20px 24px', cursor: 'pointer', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'white', background: 'linear-gradient(135deg, #7c2d00 0%, #c45e00 100%)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    {faq.q}
                    <span style={{ flexShrink: 0, color: 'white', fontSize: '1.25rem', fontWeight: 400 }}>+</span>
                  </summary>
                  <p style={{ padding: '0 24px 20px', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
