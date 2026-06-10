import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre Nosotros — Viviendas Virtuo',
  description: 'Conoce Viviendas Virtuo: quiénes somos, nuestra historia y por qué somos distintos a una inmobiliaria tradicional. Gestión profesional de alquileres en Barcelona.',
};

export default function SobreNosotrosPage() {
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
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div className="container">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#90caf9', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Quiénes somos</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '24px', maxWidth: '680px' }}>
              No somos una inmobiliaria.{' '}
              <span style={{ color: '#90caf9' }}>Somos tu equipo de gestión.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '560px', lineHeight: 1.7 }}>
              Viviendas Virtuo nació para hacer lo que las inmobiliarias no hacen: gestionar de verdad. Desde el primer inquilino hasta el último céntimo de la liquidación mensual.
            </p>
          </div>
        </section>

        {/* NUESTRA HISTORIA */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'center',
            }}>
              <div>
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Nuestra historia</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '24px' }}>
                  Empezamos siendo propietarios frustrados
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.8, marginBottom: '20px', maxWidth: '52ch' }}>
                  Conocemos perfectamente la sensación de confiar tu vivienda a una agencia y no volver a saber nada hasta que hay un problema. Inquilinos sin verificar, meses de vacíos entre contratos, reparaciones que nadie gestiona.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.8, marginBottom: '20px', maxWidth: '52ch' }}>
                  Por eso creamos Viviendas Virtuo: una empresa que gestiona tu propiedad como si fuera la nuestra. Con los tres sistemas que el mercado de alquiler realmente necesita: coliving, temporal y vacacional.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.8, maxWidth: '52ch' }}>
                  Operamos en Barcelona y área metropolitana, con un equipo pequeño y comprometido que conoce cada vivienda que gestiona.
                </p>
              </div>
              {/* Métricas */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {[
                  { num: '3', label: 'Sistemas de gestión', sub: 'Coliving, Temporal y Vacacional' },
                  { num: '+30%', label: 'Más rentabilidad', sub: 'vs. alquiler tradicional de media' },
                  { num: '72h', label: 'Hasta primera reserva', sub: 'Tiempo medio desde publicación' },
                  { num: '100%', label: 'Gestión delegada', sub: 'Sin intervención del propietario' },
                ].map((m, i) => (
                  <div key={i} style={{
                    background: i % 2 === 0 ? 'white' : '#f0f4fa',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '28px 24px',
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1, marginBottom: '8px' }}>{m.num}</div>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '4px' }}>{m.label}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{m.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ SOMOS DISTINTOS */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ maxWidth: '680px', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>La diferencia Virtuo</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                No vendemos pisos. Los gestionamos.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: '2px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
              {[
                {
                  title: 'Inmobiliaria tradicional',
                  items: [
                    'Te cobra por buscar un inquilino y desaparece',
                    'No gestiona incidencias ni mantenimiento',
                    'Alquiler completo o nada',
                    'Sin informes ni transparencia',
                    'Vacíos entre contratos sin solución proactiva',
                  ],
                  dark: false,
                  accent: 'var(--color-text-faint)',
                },
                {
                  title: 'Viviendas Virtuo',
                  items: [
                    'Gestión continua: inquilinos, contratos, cobros e incidencias',
                    'Mantenimiento gestionado sin molestar al propietario',
                    '3 sistemas adaptados a cada tipo de vivienda',
                    'Informe mensual con ingresos y ocupación',
                    'Buscamos el siguiente inquilino antes de que se vaya el actual',
                  ],
                  dark: true,
                  accent: '#90caf9',
                },
              ].map((col) => (
                <div
                  key={col.title}
                  style={{
                    background: col.dark ? 'linear-gradient(160deg, #0f2d5e, #1a4a8a)' : 'white',
                    padding: 'clamp(32px, 4vw, 48px)',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: col.dark ? 'white' : 'var(--color-text)', marginBottom: '28px' }}>
                    {col.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {col.items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <span style={{
                          flexShrink: 0,
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: col.dark ? 'rgba(144,202,249,0.2)' : 'rgba(0,0,0,0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}>
                          {col.dark ? (
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                              <path d="M2 5l2 2 4-4" stroke="#90caf9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ) : (
                            <svg width="8" height="2" viewBox="0 0 8 2" fill="none" aria-hidden="true">
                              <path d="M1 1h6" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          )}
                        </span>
                        <span style={{ fontSize: 'var(--text-sm)', color: col.dark ? 'rgba(255,255,255,0.82)' : 'var(--color-text-muted)', lineHeight: 1.65 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NUESTROS VALORES */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Cómo trabajamos</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                Nuestros principios
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {[
                { num: '01', title: 'Transparencia total', desc: 'Informe mensual con cada ingreso, cada gasto y cada gestión realizada. Sin sorpresas, sin letra pequeña.' },
                { num: '02', title: 'Proactividad', desc: 'No esperamos a que surjan problemas. Los anticipamos: buscamos inquilino antes de que el piso quede libre.' },
                { num: '03', title: 'Selección rigurosa', desc: 'Verificamos documentación, solvencia y referencias de cada inquilino. Tu vivienda está en buenas manos.' },
                { num: '04', title: 'Adaptación al propietario', desc: 'No todos los propietarios quieren lo mismo. Por eso tenemos 3 sistemas y escuchamos antes de proponer.' },
              ].map((v, i) => (
                <div key={i} style={{ borderTop: '2px solid var(--color-primary)', paddingTop: '24px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 900, color: 'var(--color-border)', marginBottom: '12px' }}>{v.num}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '10px' }}>{v.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 100%)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
              ¿Hablamos?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.7 }}>
              Sin compromiso. Cuéntanos tu vivienda y te hacemos una propuesta en menos de 48 horas.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#1a4a8a' }}>
                Contactar ahora
              </Link>
              <Link href="/faq" className="btn btn-lg" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}>
                Ver preguntas frecuentes
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
