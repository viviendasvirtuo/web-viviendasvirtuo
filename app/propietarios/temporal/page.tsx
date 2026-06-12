import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Alquiler Temporal para Propietarios — Viviendas Virtuo',
  description: 'Rentabiliza tu piso con alquiler temporal en Barcelona. Estancias de corta duración, rotación gestionada, sin vacíos ni preocupaciones.',
};

const pasos = [
  {
    num: '01',
    title: 'Análisis de la propiedad',
    desc: 'Evaluamos tu piso para determinar su adecuación al modelo temporal: ubicación, distribución, conectividad y potencial de precio.',
  },
  {
    num: '02',
    title: 'Preparación y equipamiento',
    desc: 'Si es necesario, adecuamos el espacio con mobiliario funcional y equipamiento básico para hacer la estancia autoestable.',
  },
  {
    num: '03',
    title: 'Publicación optimizada',
    desc: 'Creamos anuncios en portales especializados de alquiler temporal con fotografía profesional y copy orientado al perfil objetivo.',
  },
  {
    num: '04',
    title: 'Selección de inquilinos',
    desc: 'Verificamos solvencia, motivo de estancia y referencias. Solo perfiles con propósito claro y capacidad de pago acreditada.',
  },
  {
    num: '05',
    title: 'Gestión de entradas y salidas',
    desc: 'Check-in, check-out, inventario del estado del piso y limpieza entre estancias. Todo coordinado sin que tú intervengas.',
  },
  {
    num: '06',
    title: 'Liquidación mensual',
    desc: 'Recibes un resumen de ingresos y gastos cada mes. Transparencia total sobre el rendimiento de tu propiedad.',
  },
];

const perfiles = [
  {
    emoji: '👷',
    grupo: 'T1',
    title: 'Trabajador desplazado',
    desc: 'Profesionales enviados por su empresa a proyectos en Barcelona. Pagan puntual, cuidan el piso y se quedan semanas o meses.',
  },
  {
    emoji: '🎓',
    grupo: 'T2',
    title: 'Estudiante de ciclo corto',
    desc: 'Másteres, cursos intensivos, prácticas. Jóvenes organizados con beca o apoyo familiar demostrable.',
  },
  {
    emoji: '🏥',
    grupo: 'T3',
    title: 'Sanitario en rotación',
    desc: 'Médicos, enfermeros y residentes en rotaciones hospitalarias. Perfil muy estable, contratos de empresa o institución pública.',
  },
  {
    emoji: '🌍',
    grupo: 'T4',
    title: 'Expatriado en proceso de instalación',
    desc: 'Profesionales internacionales recién llegados buscando un primer alojamiento estable mientras buscan piso definitivo.',
  },
];

