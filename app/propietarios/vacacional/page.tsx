import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Vacacional para Propietarios — Viviendas Virtuo',
  description: 'Gestión profesional de apartamento turístico en Barcelona. Máxima rentabilidad por noche con gestión integral en Airbnb, Booking y plataformas turísticas.',
};

const pasos = [
  {
    num: '01',
    title: 'Análisis y licencia',
    desc: "Evaluamos el potencial turístico de tu apartamento y verificamos o tramitamos la licencia de Habitatge d'Ús Turístic (HUT) necesaria en Barcelona.",
  },
  {
    num: '02',
    title: 'Preparación del espacio',
    desc: 'Fotografía profesional, home staging si es necesario y equipamiento completo para cumplir con los estándares de las plataformas top.',
  },
  {
    num: '03',
    title: 'Alta en plataformas',
    desc: 'Publicamos en Airbnb, Booking.com y otras plataformas especializadas con listings optimizados en varios idiomas para máxima visibilidad.',
  },
  {
    num: '04',
    title: 'Precios dinámicos',
    desc: 'Ajustamos las tarifas en tiempo real según demanda, eventos, temporada y competencia. Maximizamos el RevPAR de tu apartamento.',
  },
  {
    num: '05',
    title: 'Operativa completa',
    desc: 'Check-in/out (presencial o digital), limpieza entre estancias, reposición de consumibles, atención a huéspedes 24/7 e incidencias.',
  },
  {
    num: '06',
    title: 'Reporting mensual',
    desc: 'Recibes un informe detallado de ocupación, ingresos, valoraciones y transferencia mensual. Total transparencia, cero sorpresas.',
  },
];

const perfiles = [
  {
    emoji: '✈️',
    grupo: 'V1',
    title: 'Turista internacional',
    desc: 'Viajeros de Europa, América y Asia que buscan apartamentos bien ubicados en Barcelona. Estancias de 3 a 10 días, reserva anticipada.',
  },
  {
    emoji: '💼',
    grupo: 'V2',
    title: 'Viajero de negocios',
    desc: 'Ejecutivos y consultores que prefieren apartamento a hotel para estancias de trabajo de 4 a 14 días. Alta exigencia de calidad y conectividad.',
  },
  {
    emoji: '👨‍👩‍👧',
    grupo: 'V3',
    title: 'Familia o grupo',
    desc: 'Grupos familiares o de amigos que viajan juntos y prefieren el espacio de un apartamento completo frente a varias habitaciones de hotel.',
  },
  {
    emoji: '🎉',
    grupo: 'V4',
    title: 'Viajero de evento',
    desc: 'Asistentes a congresos, ferias (Mobile World Congress, Sónar) o eventos deportivos. Alta demanda estacional con precios premium.',
  },
];

