import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import SistemaCards from '@/components/SistemaCards';
import Testimonios from '@/components/Testimonios';
import Ahorro from '@/components/Ahorro';
import AlojamientosDestacados from '@/components/AlojamientosDestacados';

export const metadata: Metadata = {
  title: 'Viviendas Virtuo — Gestión profesional de alquiler en Barcelona',
  description: 'Gestión profesional de alquiler en Barcelona. Coliving, temporal y vacacional. Máxima rentabilidad sin preocupaciones.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* ESPACIOS DESTACADOS */}
        <AlojamientosDestacados />

        {/* ELIGE TU OPCIÓN */}
        <section id="opciones" style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Nuestros sistemas</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>¿Qué tipo de alojamiento necesitas?</h2>
            </div>
            <SistemaCards />
          </div>
        </section>

        {/* TESTIMONIOS */}
        <Testimonios />

        {/* AHORRO */}
        <Ahorro />

        {/* LA DIFERENCIA VIRTUO */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>La diferencia Virtuo</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Alquilar debería ser fácil</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '24px' }}>
              {[
                { icon: '✅', title: 'Pisos verificados', desc: 'Visitamos y auditamos cada vivienda antes de ofrecerla. Sin sorpresas el día de entrada.' },
                { icon: '📋', title: 'Contratos claros', desc: 'Sin cláusulas abusivas. Todo por escrito, conforme a la normativa catalana vigente.' },
                { icon: '🔧', title: 'Mantenimiento real', desc: 'Incidencias atendidas en menos de 24h. Un equipo de verdad detrás de cada piso.' },
                { icon: '💸', title: 'Precio todo incluido', desc: 'Luz, agua, gas, wifi e IBI incluidos. Pagas una sola cuota, sin sustos a fin de mes.' },
              ].map((item) => (
                <div key={item.title} style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '28px 24px', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '14px' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Cómo funciona</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Entrar es sencillo</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '24px' }}>
              {[
                { paso: '01', title: 'Elige tu opción', desc: 'Selecciona el sistema que mejor encaja con tu estancia y necesidades.' },
                { paso: '02', title: 'Contacta con nosotros', desc: 'Cuéntanos qué buscas. Respondemos en menos de 2 horas.' },
                { paso: '03', title: 'Visita y confirma', desc: 'Te enseñamos el piso, resolvemos dudas y preparamos el contrato.' },
                { paso: '04', title: 'Entra a vivir', desc: 'Recibe las llaves, conéctate al wifi y empieza a disfrutar tu nuevo hogar.' },
              ].map((s) => (
                <div key={s.paso} style={{ position: 'relative', paddingTop: '16px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 900, color: 'var(--color-primary)', opacity: 0.15, lineHeight: 1, marginBottom: '8px' }}>{s.paso}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'linear-gradient(135deg, #1a2540 0%, #2a3f6e 100%)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>¿Listo para encontrar tu hogar?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>Escíbenos y te ayudamos a encontrar la opción perfecta para ti en Barcelona.</p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: '#1a2540', fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Contactar ahora</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
