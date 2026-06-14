import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import SistemaCards from '@/components/SistemaCards';
import Testimonios from '@/components/Testimonios';
import HabitacionesDestacadas from '@/components/HabitacionesDestacadas';

export const metadata: Metadata = {
  title: 'Viviendas Virtuo — Gestión profesional de alquiler en Barcelona',
  description: 'Gestión profesional de alquiler en Barcelona. Coliving, temporal y vacacional. Máxima rentabilidad sin preocupaciones.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>

        {/* 1. HERO */}
        <Hero />

        {/* 2. NUESTROS SISTEMAS */}
        <section
          id="todo-incluido"
          style={{
            padding: 'clamp(60px,8vw,100px) 0',
            backgroundImage: 'linear-gradient(rgba(10,20,50,0.72), rgba(10,20,50,0.72)), url(/images/comunidad_gente.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: '#6effc0', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Todo incluido</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>¿Qué tipo de alojamiento necesitas?</h2>
            </div>
            <SistemaCards />
          </div>
        </section>

        {/* 3. QUÉ OFRECEMOS */}
        <section id="que-ofrecemos" style={{ padding: 'clamp(60px,8vw,96px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '48px', alignItems: 'center' }}>

              {/* Columna izquierda - Texto */}
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.4rem)', fontWeight: 900, color: '#1a4a8a', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '16px' }}>¿Qué ofrecemos?</h2>
                <div style={{ width: '64px', height: '4px', background: '#1a4a8a', borderRadius: '2px', marginBottom: '24px' }} />
                <p style={{ fontSize: 'clamp(0.95rem,0.85rem + 0.5vw,1.1rem)', color: '#4b5563', lineHeight: 1.75, marginBottom: '32px' }}>Habitaciones privadas y viviendas completas con todo incluido. Mucho mejor que un alquiler tradicional. En Viviendas Virtuo accedes a espacios totalmente equipados, con suministros, WiFi, limpieza profesional y flexibilidad total. Sin papeleos interminables, sin permanencia obligatoria, sin sorpresas en la factura. Privacidad, comodidad y precios justos. ¿Qué más se puede pedir?</p>
                <Link
                  href="/#todo-incluido"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1a4a8a', color: 'white', fontWeight: 700, fontSize: 'var(--text-base)', padding: '13px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none' }}
                >
                  Todo incluido
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>

              {/* Columna derecha - Grid de tarjetas con imágenes */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { img: '/images/servicio-wifi.jpg', label: 'WiFi alta velocidad' },
                  { img: '/images/servicio-suministros.jpg', label: 'Suministros incluidos' },
                  { img: '/images/servicio-limpieza.jpg', label: 'Limpieza profesional' },
                  { img: '/images/servicio-flexibilidad.jpg', label: 'Flexibilidad total' },
                  { img: '/images/servicio-precios-regulados.jpg', label: 'Precios regulados' },
                  { img: '/images/servicio-espacios-comunes.jpg', label: 'Espacios comunes equipados' },
                ].map((servicio, index) => (
                  <div
                    key={index}
                    className="servicio-card"
                    style={{
                      position: 'relative',
                      aspectRatio: '4/3',
                      borderRadius: 'var(--radius-xl)',
                      overflow: 'hidden',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.10)',
                      cursor: 'pointer',
                    }}
                  >
                    <img
                      src={servicio.img}
                      alt={servicio.label}
                      loading="lazy"
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.50)' }} />
                    <span style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', fontWeight: 600,
                      fontSize: 'clamp(0.75rem,0.7rem + 0.3vw,0.95rem)',
                      textAlign: 'center', padding: '0 12px',
                      lineHeight: 1.3,
                    }}>{servicio.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            .servicio-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
            .servicio-card:hover { transform: scale(1.03); box-shadow: 0 8px 24px rgba(0,0,0,0.16); }
          `}</style>
        </section>

       {/* 4. POR QUÉ VIVIENDAS VIRTUO */}
<section style={{ padding: 'clamp(60px,8vw,100px) 0', backgroundImage: 'url(/images/habitacion-fondo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="container">
    <div style={{ background: 'rgba(26, 74, 138, 0.45)', borderRadius: 'var(--radius-xl)', padding: 'clamp(40px,6vw,72px)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: 'white', backdropFilter: 'blur(8px)' }}>
      <p style={{ fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px', opacity: 0.75 }}>¿Por qué Viviendas Virtuo?</p>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.8rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '20px', maxWidth: '680px' }}>Hasta <span style={{ color: '#6effc0' }}>400€ menos al mes</span> que un alquiler tradicional</h2>
      <p style={{ fontSize: 'clamp(0.95rem,0.85rem + 0.5vw,1.1rem)', opacity: 0.85, lineHeight: 1.75, maxWidth: '520px', marginBottom: '36px' }}>
        Tu estancia temporal en Barcelona, 100% segura y sin costes sorpresa.
        En un mercado lleno de incertidumbres, operamos bajo un marco legal estricto para ofrecerte flexibilidad real en estancias de media duración. 
        <br />
        Con nuestro modelo todo incluido, te garantizamos un contrato digital transparente, gestión ágil de fianzas y acceso a la &quot;Wiki del piso&quot; con todo el control desde tu móvil. 
        <br />
        Olvídate de sorpresas financieras: disfrutas de una habitación totalmente amueblada, suministros cubiertos y un único pago mensual sin complicaciones.
      </p>
      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '36px' }}>
        {[{ val: '100%', label: 'control total desde tu móvil' }, { val: '24h', label: 'respuesta a incidencias' }, { val: '100%', label: 'contratos regulados' }].map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 900, color: '#6effc0', lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontSize: 'var(--text-xs)', opacity: 0.7, marginTop: '4px' }}>{s.label}</div>
          </div>
        ))}
      </div>
      <Link href="/coliving" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#1a4a8a', fontWeight: 700, fontSize: 'var(--text-base)', padding: '13px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none' }}>Ver habitaciones <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></Link>
    </div>
  </div>
</section>

        {/* 5. EVENTOS Y COMUNIDAD */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div className="comunidad-grid">
              {/* Columna izquierda — imagen */}
              <div className="comunidad-imagen">
                <img
                  src="/images/comunidad-alegre.jpg"
                  alt="Comunidad de residentes Viviendas Virtuo"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: '0 8px 32px rgba(26,74,138,0.15)',
                    display: 'block',
                    minHeight: '320px',
                  }}
                />
              </div>
              {/* Columna derecha — texto */}
              <div className="comunidad-texto">
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Eventos y comunidad</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,2.5vw,2.6rem)', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '20px' }}>Comunidad, también incluida</h2>
                <p style={{ fontSize: 'clamp(0.95rem,0.85rem + 0.5vw,1.1rem)', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '36px' }}>Cuidamos la convivencia para que tu experiencia funcione desde el primer día. En Viviendas Virtuo filtramos los perfiles según afinidades, estilos de vida y ritmos profesionales para asegurar un ambiente de respeto y productividad. Facilitamos conexiones orgánicas entre miembros, organizamos actividades exclusivas y creamos grupos de interés para que aterrices en Barcelona en la mejor compañía. Todo ello respaldado por normas de convivencia claras y un equipo operativo siempre presente a través de tu portal.</p>
                <Link href="/iniciar-sesion" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--color-primary)', color: 'white', fontWeight: 700, fontSize: 'var(--text-base)', padding: '13px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none' }}>Conoce la comunidad <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></Link>
              </div>
            </div>
          </div>
          <style>{`
            .comunidad-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: clamp(32px, 5vw, 64px);
              align-items: center;
            }
            @media (max-width: 768px) {
              .comunidad-grid {
                grid-template-columns: 1fr;
              }
              .comunidad-imagen {
                order: 1;
              }
              .comunidad-texto {
                order: 2;
                text-align: left;
              }
            }
          `}</style>
        </section>

        {/* 6. CÓMO FUNCIONA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">

            {/* Cabecera */}
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Empieza hoy mismo</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '12px' }}>Cómo funciona</h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', margin: '0 auto' }}>Fácil, rápido y sin complicaciones.</p>
            </div>

            {/* Pasos con flechas */}
            <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative' }}>
              {[
                {
                  paso: '01',
                  title: 'Elige tu habitación',
                  desc: 'Explora la web y selecciona la opción que mejor encaja con tus fechas y necesidades.',
                  badge: null,
                },
                {
                  paso: '02',
                  title: 'Consulta disponibilidad',
                  desc: 'Contacta con nosotros de inmediato. Debido a la alta demanda de nuestros modelos, las habitaciones libres se reservan rápido.',
                  badge: 'Plazas limitadas',
                },
                {
                  paso: '03',
                  title: 'Contrato digital exprés',
                  desc: 'Si la habitación sigue libre, resolvemos tus dudas, validamos tu perfil y firmamos el contrato de forma digital, sin papeleos ni esperas.',
                  badge: null,
                },
                {
                  paso: '04',
                  title: 'Entra a vivir hoy mismo',
                  desc: 'Recibe tus accesos y empieza tu nueva etapa en Barcelona desde ese mismo instante. Todo está pensado para llegar y funcionar desde el primer minuto.',
                  badge: null,
                },
              ].map((s, i, arr) => (
                <div key={s.paso} style={{ position: 'relative' }}>

                  {/* Fila del paso */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    background: 'white',
                    border: '1px solid rgba(26,74,138,0.10)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '24px 28px',
                    boxShadow: '0 2px 8px rgba(26,74,138,0.06)',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {/* Número */}
                    <div style={{
                      flexShrink: 0,
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'var(--color-primary)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 900,
                      fontSize: '1.1rem',
                    }}>
                      {s.paso}
                    </div>
                    {/* Texto */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>
                          {s.title}
                        </h3>
                        {s.badge && (
                          <span style={{
                            background: '#fff3e0',
                            color: '#c45e00',
                            fontSize: '11px',
                            fontWeight: 700,
                            padding: '3px 10px',
                            borderRadius: '999px',
                            letterSpacing: '0.04em',
                          }}>
                            {s.badge}
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Flecha curva SVG entre pasos (excepto después del último) */}
                  {i < arr.length - 1 && (
                    <div style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      paddingLeft: '14px',
                      margin: '-4px 0',
                      position: 'relative',
                      zIndex: 0,
                    }}>
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        {/* Flecha curva de arriba-izquierda a abajo-derecha */}
                        <path
                          d="M 10 4 C 10 28, 36 20, 36 42"
                          stroke="var(--color-primary)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          fill="none"
                          opacity="0.5"
                        />
                        {/* Punta de flecha */}
                        <path
                          d="M 29 38 L 36 42 L 40 34"
                          stroke="var(--color-primary)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          opacity="0.5"
                        />
                      </svg>
                    </div>
                  )}

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 7. TÚ ELIGES — 8 HABITACIONES REALES */}
        <section style={{ background: '#f8f9fc', padding: '0' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(60px,8vw,96px) 24px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Encuentra tu habitación en Barcelona</h2>
            </div>
          </div>
          <HabitacionesDestacadas sistemas={['temporal', 'coliving']} mostrarTitulo={false} />
        </section>

        {/* 8. DESCUENTOS, TAMBIÉN INCLUIDOS */}
        <section style={{ padding: 'clamp(60px,8vw,96px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <span style={{ display: 'inline-block', background: '#fff3e0', color: '#e07000', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 'var(--radius-full)', marginBottom: '20px' }}>Próximamente</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.4rem)', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '20px' }}>Descuentos, también incluidos</h2>
              <p style={{ fontSize: 'clamp(0.95rem,0.85rem + 0.5vw,1.1rem)', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '32px' }}>Estamos negociando ventajas exclusivas con gimnasios, co-workings, transporte y ocio en Barcelona para todos los inquilinos Virtuo.</p>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--color-primary)', color: 'white', fontWeight: 700, fontSize: 'var(--text-base)', padding: '13px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none' }}>Avísame cuando esté disponible <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
