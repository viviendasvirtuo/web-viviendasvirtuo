import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

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
              Flexibilidad sin <span style={{ color: '#86efac' }}>renunciar a nada</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '540px', lineHeight: 1.7, marginBottom: '40px' }}>
              Habitaciones para estancias de 1 a 6 meses. Todo incluido, contratos ágiles, gestión profesional. Para quien viene a Barcelona con un proyecto.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0d3b2e', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver habitaciones disponibles</Link>
              <Link href="/inquilinos" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Soy inquilino</Link>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Todo incluido</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Una habitación lista para entrar</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '24px' }}>
              {[
                { icon: '🛏️', title: 'Habitación equipada', desc: 'Cama, ropa de cama, escritorio, armario y wifi de alta velocidad.' },
                { icon: '💡', title: 'Suministros incluidos', desc: 'Luz, agua, gas e internet en el precio. Sin sorpresas en la factura.' },
                { icon: '🧹', title: 'Limpieza periódica', desc: 'Zonas comunes limpias semanalmente. Tú solo te ocupas de tu habitación.' },
                { icon: '📝', title: 'Contrato ágil', desc: 'Desde 1 mes. Firma digital, sin burocracia innecesaria.' },
                { icon: '🔧', title: 'Mantenimiento rápido', desc: 'Incidencia reportada y resuelta en menos de 48h.' },
                { icon: '📞', title: 'Soporte real', desc: 'Una persona real al otro lado, no un chatbot.' },
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

        {/* PARA QUIÉN */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)' }}>¿Para quién es el alquiler temporal?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '20px' }}>
              {[
                { emoji: '💼', tipo: 'Trabajadores desplazados', desc: 'Proyectos de 1 a 6 meses, sin compromiso de contrato largo.' },
                { emoji: '🏫', tipo: 'Estudiantes de ciclos', desc: 'FP, másters o cursos de duración limitada.' },
                { emoji: '🏥', tipo: 'Rotaciones médicas', desc: 'Residentes y sanitarios en rotación en Barcelona.' },
                { emoji: '🖥️', tipo: 'Freelances y nómadas', desc: 'Estabilidad temporal sin atarse a un contrato largo.' },
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
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', marginBottom: '24px' }}>¿Buscas otro tipo de estancia?</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/coliving" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '12px 24px', textDecoration: 'none', color: 'var(--color-text)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Ver Coliving →</Link>
              <Link href="/vacacional" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '12px 24px', textDecoration: 'none', color: 'var(--color-text)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Ver Vacacional →</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'linear-gradient(135deg, #0d3b2e, #1a6b52)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>¿Necesitas habitación temporal en Barcelona?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>Cuéntanos tus fechas y te mostramos lo disponible en menos de 24h.</p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: '#0d3b2e', fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver disponibilidad</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
