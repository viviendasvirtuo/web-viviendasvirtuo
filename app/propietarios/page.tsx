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

        {/* POR QUÉ VIRTUO — con foto */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))',
              gap: 'clamp(var(--space-10), 6vw, var(--space-20))',
              alignItems: 'center',
            }}>
              {/* Métricas + beneficios */}
              <div>
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Por qué Virtuo</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '40px' }}>
                  La diferencia entre gestionar<br />y preocuparse
                </h2>

                {/* 3 métricas clave */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--color-border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', marginBottom: '40px', border: '1px solid var(--color-border)' }}>
                  {[
                    { num: '+30%', label: 'Más rentabilidad vs. alquiler tradicional' },
                    { num: '72h', label: 'Tiempo medio hasta primera reserva' },
                    { num: '100%', label: 'Gestión completa sin intervención tuya' },
                  ].map((m, i) => (
                    <div key={i} style={{ background: 'var(--color-surface)', padding: '24px 16px', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1, marginBottom: '8px' }}>{m.num}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* 3 beneficios */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { title: 'Ingresos optimizados', desc: 'Ajustamos precios en tiempo real según demanda, temporada y competencia para maximizar tu rentabilidad.' },
                    { title: 'Inquilinos verificados', desc: 'Selección rigurosa: documentación, solvencia económica y referencias previas en cada caso.' },
                    { title: 'Sin períodos vacíos', desc: 'Buscamos al siguiente inquilino antes de que el actual se vaya. Sin meses sin ingresos.' },
                  ].map((b, i) => (
                    <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-sm)', flexShrink: 0 }}>{i + 1}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text)', marginBottom: '4px' }}>{b.title}</div>
                        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{b.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '36px' }}>
                  <Link href="/contacto" className="btn btn-primary">Solicitar análisis gratuito</Link>
                  <a href="#sistemas" className="btn btn-ghost">Ver los 3 sistemas</a>
                </div>
              </div>

              {/* Foto real */}
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 20px 60px rgba(15,45,94,0.15)' }}>
                <Image
                  src="/images/propietarios.jpg"
                  alt="Interior de vivienda gestionada por Viviendas Virtuo en Barcelona"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Badge encima de la foto */}
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.95)', borderRadius: 'var(--radius-lg)', padding: '12px 16px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', backdropFilter: 'blur(8px)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 900, color: '#1a4a8a', lineHeight: 1 }}>+30%</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>más rentabilidad</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS COMPLETOS */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Gestión completa</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                Todo lo que hacemos por ti
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {[
                { title: 'Contratos y legal', desc: 'Redactamos y firmamos todos los contratos. Cumplimiento legal garantizado en cada arrendamiento.' },
                { title: 'Mantenimiento incluido', desc: 'Gestionamos reparaciones y pequeñas incidencias sin molestar al propietario.' },
                { title: 'Comunicación directa', desc: 'Informe mensual con ingresos, ocupación y estado de tu vivienda. Siempre informado.' },
                { title: 'Fotografía profesional', desc: 'Reportaje fotográfico incluido para publicar en todas las plataformas con máximo impacto.' },
                { title: 'Publicación multicanal', desc: 'Tu propiedad visible en Airbnb, Booking, Idealista, Habitaclia y más desde el primer día.' },
                { title: 'Sin períodos vacíos', desc: 'Buscamos al siguiente inquilino antes de que el actual se vaya. Sin meses sin ingresos.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '28px 24px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)', marginBottom: '14px' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>{item.title}</h3>
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
                { bg: 'linear-gradient(135deg, #0d3b2e, #1a6b52)', badge: 'Temporal', title: 'Estancias cortas (1–6 meses)', desc: 'Trabajadores, estudiantes y profesionales de paso. Alta rotación gestionada sin esfuerzo tuyo.', stat: '+35%', statLabel: 'vs. alquiler tradicional', href: '/temporal' },
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
