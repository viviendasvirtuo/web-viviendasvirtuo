import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Propietarios — Viviendas Virtuo',
  description: 'Rentabiliza tu vivienda en Barcelona sin preocupaciones. Elige entre coliving, alquiler temporal o vacacional. Gestión 100% profesional, ingresos garantizados.',
};

const serviciosBase = [
  { icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z', title: 'Consultoría', desc: 'Analizamos y ejecutamos mejoras estratégicas para incrementar el valor de mercado de tu propiedad.' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Residentes', desc: 'Selección rigurosa de perfiles premium bajo estrictos criterios de solvencia y comportamiento.' },
  { icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8', title: 'Gestión', desc: 'Control total de la documentación, trámites y seguimiento administrativo del activo.' },
  { icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z', title: 'Mantenimiento', desc: 'Supervisión constante, reparaciones inmediatas y proyectos de interiorismo funcional.' },
  { icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-5h2v2h-2zm0-8h2v6h-2z', title: 'Sostenibilidad', desc: 'Implementamos soluciones para mejorar la eficiencia energética y la calidad de vida en la vivienda.' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4', title: 'Seguridad', desc: 'Sistemas de garantía que aseguran el flujo de ingresos y la integridad total del inmueble.' },
];

export default function PropietariosPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{
          background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 60%, #1e5aa8 100%)',
          paddingTop: '140px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 75% 40%, rgba(255,255,255,0.05) 0%, transparent 55%)', pointerEvents: 'none' }} />
          <div className="container">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#90caf9', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Para propietarios</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '24px', maxWidth: '700px' }}>
              Tu vivienda genera ingresos.{' '}
              <span style={{ color: '#90caf9' }}>Nosotros nos encargamos de todo.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '40px' }}>
              Elige el sistema que mejor encaja con tu propiedad y tus objetivos. Virtuo gestiona cada detalle: inquilinos, contratos, cobros e incidencias.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#1a4a8a' }}>
                Solicitar análisis gratuito
              </Link>
              <a href="#sistemas" className="btn btn-lg" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}>
                Ver los 3 sistemas
              </a>
            </div>
          </div>
        </section>

        {/* POR QUÉ VIRTUO — foto + métricas */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'center',
            }}>
              <div>
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Por qué Virtuo</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  La diferencia entre gestionar y preocuparse
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '40px', maxWidth: '48ch' }}>
                  Nos ocupamos de absolutamente todo: inquilinos, contratos, incidencias y cobros. Tú solo recibes la liquidación mensual.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {[
                    { num: 'hasta +40%', label: 'Más rentabilidad vs alquiler tradicional', desc: 'Optimizamos precios y ocupación continuamente para que no pierdas ni un euro.' },
                    { num: '92,5%', label: 'Tasa de ocupación media en nuestras propiedades', desc: 'Publicamos en todas las plataformas relevantes con fotos profesionales y pricing dinámico.' },
                    { num: '< 5 días', label: 'Tiempo medio hasta el primer inquilino', desc: 'Contrato de gestión, selección, incidencias y cobros. Todo sin que muevas un dedo.' },
                  ].map((m, i, arr) => (
                    <div
                      key={m.num}
                      style={{
                        display: 'flex',
                        gap: '20px',
                        alignItems: 'flex-start',
                        padding: '24px 0',
                        borderBottom: i < arr.length - 1 ? '1px solid var(--color-border)' : undefined,
                      }}
                    >
                      <div style={{ flexShrink: 0, minWidth: '90px' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2vw, 2rem)', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1 }}>{m.num}</div>
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '4px' }}>{m.label}</div>
                        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{m.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '36px' }}>
                  <Link href="/contacto" className="btn btn-primary">Solicitar análisis gratuito →</Link>
                </div>
              </div>

              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                aspectRatio: '3/4',
                boxShadow: '0 24px 64px rgba(15,45,94,0.14)',
              }}>
                <Image
                  src="/images/propietarios.jpg"
                  alt="Piso gestionado por Viviendas Virtuo en Barcelona"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.96)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '14px 18px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  backdropFilter: 'blur(8px)',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 900, color: '#1a4a8a', lineHeight: 1 }}>hasta +40%</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '3px', whiteSpace: 'nowrap' }}>más rentabilidad</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE — 6 servicios */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Todo lo que gestionamos por ti</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {serviciosBase.map((item, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" aria-hidden="true">
                    <path d={item.icon} />
                  </svg>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ELIGE TU SISTEMA */}
        <section id="sistemas" style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>3 sistemas</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                ¿Cuál encaja con tu vivienda?
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', maxWidth: '520px', margin: '16px auto 0', lineHeight: 1.7 }}>
                Cada propiedad es única. Te ayudamos a elegir el sistema que mejor se adapta a tu situación y objetivos.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {[
                { bg: 'linear-gradient(135deg, #0f2d5e, #1a4a8a)', badge: 'Coliving', title: 'Alquiler por habitaciones', desc: 'Ideal para viviendas de 3+ habitaciones. Cada habitación tiene su contrato. Más ingresos, más estabilidad.', stat: 'hasta +40%', statLabel: 'vs. alquiler tradicional', href: '#coliving' },
                { bg: 'linear-gradient(135deg, #008f58, #00c47a)', badge: 'Temporal', title: 'Estancias cortas (1–6 meses)', desc: 'Trabajadores, estudiantes y profesionales de paso. Alta rotación gestionada sin esfuerzo tuyo.', stat: 'hasta +35%', statLabel: 'vs. alquiler tradicional', href: '#temporal' },
                { bg: 'linear-gradient(135deg, #7c3a00, #c45e00)', badge: 'Vacacional', title: 'Apartamento completo para turistas', desc: 'La mayor rentabilidad por m². Gestión en Airbnb, Booking y más, con pricing dinámico.', stat: 'hasta +70%', statLabel: 'vs. alquiler tradicional', href: '#vacacional' },
              ].map((s) => (
                <div key={s.href} style={{ background: s.bg, borderRadius: 'var(--radius-xl)', padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '999px', padding: '4px 14px', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'white', letterSpacing: '0.06em', alignSelf: 'flex-start' }}>{s.badge}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-sm)', lineHeight: 1.65, flex: 1 }}>{s.desc}</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, color: 'white' }}>{s.stat}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.7)' }}>{s.statLabel}</div>
                    </div>
                    <a href={s.href} style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 'var(--radius-lg)', padding: '10px 18px', color: 'white', fontSize: 'var(--text-sm)', fontWeight: 600, textDecoration: 'none' }}>
                      Ver más →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECCIÓN COLIVING PARA PROPIETARIOS
        ════════════════════════════════════════════════ */}
        <section id="coliving" style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#f0f4fa', scrollMarginTop: '80px' }}>
          <div className="container">
            {/* Cabecera */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
              <div style={{ width: '4px', height: '56px', background: '#0453ab', borderRadius: '2px', flexShrink: 0 }} />
              <div>
                <p style={{ color: '#0453ab', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Sistema Coliving</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1.1, margin: 0 }}>
                  Alquiler por habitaciones.<br />Más contratos, más ingresos, más estabilidad.
                </h2>
              </div>
            </div>

            {/* Por qué Coliving */}
            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: 'clamp(32px, 5vw, 56px)', marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '28px' }}>¿Por qué elegir el Coliving Viviendas Virtuo?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                {[
                  { stat: 'hasta +40%', label: 'vs alquiler tradicional', desc: 'Cada habitación genera su propio contrato. El conjunto supera con creces el arrendamiento unitario del inmueble.' },
                  { stat: '3–5 hab.', label: 'perfil ideal de vivienda', desc: 'Viviendas de 3 o más habitaciones en Barcelona y área metropolitana. Cuantas más habitaciones, mayor rentabilidad.' },
                  { stat: '100%', label: 'gestión sin intervención tuya', desc: 'Selección de residentes, contratos individuales, incidencias, cobros y mantenimiento. Tú solo recibes la liquidación.' },
                ].map((m, i) => (
                  <div key={i} style={{ padding: '24px', background: '#f8f9fc', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 900, color: '#0453ab', lineHeight: 1 }}>{m.stat}</div>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>{m.label}</div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Qué incluye */}
            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: 'clamp(32px, 5vw, 56px)', marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '28px' }}>¿Cómo gestionamos el Coliving Viviendas Virtuo?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                {serviciosBase.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '20px', background: '#f8f9fc', borderRadius: 'var(--radius-lg)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0453ab" strokeWidth="1.8" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                      <path d={item.icon} />
                    </svg>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '4px' }}>{item.title}</div>
                      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA coliving */}
            <div style={{ background: 'linear-gradient(135deg, #0f2d5e, #0453ab)', borderRadius: 'var(--radius-xl)', padding: 'clamp(32px, 5vw, 48px)', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>¿Listo para multiplicar tus ingresos?</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 900, color: 'white', lineHeight: 1.2, maxWidth: '600px', margin: 0 }}>
                Análisis gratuito de tu propiedad para Coliving. Sin compromiso.
              </h3>
              <Link href="/contacto" style={{ display: 'inline-block', background: 'white', color: '#0453ab', fontWeight: 700, fontSize: 'var(--text-sm)', padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', marginTop: '8px' }}>
                Solicitar análisis Coliving →
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECCIÓN TEMPORAL PARA PROPIETARIOS
        ════════════════════════════════════════════════ */}
        <section id="temporal" style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: 'var(--color-bg)', scrollMarginTop: '80px' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
              <div style={{ width: '4px', height: '56px', background: '#008f58', borderRadius: '2px', flexShrink: 0 }} />
              <div>
                <p style={{ color: '#008f58', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Sistema Temporal</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1.1, margin: 0 }}>
                  Alta rentabilidad con disponibilidad.<br />Tu vivienda, siempre activa.
                </h2>
              </div>
            </div>

            {/* Por qué Temporal */}
            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: 'clamp(32px, 5vw, 56px)', marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '28px' }}>¿Por qué elegir el Alquiler Temporal con Viviendas Virtuo?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                {[
                  { icon: '→', text: 'Maximizamos tus ingresos mediante el alquiler temporal, superando la rentabilidad del modelo tradicional.' },
                  { icon: '→', text: 'Combinamos alta rentabilidad con disponibilidad personal: puedes planificar el uso de tu vivienda cuando lo necesites.' },
                  { icon: '→', text: 'Nuestra red de nómadas digitales y perfiles desplazados garantiza que tu activo esté siempre activo.' },
                  { icon: '→', text: 'Cribado riguroso de residentes solventes para asegurar el cumplimiento total de los pagos mensuales.' },
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '20px', background: '#f0faf6', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(0,143,88,0.12)' }}>
                    <span style={{ color: '#008f58', fontWeight: 900, fontSize: '1.1rem', flexShrink: 0, marginTop: '1px' }}>{p.icon}</span>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{p.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Qué incluye */}
            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: 'clamp(32px, 5vw, 56px)', marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '28px' }}>¿Cómo gestionamos el Alquiler Temporal?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                {serviciosBase.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '20px', background: '#f0faf6', borderRadius: 'var(--radius-lg)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008f58" strokeWidth="1.8" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                      <path d={item.icon} />
                    </svg>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '4px' }}>{item.title}</div>
                      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA temporal */}
            <div style={{ background: 'linear-gradient(135deg, #005c38, #008f58)', borderRadius: 'var(--radius-xl)', padding: 'clamp(32px, 5vw, 48px)', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>¿Tu vivienda puede rendir más?</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 900, color: 'white', lineHeight: 1.2, maxWidth: '600px', margin: 0 }}>
                Te explicamos en detalle cómo funciona el Temporal para tu propiedad.
              </h3>
              <Link href="/contacto" style={{ display: 'inline-block', background: 'white', color: '#008f58', fontWeight: 700, fontSize: 'var(--text-sm)', padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', marginTop: '8px' }}>
                Solicitar análisis Temporal →
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECCIÓN VACACIONAL PARA PROPIETARIOS
        ════════════════════════════════════════════════ */}
        <section id="vacacional" style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#f0f4fa', scrollMarginTop: '80px' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
              <div style={{ width: '4px', height: '56px', background: '#c45e00', borderRadius: '2px', flexShrink: 0 }} />
              <div>
                <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Sistema Vacacional</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1.1, margin: 0 }}>
                  La máxima rentabilidad por m².<br />Tu apartamento, siempre a pleno rendimiento.
                </h2>
              </div>
            </div>

            {/* Por qué Vacacional */}
            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: 'clamp(32px, 5vw, 56px)', marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '28px' }}>¿Por qué elegir el Vacacional con Viviendas Virtuo?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                {[
                  { icon: '→', text: 'El mayor rendimiento posible por metro cuadrado. El alquiler vacacional supera con creces la rentabilidad de cualquier otro modelo.' },
                  { icon: '→', text: 'Gestión completa en Airbnb, Booking.com y otras plataformas con pricing dinámico adaptado a la demanda turística real.' },
                  { icon: '→', text: 'Atención 24/7 a huéspedes, check-in/out gestionado, limpieza profesional y reposición de consumibles incluidos.' },
                  { icon: '→', text: 'Selección rigurosa de huéspedes y sistema de garantías para proteger la integridad total del inmueble.' },
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '20px', background: '#fff8f0', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(196,94,0,0.12)' }}>
                    <span style={{ color: '#c45e00', fontWeight: 900, fontSize: '1.1rem', flexShrink: 0, marginTop: '1px' }}>{p.icon}</span>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{p.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Qué incluye */}
            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', padding: 'clamp(32px, 5vw, 56px)', marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '28px' }}>¿Cómo gestionamos el Vacacional Viviendas Virtuo?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                {serviciosBase.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '20px', background: '#fff8f0', borderRadius: 'var(--radius-lg)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c45e00" strokeWidth="1.8" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                      <path d={item.icon} />
                    </svg>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '4px' }}>{item.title}</div>
                      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA vacacional */}
            <div style={{ background: 'linear-gradient(135deg, #7c3a00, #c45e00)', borderRadius: 'var(--radius-xl)', padding: 'clamp(32px, 5vw, 48px)', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>¿Tienes un apartamento en Barcelona?</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 900, color: 'white', lineHeight: 1.2, maxWidth: '600px', margin: 0 }}>
                Analizamos tu propiedad y te decimos exactamente cuánto puede generar.
              </h3>
              <Link href="/contacto" style={{ display: 'inline-block', background: 'white', color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-sm)', padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', marginTop: '8px' }}>
                Solicitar análisis Vacacional →
              </Link>
            </div>
          </div>
        </section>

        {/* CÓMO EMPEZAMOS */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Cómo empezamos?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                De la primera llamada a los primeros ingresos
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              {[
                { step: '1', title: 'Nos llamas o escribes', desc: 'Cuéntanos tu vivienda y tus objetivos. Sin compromiso.' },
                { step: '2', title: 'Visita y propuesta', desc: 'Visitamos la propiedad y te presentamos una propuesta con rentabilidad estimada.' },
                { step: '3', title: 'Firmamos el acuerdo', desc: 'Contrato de gestión claro y transparente. Tú decides cuándo empezar.' },
                { step: '4', title: 'Empiezas a cobrar', desc: 'Nos ocupamos de todo. Tú recibes tu liquidación mensual puntualmente.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px 16px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-lg)', marginBottom: '20px' }}>{item.step}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 100%)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
              ¿Listo para rentabilizar tu vivienda?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '500px', margin: '0 auto 40px', lineHeight: 1.7 }}>
              Análisis gratuito de tu propiedad. Sin compromiso. En menos de 48 horas tienes una propuesta.
            </p>
            <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#1a4a8a', fontSize: 'var(--text-base)' }}>
              Solicitar análisis gratuito
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
