import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sobre nosotros — Viviendas Virtuo',
  description: 'Conoce a Viviendas Virtuo: empresa de gestión profesional de alquiler en Barcelona. Coliving, temporal y vacacional. Un equipo comprometido con propietarios e inquilinos.',
  openGraph: {
    title: 'Sobre nosotros — Viviendas Virtuo',
    description: 'Gestión profesional de alquiler en Barcelona. Coliving, temporal y vacacional.',
    url: 'https://viviendas-virtuo.es/sobre-nosotros',
  },
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
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.06) 0%, transparent 55%)', pointerEvents: 'none' }} />
          <div className="container">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#90caf9', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Quiénes somos</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '24px', maxWidth: '700px' }}>
              Gestión profesional del alquiler.{' '}
              <span style={{ color: '#90caf9' }}>Sin complicaciones para nadie.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '40px' }}>
              Somos Viviendas Virtuo, una empresa especializada en la gestión de alquileres en Barcelona. Trabajamos para propietarios que quieren rentabilidad sin preocupaciones y para inquilinos que merecen un alojamiento bien gestionado.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#1a4a8a' }}>
                Hablar con el equipo
              </Link>
            </div>
          </div>
        </section>

        {/* NUESTRA HISTORIA — foto + texto */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px, 100%), 1fr))',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'center',
            }}>
              {/* Foto izquierda */}
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                aspectRatio: '4/3',
                boxShadow: '0 24px 64px rgba(15,45,94,0.14)',
              }}>
                <Image
                  src="/images/nosotros.jpg"
                  alt="Equipo de Viviendas Virtuo en Barcelona"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  background: 'rgba(255,255,255,0.96)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '14px 20px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  backdropFilter: 'blur(8px)',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 900, color: '#1a4a8a', lineHeight: 1 }}>Barcelona</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '3px' }}>Nuestra ciudad, nuestro mercado</div>
                </div>
              </div>

              {/* Texto derecha */}
              <div>
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Nuestra historia</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  Nacimos para simplificar el alquiler en Barcelona
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '20px', maxWidth: '52ch' }}>
                  Viviendas Virtuo nace de la experiencia directa con el mercado de alquiler barcelonés: propietarios desbordados por la gestión diaria e inquilinos que no encuentran alojamiento serio y bien mantenido.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '20px', maxWidth: '52ch' }}>
                  Decidimos crear un modelo distinto al de las inmobiliarias tradicionales: una empresa que gestiona de verdad, que conoce cada vivienda que tiene en cartera y que trata tanto al propietario como al inquilino con el mismo nivel de exigencia y profesionalidad.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, maxWidth: '52ch' }}>
                  Hoy operamos con tres sistemas adaptados a cada tipo de vivienda y objetivo: coliving, temporal y vacacional. Todos con la misma filosofía: gestión sin fricciones, resultados reales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALORES — 3 columnas */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Lo que nos define</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                Tres principios, una forma de trabajar
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {[
                {
                  num: '01',
                  title: 'Transparencia total',
                  desc: 'Informes mensuales detallados, contratos claros y comisiones sin letra pequeña. Saber en todo momento qué pasa con tu vivienda es un derecho, no un favor.',
                },
                {
                  num: '02',
                  title: 'Gestión real, no intermediación',
                  desc: 'No somos una plataforma ni un portal. Somos gestores activos: visitamos, seleccionamos, firmamos, cobros y resolvemos incidencias. De principio a fin.',
                },
                {
                  num: '03',
                  title: 'Respeto por el inquilino',
                  desc: 'Una vivienda bien mantenida y una comunicación ágil no son extras premium. Son el estándar mínimo que cualquier inquilino merece y que nosotros garantizamos.',
                },
              ].map((v) => (
                <div key={v.num} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '36px 28px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: 'rgba(26,74,138,0.1)', lineHeight: 1, marginBottom: '20px' }}>{v.num}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '14px' }}>{v.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUÉ NO SOMOS UNA INMOBILIARIA */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>El modelo Virtuo</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '40px' }}>
              No somos una inmobiliaria. Somos gestores.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              {/* Cabecera */}
              <div style={{ background: '#f0f4fa', padding: '18px 24px', borderBottom: '1px solid var(--color-border)', borderRight: '1px solid var(--color-border)' }}>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-text-muted)' }}>Inmobiliaria tradicional</span>
              </div>
              <div style={{ background: '#1a4a8a', padding: '18px 24px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'white' }}>Viviendas Virtuo</span>
              </div>
              {[
                ['Cobra al firmar y desaparece', 'Gestión continua mes a mes'],
                ['No gestiona incidencias', 'Resuelve cada incidencia'],
                ['El propietario busca inquilinos', 'Buscamos y verificamos nosotros'],
                ['Sin informes de seguimiento', 'Informe mensual detallado'],
                ['Precio fijo sin optimización', 'Pricing dinámico según mercado'],
                ['Sin conocimiento del inquilino', 'Proceso de selección riguroso'],
              ].map(([before, after], i) => (
                <>
                  <div key={`b-${i}`} style={{ padding: '16px 24px', borderBottom: '1px solid var(--color-border)', borderRight: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" stroke="#d1d5db" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{before}</span>
                  </div>
                  <div key={`a-${i}`} style={{ padding: '16px 24px', borderBottom: '1px solid rgba(26,74,138,0.12)', background: '#f0f4fa', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="#1a4a8a"/><path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: '#1a4a8a' }}>{after}</span>
                  </div>
                </>
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
              Cuéntanos tu situación y te explicamos cómo Virtuo puede ayudarte, sin compromisos y sin rodeos.
            </p>
            <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#1a4a8a' }}>
              Ponerse en contacto
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
