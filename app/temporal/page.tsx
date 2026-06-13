import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HabitacionesDestacadas from '@/components/HabitacionesDestacadas';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Alquiler Temporal en Barcelona — Viviendas Virtuo',
  description: 'Habitaciones de alquiler temporal en Barcelona. Estancias de corta duración para trabajadores, estudiantes y profesionales. Gestión profesional, entrada fácil.',
};

const TEMPORAL_GREEN = '#008f58';
const TEMPORAL_GREEN_DARK = '#006640';
const TEMPORAL_ACCENT = '#5ecfaa';
const COLIVING_BLUE = '#0453ab';
const VACACIONAL_ORANGE = '#c45e00';

const TALLY_INQUILINO = 'https://tally.so/r/2EaJNe';

export default function TemporalPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ position: 'relative', paddingTop: '140px', paddingBottom: '80px', overflow: 'hidden', minHeight: '520px' }}>
          <Image
            src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1600&q=80&auto=format&fit=crop"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${TEMPORAL_GREEN_DARK}e0 0%, ${TEMPORAL_GREEN}cc 100%)` }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 70% 50%, ${TEMPORAL_ACCENT}1a 0%, transparent 60%)`, pointerEvents: 'none' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inicio</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Alquiler Temporal</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: TEMPORAL_ACCENT, display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Temporal · Para inquilinos</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '20px', maxWidth: '680px' }}>
              Tu habitación en Barcelona{' '}
              <span style={{ color: TEMPORAL_ACCENT }}>el tiempo que necesitas</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '540px', lineHeight: 1.7, marginBottom: '40px' }}>
              Alquiler de corta duración pensado para trabajadores en proyecto, estudiantes de ciclo corto y profesionales en tránsito. Sin compromisos de larga duración.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#habitaciones" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: TEMPORAL_GREEN, fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver habitaciones disponibles</a>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Contactar</Link>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div>
                <p style={{ color: TEMPORAL_GREEN, fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Lo que obtienes</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>Flexibilidad real sin renunciar a la comodidad</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '24px', fontSize: 'var(--text-base)' }}>Habitación lista para entrar, sin obras ni esperas. Contratos adaptados a tu duración real: desde semanas hasta meses, sin pagar por lo que no usas.</p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '32px', fontSize: 'var(--text-base)' }}>Gestión profesional detrás: si hay una incidencia, hay alguien que la resuelve. Sin depender del propietario de turno.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {[
                    'Habitación amueblada y lista para entrar',
                    'Suministros incluidos: luz, agua, gas e internet',
                    'Contratos de corta duración adaptados a tu estancia',
                    'Check-in rápido y sin burocracia innecesaria',
                    'Atención ante incidencias en menos de 24h',
                    'Limpieza de zonas comunes incluida',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={TEMPORAL_GREEN} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#habitaciones" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: TEMPORAL_GREEN, color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver disponibilidad →</a>
              </div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: `0 20px 60px ${TEMPORAL_GREEN}1f` }}>
                <Image
                  src="/images/temporal01.jpg"
                  alt="Habitación de alquiler temporal gestionada por Viviendas Virtuo"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.95)', borderRadius: 'var(--radius-lg)', padding: '12px 16px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 900, color: TEMPORAL_GREEN, lineHeight: 1 }}>Desde 1 mes</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>sin compromisos largos</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARA QUIÉN */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>¿Este alquiler temporal es para ti?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '20px' }}>
              {[
                { tipo: 'Trabajador en proyecto', desc: 'Desplazado por trabajo durante semanas o meses. Necesitas comodidad sin atarte.' },
                { tipo: 'Estudiante de ciclo corto', desc: 'Módulos, prácticas, másters intensivos. Alquiler que dura lo que dura el curso.' },
                { tipo: 'Profesional en tránsito', desc: 'Entre dos ciudades, esperando piso definitivo o en período de prueba laboral.' },
                { tipo: 'Recién llegado a explorar', desc: 'Quieres conocer Barcelona antes de comprometerte con un contrato largo.' },
              ].map((p, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '28px 20px', border: '1px solid var(--color-border)' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: TEMPORAL_GREEN, marginBottom: '14px' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>{p.tipo}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HABITACIONES */}
        <div id="habitaciones">
          <HabitacionesDestacadas sistema="temporal" />
        </div>

        {/* OTROS SISTEMAS */}
        <section style={{ padding: 'clamp(40px,6vw,80px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', marginBottom: '24px' }}>¿Buscas otro tipo de alojamiento?</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/coliving" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: COLIVING_BLUE, color: 'white', borderRadius: 'var(--radius-lg)', padding: '12px 24px', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Ver Coliving →</Link>
              <Link href="/vacacional" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: VACACIONAL_ORANGE, color: 'white', borderRadius: 'var(--radius-lg)', padding: '12px 24px', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Ver Vacacional →</Link>
            </div>
          </div>
        </section>

        {/* FORMULARIO CONTACTO */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container" style={{ maxWidth: '640px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p style={{ color: TEMPORAL_GREEN, fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Te interesa?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '16px' }}>Solicita información sobre alquiler temporal</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.7 }}>Cuéntanos tus fechas y te respondemos en menos de 24h con lo que tenemos disponible ahora mismo.</p>
            </div>
            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: 'clamp(28px,5vw,48px)', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Cuestionario rápido (3 min)',
                  'Te presentamos opciones adaptadas a tus fechas',
                  'Respuesta en menos de 24h',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={TEMPORAL_GREEN} strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={TALLY_INQUILINO}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: TEMPORAL_GREEN, color: 'white', fontWeight: 700, fontSize: 'var(--text-base)', padding: '15px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', width: '100%', textAlign: 'center' }}
              >
                Solicitar información →
              </a>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textAlign: 'center', margin: 0 }}>Sin compromiso · Abre en nueva pestaña</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: `linear-gradient(135deg, ${TEMPORAL_GREEN_DARK}, ${TEMPORAL_GREEN})`, textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>¿Sabes cuándo llegas a Barcelona?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>Dinos tus fechas y te decimos qué tenemos disponible. Respondemos en menos de 2 horas.</p>
            <a href={TALLY_INQUILINO} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: TEMPORAL_GREEN, fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Consultar disponibilidad</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
