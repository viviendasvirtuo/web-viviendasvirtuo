import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alquiler Temporal — Viviendas Virtuo',
  description: 'Habitaciones para estancias cortas: trabajadores temporales, estudiantes de ciclos cortos y profesionales en movilidad. Gestión completa en Barcelona.',
};

export default function TemporalPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO — tono verde oscuro/teal para diferenciarlo del coliving */}
        <section style={{
          background: 'linear-gradient(135deg, #0d3b2e 0%, #1a6b52 50%, #1e7d60 100%)',
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
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#80cbc4', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Sistema Temporal</span>
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
              Alquiler de corta duración,{' '}
              <span style={{ color: '#a5d6a7' }}>rotación continua</span>
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.78)',
              fontSize: 'var(--text-lg)',
              maxWidth: '560px',
              lineHeight: 1.7,
              marginBottom: '40px',
            }}>
              Habitaciones para trabajadores en desplazamiento, estudiantes de ciclos cortos y profesionales en movilidad. Estancias de 1 a 6 meses con alta rotación y sin períodos vacíos.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#1a6b52' }}>
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
                <p style={{ color: '#1a6b52', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Qué es el alquiler temporal?</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  Alta demanda, inquilinos verificados, sin períodos vacíos
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, marginBottom: '16px' }}>
                  El alquiler temporal cubre la demanda de personas que necesitan vivienda durante semanas o pocos meses: trabajadores desplazados, estudiantes de másteres o ciclos formativos, profesionales en proyectos puntuales.
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75 }}>
                  Virtuo gestiona la rotación de inquilinos de forma proactiva, asegurando que cada habitación esté ocupada antes de que el anterior inquilino se vaya.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { num: '1–6', label: 'meses de estancia habitual' },
                  { num: '0 días', label: 'de media sin ocupar entre inquilinos' },
                  { num: '+35%', label: 'más rentabilidad vs. alquiler anual' },
                  { num: '24h', label: 'para confirmar nuevo inquilino' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: i % 2 === 0 ? '#1a6b52' : 'white',
                    border: i % 2 !== 0 ? '1px solid var(--color-border)' : 'none',
                    borderRadius: 'var(--radius-xl)',
                    padding: '28px 20px',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: i % 2 === 0 ? 'white' : '#1a6b52', marginBottom: '8px' }}>{stat.num}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: i % 2 === 0 ? 'rgba(255,255,255,0.8)' : 'var(--color-text-muted)', lineHeight: 1.4 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PERFIL DE INQUILINOS */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#f0f7f4' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: '#1a6b52', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Perfiles de inquilinos</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                ¿Quién alquila en el sistema temporal?
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
              {[
                { icon: '💼', title: 'Trabajadores desplazados', desc: 'Profesionales enviados por su empresa a trabajar en Barcelona durante un proyecto de 1 a 4 meses.' },
                { icon: '🎓', title: 'Estudiantes de ciclos', desc: 'Alumnos de FP, másteres o postgrados con duración de un semestre o curso completo.' },
                { icon: '🔬', title: 'Investigadores y becarios', desc: 'Personas en prácticas o estancias de investigación con fechas de inicio y fin definidas.' },
                { icon: '✈️', title: 'Nómadas y expatriados', desc: 'Profesionales internacionales que necesitan una base en Barcelona durante su estancia en España.' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'white',
                  borderRadius: 'var(--radius-xl)',
                  padding: '32px 24px',
                  border: '1px solid var(--color-border)',
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: '#1a6b52', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>El proceso</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
                Nosotros gestionamos la rotación, tú cobras
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
              {[
                { step: '01', title: 'Evaluación gratuita', desc: 'Analizamos tu vivienda y te indicamos la rentabilidad esperada según la zona y número de habitaciones.' },
                { step: '02', title: 'Acondicionamiento', desc: 'Preparamos las habitaciones con lo necesario para inquilinos de corta estancia: funcional, limpio y equipado.' },
                { step: '03', title: 'Búsqueda proactiva', desc: 'Antes de que un inquilino se vaya, ya tenemos al siguiente. Sin días vacíos entre rotaciones.' },
                { step: '04', title: 'Gestión completa', desc: 'Check-in, check-out, limpieza entre estancias, contratos temporales y cobro de rentas. Todo incluido.' },
              ].map((item) => (
                <div key={item.step} style={{
                  background: 'var(--color-surface)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '32px 24px',
                  border: '1px solid var(--color-border)',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: '-10px', right: '-10px',
                    fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 900,
                    color: 'rgba(26,107,82,0.06)', lineHeight: 1, pointerEvents: 'none',
                  }}>{item.step}</div>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: 'var(--radius-md)',
                    background: '#1a6b52', color: 'white',
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

        {/* CTA FINAL */}
        <section style={{
          padding: 'clamp(60px, 8vw, 100px) 0',
          background: 'linear-gradient(135deg, #0d3b2e 0%, #1a6b52 100%)',
          textAlign: 'center',
        }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
              ¿Tu vivienda encaja con el alquiler temporal?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
              Cuéntanos tu caso y te damos una propuesta sin compromiso en 24 horas.
            </p>
            <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#1a6b52', fontSize: 'var(--text-base)' }}>
              Hablar con un experto
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
