import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Propietarios — Viviendas Virtuo',
  description: 'Rentabiliza tu vivienda en Barcelona sin preocupaciones. Elige entre coliving, alquiler temporal o vacacional. Gestión 100% profesional, ingresos garantizados.',
};

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
                    { num: '+30%', label: 'Más rentabilidad vs alquiler tradicional', desc: 'Optimizamos precios y ocupación continuamente para que no pierdas ni un euro.' },
                    { num: '72h', label: 'Tiempo medio hasta primera reserva', desc: 'Publicamos en todas las plataformas relevantes con fotos profesionales.' },
                    { num: '100%', label: 'Gestión sin intervención tuya', desc: 'Contratos, selección de inquilinos, incidencias y cobros. Todo.' },
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
                      <div style={{ flexShrink: 0, minWidth: '72px' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1 }}>{m.num}</div>
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
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 900, color: '#1a4a8a', lineHeight: 1 }}>+30%</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '3px', whiteSpace: 'nowrap' }}>más rentabilidad</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE — 6 beneficios en grid */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Todo lo que gestionamos por ti</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {[
                { icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z', title: 'Ingresos optimizados', desc: 'Analizamos el mercado y ajustamos precios para maximizar tu rentabilidad en cada momento del año.' },
                { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Inquilinos verificados', desc: 'Proceso de selección riguroso: documentación, solvencia económica y referencias previas.' },
                { icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8', title: 'Contratos y legal', desc: 'Redactamos y firmamos todos los contratos. Cumplimiento legal garantizado en cada arrendamiento.' },
                { icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z', title: 'Mantenimiento incluido', desc: 'Gestionamos reparaciones y pequeñas incidencias sin molestar al propietario.' },
                { icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z', title: 'Comunicación directa', desc: 'Informe mensual con ingresos, ocupación y estado de tu vivienda. Siempre informado.' },
                { icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z', title: 'Sin períodos vacíos', desc: 'Buscamos al siguiente inquilino antes de que el actual se vaya. Sin meses sin ingresos.' },
              ].map((item, i) => (
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
                { bg: 'linear-gradient(135deg, #0f2d5e, #1a4a8a)', badge: 'Coliving', title: 'Alquiler por habitaciones', desc: 'Ideal para viviendas de 3+ habitaciones. Cada habitación tiene su contrato. Más ingresos, más estabilidad.', stat: '+40%', statLabel: 'vs. alquiler tradicional', href: '/coliving' },
                { bg: 'linear-gradient(135deg, #008f58, #00c47a)', badge: 'Temporal', title: 'Estancias cortas (1–6 meses)', desc: 'Trabajadores, estudiantes y profesionales de paso. Alta rotación gestionada sin esfuerzo tuyo.', stat: '+35%', statLabel: 'vs. alquiler tradicional', href: '/temporal' },
                { bg: 'linear-gradient(135deg, #7c3a00, #c45e00)', badge: 'Vacacional', title: 'Apartamento completo para turistas', desc: 'La mayor rentabilidad por m². Gestión en Airbnb, Booking y más, con pricing dinámico.', stat: '+70%', statLabel: 'vs. alquiler tradicional', href: '/vacacional' },
              ].map((s) => (
                <div key={s.href} style={{ background: s.bg, borderRadius: 'var(--radius-xl)', padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '999px', padding: '4px 14px', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'white', letterSpacing: '0.06em', alignSelf: 'flex-start' }}>{s.badge}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-sm)', lineHeight: 1.65, flex: 1 }}>{s.desc}</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: 'white' }}>{s.stat}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.7)' }}>{s.statLabel}</div>
                    </div>
                    <Link href={s.href} style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 'var(--radius-lg)', padding: '10px 18px', color: 'white', fontSize: 'var(--text-sm)', fontWeight: 600, textDecoration: 'none' }}>
                      Ver más →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CÓMO EMPEZAMOS */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0f4fa' }}>
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

        {/* CTA */}
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
