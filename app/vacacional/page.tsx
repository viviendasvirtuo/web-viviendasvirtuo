import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Alquiler Vacacional — Viviendas Virtuo',
  description: 'Gestión profesional de apartamentos vacacionales en Barcelona. Maximiza tu rentabilidad en Airbnb, Booking y más con pricing dinámico.',
};

export default function VacacionalPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #7c3a00 0%, #c45e00 100%)', paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,180,80,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inicio</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Vacacional</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fcd34d', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Sistema Vacacional</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '20px', maxWidth: '680px' }}>
              La máxima rentabilidad <span style={{ color: '#fcd34d' }}>sin ningún esfuerzo</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '540px', lineHeight: 1.7, marginBottom: '40px' }}>
              Tu apartamento en las mejores plataformas turísticas. Gestionamos reservas, check-ins, limpieza y atención al viajero. Tú solo cobras.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#7c3a00', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Analizar mi apartamento gratis</Link>
              <Link href="/propietarios" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Más sobre propietarios</Link>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Gestión 360°</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Todo lo que hacemos por tu apartamento</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '24px' }}>
              {[
                { icon: '📸', title: 'Fotografía y anuncio profesional', desc: 'Fotos de calidad y descripción optimizada para cada plataforma.' },
                { icon: '📊', title: 'Pricing dinámico', desc: 'Precios que se ajustan en tiempo real según demanda, temporada y eventos.' },
                { icon: '🏨', title: 'Gestión en múltiples plataformas', desc: 'Airbnb, Booking, Vrbo y más. Máxima visibilidad, mínima vacancia.' },
                { icon: '🤝', title: 'Check-in y check-out', desc: 'Recepción del viajero, entrega de llaves y asistencia durante su estancia.' },
                { icon: '🧺e', title: 'Limpieza profesional', desc: 'Entre cada reserva: limpieza, cambio de ropa de cama y reposición.' },
                { icon: '📞', title: 'Atención al huésped 24/7', desc: 'Resolvemos cualquier incidencia en tiempo real, sin molestar al propietario.' },
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

        {/* RENTABILIDAD */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'linear-gradient(135deg, #7c3a00, #c45e00)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '20px' }}>¿Cuánto puedes ganar?</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: '24px', fontSize: 'var(--text-base)' }}>
                  Un apartamento bien gestionado en vacacional puede generar entre un 50% y un 90% más que con alquiler tradicional, dependiendo de la ubicación y temporada.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: '36px', fontSize: 'var(--text-base)' }}>
                  Te hacemos un análisis gratuito con estimación real de ingresos para tu propiedad concreta.
                </p>
                <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: '#7c3a00', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Pedir análisis gratuito →</Link>
              </div>
              <div style={{ display: 'grid', gap: '16px' }}>
                {[
                  { label: 'Rentabilidad media vs. alquiler tradicional', valor: '+70%', sub: 'en apartamentos bien ubicados' },
                  { label: 'Tasa de ocupación media gestionada', valor: '88%', sub: 'en temporada alta' },
                  { label: 'Días hasta primera reserva', valor: '<5', sub: 'desde la publicación del anuncio' },
                ].map((s, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 'var(--radius-xl)', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, flex: 1 }}>{s.label}</div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: 'white' }}>{s.valor}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.65)' }}>{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OTROS SISTEMAS */}
        <section style={{ padding: 'clamp(40px,6vw,80px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', marginBottom: '24px' }}>¿Buscas otro sistema?</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/coliving" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '12px 24px', textDecoration: 'none', color: 'var(--color-text)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Ver Coliving →</Link>
              <Link href="/temporal" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '12px 24px', textDecoration: 'none', color: 'var(--color-text)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Ver Temporal →</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '16px' }}>¿Tu apartamento está infrautilizado?</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lg)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>Hablemos. Sin compromiso, sin coste. Solo te decimos cuánto puede generar.</p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--color-primary)', color: 'white', fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Analizar mi apartamento</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
