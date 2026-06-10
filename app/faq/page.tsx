import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes — Viviendas Virtuo',
  description: 'Respuestas a las dudas más comunes sobre la gestión de alquiler con Viviendas Virtuo: coliving, temporal y vacacional. Para propietarios e inquilinos.',
  openGraph: {
    title: 'Preguntas frecuentes — Viviendas Virtuo',
    description: 'Resolvemos tus dudas sobre coliving, alquiler temporal y vacacional en Barcelona.',
    url: 'https://viviendas-virtuo.es/faq',
  },
};

const faqs: { categoria: string; color: string; items: { q: string; a: string }[] }[] = [
  {
    categoria: 'Para propietarios',
    color: '#0453ab',
    items: [
      {
        q: '¿Qué hace exactamente Virtuo con mi vivienda?',
        a: 'Nos encargamos de todo el ciclo: publicar el anuncio con fotos profesionales, seleccionar y verificar inquilinos, redactar contratos, cobrar rentas, gestionar incidencias y mantenimiento, y enviarte un informe mensual con los resultados. Tú solo recibes la liquidación.',
      },
      {
        q: '¿Cuánto cobráis por la gestión?',
        a: 'Nuestra comisión se aplica sobre los ingresos generados, sin cuotas fijas mensuales. El porcentaje exacto depende del sistema elegido (coliving, temporal o vacacional) y de las características de la vivienda. Te lo explicamos en detalle en la primera reunión, sin letra pequeña.',
      },
      {
        q: '¿Puedo recuperar mi vivienda cuando quiera?',
        a: 'Sí. Los contratos de gestión incluyen un preaviso razonable para poder organizar la salida de los inquilinos de forma ordenada y legal. No hay penalizaciones desproporcionadas. Si necesitas la vivienda, hablamos y lo resolvemos.',
      },
      {
        q: '¿Qué sistema me conviene más: coliving, temporal o vacacional?',
        a: 'Depende de la ubicación, el tamaño y tus objetivos. El coliving funciona muy bien con viviendas de 3+ habitaciones en zonas universitarias o con buenas comunicaciones. El temporal es ideal para pisos de 1-3 habitaciones cerca de polígonos, hospitales o universidades. El vacacional requiere licencia turística y ubicación con alta demanda. En la visita gratuita analizamos qué encaja mejor con tu caso concreto.',
      },
      {
        q: '¿Virtuo hace las reparaciones o tengo que pagarlas yo?',
        a: 'Las reparaciones por uso normal o desgaste se gestionan a través de Virtuo y su coste corre a cargo del propietario (como en cualquier arrendamiento). Lo que hacemos es encargarnos de toda la gestión: contactar con el técnico, supervisar el trabajo y descontarlo de la liquidación mensual. No tendrás que llamar a nadie ni organizar nada.',
      },
      {
        q: '¿Qué pasa si un inquilino no paga?',
        a: 'Nuestro proceso de selección minimiza este riesgo. En caso de impago, activamos el protocolo legal correspondiente y gestionamos la situación. Dependiendo del contrato, también podemos ofrecerte coberturas adicionales frente a impagos.',
      },
    ],
  },
  {
    categoria: 'Para inquilinos',
    color: '#0d9e6e',
    items: [
      {
        q: '¿Cómo puedo ver una habitación o apartamento disponible?',
        a: 'Entra en la sección de inquilinos, rellena el formulario con lo que buscas o escríbenos directamente. Te responderemos en menos de 24 horas con las opciones disponibles que se ajusten a tu perfil.',
      },
      {
        q: '¿Qué documentación necesito para alquilar?',
        a: 'En general pedimos DNI o pasaporte, número de cuenta bancaria y justificante de ingresos o situación laboral (contrato de trabajo, carta de admisión universitaria, etc.). El proceso es ágil y sin burocracia innecesaria.',
      },
      {
        q: '¿Cuánto es la fianza?',
        a: 'La fianza equivale a una mensualidad, conforme a la Ley de Arrendamientos Urbanos. Se devuelve íntegra al finalizar el contrato si la habitación o apartamento está en buen estado.',
      },
      {
        q: '¿Los suministros están incluidos en el precio?',
        a: 'En el coliving, generalmente sí: agua, luz, gas, internet y comunidad están incluidos en la renta mensual. En el alquiler temporal y vacacional depende del contrato específico. Te lo indicamos siempre en el anuncio y antes de firmar.',
      },
      {
        q: '¿A quién llamo si hay un problema en la vivienda?',
        a: 'A nosotros, directamente. Virtuo es tu punto de contacto para cualquier incidencia: avería, problema con el edificio, consulta sobre el contrato. No tienes que buscar al propietario ni esperar días para tener respuesta.',
      },
      {
        q: '¿Puedo quedarme más tiempo del acordado inicialmente?',
        a: 'En muchos casos sí. Habla con nosotros antes de que venza tu contrato y buscamos la mejor solución según la disponibilidad de la vivienda y tus necesidades.',
      },
    ],
  },
  {
    categoria: 'Sobre los sistemas',
    color: '#7c3a00',
    items: [
      {
        q: '¿En qué se diferencia el coliving del alquiler de piso compartido normal?',
        a: 'En el coliving de Virtuo cada habitación tiene su propio contrato de arrendamiento individual. El inquilino no depende de que los demás paguen ni tiene responsabilidad sobre las zonas comunes más allá de su uso correcto. Nosotros coordinamos todo lo relativo a la vivienda.',
      },
      {
        q: '¿Cuánto tiempo mínimo puedo alquilar con el sistema temporal?',
        a: 'El alquiler temporal está pensado para estancias de entre 1 y 11 meses. Es ideal para trabajadores desplazados, estudiantes de ciclos cortos o personas en una transición vital. No requiere empadronamiento ni compromiso a largo plazo.',
      },
      {
        q: '¿El apartamento vacacional necesita licencia turística?',
        a: "Sí. Para operar legalmente en el alquiler vacacional en Cataluña es imprescindible disponer de la HUTB (Habitatge d'\u00fas Tur\u00edstic de Barcelona) o licencia equivalente seg\u00fan el municipio. Asesoramos al propietario en este proceso, aunque la licencia es responsabilidad del titular de la vivienda.",
      },
      {
        q: '¿Virtuo solo trabaja en Barcelona?',
        a: 'Actualmente operamos principalmente en Barcelona y área metropolitana (Badalona, Hospitalet, Sant Adrià, etc.). Si tienes una propiedad fuera de esta zona, consúltanos igualmente, ya que estamos ampliando nuestra cobertura.',
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
          background: 'linear-gradient(135deg, #033d82 0%, #0453ab 60%, #0566cc 100%)',
          paddingTop: '140px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)', pointerEvents: 'none' }} />
          <div className="container">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6dbcdb', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Preguntas frecuentes</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '24px', maxWidth: '680px' }}>
              Resolvemos tus dudas{' '}
              <span style={{ color: '#6dbcdb' }}>sin rodeos.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '540px', lineHeight: 1.7 }}>
              Las preguntas que más nos hacen propietarios e inquilinos, respondidas con honestidad. Si no encuentras lo que buscas, escríbenos.
            </p>
          </div>
        </section>

        {/* FAQ POR CATEGORÍAS */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            {faqs.map((cat) => (
              <div key={cat.categoria} style={{ marginBottom: 'clamp(48px, 6vw, 72px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
                  <div style={{ width: '4px', height: '32px', background: cat.color, borderRadius: '2px', flexShrink: 0 }} />
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', fontWeight: 800, color: 'var(--color-text)', margin: 0 }}>{cat.categoria}</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {cat.items.map((item, i) => (
                    <details key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <summary style={{
                        padding: '20px 4px',
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
                        userSelect: 'none',
                      }}>
                        <span>{item.q}</span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                          <path d="M4 6.5L9 11.5L14 6.5" stroke={cat.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </summary>
                      <p style={{ padding: '0 4px 20px', color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, margin: 0, maxWidth: '65ch' }}>{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ¿NO ENCUENTRAS TU DUDA? */}
        <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', background: '#f0f4fa' }}>
          <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '14px' }}>
              ¿No encuentras lo que buscas?
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.7, marginBottom: '32px' }}>
              Escríbenos o llámanos. Respondemos todas las consultas en menos de 24 horas laborables.
            </p>
            <Link href="/contacto" className="btn btn-primary btn-lg">
              Hacer una pregunta
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
