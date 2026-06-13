'use client';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const pasos = [
  {
    num: '01',
    title: 'Análisis del inmueble',
    desc: 'Visitamos tu propiedad y evaluamos su potencial real para el modelo coliving: distribución, zonas comunes, ubicación y estado.',
  },
  {
    num: '02',
    title: 'Reforma y adecuación',
    desc: 'Si es necesario, gestionamos pequeñas reformas y redecoramos para maximizar el atractivo y la funcionalidad de cada habitación.',
  },
  {
    num: '03',
    title: 'Marketing profesional',
    desc: 'Fotografía profesional, anuncios optimizados en los principales portales y visibilidad internacional para atraer perfiles premium.',
  },
  {
    num: '04',
    title: 'Selección de residentes',
    desc: 'Filtramos y verificamos cada candidato: solvencia, referencias y compatibilidad de convivencia. Solo entra quien cumple el estándar.',
  },
  {
    num: '05',
    title: 'Gestión integral',
    desc: 'Contratos individuales, cobros mensuales, limpieza de zonas comunes, incidencias y atención al residente. Todo sin que muevas un dedo.',
  },
  {
    num: '06',
    title: 'Supervisión continua',
    desc: 'Seguimiento regular del estado de la vivienda y de la convivencia. Actuamos antes de que los problemas lleguen a ti.',
  },
];

const perfiles = [
  {
    emoji: '💻',
    grupo: 'G2',
    title: 'Nómada digital / Freelance',
    desc: 'Profesionales remotos que buscan un espacio estable, bien conectado y con comunidad. Alta solvencia y perfil internacional.',
  },
  {
    emoji: '👔',
    grupo: 'G5',
    title: 'Profesional joven',
    desc: 'Ingenieros, consultores, residentes sanitarios. Recién incorporados al mercado laboral con contrato y nómina verificada.',
  },
  {
    emoji: '🎨',
    grupo: 'G7',
    title: 'Artista / Creativo',
    desc: 'Músicos, fotógrafos, diseñadores. Perfil estable de media-larga duración con ingresos acreditables.',
  },
  {
    emoji: '🏢',
    grupo: 'G8',
    title: 'Directivo / Consultor senior',
    desc: 'Managers y consultores desplazados temporalmente. Máxima solvencia, exigencia de calidad y respeto al espacio.',
  },
];