const ventajas = [
  { icon: 'M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', title: 'Precio por encima del mercado', desc: 'Las estancias cortas permiten tarifas más altas que el alquiler tradicional anual.' },
  { icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z', title: 'Ocupación sin vacíos', desc: 'Gestionamos la rotación para que cada salida sea seguida inmediatamente de una nueva entrada.' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Perfiles verificados y seguros', desc: 'Cada inquilino pasa por nuestro proceso de verificación antes de acceder al piso.' },
  { icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z', title: 'Cobro garantizado', desc: 'Cobramos por adelantado y gestionamos cualquier incidencia de pago antes de que llegue a ti.' },
  { icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8', title: 'Contratos legales por estancia', desc: 'Cada estancia tiene su contrato de arrendamiento temporal en regla con la ley vigente.' },
  { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10', title: 'Piso siempre en perfectas condiciones', desc: 'Limpieza profesional entre estancias e inventario del estado. Tu propiedad no se desgasta.' },
];

const faqs = [
  {
    q: '¿Qué es el alquiler temporal exactamente?',
    a: 'Es el arrendamiento de una vivienda por períodos de entre 1 semana y varios meses, con finalidad no turística (trabajo, estudios, traslado). Se rige por el Código Civil, no por la LAU ni por la normativa de apartamentos turísticos.',
  },
  {
    q: '¿Qué tipo de piso es el más adecuado para temporal?',
    a: 'Cualquier piso bien ubicado en Barcelona o área metropolitana, preferiblemente cerca de hospitales, universidades o zonas empresariales. Tanto pisos completos como habitaciones individuales.',
  },
  {
    q: '¿Puedo recuperar el piso cuando quiera?',
    a: 'Sí. Al tratarse de contratos cortos, la disponibilidad de tu propiedad es mucho más flexible que en un alquiler tradicional. Podemos planificar ventanas de uso personal.',
  },
  {
    q: '¿Cuánto tiempo entre un inquilino y otro?',
    a: 'Prácticamente ninguno. Gestionamos la captación del siguiente inquilino antes de que el actual termine su estancia. Nuestro objetivo es ocupación continua.',
  },
  {
    q: '¿Qué pasa si el inquilino no cuida el piso?',
    a: 'Realizamos un inventario de estado en cada entrada y salida. Cualquier desperfecto se documenta y se gestiona antes de que salgan las llaves de nuestras manos.',
  },
  {
    q: '¿Necesito licencia turística?',
    a: 'No. El alquiler temporal no es alquiler turístico. No se necesita ninguna licencia especial, lo que elimina una de las principales barreras de entrada para propietarios.',
  },
  {
    q: '¿Cuánto cuesta el servicio?',
    a: 'Trabajamos con una comisión sobre los ingresos generados. Sin cuotas fijas. Te lo detallamos en el análisis gratuito de tu propiedad.',
  },
];

export default function PropietariosTemporalPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #004d30 0%, #008f58 100%)',
          paddingTop: '140px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div className="container">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#86efac', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Temporal · Para propietarios</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '24px' }}>
                  Ingresos continuos.<br />
                  <span style={{ color: '#86efac' }}>Ocupación flexible, sin vacíos.</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '520px', lineHeight: 1.7, marginBottom: '40px' }}>
                  Gestionamos tu vivienda para estancias de corta duración: trabajadores desplazados, estudiantes y profesionales de paso. Mayor precio por noche, rotación gestionada y piso siempre ocupado.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#008f58' }}>
                    Analizar mi propiedad para temporal
                  </Link>
                  <a href="#como-trabajamos" className="btn btn-lg" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)' }}>
                    Cómo trabajamos →
                  </a>
                </div>
              </div>
              {/* Métricas hero */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { num: '+25%', label: 'precio vs alquiler anual por el mismo espacio' },
                  { num: '< 7 días', label: 'tiempo medio entre una estancia y la siguiente' },
                  { num: '0 licencias', label: 'no necesitas licencia turística para alquiler temporal' },
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

        {/* ── QUÉ ES EL TEMPORAL VIRTUO ────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 24px 64px rgba(0,143,88,0.12)', background: '#e8f5e9' }}>
                <Image
                  src="/images/temporal-habitacion.jpg"
                  alt="Habitación para alquiler temporal gestionada por Viviendas Virtuo"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.96)', borderRadius: 'var(--radius-lg)', padding: '14px 20px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 900, color: '#008f58', lineHeight: 1 }}>sin vacíos</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '3px' }}>ocupación continua garantizada</div>
                </div>
              </div>
              <div>
                <p style={{ color: '#008f58', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Qué es el Temporal Virtuo?</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  Más rentabilidad que el alquiler anual, más estabilidad que el turístico.
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '20px' }}>
                  El alquiler temporal cubre la franja entre el alquiler anual (bajo precio, baja flexibilidad) y el vacacional (alta gestión, alta incertidumbre). Estancias de semanas a meses con contratos individuales por período.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '32px' }}>
                  Virtuo gestiona toda la operativa: captación, selección, contratos, check-in, check-out y limpieza. Tu propiedad rinde más sin que inviertas tiempo ni energía.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {['Pisos y habitaciones', 'Barcelona y área metropolitana', 'Sin licencia turística'].map((tag) => (
                    <span key={tag} style={{ background: '#f0faf5', border: '1px solid rgba(0,143,88,0.15)', borderRadius: '999px', padding: '6px 16px', fontSize: 'var(--text-xs)', fontWeight: 600, color: '#008f58' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PERFIL DE PROPIEDAD ──────────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0faf5' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#008f58', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Tu piso encaja?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Perfil ideal de vivienda para Temporal</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.7 }}>
                El modelo temporal funciona especialmente bien cerca de centros de trabajo, hospitales y universidades.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
              {[
                { icon: '📍', req: 'Ubicación estratégica', detail: 'Cerca de hospitales, campus universitarios, polígonos industriales o distritos de oficinas.' },
                { icon: '🛏️', req: '1 a 4 habitaciones', detail: 'Tanto pisos completos como habitaciones individuales con su propio acceso.' },
                { icon: '🪑', req: 'Mobiliario funcional', detail: 'Cama, armario, escritorio. No necesitas decoración premium, sí funcionalidad básica.' },
                { icon: '🚇', req: 'Buena conexión de transporte', detail: 'Metro, bus o cercanías a menos de 10 min a pie. Es el criterio número uno del perfil temporal.' },
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

        {/* ── PERFILES DE INQUILINOS ───────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div>
                <p style={{ color: '#008f58', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Inquilinos de paso</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  Perfiles con propósito claro y capacidad de pago verificada.
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '32px' }}>
                  El alquiler temporal atrae perfiles con una necesidad concreta: están en Barcelona por una razón específica, pagan puntual y cuidan el espacio porque lo necesitan.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {perfiles.map((p) => (
                    <div key={p.grupo} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px', background: '#f8f9fc', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(0,143,88,0.08)' }}>
                      <div style={{ fontSize: '1.8rem', lineHeight: 1, flexShrink: 0 }}>{p.emoji}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>{p.title}</span>
                          <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: '#008f58', background: 'rgba(0,143,88,0.08)', padding: '2px 8px', borderRadius: '999px' }}>{p.grupo}</span>
                        </div>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '3/4', boxShadow: '0 24px 64px rgba(0,143,88,0.1)', background: '#e8f5e9' }}>
                <Image
                  src="/images/temporal-inquilino.jpg"
                  alt="Inquilino temporal trabajando en piso gestionado por Viviendas Virtuo"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CÓMO TRABAJAMOS ──────────────────────────────── */}
        <section id="como-trabajamos" style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0faf5', scrollMarginTop: '80px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: '#008f58', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>El proceso</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Cómo gestionamos tu alquiler temporal</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.7 }}>
                De la primera consulta a los primeros ingresos, en menos de 2 semanas.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {pasos.map((paso, i) => (
                <div key={paso.num} style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '20px', right: '24px', fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 900, color: 'rgba(0,143,88,0.06)', lineHeight: 1 }}>{paso.num}</div>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: i < 2 ? '#008f58' : '#f0faf5', border: i < 2 ? 'none' : '2px solid rgba(0,143,88,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-sm)', color: i < 2 ? 'white' : '#008f58' }}>{paso.num}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>{paso.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{paso.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VENTAJAS ─────────────────────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#008f58', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Ventajas</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                Por qué elegir el modelo temporal con Virtuo
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {ventajas.map((v, i) => (
                <div key={i} style={{ background: '#f8f9fc', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(0,143,88,0.08)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008f58" strokeWidth="1.8" aria-hidden="true">
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
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0faf5' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#008f58', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Preguntas frecuentes</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Todo lo que necesitas saber</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, i) => (
                <details key={i} style={{ background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                  <summary style={{ padding: '20px 24px', cursor: 'pointer', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    {faq.q}
                    <span style={{ flexShrink: 0, color: '#008f58', fontSize: '1.25rem', fontWeight: 400 }}>+</span>
                  </summary>
                  <p style={{ padding: '0 24px 20px', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ────────────────────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'linear-gradient(135deg, #004d30 0%, #008f58 100%)', textAlign: 'center' }}>
          <div className="container">
            <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>¿Listo para empezar?</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
              Analizamos tu propiedad gratis y sin compromiso.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              Cuéntanos tu caso y te decimos en 24h si el modelo temporal es el más rentable para tu piso.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: '#008f58', fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Solicitar análisis gratuito</Link>
              <Link href="/propietarios" style={{ display: 'inline-flex', alignItems: 'center', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver otros sistemas</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
