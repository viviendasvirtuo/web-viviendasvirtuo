import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alquiler Vacacional — Viviendas Virtuo',
  description: 'Apartamento completo para turismo en Barcelona. Máxima rentabilidad con gestión profesional: Airbnb, Booking, check-in automático y limpieza entre estancias.',
};

export default function VacacionalPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO — tono cálido dorado/naranja para diferenciarlo */}
        <section style={{
          background: 'linear-gradient(135deg, #7c3a00 0%, #c45e00 50%, #e07010 100%)',
          paddingTop: '140px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.05) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div className="container">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffcc80', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Sistema Vacacional</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '24px',
              maxWidth: '700px',
            }}>
              Tu apartamento completo,{' '}
              <span style={{ color: '#ffe0b2' }}>máxima rentabilidad</span>
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: 'var(--text-lg)',
              maxWidth: '560px',
              lineHeight: 1.7,
              marginBottom: '40px',
            }}>
              Gestionamos tu piso completo en las principales plataformas turísticas. Pricing dinámico, check-in automático, limpieza profesional y atención al huésped 24/7.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#c45e00' }}>
                Quiero más información
              </Link>
              <Link href="/propietarios" className="btn btn-lg" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}>
                Ver todos los sistemas
              </Link>
            </div>
          </div>
        </section>

        {/* QUÉ ES */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'center' }}>
              <div>
                <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Qué es el alquiler vacacional?</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  El sistema con mayor rentabilidad por metro cuadrado
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '16px' }}>
                  El alquiler vacacional consiste en ofrecer tu apartamento completo a turistas y viajeros por noches o semanas. Con Barcelona como destino top en Europa, la demanda es constante durante todo el año.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75 }}>
                  Virtuo gestiona tu propiedad en Airbnb, Booking.com y otras plataformas, optimizando precios en tiempo real y atendiendo a los huéspedes desde la reserva hasta el check-out.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { num: '+70%', label: 'más rentabilidad vs. alquiler tradicional' },
                  { num: '24/7', label: 'atención al huésped incluida' },
                  { num: '4.8★', label: 'valoración media de nuestros apartamentos' },
                  { num: '3', label: 'plataformas gestionadas simultáneamente' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: i % 2 === 0 ? '#c45e00' : 'white',
                    border: i % 2 !== 0 ? '1px solid var(--color-border)' : 'none',
                    borderRadius: 'var(--radius-xl)',
                    padding: '28px 20px',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: i % 2 === 0 ? 'white' : '#c45e00', marginBottom: '8px' }}>{stat.num}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: i % 2 === 0 ? 'rgba(255,255,255,0.8)' : 'var(--color-text-muted)', lineHeight: 1.4 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LO QUE INCLUYE */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff8f0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Servicio completo</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                Todo lo que gestionamos por ti
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {[
                { icon: '📸', title: 'Fotografía profesional', desc: 'Sesión de fotos para destacar tu apartamento en todas las plataformas.' },
                { icon: '📊', title: 'Pricing dinámico', desc: 'Ajustamos el precio cada día según la demanda, eventos y temporada para maximizar ingresos.' },
                { icon: '🔑', title: 'Check-in automático', desc: 'Cerradura inteligente o caja de llaves. Los huéspedes entran solos, sin coordinación manual.' },
                { icon: '🧹', title: 'Limpieza entre estancias', desc: 'Equipo profesional de limpieza y reposición de amenities tras cada salida.' },
                { icon: '💬', title: 'Atención al huésped', desc: 'Respondemos a todos los mensajes y resolvemos cualquier incidencia 24/7.' },
                { icon: '📈', title: 'Informe mensual', desc: 'Resumen de ocupación, ingresos y valoraciones para que veas el rendimiento en tiempo real.' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'white',
                  borderRadius: 'var(--radius-xl)',
                  padding: '28px 24px',
                  border: '1px solid rgba(196,94,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}>
                  <span style={{ fontSize: '1.75rem' }}>{item.icon}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REQUISITOS */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'start' }}>
              <div>
                <p style={{ color: '#c45e00', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Requisitos</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  ¿Tu apartamento está listo para el vacacional?
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75 }}>
                  El alquiler vacacional requiere licencia turística en vigor. Si no la tienes, te asesoramos sobre cómo obtenerla o valoramos si alguno de nuestros otros sistemas se adapta mejor.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { ok: true, text: 'Apartamento completo (no habitaciones sueltas)' },
                  { ok: true, text: 'Licencia turística en vigor o en trámite' },
                  { ok: true, text: 'Ubicación en zona turística o bien comunicada' },
                  { ok: true, text: 'Mínimo 1 habitación + salón o estudio amplio' },
                  { ok: false, text: 'No es necesario que esté amueblado — lo preparamos nosotros' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '18px 20px',
                  }}>
                    <span style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: item.ok ? '#c45e00' : '#e0e0e0',
                      color: item.ok ? 'white' : '#888',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '13px', flexShrink: 0, marginTop: '1px',
                    }}>{item.ok ? '✓' : 'ℹ'}</span>
                    <p style={{ color: 'var(--color-text)', fontSize: 'var(--text-sm)', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{
          padding: 'clamp(60px, 8vw, 100px) 0',
          background: 'linear-gradient(135deg, #7c3a00 0%, #c45e00 100%)',
          textAlign: 'center',
        }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
              ¿Listo para sacar el máximo a tu apartamento?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
              Analízamos tu propiedad gratis y te decimos cuánto puedes ganar.
            </p>
            <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#c45e00', fontSize: 'var(--text-base)' }}>
              Solicitar análisis gratuito
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