const ventajas = [
  { icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-11h-2v4l3.5 2.1.8-1.2-2.3-1.4V9z', title: 'Ingresos desde el primer mes', desc: 'Menos de 5 días de media hasta el primer inquilino.' },
  { icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z', title: 'Hasta +40% más rentabilidad', desc: 'Múltiples contratos por habitación superan el alquiler unitario.' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Seguridad ante impagos', desc: 'Selección rigurosa y garantías de cobro en cada contrato.' },
  { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75', title: '92,5% de ocupación media', desc: 'Nuestras propiedades rara vez están vacías. Gestionamos la rotación.' },
  { icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8', title: 'Cero gestión para ti', desc: 'Contratos, cobros, incidencias y mantenimiento. Todo gestionado.' },
  { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10', title: 'Disponibilidad flexible', desc: 'Puedes planificar períodos de uso personal de tu propiedad.' },
];

const faqs = [
  {
    q: '¿Qué diferencia hay entre alquiler por habitaciones y coliving?',
    a: 'El alquiler por habitaciones es el modelo base: cada habitación tiene su contrato independiente. El coliving añade una capa de comunidad gestionada: perfiles compatibles, zonas comunes cuidadas y convivencia supervisada. Virtuo gestiona ambos bajo el mismo servicio.',
  },
  {
    q: '¿Qué tipo de piso es el más adecuado?',
    a: 'Viviendas de 4 o más habitaciones en las principales capitales y nodos de alta rentabilidad. Cuantas más habitaciones independientes, mayor es la rentabilidad. Lo ideal: 2 baños completos y buena conexión de transporte.',
  },
  {
    q: '¿Quién selecciona a los inquilinos?',
    a: 'Nosotros completamente. Verificamos solvencia, referencias laborales y compatibilidad de convivencia antes de aprobar cualquier candidato.',
  },
  {
    q: '¿Cómo se gestionan los contratos y cobros?',
    a: 'Cada habitación tiene su propio contrato individual. Gestionamos los cobros y te transferimos la liquidación mensual puntualmente.',
  },
  {
    q: '¿Tengo que ocuparme del mantenimiento?',
    a: 'No. Gestionamos incidencias, reparaciones y limpieza de zonas comunes. Tú solo recibes el resumen mensual.',
  },
  {
    q: '¿Puedo recuperar mi piso en algún momento?',
    a: 'Sí. Trabajamos con plazos acordados y siempre con transparencia. Podemos planificar períodos de disponibilidad personal.',
  },
  {
    q: '¿Cuánto cuesta el servicio?',
    a: 'Trabajamos con una comisión sobre los ingresos generados. Sin cuotas fijas ni sorpresas. Te lo detallamos en el análisis gratuito.',
  },
];

export default function PropietariosColivingPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #0f2d5e 0%, #0453ab 100%)',
          paddingTop: '140px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div className="container">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#90caf9', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Coliving · Para propietarios</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '24px' }}>
                  Alquiler por habitaciones.<br />
                  <span style={{ color: '#90caf9' }}>Más contratos, más ingresos.</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '520px', lineHeight: 1.7, marginBottom: '40px' }}>
                  Gestionamos tu vivienda bajo el modelo coliving: selección de residentes premium, contratos individuales por habitación y gestión completa sin que muevas un dedo.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#0453ab' }}>
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
                  { num: 'hasta +40%', label: 'más rentabilidad vs alquiler tradicional' },
                  { num: '92,5%', label: 'tasa de ocupación media en nuestras propiedades' },
                  { num: '< 5 días', label: 'tiempo medio hasta el primer residente' },
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

        {/* ── QUÉ ES EL COLIVING VIRTUO ────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 24px 64px rgba(4,83,171,0.12)' }}>
                <Image
                  src="/images/coliving-sala.jpg"
                  alt="Sala de estar de un piso coliving gestionado por Viviendas Virtuo"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.96)', borderRadius: 'var(--radius-lg)', padding: '14px 20px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 900, color: '#0453ab', lineHeight: 1 }}>hasta +40%</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '3px' }}>más que el alquiler tradicional</div>
                </div>
              </div>
              <div>
                <p style={{ color: '#0453ab', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Qué es el Coliving Virtuo?</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  Un piso, varias habitaciones, múltiples ingresos.
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '20px' }}>
                  El coliving es el modelo de alquiler por habitaciones con gestión profesional. Cada habitación tiene su propio contrato independiente, lo que significa que el conjunto de tu vivienda genera mucho más que si la alquilaras entera a una sola familia.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '32px' }}>
                  Virtuo se ocupa de todo: desde preparar el espacio hasta seleccionar residentes compatibles, gestionar cobros e incidencias. Tú solo recibes la liquidación mensual.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {['4+ habitaciones', 'Principales capitales', 'Gestión 100% incluida'].map((tag) => (
                    <span key={tag} style={{ background: '#f0f4fa', border: '1px solid rgba(4,83,171,0.15)', borderRadius: '999px', padding: '6px 16px', fontSize: 'var(--text-xs)', fontWeight: 600, color: '#0453ab' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── REQUISITOS DEL PISO ──────────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#0453ab', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Tu piso encaja?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>¿Cómo debe ser tu vivienda?</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.7 }}>
                Estos son los criterios que maximizan la rentabilidad en coliving.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '720px', margin: '0 auto' }}>
              {[
                { icon: '🏙️', req: 'Principales capitales', detail: 'Presencia en principales capitales y nodos de alta rentabilidad.' },
                { icon: '🛏️', req: 'Mínimo 4 dormitorios', detail: 'Cada habitación independiente es un contrato adicional y más ingresos.' },
                { icon: '🚿', req: 'Mínimo 2 baños completos', detail: 'La ratio baño/habitación afecta directamente al precio por habitación.' },
              ].map((item) => (
                <div key={item.req} style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.4rem', lineHeight: 1 }}>{item.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text)' }}>{item.req}</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PERFILES DE RESIDENTES ───────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div>
                <p style={{ color: '#0453ab', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Residentes Premium</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  Solo entran perfiles verificados y solventes.
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '32px' }}>
                  Validamos solvencia económica, referencias laborales y compatibilidad de convivencia. Ningún residente entra sin pasar nuestro proceso de selección.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {perfiles.map((p) => (
                    <div key={p.grupo} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px', background: '#f8f9fc', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(4,83,171,0.08)' }}>
                      <div style={{ fontSize: '1.8rem', lineHeight: 1, flexShrink: 0 }}>{p.emoji}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>{p.title}</span>
                          <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: '#0453ab', background: 'rgba(4,83,171,0.08)', padding: '2px 8px', borderRadius: '999px' }}>{p.grupo}</span>
                        </div>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '3/4', boxShadow: '0 24px 64px rgba(4,83,171,0.1)' }}>
                <Image
                  src="/images/coliving-residentes.jpg"
                  alt="Residentes en un piso coliving gestionado por Viviendas Virtuo"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CÓMO TRABAJAMOS ──────────────────────────────── */}
        <section id="como-trabajamos" style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0f4fa', scrollMarginTop: '80px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: '#0453ab', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>El proceso</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Cómo gestionamos tu coliving</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.7 }}>
                De la primera visita a los primeros ingresos, en menos de 5 días.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {pasos.map((paso, i) => (
                <div key={paso.num} style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '20px', right: '24px', fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 900, color: 'rgba(4,83,171,0.06)', lineHeight: 1 }}>{paso.num}</div>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: i < 2 ? '#0453ab' : '#f0f4fa', border: i < 2 ? 'none' : '2px solid rgba(4,83,171,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-sm)', color: i < 2 ? 'white' : '#0453ab' }}>{paso.num}</div>
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
              <p style={{ color: '#0453ab', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Ventajas</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                Por qué el coliving Virtuo es diferente
              </h2>
            </div>
            <div className="ventajas-grid">
              {ventajas.map((v, i) => (
                <div key={i} style={{ background: '#f8f9fc', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(4,83,171,0.08)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0453ab" strokeWidth="1.8" aria-hidden="true">
                    <path d={v.icon} />
                  </svg>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>{v.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .ventajas-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
            @media (max-width: 767px) {
              .ventajas-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0f4fa' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#0453ab', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>FAQ</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                Preguntas frecuentes sobre Coliving
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, i) => (
                <details key={i} style={{ background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '0', overflow: 'hidden' }}>
                  <summary style={{ padding: '20px 24px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    {faq.q}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0453ab" strokeWidth="2" style={{ flexShrink: 0 }} aria-hidden="true">
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
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'linear-gradient(135deg, #0f2d5e 0%, #0453ab 100%)', textAlign: 'center' }}>
          <div className="container">
            <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>¿Tu piso puede rendir más?</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: 'white', marginBottom: '16px', lineHeight: 1.15 }}>
              Análisis gratuito de tu vivienda para Coliving.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'var(--text-lg)', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.7 }}>
              Sin compromiso. Te decimos exactamente cuánto puede generar tu piso en menos de 5 días.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#0453ab' }}>
                Solicitar análisis gratuito →
              </Link>
              <Link href="/para-propietarios/temporal" className="btn btn-lg" style={{ border: '1.5px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.08)', color: '#008f58' }}>
                Ver Temporal
              </Link>
              <Link href="/para-propietarios/vacacional" className="btn btn-lg" style={{ border: '1.5px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.08)', color: '#c45e00' }}>
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
