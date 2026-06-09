import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coliving — Viviendas Virtuo',
  description: 'Alquiler por habitaciones a medio y largo plazo. Gestión completa, inquilinos verificados y rentabilidad estable para tu vivienda en Barcelona.',
};

export default function ColivingPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{
          background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 50%, #1e5aa8 100%)',
          paddingTop: '140px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div className="container">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4fc3f7', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Sistema Coliving</span>
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
              Alquiler estable por habitaciones,{' '}
              <span style={{ color: '#90caf9' }}>sin complicaciones</span>
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.78)',
              fontSize: 'var(--text-lg)',
              maxWidth: '560px',
              lineHeight: 1.7,
              marginBottom: '40px',
            }}>
              Tu vivienda dividida en habitaciones individuales para arrendatarios de media y larga estancia. Inquilinos verificados, contratos gestionados, pagos garantizados.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#1a4a8a' }}>
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
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Qué es el coliving?</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  Una vivienda, varios inquilinos, máxima rentabilidad
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '16px' }}>
                  El modelo coliving consiste en alquilar cada habitación de tu vivienda de forma independiente. Cada habitación tiene su propio contrato de arrendamiento, lo que multiplica los ingresos respecto al alquiler tradicional.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75 }}>
                  Virtuo se encarga de seleccionar y verificar a cada inquilino, gestionar los contratos, cobrar las rentas y mantener las zonas comunes en perfecto estado.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { num: '+40%', label: 'más rentabilidad vs. alquiler tradicional' },
                  { num: '0', label: 'gestiones para el propietario' },
                  { num: '100%', label: 'ocupación media en nuestras viviendas' },
                  { num: '<48h', label: 'para cubrir una habitación vacía' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: i % 2 === 0 ? 'var(--color-primary)' : 'white',
                    border: i % 2 !== 0 ? '1px solid var(--color-border)' : 'none',
                    borderRadius: 'var(--radius-xl)',
                    padding: '28px 20px',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: i % 2 === 0 ? 'white' : 'var(--color-primary)', marginBottom: '8px' }}>{stat.num}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: i % 2 === 0 ? 'rgba(255,255,255,0.8)' : 'var(--color-text-muted)', lineHeight: 1.4 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>El proceso</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                De tu vivienda vacía a ingresos en 7 días
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
              {[
                { step: '01', title: 'Visita gratuita', desc: 'Evaluamos tu vivienda y te presentamos un plan personalizado con la rentabilidad estimada.' },
                { step: '02', title: 'Preparación', desc: 'Adaptamos y equipamos las habitaciones con todo lo necesario para maximizar el atractivo.' },
                { step: '03', title: 'Publicación', desc: 'Publicamos en los principales portales y seleccionamos a los mejores candidatos para ti.' },
                { step: '04', title: 'Gestión total', desc: 'Nos ocupamos de contratos, cobros, incidencias y mantenimiento. Tú solo recibes tu pago.' },
              ].map((item) => (
                <div key={item.step} style={{
                  background: 'white',
                  borderRadius: 'var(--radius-xl)',
                  padding: '32px 24px',
                  border: '1px solid var(--color-border)',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: '-10px', right: '-10px',
                    fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 900,
                    color: 'rgba(26,74,138,0.06)', lineHeight: 1, pointerEvents: 'none',
                  }}>{item.step}</div>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: 'var(--radius-md)',
                    background: 'var(--color-primary)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-sm)',
                    marginBottom: '16px',
                  }}>{item.step}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARA QUIÉN */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Es para ti?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                El coliving funciona bien si...
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
              {[
                'Tu vivienda tiene 3 o más habitaciones',
                'Quieres rentabilidad superior al alquiler tradicional',
                'No tienes tiempo de gestionar a múltiples inquilinos',
                'Buscas ingresos estables a largo plazo',
                'Tu propiedad está en zona universitaria o laboral',
                'Quieres reducir el riesgo de impago',
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '20px',
                }}>
                  <span style={{
                    width: '22px', height: '22px', borderRadius: '50%',
                    background: 'var(--color-primary)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', flexShrink: 0, marginTop: '1px',
                  }}>✓</span>
                  <p style={{ color: 'var(--color-text)', fontSize: 'var(--text-sm)', lineHeight: 1.6, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{
          padding: 'clamp(60px, 8vw, 100px) 0',
          background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 100%)',
          textAlign: 'center',
        }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
              ¿Tu vivienda encaja con el coliving?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
              Cuéntanos tu caso y te damos una propuesta personalizada sin compromiso.
            </p>
            <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#1a4a8a', fontSize: 'var(--text-base)' }}>
              Hablar con un experto
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