const ventajas = [
  { icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-11h-2v4l3.5 2.1.8-1.2-2.3-1.4V9z', title: 'Máxima rentabilidad por noche', desc: 'El precio/noche supera con creces cualquier otro modelo de alquiler.' },
  { icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z', title: 'Precios dinámicos automáticos', desc: 'Tarifas ajustadas en tiempo real según demanda, eventos y competencia.' },
  { icon: 'M5 3l14 9-14 9V3z', title: 'Visibilidad en todas las plataformas', desc: 'Airbnb, Booking.com y canales propios para maximizar la tasa de ocupación.' },
  { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10', title: 'Operativa 100% externalizada', desc: 'Check-in, limpieza, mantenimiento y atención al huésped. Todo sin ti.' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Huéspedes verificados', desc: 'Validación de identidad y gestión de depósitos en cada reserva.' },
  { icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8', title: 'Reporting mensual detallado', desc: 'Informe de ingresos, ocupación, valoraciones y transferencia puntual.' },
];

const faqs = [
  {
    q: '¿Necesito licencia turística para alquilar mi apartamento?',
    a: "Sí. En Barcelona es obligatoria la Habilitación de Habitatge d'Ús Turístic (HUT) para alquilar por noches en plataformas como Airbnb o Booking. Virtuo te asesora sobre el proceso y requisitos actuales.",
  },
  {
    q: '¿Cuánto puedo ganar con mi apartamento?',
    a: 'Depende de la ubicación, tamaño y temporada. En Barcelona, un apartamento bien gestionado puede generar entre un 40% y un 80% más que el alquiler anual equivalente. Te hacemos el cálculo concreto en el análisis gratuito.',
  },
  {
    q: '¿Puedo usar mi apartamento cuando quiera?',
    a: 'Sí. Puedes bloquear fechas para uso personal en cualquier momento. Virtuo gestiona el calendario y optimiza los períodos disponibles para maximizar ingresos en las épocas que lo dejes.',
  },
  {
    q: '¿Qué pasa si un huésped causa daños?',
    a: 'Las plataformas ofrecen seguros de protección para el anfitrión. Además, gestionamos depósitos de garantía y tenemos un proceso documentado de inventario antes y después de cada estancia.',
  },
  {
    q: '¿Cómo se gestionan los check-ins a horas intempestivas?',
    a: 'Ofrecemos check-in digital con caja de llaves inteligente o check-in presencial según preferencia. Nuestro equipo de atención está disponible 24/7 para los huéspedes durante toda la estancia.',
  },
  {
    q: '¿Cuánto cobra Virtuo por la gestión vacacional?',
    a: 'Trabajamos con una comisión sobre los ingresos netos generados. Sin costes fijos ni cuotas de alta. El detalle exacto lo recibes en el análisis gratuito de tu apartamento.',
  },
];

export default function PropietariosVacacionalPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #7a2e00 0%, #c45e00 100%)',
          paddingTop: '140px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div className="container">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fcd3aa', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Vacacional · Para propietarios</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '24px' }}>
                  Tu apartamento en Airbnb y Booking.<br />
                  <span style={{ color: '#fcd3aa' }}>Máxima rentabilidad, cero gestión.</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '520px', lineHeight: 1.7, marginBottom: '40px' }}>
                  Gestionamos tu apartamento turístico de forma integral: publicación en todas las plataformas, precios dinámicos, check-in, limpieza y atención al huésped 24/7. Tú solo recibes la transferencia mensual.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#c45e00' }}>
                    Análisis gratuito de tu apartamento
                  </Link>
                  <a href="#como-trabajamos" className="btn btn-lg" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)' }}>
                    Cómo trabajamos →
                  </a>
                </div>
              </div>
              {/* Métricas hero */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { num: 'hasta +80%', label: 'más rentabilidad vs alquiler anual equivalente' },
                  { num: '24/7', label: 'atención a huéspedes durante toda la estancia' },
                  { num: 'Airbnb + Booking', label: 'presencia en las principales plataformas turísticas' },
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
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 24px 64px rgba(196,94,0,0.12)' }}>
                <Image
                  src="/images/vacacional-sala.jpg"
                  alt="Apartamento turístico gestionado por Viviendas Virtuo en Barcelona"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.96)', borderRadius: 'var(--radius-lg)', padding: '14px 20px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 900, color: '#c45e00', lineHeight: 1 }}>hasta +80%</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '3px' }}>más que el alquiler anual</div>
                </div>
              </div>
              <div>
                <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Qué es el Vacacional Virtuo?</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  Tu apartamento como negocio turístico profesional.
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '20px' }}>
                  El alquiler vacacional consiste en ofrecer tu apartamento completo a turistas y viajeros por noches o días. Es el modelo con mayor potencial de ingresos por metro cuadrado, especialmente en una ciudad como Barcelona.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '32px' }}>
                  Virtuo lo gestiona como un negocio profesional: presencia multicanal, precios dinámicos, operativa diaria y valoraciones de calidad para escalar los ingresos mes a mes.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {['Licencia HUT necesaria', 'Airbnb · Booking · Plataformas propias', 'Gestión 100% incluida'].map((tag) => (
                    <span key={tag} style={{ background: '#fff5ee', border: '1px solid rgba(196,94,0,0.2)', borderRadius: '999px', padding: '6px 16px', fontSize: 'var(--text-xs)', fontWeight: 600, color: '#c45e00' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PERFIL DE VIVIENDA ───────────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff5ee' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Tu apartamento encaja?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Perfil ideal de vivienda para Vacacional</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.7 }}>
                Barcelona es uno de los destinos turísticos más demandados de Europa. Estos factores determinan el rendimiento.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
              {[
                { icon: '🏙️', req: 'Ubicación céntrica o turística', detail: 'Eixample, Gràcia, Born, Barceloneta, Poble Sec. Proximidad a atracciones o transporte.' },
                { icon: '🏠', req: 'Apartamento completo', detail: 'El vacacional funciona con el apartamento íntegro, no por habitaciones. 1 a 4 dormitorios.' },
                { icon: '📋', req: 'Licencia HUT vigente o tramitable', detail: 'Es imprescindible para operar legalmente en Barcelona. Virtuo te asesora en el proceso.' },
                { icon: '🛁', req: 'Equipamiento completo', detail: 'Cocina equipada, ropa de cama, wi-fi y TV. El huésped llega con maleta, no con nada más.' },
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

        {/* ── TIPOS DE HUÉSPEDES ───────────────────────────── */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div>
                <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Perfil de Huésped</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  Viajeros verificados de todo el mundo.
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '32px' }}>
                  Las plataformas verifican identidad y método de pago. Virtuo añade una capa adicional de validación para cada reserva y gestiona los depósitos de garantía.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {perfiles.map((p) => (
                    <div key={p.grupo} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px', background: '#f8f9fc', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(196,94,0,0.08)' }}>
                      <div style={{ fontSize: '1.8rem', lineHeight: 1, flexShrink: 0 }}>{p.emoji}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>{p.title}</span>
                          <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: '#c45e00', background: 'rgba(196,94,0,0.08)', padding: '2px 8px', borderRadius: '999px' }}>{p.grupo}</span>
                        </div>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '3/4', boxShadow: '0 24px 64px rgba(196,94,0,0.1)' }}>
                <Image
                  src="/images/vacacional-huespedes.jpg"
                  alt="Huéspedes en apartamento turístico gestionado por Viviendas Virtuo"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CÓMO TRABAJAMOS ──────────────────────────────── */}
        <section id="como-trabajamos" style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff5ee', scrollMarginTop: '80px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>El proceso</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Cómo gestionamos tu apartamento turístico</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.7 }}>
                Del análisis inicial a las primeras reservas, en menos de dos semanas.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {pasos.map((paso, i) => (
                <div key={paso.num} style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '20px', right: '24px', fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 900, color: 'rgba(196,94,0,0.06)', lineHeight: 1 }}>{paso.num}</div>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: i < 2 ? '#c45e00' : '#fff5ee', border: i < 2 ? 'none' : '2px solid rgba(196,94,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-sm)', color: i < 2 ? 'white' : '#c45e00' }}>{paso.num}</div>
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
              <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Ventajas</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                Por qué el vacacional Virtuo es diferente
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {ventajas.map((v, i) => (
                <div key={i} style={{ background: '#f8f9fc', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(196,94,0,0.08)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff5ee' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>FAQ</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                Preguntas frecuentes sobre Vacacional
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, i) => (
                <details key={i} style={{ background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '0', overflow: 'hidden' }}>
                  <summary style={{ padding: '20px 24px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    {faq.q}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c45e00" strokeWidth="2" style={{ flexShrink: 0 }} aria-hidden="true">
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
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'linear-gradient(135deg, #7a2e00 0%, #c45e00 100%)', textAlign: 'center' }}>
          <div className="container">
            <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>¿Tu apartamento puede generar más?</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: 'white', marginBottom: '16px', lineHeight: 1.15 }}>
              Análisis gratuito de tu apartamento turístico.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'var(--text-lg)', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.7 }}>
              Sin compromiso. Calculamos la rentabilidad real de tu apartamento en Barcelona y área metropolitana.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#c45e00' }}>
                Solicitar análisis gratuito →
              </Link>
              <Link href="/propietarios/coliving" className="btn btn-lg" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)' }}>
                Ver Coliving
              </Link>
              <Link href="/propietarios/temporal" className="btn btn-lg" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)' }}>
                Ver Temporal
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
