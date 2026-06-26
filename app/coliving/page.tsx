import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HabitacionesDestacadas from '@/components/HabitacionesDestacadas';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Coliving para inquilinos — Viviendas Virtuo',
  description: 'Habitaciones de coliving gestionadas profesionalmente en Barcelona. Todo incluido, comunidad seleccionada, contratos individuales. Entra y vive.',
};

const COLIVING_BLUE = '#0453ab';
const COLIVING_BLUE_DARK = '#033d82';
const COLIVING_ACCENT = '#6dbcdb';
const TEMPORAL_GREEN = '#008f58';
const VACACIONAL_ORANGE = '#c45e00';

const TALLY_INQUILINO = 'https://tally.so/r/2EaJNe';

const faqs = [
  { q: '¿Qué es exactamente el coliving?', a: 'Es alquilar una habitación privada en un piso compartido con zonas comunes cuidadas y una comunidad de convivencia. Tienes tu espacio propio con contrato individual, y compartes salón, cocina y áreas comunes con perfiles seleccionados y compatibles.' },
  { q: '¿Qué incluye el precio de la habitación?', a: 'Habitación amueblada, suministros (agua, luz, internet), limpieza de zonas comunes y mantenimiento. Sin sorpresas: lo que ves es lo que pagas cada mes.' },
  { q: '¿Con quién voy a vivir?', a: 'Con perfiles verificados. Seleccionamos a cada residente por solvencia, referencias y compatibilidad de convivencia, para que el ambiente sea de respeto y tranquilidad.' },
  { q: '¿Cómo es el contrato?', a: 'Cada habitación tiene su propio contrato individual. Solo respondes por tu habitación, no por la de los demás. Todo en regla y con la normativa vigente.' },
  { q: '¿Qué pasa si hay una avería o incidencia?', a: 'La reportas y nos ocupamos nosotros. Gestionamos reparaciones, incidencias y limpieza de zonas comunes para que no tengas que preocuparte de nada.' },
  { q: '¿Cuánto tiempo mínimo tengo que quedarme?', a: 'El coliving está pensado para estancias de media-larga duración (3+ meses). Te confirmamos la duración y condiciones según la habitación disponible.' },
  { q: '¿Cómo solicito una habitación?', a: 'Rellenas la solicitud, verificamos tu perfil y, si encajas, coordinamos la entrada. Sencillo y rápido.' },
];

