import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Coliving — Viviendas Virtuo',
  description: 'Habitaciones en coliving gestionadas profesionalmente en Barcelona. Espacios listos para entrar, comunidad cuidada, sin complicaciones.',
};

export default function ColivingPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 100%)', paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(144,202,249,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inicio</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Coliving</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#90caf9', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Sistema Coliving</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '20px', maxWidth: '680px' }}>
              Habitaciones pensadas para <span style={{ color: '#90caf9' }}>vivir de verdad</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '540px', lineHeight: 1.7, marginBottom: '40px' }}>
              Coliving gestionado al detalle: habitaciones equipadas, zonas comunes cuidadas y una comunidad de residentes seleccionados.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#1a4a8a', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver habitaciones disponibles</Link>
              <Link href="/propietarios#sistemas" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Soy propietario</Link>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
              <div>
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Qué es el coliving Virtuo</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>Tu habitación, tu espacio, tu comunidad</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '24px', fontSize: 'var(--text-base)' }}>Gestionamos viviendas completas divididas por habitaciones. Cada residente tiene su contrato independiente, su habitación privada y acceso a zonas comunes bien mantenidas.</p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '32px', fontSize: 'var(--text-base)' }}>Seleccionamos inquilinos compatibles para que la convivencia sea fácil y agradable. Sin sorpresas, sin conflictos sin resolver.</p>
                <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--color-primary)', color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Consultar disponibilidad →</Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { icon: '🛏️', label: 'Habitación equipada', desc: 'Cama, escritorio, armario y wifi incluidos' },
                  { icon: '🍳', label: 'Cocina compartida', desc: 'Totalmente equipada y limpia' },
                  { icon: '🧹', label: 'Limpieza zonas comunes', desc: 'Incluida en el precio' },
                  { icon: '📋', label: 'Contrato individual', desc: 'Solo firmas por tu habitación' },
                  { icon: '💡', label: 'Suministros incluidos', desc: 'Luz, agua, gas e internet' },
                  { icon: '🤝', label: 'Soporte 24/7', desc: 'Incidencias resueltas en horas' },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '18px 16px' }}>
                    <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{item.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '4px' }}>{item.label}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PARA QUIÉN */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>¿Para quién es el coliving?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '20px' }}>
              {[
                { emoji: '🎓', tipo: 'Estudiantes universitarios', desc: 'Cerca de campus, precios ajustados, comunidad joven.' },
                { emoji: '💼', tipo: 'Profesionales jóvenes', desc: 'Flexibilidad, sin compromisos largos, todo incluido.' },
                { emoji: '✈️', tipo: 'Nómadas digitales', desc: 'Estancias de 1 a 12 meses, sin burocracia.' },
                { emoji: '🏙️', tipo: 'Recién llegados a la ciudad', desc: 'La forma más fácil de instalarse en Barcelona.' },
              ].map((p, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '28px 20px', textAlign: 'center', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{p.emoji}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>{p.tipo}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
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
              <Link href="/temporal" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '12px 24px', textDecoration: 'none', color: 'var(--color-text)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Ver Alquiler Temporal →</Link>
              <Link href="/vacacional" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '12px 24px', textDecoration: 'none', color: 'var(--color-text)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Ver Alquiler Vacacional →</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'linear-gradient(135deg, #0f2d5e, #1a4a8a)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>¿Buscas habitación en Barcelona?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>Cuéntanos lo que necesitas y te mostramos las opciones disponibles.</p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: '#1a4a8a', fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver disponibilidad</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
