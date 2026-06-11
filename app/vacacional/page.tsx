import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Alquiler Vacacional — Viviendas Virtuo',
  description: '¿Ya tienes licencia turística? Gestionamos tu apartamento vacacional de forma profesional: Airbnb, Booking, limpieza, huéspedes y pricing dinámico.',
};

export default function VacacionalPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ position: 'relative', paddingTop: '140px', paddingBottom: '80px', overflow: 'hidden', minHeight: '520px' }}>
          <Image
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80&auto=format&fit=crop"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(80,30,0,0.90) 0%, rgba(160,70,0,0.80) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,180,80,0.10) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inicio</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Vacacional</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fcd34d', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Sistema Vacacional</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '20px', maxWidth: '700px' }}>
              Tienes licencia turística.<br />
              <span style={{ color: '#fcd34d' }}>Nosotros la hacemos rendir al máximo.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '36px' }}>
              Si ya dispones de licencia de apartamento turístico, gestionamos todo: plataformas, reservas, check-ins, limpieza y atención al viajero. Tú solo cobras.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#7c3a00', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Tengo licencia — hablemos</Link>
              <Link href="/propietarios" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver otros sistemas</Link>
            </div>
          </div>
        </section>

        {/* PARA QUIÉN ES */}
        <section style={{ padding: 'clamp(50px,7vw,90px) 0', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>¿Para quién es este sistema?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '16px' }}>Propietarios con licencia que no tienen tiempo (o quieren más rendimiento)</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, fontSize: 'var(--text-base)', marginBottom: '40px' }}>
                Muchos propietarios con licencia turística gestionan solos y dejan dinero sobre la mesa: precios estáticos, fotos mediocres, respuestas lentas. Nosotros aplicamos gestión profesional y pricing dinámico para maximizar cada noche disponible.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', textAlign: 'left' }}>
                {[
                  { icon: '🏷️', title: 'Ya gestionas tú solo', desc: 'Quieres delegar sin perder el control ni la propiedad.' },
                  { icon: '📉', title: 'Bajada de ingresos', desc: 'Las plataformas penalizan la gestión amateur. Nosotros optimizamos.' },
                  { icon: '🗓️', title: 'Falta de tiempo', desc: 'Gestionar huéspedes, limpiezas y check-ins es un trabajo a jornada completa.' },
                  { icon: '📈', title: 'Quieres escalar', desc: 'Tienes más de un inmueble y necesitas un socio de confianza que lo gestione todo.' },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: 'var(--color-bg)', border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)', padding: '20px',
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{item.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '6px' }}>{item.title}</div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'center',
            }}>
              <div>
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Gestión 360°</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>Todo lo que hacemos por tu apartamento</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '28px', fontSize: 'var(--text-base)' }}>Nos ocupamos de absolutamente todo: desde optimizar tu anuncio existente hasta atender al huésped a las 3 de la mañana. Tú no mueves un dedo.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {[
                    'Fotografía y anuncio profesional optimizado para cada plataforma',
                    'Pricing dinámico: precios ajustados en tiempo real según demanda',
                    'Gestión multicanal: Airbnb, Booking, Vrbo y directo',
                    'Check-in y check-out gestionado en persona o con caja de llaves',
                    'Limpieza profesional certificada entre cada reserva',
                    'Atención al huésped 24/7 en varios idiomas',
                    'Informes mensuales de rentabilidad y ocupación',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--color-primary)', color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Tengo licencia — contactar →</Link>
              </div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 20px 60px rgba(124,58,0,0.15)' }}>
                <Image
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80&auto=format&fit=crop"
                  alt="Apartamento vacacional gestionado por Viviendas Virtuo"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.95)', borderRadius: 'var(--radius-lg)', padding: '12px 16px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 900, color: '#c45e00', lineHeight: 1 }}>+70%</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>más rentabilidad vs. autogestión</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RENTABILIDAD */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'linear-gradient(135deg, #7c3a00, #c45e00)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: '64px', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '20px' }}>¿Cuánto más puedes ganar gestionándolo bien?</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: '24px', fontSize: 'var(--text-base)' }}>
                  La diferencia entre un apartamento autoGestionado y uno gestionado profesionalmente suele ser del 40–70% en ingresos anuales. El pricing dinámico por sí solo representa entre un 20–30% de mejora.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: '36px', fontSize: 'var(--text-base)' }}>
                  Te hacemos un análisis gratuito y sin compromiso con la estimación real para tu apartamento y zona.
                </p>
                <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: '#7c3a00', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Pedir análisis gratuito →</Link>
              </div>
              <div style={{ display: 'grid', gap: '16px' }}>
                {[
                  { label: 'Mejora de ingresos vs. autogestión', valor: '+40–70%', sub: 'con gestión profesional y pricing dinámico' },
                  { label: 'Tasa de ocupación media gestionada', valor: '88%', sub: 'en temporada alta, zonas con demanda' },
                  { label: 'Días hasta primera reserva optimizada', valor: '<5', sub: 'desde que tomamos el anuncio' },
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
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', marginBottom: '24px' }}>¿No tienes licencia turística o prefieres otro modelo?</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/coliving" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '12px 24px', textDecoration: 'none', color: 'var(--color-text)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Ver Coliving →</Link>
              <Link href="/temporal" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '12px 24px', textDecoration: 'none', color: 'var(--color-text)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Ver Temporal →</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '16px' }}>¿Tienes una licencia turística y no la estás aprovechando?</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lg)', maxWidth: '500px', margin: '0 auto 36px', lineHeight: 1.7 }}>Hablemos. Sin compromiso, sin coste. Solo te decimos cuánto puede generar con gestión profesional.</p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--color-primary)', color: 'white', fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Analizar mi apartamento →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
