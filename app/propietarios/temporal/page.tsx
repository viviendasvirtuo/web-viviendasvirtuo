import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Temporal para Propietarios — Viviendas Virtuo',
  description: 'Gestión profesional de alquiler temporal en Barcelona. Estancias de 1 a 6 meses para trabajadores y estudiantes. Ocupación continua sin vacíos.',
};

const pasos = [
  {
    num: '01',
    title: 'Análisis del inmueble',
    desc: 'Evaluamos la ubicación, distribución y estado de tu propiedad para confirmar su idoneidad para el alquiler temporal y estimar los ingresos reales.',
  },
  {
    num: '02',
    title: 'Preparación y amueblado',
    desc: 'Nos encargamos de que la vivienda esté lista para recibir inquilinos desde el primer día: limpieza, pequeñas mejoras y equipamiento básico.',
  },
  {
    num: '03',
    title: 'Publicación y captación',
    desc: 'Anunciamos en los portales especializados en alquiler temporal con fotografía profesional y descripción optimizada para el perfil de inquilino correcto.',
  },
  {
    num: '04',
    title: 'Verificación de inquilinos',
    desc: 'Comprobamos identidad, situación laboral o académica y solvencia de cada candidato antes de cualquier contrato. Cero sorpresas.',
  },
  {
    num: '05',
    title: 'Contratos y cobros',
    desc: 'Redactamos y gestionamos los contratos de temporada, los depósitos y los cobros mensuales. Tú recibes la liquidación puntualmente.',
  },
  {
    num: '06',
    title: 'Rotación sin vacíos',
    desc: 'Activamos la siguiente búsqueda antes de que termine la estancia actual. Minimizamos los días vacíos entre inquilinos al máximo.',
  },
];

const perfiles = [
  {
    emoji: '🏗️',
    grupo: 'T1',
    title: 'Trabajador desplazado',
    desc: 'Profesionales en proyecto temporal en Barcelona. Contrato de empresa, alta solvencia y estancia de 1 a 4 meses habitual.',
  },
  {
    emoji: '🎓',
    grupo: 'T2',
    title: 'Estudiante de ciclo corto',
    desc: 'Másters, cursos de postgrado o ciclos formativos de 3 a 6 meses. Perfil joven, cuidadoso y con avalista o beca acreditada.',
  },
  {
    emoji: '🏥',
    grupo: 'T3',
    title: 'Sanitario / Residente',
    desc: 'Médicos, enfermeros y residentes en rotación. Alta puntualidad en pagos y trato excelente al inmueble.',
  },
  {
    emoji: '✈️',
    grupo: 'T4',
    title: 'Expatriado en transición',
    desc: 'Profesional recién llegado a Barcelona que necesita alojamiento mientras busca vivienda definitiva. Solvencia alta y estancias de 2-5 meses.',
  },
];

