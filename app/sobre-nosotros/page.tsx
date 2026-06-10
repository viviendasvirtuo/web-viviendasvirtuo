import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre Nosotros — Viviendas Virtuo',
  description: 'Conoce Viviendas Virtuo: quiénes somos, cómo trabajamos y por qué somos diferentes a una inmobiliaria tradicional. Gestión profesional de alquiler en Barcelona.',
  openGraph: {
    title: 'Sobre Nosotros — Viviendas Virtuo',
    description: 'Gestión profesional de alquiler en Barcelona. Coliving, Temporal y Vacacional bajo un mismo equipo.',
    url: 'https://www.viviendasvirtuo.com/sobre-nosotros',
  },
};

const valores = [
  {
    titulo: 'Transparencia total',
    texto: 'Sin letra pequeña, sin sorpresas. Antes de firmar cualquier contrato sabes exactamente qué incluye y qué no.',
  },
  {
    titulo: 'Respuesta en 24h',
    texto: 'Propietarios e inquilinos tienen siempre un interlocutor real. Las incidencias se resuelven, no se ignoran.',
  },
  {
    titulo: 'Rentabilidad real',
    texto: 'Optimizamos cada vivienda para el sistema que más renta: Coliving, Temporal o Vacacional. Sin ideología, con datos.',
  },
  {
    titulo: 'Gestión sin fricciones',
    texto: 'El propietario no tiene que preocuparse de nada. Contratos, cobros, incidencias y rotaciones: lo gestionamos nosotros.',
  },
];

const hitos = [
  { año: '2019', texto: 'Primera vivienda en gestión en Badalona' },
  { año: '2021', texto: 'Lanzamiento del sistema Temporal para trabajadores desplazados' },
  { año: '2022', texto: 'Incorporación del sistema Vacacional en Barcelona ciudad' },
  { año: '2024', texto: 'Más de 40 viviendas gestionadas en el área metropolitana' },
  { año: '2025', texto: 'Digitalización completa: contratos, pagos e incidencias online' },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{
          paddingTop: '140px',
          paddingBottom: '80px',
          background: 'linear-gradient(160deg, #0f2d5e 0%, #1a4a8a 60%, #1e5ba8 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(144,202,249,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.04) 0%, transparent 50%)',
            pointerEvents: 'none',
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inicio</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Sobre nosotros</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '20px',
              maxWidth: '640px',
            }}>
              Gestionamos viviendas como si fueran nuestras
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: 'var(--text-lg)',
              maxWidth: '520px',
              lineHeight: 1.7,
            }}>
              Viviendas Virtuo no es una inmobiliaria. Somos un equipo especializado en gestión profesional de alquiler, con tres sistemas adaptados a cada tipo de vivienda y propietario.
            </p>
          </div>
        </section>

        {/* QUÉ NOS DIFERENCIA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ maxWidth: '720px', marginBottom: '60px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>No somos una inmobiliaria</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>La diferencia está en lo que hacemos después de firmar</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, fontSize: 'var(--text-base)' }}>
                Una inmobiliaria te encuentra un inquilino y desaparece. Nosotros nos quedamos: gestionamos los contratos, los cobros, las incidencias y las rotaciones. El propietario no tiene que hacer nada. El inquilino tiene siempre a alguien al otro lado del teléfono.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px,100%), 1fr))', gap: '24px' }}>
              {valores.map((v, i) => (
                <div key={i} style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(24px,3vw,36px)',
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', marginBottom: '16px' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '10px' }}>{v.titulo}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.65, fontSize: 'var(--text-sm)', margin: 0 }}>{v.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRAYECTORIA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Trayectoria</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)' }}>Construido paso a paso</h2>
            </div>
            <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {hitos.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px', position: 'relative', paddingBottom: i < hitos.length - 1 ? '40px' : '0' }}>
                  {/* Línea vertical */}
                  {i < hitos.length - 1 && (
                    <div style={{ position: 'absolute', left: '52px', top: '32px', bottom: 0, width: '2px', background: 'var(--color-border)' }} />
                  )}
                  {/* Año */}
                  <div style={{ flexShrink: 0, width: '80px', paddingTop: '4px' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 800, color: 'var(--color-primary)' }}>{h.año}</span>
                  </div>
                  {/* Punto */}
                  <div style={{ flexShrink: 0, width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '7px', position: 'relative', zIndex: 1 }} />
                  {/* Texto */}
                  <p style={{ color: 'var(--color-text)', fontSize: 'var(--text-base)', lineHeight: 1.6, paddingTop: '3px', margin: 0 }}>{h.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NÚMEROS */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '32px', textAlign: 'center' }}>
              {[
                { num: '+40', label: 'Viviendas gestionadas' },
                { num: '+200', label: 'Inquilinos atendidos' },
                { num: '98%', label: 'Propietarios satisfechos' },
                { num: '<24h', label: 'Tiempo de respuesta' },
              ].map((s, i) => (
                <div key={i} style={{ padding: 'clamp(24px,3vw,40px) 16px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1, marginBottom: '10px' }}>{s.num}</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'linear-gradient(135deg, #0f2d5e, #1a4a8a)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>¿Tienes una vivienda en Barcelona?</h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'var(--text-lg)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>Cuéntanos tu caso y te decimos qué sistema encaja mejor con tu vivienda.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ background: 'white', color: '#1a4a8a', fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Hablar con un experto</Link>
              <Link href="/faq" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', fontWeight: 600, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver preguntas frecuentes</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
