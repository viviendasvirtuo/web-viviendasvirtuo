import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alquiler Temporal — Viviendas Virtuo',
  description: 'Habitaciones de alquiler temporal en Barcelona para trabajadores, estudiantes y profesionales. Estancias de 1 a 6 meses gestionadas profesionalmente.',
};

export default function TemporalPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0d3b2e 0%, #1a6b52 100%)', paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(100,220,160,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inicio</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Temporal</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#86efac', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Sistema Temporal</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '20px', maxWidth: '680px' }}>
              Alojamiento temporal <span style={{ color: '#86efac' }}>sin ataduras</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '540px', lineHeight: 1.7, marginBottom: '40px' }}>
              Estancias de 1 a 6 meses para profesionales, trabajadores desplazados y estudiantes de ciclos cortos. Todo gestionado, tú solo entra y vive.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0d3b2e', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Consultar disponibilidad</Link>
              <Link href="/propietarios#sistemas" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Soy propietario</Link>
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Cómo funciona</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Flexibilidad sin renunciar a la calidad</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '24px' }}>
              {[
                { icon: '📅', title: 'Duración flexible', desc: 'De 1 a 6 meses. Posibilidad de renovar según disponibilidad.' },
                { icon: '📄', title: 'Contrato temporal', desc: 'Contrato de arrendamiento de temporada, 100% legal y protegido.' },
                { icon: '🏠', title: 'Habitación lista', desc: 'Equipada y limpia desde el primer día. Solo trae tu maleta.' },
                { icon: '💡', title: 'Todo incluido', desc: 'Suministros, wifi y limpieza de zonas comunes en el precio.' },
                { icon: '🔑', title: 'Entrada ágil', desc: 'Check-in en 24-48h desde la reserva. Sin esperas infinitas.' },
                { icon: '📞', title: 'Gestión continua', desc: 'Incidencias atendidas rápido. Nunca estarás solo ante un problema.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '24px' }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '12px' }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PERFIL */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)' }}>¿Eres tú?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '20px' }}>
              {[
                { e: '🏗️', t: 'Trabajador desplazado', d: 'Proyecto de 2-4 meses en otra ciudad. Necesitas algo cómodo y sin líos.' },
                { e: '🎓', t: 'Estudiante de ciclo corto', d: 'Máster, FP o intercambio de un semestre. Cerca del centro o campus.' },
                { e: '🧑‍💻', t: 'Freelance o nómada', d: 'Buscas estabilidad puntual sin hipotecarte con un contrato largo.' },
                { e: '🏥', t: 'Profesional sanitario', d: 'Rotación, sustitución o residencia. Necesitas entrar rápido y sin complicaciones.' },
              ].map((p, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '24px 20px', textAlign: 'center', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{p.e}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '8px' }}>{p.t}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OTROS SISTEMAS */}
        <section style={{ padding: 'clamp(40px,6vw,80px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', marginBottom: '24px' }}>¿Buscas otro tipo de alojamiento?</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/coliving" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '12px 24px', textDecoration: 'none', color: 'var(--color-text)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Ver Coliving →</Link>
              <Link href="/vacacional" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '12px 24px', textDecoration: 'none', color: 'var(--color-text)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Ver Vacacional →</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'linear-gradient(135deg, #0d3b2e, #1a6b52)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>¿Necesitas habitación para una temporada?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>Dinos tus fechas y lo que buscas. Te respondemos en menos de 24 horas.</p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: '#0d3b2e', fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Consultar disponibilidad</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