const ventajas = [
  { icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-11h-2v4l3.5 2.1.8-1.2-2.3-1.4V9z', title: 'Precio superior al alquiler anual', desc: 'Las estancias cortas se pagan por encima del precio de mercado habitual.' },
  { icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z', title: 'Ocupación sin interrupciones', desc: 'Gestionamos la rotación para que no haya días vacíos entre estancias.' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Inquilinos verificados', desc: 'Validamos identidad, solvencia y motivo de la estancia antes de cada contrato.' },
  { icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8', title: 'Contratos de temporada legales', desc: 'Documentación adaptada al alquiler temporal con todas las garantías legales.' },
  { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10', title: 'Check-in y check-out gestionados', desc: 'Nos ocupamos de las entradas, salidas, inventario y limpieza entre estancias.' },
  { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75', title: 'Demanda constante todo el año', desc: 'Barcelona atrae trabajadores y estudiantes los 12 meses. Alta rotación positiva.' },
];

const faqs = [
  {
    q: '¿Qué diferencia hay entre alquiler temporal y vacacional?',
    a: 'El temporal es para estancias de 1 a 11 meses, habitualmente por motivos laborales o de estudios. No necesita licencia turística y se rige por el contrato de temporada. El vacacional es para turismo de corta duración y requiere licencia de apartamento turístico.',
  },
  {
    q: '¿Cuánto tiempo se tarda en encontrar el primer inquilino?',
    a: 'En Barcelona la demanda es muy alta. Con nuestra gestión activa, el tiempo medio entre disponibilidad y primer inquilino es de menos de una semana.',
  },
  {
    q: '¿Qué pasa entre una estancia y otra?',
    a: 'Gestionamos la limpieza, revisión del inventario y reparaciones menores si las hay. El objetivo es tener el piso listo para el siguiente inquilino en menos de 48 horas.',
  },
  {
    q: '¿Puedo usar mi piso entre estancias?',
    a: 'Sí, planificamos la disponibilidad contigo. Si quieres tener el piso libre en determinados períodos, lo tenemos en cuenta en la gestión del calendario.',
  },
  {
    q: '¿Los contratos de temporada son legales?',
    a: 'Completamente. El contrato de arrendamiento de temporada está regulado por la LAU. Virtuo redacta contratos homologados y cumple con todos los requisitos legales vigentes.',
  },
  {
    q: '¿Cuánto cobra Virtuo por gestionar el alquiler temporal?',
    a: 'Trabajamos con una comisión sobre los ingresos generados. Sin cuotas fijas. Te lo detallamos exactamente en el análisis gratuito de tu propiedad.',
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
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#86efb8', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Temporal · Para propietarios</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '24px' }}>
                  Estancias de 1 a 6 meses.<br />
                  <span style={{ color: '#86efb8' }}>Rotación gestionada, cero vacíos.</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '520px', lineHeight: 1.7, marginBottom: '40px' }}>
                  Gestionamos tu vivienda para el alquiler temporal: trabajadores desplazados, estudiantes y profesionales en tránsito. Ingresos superiores al alquiler anual, sin que gestiones nada tú.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#008f58' }}>
                    Análisis gratuito de tu piso
                  </Link>
                  <a href="#como-trabajamos" className="btn btn-lg" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)' }}>
                    Cómo trabajamos →
                  </a>
                </div>
              </div>
              {/* Métricas hero */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { num: '+15–30%', label: 'más ingresos vs alquiler anual tradicional' },
                  { num: '< 7 días', label: 'tiempo medio para cubrir una vacante' },
                  { num: '100%', label: 'contratos legales de temporada gestionados por Virtuo' },
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
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 24px 64px rgba(0,143,88,0.12)' }}>
                <Image
                  src="/images/temporal-sala.jpg"
                  alt="Vivienda de alquiler temporal gestionada por Viviendas Virtuo"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.96)', borderRadius: 'var(--radius-lg)', padding: '14px 20px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 900, color: '#008f58', lineHeight: 1 }}>+15–30%</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '3px' }}>más que el alquiler anual</div>
                </div>
              </div>
              <div>
                <p style={{ color: '#008f58', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Qué es el Temporal Virtuo?</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  Alquiler de temporada con gestión total.
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '20px' }}>
                  El alquiler temporal cubre estancias de 1 a 11 meses para inquilinos con una necesidad concreta: trabajo, estudios o transición. No requiere licencia turística y se rige por contrato de temporada regulado por la LAU.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '32px' }}>
                  Virtuo gestiona toda la operativa: captación, verificación, contratos, cobros y rotación entre estancias. Tú recibes la transferencia mensual sin intervenir en nada.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {['Sin licencia turística', 'Contrato de temporada LAU', 'Gestión 100% incluida'].map((tag) => (
                    <span key={tag} style={{ background: '#f0faf5', border: '1px solid rgba(0,143,88,0.2)', borderRadius: '999px', padding: '6px 16px', fontSize: 'var(--text-xs)', fontWeight: 600, color: '#008f58' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PERFIL DE VIVIENDA ───────────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0faf5' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#008f58', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Tu piso encaja?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Perfil ideal de vivienda para Temporal</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.7 }}>
                El alquiler temporal funciona en una gama amplia de inmuebles. Estos factores maximizan el rendimiento.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
              {[
                { icon: '🛏️', req: '1 o más habitaciones', detail: 'Desde estudios hasta pisos de 3 habitaciones. Más flexibilidad de perfil que el coliving.' },
                { icon: '🚇', req: 'Buena conectividad', detail: 'Cerca de metro, universidades o polígonos industriales. El inquilino prioriza el acceso.' },
                { icon: '🏙️', req: 'Barcelona o área metropolitana', detail: 'Alta demanda de trabajadores y estudiantes los 12 meses del año.' },
                { icon: '🛋️', req: 'Amueblado o amueblable', detail: 'El inquilino temporal necesita entrar y vivir desde el día 1. Virtuo gestiona el equipamiento.' },
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
                <p style={{ color: '#008f58', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Inquilinos Temporales</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  Perfiles con una necesidad concreta y solvencia acreditada.
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '32px' }}>
                  Verificamos identidad, contrato laboral o matrícula, y capacidad de pago antes de aprobar a cualquier candidato.
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
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '3/4', boxShadow: '0 24px 64px rgba(0,143,88,0.1)' }}>
                <Image
                  src="/images/temporal-inquilinos.jpg"
                  alt="Inquilino temporal en piso gestionado por Viviendas Virtuo"
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
                Del análisis inicial a los primeros ingresos, en menos de una semana.
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
                Por qué el temporal Virtuo es diferente
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
              <p style={{ color: '#008f58', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>FAQ</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                Preguntas frecuentes sobre Temporal
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, i) => (
                <details key={i} style={{ background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '0', overflow: 'hidden' }}>
                  <summary style={{ padding: '20px 24px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    {faq.q}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008f58" strokeWidth="2" style={{ flexShrink: 0 }} aria-hidden="true">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div style={{ padding: '0 24px 20px', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ────────────────────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'linear-gradient(135deg, #004d30 0%, #008f58 100%)', textAlign: 'center' }}>
          <div className="container">
            <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>¿Tu piso puede generar más?</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: 'white', marginBottom: '16px', lineHeight: 1.15 }}>
              Análisis gratuito de tu vivienda para Temporal.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'var(--text-lg)', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.7 }}>
              Sin compromiso. Te decimos exactamente cuánto puede generar tu piso en menos de una semana.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#008f58' }}>
                Solicitar análisis gratuito →
              </Link>
              <Link href="/propietarios/coliving" className="btn btn-lg" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)' }}>
                Ver Coliving
              </Link>
              <Link href="/propietarios/vacacional" className="btn btn-lg" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)' }}>
                Ver Vacacional
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
