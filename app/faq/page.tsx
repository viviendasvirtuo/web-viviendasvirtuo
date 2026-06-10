import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes — Viviendas Virtuo',
  description: 'Respuestas a las dudas más habituales sobre la gestión de alquiler con Viviendas Virtuo. Para propietarios e inquilinos en Barcelona.',
  openGraph: {
    title: 'FAQ — Viviendas Virtuo',
    description: 'Dudas frecuentes de propietarios e inquilinos sobre los sistemas Coliving, Temporal y Vacacional.',
    url: 'https://www.viviendasvirtuo.com/faq',
  },
};

const secciones = [
  {
    id: 'propietarios',
    titulo: 'Para propietarios',
    color: '#1a4a8a',
    faqs: [
      {
        p: '¿Tengo que hacer algo después de firmar con vosotros?',
        r: 'No. Una vez firmado el contrato de gestión, nosotros nos encargamos de todo: buscar inquilinos, firmar contratos, cobrar rentas, gestionar incidencias y coordinar salidas y entradas. Tú recibes el importe acordado cada mes.',
      },
      {
        p: '¿Cómo decidís qué sistema es el mejor para mi vivienda?',
        r: 'Evaluamos la ubicación, el tamaño, el estado y tus objetivos (estabilidad o rentabilidad máxima). Con esos datos te recomendamos Coliving, Temporal o Vacacional y te mostramos la previsión de ingresos de cada opción.',
      },
      {
        p: '¿Cuánto tiempo tardáis en encontrar inquilinos?',
        r: 'En Coliving y Temporal, menos de 15 días en la mayoría de casos. En Vacacional, la vivienda empieza a recibir reservas desde el primer día de publicación en plataformas.',
      },
      {
        p: '¿Qué pasa si hay daños en la vivienda?',
        r: 'Gestionamos la incidencia, evaluamos si corresponde al inquilino o al desgaste normal, y coordinamos la reparación. Tenemos proveedores de confianza con tiempos de respuesta garantizados.',
      },
      {
        p: '¿Puedo recuperar mi vivienda cuando quiera?',
        r: 'Sí, con el preaviso indicado en el contrato de gestión. Coordinamos la salida de los inquilinos y te devolvemos la vivienda en perfectas condiciones.',
      },
      {
        p: '¿Cuál es vuestra comisión de gestión?',
        r: 'Depende del sistema y el tipo de vivienda. Te lo explicamos en detalle en la primera reunión, sin compromisos. No hay costes ocultos.',
      },
    ],
  },
  {
    id: 'inquilinos',
    titulo: 'Para inquilinos',
    color: '#1a6b52',
    faqs: [
      {
        p: '¿Las habitaciones están amuebladas?',
        r: 'Sí. Todas las habitaciones incluyen cama, colchón, ropa de cama, escritorio, silla y armario. Llegas con tu maleta y ya puedes entrar.',
      },
      {
        p: '¿Los suministros están incluidos en el precio?',
        r: 'En los sistemas Coliving y Temporal, sí: luz, agua, gas e internet están incluidos. El precio que ves es el precio que pagas.',
      },
      {
        p: '¿Cuánto tiempo mínimo tengo que quedarme?',
        r: 'En Coliving, el mínimo habitual es 3 meses. En Temporal, desde 1 mes. Si tienes una situación especial, consúltanos y buscamos solución.',
      },
      {
        p: '¿Cómo se firma el contrato?',
        r: 'Todo el proceso es digital: visita presencial o virtual, firma electrónica y pago del primer mes y fianza por transferencia. Sin papeles, sin desplazamientos innecesarios.',
      },
      {
        p: '¿Qué hago si hay una avería en la habitación?',
        r: 'Nos lo comunicas por nuestro canal de incidencias y lo gestionamos. El tiempo de respuesta garantizado es de 48h para incidencias no urgentes y el mismo día para urgencias.',
      },
      {
        p: '¿Puedo ver la habitación antes de reservar?',
        r: 'Siempre. Organizamos visita presencial o videollamada con la habitación real, no con fotos de archivo. Lo que ves es lo que hay.',
      },
    ],
  },
  {
    id: 'sistemas',
    titulo: 'Sobre los sistemas',
    color: '#7c3d1a',
    faqs: [
      {
        p: '¿Cuál es la diferencia entre Coliving y Temporal?',
        r: 'El Coliving está pensado para estancias estables de 3 meses en adelante, con comunidad de residentes seleccionados y zonas comunes cuidadas. El Temporal es más flexible, desde 1 mes, orientado a trabajadores o estudiantes con una fecha de vuelta definida.',
      },
      {
        p: '¿El sistema Vacacional es solo para apartamentos turísticos?',
        r: 'Sí. El sistema Vacacional gestiona apartamentos completos en plataformas como Airbnb o Booking. No es compatible con habitaciones sueltas.',
      },
      {
        p: '¿Puedo tener una vivienda en dos sistemas a la vez?',
        r: 'No, cada vivienda opera bajo un único sistema. Si tienes varios inmuebles, cada uno puede estar en un sistema diferente según sus características.',
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{
          paddingTop: '140px',
          paddingBottom: '80px',
          background: 'linear-gradient(160deg, #0f2d5e 0%, #1a4a8a 60%, #1e5ba8 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(144,202,249,0.07) 0%, transparent 50%)',
            pointerEvents: 'none',
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inicio</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Preguntas frecuentes</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '20px',
              maxWidth: '600px',
            }}>
              Todo lo que necesitas saber antes de empezar
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'var(--text-lg)', maxWidth: '480px', lineHeight: 1.7, marginBottom: '36px' }}>
              Preguntas habituales de propietarios, inquilinos y curiosos sobre cómo funciona Viviendas Virtuo.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {secciones.map(s => (
                <a key={s.id} href={`#${s.id}`} style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  borderRadius: 'var(--radius-full)',
                  padding: '8px 18px',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}>{s.titulo}</a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        {secciones.map(sec => (
          <section key={sec.id} id={sec.id} style={{ padding: 'clamp(60px,8vw,100px) 0', background: sec.id === 'inquilinos' ? '#f0f4fa' : 'var(--color-bg)' }}>
            <div className="container">
              <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
                  <div style={{ width: '4px', height: '28px', borderRadius: '2px', background: sec.color, flexShrink: 0 }} />
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2vw,1.8rem)', fontWeight: 800, color: 'var(--color-text)', margin: 0 }}>{sec.titulo}</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {sec.faqs.map((faq, i) => (
                    <details key={i} style={{
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-xl)',
                      overflow: 'hidden',
                    }}>
                      <summary style={{
                        padding: 'clamp(16px,2vw,22px) clamp(18px,2.5vw,28px)',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-display)',
                        fontSize: 'var(--text-base)',
                        fontWeight: 700,
                        color: 'var(--color-text)',
                        listStyle: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '16px',
                      }}>
                        <span>{faq.p}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, color: 'var(--color-text-muted)' }} aria-hidden="true">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </summary>
                      <div style={{
                        padding: '0 clamp(18px,2.5vw,28px) clamp(16px,2vw,22px)',
                        borderTop: '1px solid var(--color-border)',
                      }}>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, fontSize: 'var(--text-base)', margin: '16px 0 0' }}>{faq.r}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'linear-gradient(135deg, #0f2d5e, #1a4a8a)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 800, color: 'white', marginBottom: '14px' }}>¿No encuentras tu respuesta?</h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'var(--text-base)', maxWidth: '400px', margin: '0 auto 32px', lineHeight: 1.7 }}>Escríbenos directamente y te contestamos en menos de 24h.</p>
            <Link href="/contacto" style={{ background: 'white', color: '#1a4a8a', fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Contactar con el equipo</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
