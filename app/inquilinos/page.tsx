import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Inquilinos — Viviendas Virtuo',
  description: 'Encuentra tu habitación ideal en Barcelona. Coliving, alquiler temporal y vacacional gestionados por profesionales. Entra y vive.',
};

export default function InquilinosPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #1a2540 0%, #2a3f6e 100%)', paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 65% 45%, rgba(144,202,249,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div className="container">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#90caf9', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Para inquilinos</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '20px', maxWidth: '680px' }}>
              Tu próximo hogar en Barcelona,{' '}
              <span style={{ color: '#90caf9' }}>gestionado de verdad</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '540px', lineHeight: 1.7, marginBottom: '40px' }}>
              Habitaciones y apartamentos con gestión profesional. Sin pisos mal mantenidos, sin propietarios que no cogen el teléfono. Solo calidad y tranquilidad.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#1a2540', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver opciones disponibles</Link>
              <a href="#opciones" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>¿Qué tipo busco?</a>
            </div>
          </div>
        </section>

        {/* POR QUÉ VIRTUO */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>La diferencia Virtuo</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Alquilar debería ser fácil</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '24px' }}>
              {[
                { icon: '✅', title: 'Pisos verificados', desc: 'Visitamos y auditamos cada vivienda antes de ofrecerla. Sin sorpresas al llegar.' },
                { icon: '📋', title: 'Contratos claros', desc: 'Redactados por profesionales. Lees lo que firmas, sin letra pequeña.' },
                { icon: '🔧', title: 'Mantenimiento ágil', desc: 'Incidencia reportada → resuelta. Sin esperar semanas por una reparación.' },
                { icon: '📞', title: 'Siempre alguien al teléfono', desc: 'Un equipo real que responde rápido, no un buzón de voz.' },
                { icon: '💸', title: 'Precios transparentes', desc: 'Lo que ves es lo que pagas. Sin costes ocultos ni gastos sorpresa.' },
                { icon: '🤝', title: 'Comunidad seleccionada', desc: 'En coliving verificamos a todos los residentes para garantizar buena convivencia.' },
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

        {/* ELIGE TU OPCIÓN */}
        <section id="opciones" style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Elige tu opción</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)' }}>¿Qué tipo de alojamiento necesitas?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '24px' }}>
              {[
                {
                  bg: 'linear-gradient(135deg, #0f2d5e, #1a4a8a)', badge: 'Coliving',
                  title: 'Habitación a largo plazo', desc: 'Comunidad de convivencia, suministros incluidos, zonas comunes cuidadas. Ideal si te quedas 3+ meses.',
                  href: '/coliving', cta: 'Ver coliving',
                },
                {
                  bg: 'linear-gradient(135deg, #0d3b2e, #1a6b52)', badge: 'Temporal',
                  title: 'Estancia de 1 a 6 meses', desc: 'Perfecto para proyectos, másters o rotaciones. Flexibilidad sin sacrificar comodidad.',
                  href: '/temporal', cta: 'Ver temporal',
                },
                {
                  bg: 'linear-gradient(135deg, #7c3a00, #c45e00)', badge: 'Vacacional',
                  title: 'Apartamento completo', desc: 'Para turistas o visitas puntuales. Apartamento íntegro, equipado y listo para disfrutar.',
                  href: '/vacacional', cta: 'Ver vacacional',
                },
              ].map((s) => (
                <div key={s.href} style={{ background: s.bg, borderRadius: 'var(--radius-xl)', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '999px', padding: '4px 14px', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'white', alignSelf: 'flex-start' }}>{s.badge}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-sm)', lineHeight: 1.65, flex: 1 }}>{s.desc}</p>
                  <Link href={s.href} style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 'var(--radius-lg)', padding: '10px 20px', color: 'white', fontSize: 'var(--text-sm)', fontWeight: 600, textDecoration: 'none', alignSelf: 'flex-start' }}>{s.cta} →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Del contacto a las llaves en tu mano</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '16px' }}>
              {[
                { step: '1', title: 'Nos escribes', desc: 'Cuéntanos qué buscas: tipo, fechas, zona, presupuesto.' },
                { step: '2', title: 'Te mostramos opciones', desc: 'En menos de 24h te enviamos las habitaciones o pisos disponibles.' },
                { step: '3', title: 'Visita y reserva', desc: 'Visita virtual o presencial. Si te gusta, reservas con garantías.' },
                { step: '4', title: 'Entras a vivir', desc: 'Firma digital, llaves en mano. Bienvenido/a.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '28px 16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-lg)', marginBottom: '16px' }}>{item.step}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'linear-gradient(135deg, #1a2540, #2a3f6e)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>¿Buscas habitación en Barcelona?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>Cuéntanos lo que necesitas y te respondemos en menos de 24 horas.</p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: '#1a2540', fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Contactar ahora</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
