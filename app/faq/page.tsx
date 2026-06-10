'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const faqs: { categoria: string; color: string; preguntas: { q: string; a: string }[] }[] = [
  {
    categoria: 'Para propietarios',
    color: '#1a4a8a',
    preguntas: [
      {
        q: '¿Cuánto me cobra Viviendas Virtuo?',
        a: 'Trabajamos con una comisión sobre los ingresos generados. No hay costes fijos mensuales ni penalizaciones. Si la vivienda no genera ingresos, nosotros tampoco cobramos. El porcentaje exacto depende del sistema elegido y las características de la vivienda — te lo detallamos en el análisis gratuito inicial.',
      },
      {
        q: '¿Tengo que hacer algo yo como propietario?',
        a: 'Prácticamente nada. Nos encargamos de todo: publicación, selección de inquilinos, contratos, cobros, incidencias y mantenimiento. Tú recibes un informe mensual con los ingresos y el estado de tu vivienda. Si hay una decisión importante (como una renovación mayor), te consultamos antes de actuar.',
      },
      {
        q: '¿Qué pasa si hay un problema con un inquilino?',
        a: 'Lo gestionamos nosotros. Desde una avería hasta una situación de impago — actuamos de inmediato y te mantenemos informado. Nuestro proceso de selección de inquilinos minimiza estos riesgos desde el principio.',
      },
      {
        q: '¿Puedo recuperar mi vivienda cuando quiera?',
        a: 'Sí. El contrato de gestión tiene un preaviso razonable para poder organizar la salida de los inquilinos correctamente. Te explicamos las condiciones exactas antes de firmar nada.',
      },
      {
        q: '¿Qué tipo de vivienda es ideal para trabajar con Virtuo?',
        a: 'Trabajamos con pisos de 2 habitaciones en adelante en Barcelona y área metropolitana. Para coliving, lo ideal son viviendas de 3+ habitaciones con zonas comunes. Para vacacional, necesitamos que la vivienda cuente con licencia turística o podamos gestionarla.',
      },
      {
        q: '¿Con qué sistema voy a ganar más?',
        a: 'Depende del tipo de vivienda, ubicación y situación personal del propietario. El vacacional suele dar más rentabilidad bruta, pero requiere licencia y tiene más variabilidad estacional. El coliving da estabilidad y alta rentabilidad sin los requisitos del vacacional. Te hacemos el análisis y te recomendamos según tu caso.',
      },
    ],
  },
  {
    categoria: 'Para inquilinos',
    color: '#0d3b2e',
    preguntas: [
      {
        q: '¿Cómo puedo ver una habitación o apartamento disponible?',
        a: 'A través de nuestra página de contacto puedes indicarnos qué tipo de alojamiento buscas, cuándo necesitas entrar y tu presupuesto. Te informamos de las disponibilidades actuales y organizamos una visita.',
      },
      {
        q: '¿Qué documentación necesito para alquilar?',
        a: 'DNI o pasaporte en vigor, y documentación que acredite solvencia económica: nóminas, contrato de trabajo o equivalente. Para estudiantes, una matrícula y garantía de un avalista. Lo valoramos caso a caso.',
      },
      {
        q: '¿Cuánto es la fianza?',
        a: 'La fianza es de una mensualidad según la normativa vigente para arrendamientos de vivienda habitual. En el sistema vacacional no aplica fianza en los mismos términos, al tratarse de alquiler turístico.',
      },
      {
        q: '¿Qué incluye el precio en coliving?',
        a: 'La habitación con su mobiliario, uso de zonas comunes (cocina, salón, baño compartido según vivienda), y en la mayoría de casos agua, luz, internet y comunidad incluidos en la mensualidad. Se especifica claramente en cada oferta.',
      },
      {
        q: '¿Puedo quedarme a largo plazo?',
        a: 'En coliving y temporal sí, con contratos de duración determinada renovables. En vacacional los plazos son los propios del alquiler turístico. Si tienes una necesidad especial de continuidad, consúltanos y buscamos la mejor solución.',
      },
      {
        q: '¿Con quién trato si hay un problema en la vivienda?',
        a: 'Directamente con el equipo de Virtuo. Somos el punto de contacto único: para incidencias, reparaciones o cualquier consulta. No tendrás que hablar con el propietario.',
      },
    ],
  },
  {
    categoria: 'Sobre los sistemas',
    color: '#7c3a00',
    preguntas: [
      {
        q: '¿Qué diferencia hay entre coliving, temporal y vacacional?',
        a: 'Coliving: alquiler por habitaciones en una vivienda compartida, contratos de media-larga duración (mínimo 1-3 meses), enfocado a perfiles jóvenes y profesionales. Temporal: habitaciones o pisos para estancias de semanas o pocos meses, ideal para trabajadores desplazados o estudiantes de ciclos cortos. Vacacional: apartamento completo para turistas, gestión en plataformas como Airbnb y Booking, máxima rentabilidad.',
      },
      {
        q: '¿Puedo cambiar de sistema si no me convence el primero?',
        a: 'Sí, con el preaviso correspondiente. Analizamos la situación juntos y hacemos la transición de la forma más organizada posible, minimizando el tiempo sin ingresos.',
      },
      {
        q: '¿Necesito licencia turística para el sistema vacacional?',
        a: 'Sí, el alquiler vacacional en Barcelona requiere licencia de apartamento turístico (HUT). Si ya tienes la licencia, podemos empezar inmediatamente. Si no la tienes, te asesoramos sobre el proceso, aunque actualmente el consistorio barcelonés tiene restringida la emisión de nuevas licencias.',
      },
      {
        q: '¿Gestionáis en toda Barcelona o solo ciertas zonas?',
        a: 'Operamos en toda Barcelona y municipios del área metropolitana: Badalona, Hospitalet, Cornellà, Sant Adrià, Santa Coloma y otros. Consúltanos si tienes una vivienda en una zona específica y te confirmamos cobertura.',
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--color-text)', lineHeight: 1.4 }}>{q}</span>
        <span style={{
          flexShrink: 0,
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: open ? 'var(--color-primary)' : 'var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d={open ? 'M2 6h8' : 'M6 2v8M2 6h8'}
              stroke={open ? 'white' : 'var(--color-text-muted)'}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      {open && (
        <div style={{ paddingBottom: '20px' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, margin: 0, maxWidth: '72ch' }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{
          background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 60%, #1e5aa8 100%)',
          paddingTop: '140px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div className="container">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#90caf9', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Preguntas frecuentes</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '24px', maxWidth: '680px' }}>
              Resolvemos tus dudas
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '540px', lineHeight: 1.7 }}>
              Las preguntas más habituales de propietarios e inquilinos. Si no encuentras lo que buscas, escríbenos directamente.
            </p>
          </div>
        </section>

        {/* CONTENIDO FAQ */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: 'var(--color-bg)' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
              {faqs.map((cat) => (
                <div key={cat.categoria}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: cat.color, flexShrink: 0 }} />
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--color-text)', margin: 0 }}>
                      {cat.categoria}
                    </h2>
                  </div>
                  <div style={{ height: '2px', background: cat.color, borderRadius: '1px', marginBottom: '32px', opacity: 0.8 }} />
                  <div>
                    {cat.preguntas.map((p) => (
                      <FaqItem key={p.q} q={p.q} a={p.a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — ¿No encuentras respuesta? */}
        <section style={{ padding: 'clamp(60px, 8vw, 80px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(40px, 5vw, 64px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '20px',
            }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'white', margin: 0 }}>
                ¿No encuentras tu pregunta?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-base)', maxWidth: '440px', lineHeight: 1.7, margin: 0 }}>
                Escríbenos o llámanos. Respondemos en menos de 24 horas y sin compromiso.
              </p>
              <Link href="/contacto" className="btn btn-primary btn-lg" style={{ background: 'white', color: '#1a4a8a', marginTop: '8px' }}>
                Contactar con Virtuo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
