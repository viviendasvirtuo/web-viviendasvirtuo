import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Alquiler Temporal — Viviendas Virtuo',
  description: 'Habitaciones de alquiler temporal en Barcelona para trabajadores, estudiantes y profesionales. Estancias de 1 a 6 meses gestionadas profesionalmente.',
};

const TEMPORAL_GREEN = '#00c47a';
const TEMPORAL_GREEN_DARK = '#008f58';
const TEMPORAL_ACCENT = '#6effc0';

export default function TemporalPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ position: 'relative', paddingTop: '140px', paddingBottom: '80px', overflow: 'hidden', minHeight: '520px' }}>
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80&auto=format&fit=crop"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${TEMPORAL_GREEN_DARK}e6 0%, ${TEMPORAL_GREEN}cc 100%)` }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 70% 50%, ${TEMPORAL_ACCENT}18 0%, transparent 60%)`, pointerEvents: 'none' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inicio</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Temporal</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: TEMPORAL_ACCENT, display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Sistema Temporal</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '20px', maxWidth: '680px' }}>
              Flexibilidad sin <span style={{ color: TEMPORAL_ACCENT }}>renunciar a nada</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '540px', lineHeight: 1.7, marginBottom: '40px' }}>
              Habitaciones para estancias de 1 a 6 meses. Todo incluido, contratos ágiles, gestión profesional. Para quien viene a Barcelona con un proyecto.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: TEMPORAL_GREEN_DARK, fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver habitaciones disponibles</Link>
              <Link href="/inquilinos" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Soy inquilino</Link>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: `0 20px 60px ${TEMPORAL_GREEN}30` }}>
                <Image
                  src="/images/temporal.jpg"
                  alt="Habitación de alquiler temporal en Barcelona gestionada por Viviendas Virtuo"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.95)', borderRadius: 'var(--radius-lg)', padding: '12px 16px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 900, color: TEMPORAL_GREEN_DARK, lineHeight: 1 }}>+35%</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>más rentabilidad</div>
                </div>
              </div>
              <div>
                <p style={{ color: TEMPORAL_GREEN_DARK, fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Todo incluido</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>Una habitación lista para entrar</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '28px', fontSize: 'var(--text-base)' }}>Sin muebles que comprar, sin contratos de suministros que dar de alta, sin perder tiempo. Llegas con tu maleta y ya está.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {[
                    'Habitación equipada: cama, ropa de cama, escritorio y armario',
                    'Suministros incluidos: luz, agua, gas e internet',
                    'Limpieza periódica de zonas comunes',
                    'Contrato desde 1 mes, firma digital',
                    'Incidencias resueltas en menos de 48h',
                    'Soporte real — una persona, no un chatbot',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={TEMPORAL_GREEN} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: TEMPORAL_GREEN, color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver disponibilidad →</Link>
              </div>
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
                { tipo: 'Trabajadores desplazados', desc: 'Proyectos de 1 a 6 meses, sin compromiso de contrato largo.' },
                { tipo: 'Estudiantes de ciclos', desc: 'FP, másters o cursos de duración limitada.' },
                { tipo: 'Rotaciones médicas', desc: 'Residentes y sanitarios en rotación en Barcelona.' },
                { tipo: 'Freelances y nómadas', desc: 'Estabilidad temporal sin atarse a un contrato largo.' },
              ].map((p, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '28px 20px', border: '1px solid var(--color-border)' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: TEMPORAL_GREEN, marginBottom: '14px' }} />
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
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: `linear-gradient(135deg, ${TEMPORAL_GREEN_DARK}, ${TEMPORAL_GREEN})`, textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>¿Necesitas habitación temporal en Barcelona?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>Cuéntanos tus fechas y te mostramos lo disponible en menos de 24h.</p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: TEMPORAL_GREEN_DARK, fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver disponibilidad</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
