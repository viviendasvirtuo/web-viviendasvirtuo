import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HabitacionesDestacadas from '@/components/HabitacionesDestacadas';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Alquiler Vacacional para inquilinos — Viviendas Virtuo',
  description: 'Apartamentos vacacionales en Barcelona gestionados profesionalmente. Estancias cortas para turismo y viajes de negocio. Reserva sin complicaciones.',
};

const VACACIONAL_ORANGE = '#c45e00';
const VACACIONAL_ORANGE_DARK = '#a34d00';
const VACACIONAL_ACCENT = '#f5a742';
const COLIVING_BLUE = '#0453ab';
const TEMPORAL_GREEN = '#008f58';

export default function InquilinosVacacionalPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ position: 'relative', paddingTop: '140px', paddingBottom: '80px', overflow: 'hidden', minHeight: '520px' }}>
          <Image
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80&auto=format&fit=crop"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${VACACIONAL_ORANGE_DARK}e0 0%, ${VACACIONAL_ORANGE}cc 100%)` }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 70% 50%, ${VACACIONAL_ACCENT}1a 0%, transparent 60%)`, pointerEvents: 'none' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inicio</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <Link href="/inquilinos" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inquilinos</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Vacacional</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: VACACIONAL_ACCENT, display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Vacacional · Para inquilinos</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '20px', maxWidth: '680px' }}>
              Apartamento completo en Barcelona{' '}
              <span style={{ color: VACACIONAL_ACCENT }}>listo para disfrutar</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '540px', lineHeight: 1.7, marginBottom: '40px' }}>
              Apartamentos de alquiler vacacional gestionados al detalle. Para turistas y viajeros de negocio que quieren la comodidad de un hogar sin las complicaciones de un hotel.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#apartamentos" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: VACACIONAL_ORANGE, fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver apartamentos disponibles</a>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Contactar</Link>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div>
                <p style={{ color: VACACIONAL_ORANGE, fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Lo que obtienes</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>El apartamento completo para ti, sin intermediarios</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '24px', fontSize: 'var(--text-base)' }}>Apartamentos enteros para uso exclusivo. Más espacio, más privacidad y más comodidad que cualquier habitación de hotel al mismo precio o menos.</p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '32px', fontSize: 'var(--text-base)' }}>Gestión profesional incluida: check-in organizado, limpieza entre estancias y atención ante cualquier incidencia durante tu estancia.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {[
                    'Apartamento completo de uso exclusivo',
                    'Totalmente equipado: cocina, ropa de cama, toallas',
                    'Wifi de alta velocidad incluido',
                    'Check-in y check-out flexible con gestión profesional',
                    'Limpieza incluida en la reserva',
                    'Atención durante toda la estancia',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={VACACIONAL_ORANGE} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#apartamentos" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: VACACIONAL_ORANGE, color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver disponibilidad →</a>
              </div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: `0 20px 60px ${VACACIONAL_ORANGE}1f` }}>
                <Image
                  src="/images/vacacional01.jpg"
                  alt="Apartamento vacacional gestionado por Viviendas Virtuo en Barcelona"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.95)', borderRadius: 'var(--radius-lg)', padding: '12px 16px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 900, color: VACACIONAL_ORANGE, lineHeight: 1 }}>Apartamento completo</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>uso exclusivo para ti</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARA QUIÉN */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>¿Este alquiler vacacional es para ti?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '20px' }}>
              {[
                { tipo: 'Turista en Barcelona', desc: 'Más comodidad y espacio que un hotel, con la libertad de un hogar propio.' },
                { tipo: 'Viajero de negocios', desc: 'Cocina, escritorio y wifi. Todo lo que necesitas para trabajar y descansar.' },
                { tipo: 'Familia o grupo', desc: 'Espacio suficiente para todos, sin pagar varias habitaciones de hotel.' },
                { tipo: 'Escapada de fin de semana', desc: 'Reserva para pocos días y disfruta Barcelona sin complicaciones.' },
              ].map((p, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '28px 20px', border: '1px solid var(--color-border)' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: VACACIONAL_ORANGE, marginBottom: '14px' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>{p.tipo}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APARTAMENTOS */}
        <div id="apartamentos">
          <HabitacionesDestacadas sistema="vacacional" />
        </div>

        {/* OTROS SISTEMAS */}
        <section style={{ padding: 'clamp(40px,6vw,80px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', marginBottom: '24px' }}>¿Buscas otro tipo de alojamiento?</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/inquilinos/coliving" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: COLIVING_BLUE, color: 'white', borderRadius: 'var(--radius-lg)', padding: '12px 24px', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Ver Coliving →</Link>
              <Link href="/inquilinos/temporal" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: TEMPORAL_GREEN, color: 'white', borderRadius: 'var(--radius-lg)', padding: '12px 24px', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Ver Alquiler Temporal →</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: `linear-gradient(135deg, ${VACACIONAL_ORANGE_DARK}, ${VACACIONAL_ORANGE})`, textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>¿Cuándo visitas Barcelona?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>Dinos tus fechas y buscamos el apartamento perfecto para ti. Sin comisiones ocultas.</p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: VACACIONAL_ORANGE, fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Reservar ahora</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