export default function InquilinosColivingPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ position: 'relative', paddingTop: '140px', paddingBottom: '80px', overflow: 'hidden', minHeight: '520px' }}>
          <Image
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1600&q=80&auto=format&fit=crop"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${COLIVING_BLUE_DARK}e0 0%, ${COLIVING_BLUE}cc 100%)` }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 70% 50%, ${COLIVING_ACCENT}1a 0%, transparent 60%)`, pointerEvents: 'none' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inicio</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Coliving</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: COLIVING_ACCENT, display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Coliving · Para inquilinos</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '20px', maxWidth: '680px' }}>
              Una habitación en Barcelona con todo{' '}
              <span style={{ color: COLIVING_ACCENT }}>ya resuelto</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '540px', lineHeight: 1.7, marginBottom: '40px' }}>
              Habitación equipada, suministros incluidos y una comunidad de convivencia seleccionada. Llegas, dejas la maleta y empiezas a vivir.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#habitaciones" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: COLIVING_BLUE, fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver habitaciones disponibles</a>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Contactar</Link>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div>
                <p style={{ color: COLIVING_BLUE, fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Lo que obtienes</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>Tu espacio privado, una comunidad que funciona</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '24px', fontSize: 'var(--text-base)' }}>Habitación privada con llave, zonas comunes mantenidas y compañeros de piso seleccionados por Virtuo para que la convivencia sea fácil desde el primer día.</p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '32px', fontSize: 'var(--text-base)' }}>Contratos individuales: solo firmas por tu habitación, sin depender del resto de inquilinos.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {[
                    'Habitación amueblada: cama, escritorio, armario y wifi',
                    'Suministros incluidos: luz, agua, gas e internet',
                    'Limpieza de zonas comunes incluida',
                    'Contrato individual, solo firmas por tu habitación',
                    'Atención ante incidencias en menos de 24h',
                    'Sin fianza abusiva ni comisiones ocultas',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLIVING_BLUE} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#habitaciones" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: COLIVING_BLUE, color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver disponibilidad →</a>
              </div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: `0 20px 60px ${COLIVING_BLUE}1f` }}>
                <Image
                  src="/images/coliving01.jpg"
                  alt="Habitación de coliving gestionada por Viviendas Virtuo"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.95)', borderRadius: 'var(--radius-lg)', padding: '12px 16px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 900, color: COLIVING_BLUE, lineHeight: 1 }}>Todo incluido</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>sin sorpresas a fin de mes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARA QUIÉN */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>¿Este coliving es para ti?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '20px' }}>
              {[
                { tipo: 'Estudiante universitario', desc: 'Cerca del campus, precio ajustado, compañeros con quien estudiar y desconectar.' },
                { tipo: 'Profesional joven', desc: 'Sin compromisos largos. Todo incluido para que puedas centrarte en tu trabajo.' },
                { tipo: 'Nómada digital', desc: 'Wifi de alta velocidad, escritorio en habitación y contratos desde 1 mes.' },
                { tipo: 'Recién llegado a Barcelona', desc: 'La forma más fácil de instalarte: llegas con la maleta y ya tienes casa.' },
              ].map((p, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '28px 20px', border: '1px solid var(--color-border)' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: COLIVING_BLUE, marginBottom: '14px' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>{p.tipo}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HABITACIONES */}
        <div id="habitaciones">
          <HabitacionesDestacadas sistema="coliving" />
        </div>

        {/* OTROS SISTEMAS */}
        <section style={{ padding: 'clamp(40px,6vw,80px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', marginBottom: '32px' }}>¿Buscas otro tipo de alojamiento?</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/temporal" style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '28px 24px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', flex: '1 1 280px', maxWidth: '360px' }}>
                <span style={{ fontSize: '2rem', lineHeight: 1 }}>🗓️</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: TEMPORAL_GREEN, margin: 0 }}>Alquiler temporal</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>¿Solo necesitas unas semanas o meses? Estancias flexibles de corta duración.</p>
                <span style={{ marginTop: '4px', fontWeight: 700, fontSize: 'var(--text-sm)', color: TEMPORAL_GREEN }}>Ver temporal →</span>
              </Link>
              <Link href="/vacacional" style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '28px 24px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', flex: '1 1 280px', maxWidth: '360px' }}>
                <span style={{ fontSize: '2rem', lineHeight: 1 }}>🏖️</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: VACACIONAL_ORANGE, margin: 0 }}>Alquiler vacacional</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>¿Vienes de visita o vacaciones? Apartamento completo para ti.</p>
                <span style={{ marginTop: '4px', fontWeight: 700, fontSize: 'var(--text-sm)', color: VACACIONAL_ORANGE }}>Ver vacacional →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FORMULARIO CONTACTO */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container" style={{ maxWidth: '640px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p style={{ color: COLIVING_BLUE, fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Te interesa?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '16px' }}>Solicita información sobre coliving</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.7 }}>Cuéntanos qué buscas y te respondemos en menos de 24h con lo que tenemos disponible ahora mismo.</p>
            </div>
            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: 'clamp(28px,5vw,48px)', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Cuestionario rápido (3 min)',
                  'Te presentamos opciones disponibles',
                  'Respuesta en menos de 24h',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLIVING_BLUE} strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={TALLY_INQUILINO}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: COLIVING_BLUE, color: 'white', fontWeight: 700, fontSize: 'var(--text-base)', padding: '15px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', width: '100%', textAlign: 'center' }}
              >
                Solicitar información →
              </a>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textAlign: 'center', margin: 0 }}>Sin compromiso · Abre en nueva pestaña</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: COLIVING_BLUE, fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>FAQ</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Preguntas frecuentes sobre Coliving</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, i) => (
                <details key={i} name="faq" style={{ background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                  <summary style={{ padding: '20px 24px', cursor: 'pointer', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'white', background: 'linear-gradient(135deg, #033d82 0%, #0453ab 100%)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
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
