import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes — Viviendas Virtuo',
  description: 'Resolvemos las dudas más habituales sobre gestión de alquiler, coliving, alquiler temporal y vacacional en Barcelona. Propietarios e inquilinos.',
  openGraph: {
    title: 'FAQ — Viviendas Virtuo',
    description: 'Preguntas frecuentes sobre gestión de alquiler profesional en Barcelona.',
    url: 'https://viviendasvirtuo.com/faq',
  },
};

const faqs = [
  {
    categoria: 'Propietarios',
    color: '#1a4a8a',
    items: [
      {
        q: '¿Qué diferencia hay entre Virtuo y una inmobiliaria?',
        a: 'Una inmobiliaria busca un inquilino y cierra el contrato. Nosotros nos quedamos: gestionamos el contrato, el mantenimiento, las incidencias, los pagos y la relación diaria. No cobramos por captar, cobramos por gestionar.',
      },
      {
        q: '¿Tengo que hacer algo yo como propietario?',
        a: 'Básicamente, nada. Nos cedes la gestión y nosotros nos encargamos de todo: selección de inquilinos, contratos, cobros, incidencias y mantenimiento. Tú recibes el ingreso mensual y el informe.',
      },
      {
        q: '¿Cómo sé qué pasa con mi piso?',
        a: 'Recibes un informe mensual con ocupación, ingresos, gastos y estado del piso. Y siempre tienes acceso directo a tu gestor asignado si necesitas algo más.',
      },
      {
        q: '¿Qué sistema encaja mejor con mi piso?',
        a: 'Depende del piso y de tus objetivos. Un piso con varias habitaciones puede ir bien al coliving o temporal. Un apartamento céntrico, al vacacional. Lo analizamos contigo en una llamada gratuita y te damos nuestra recomendación honesta.',
      },
      {
        q: '¿Cuál es vuestra comisión?',
        a: 'Varía según el sistema de gestión y el tipo de propiedad. Te lo detallamos sin compromiso en la primera reunión. No hay costes ocultos ni letra pequeña.',
      },
      {
        q: '¿Qué pasa si el inquilino no paga?',
        a: 'Tenemos un proceso de verificación previo para minimizar el riesgo. Si aun así hay impago, gestionamos la incidencia y, si es necesario, el proceso legal. El propietario no tiene que lidiar con eso.',
      },
    ],
  },
  {
    categoria: 'Inquilinos',
    color: '#008f58',
    items: [
      {
        q: '¿Qué incluye el precio de la habitación?',
        a: 'En coliving y temporal: suministros (luz, agua, gas, internet), limpieza de zonas comunes y gestión de incidencias. En vacacional: todo lo que aparece en el anuncio. Sin sorpresas.',
      },
      {
        q: '¿Cómo es el proceso para reservar?',
        a: 'Nos contactas, te mostramos disponibilidad en menos de 24h, haces visita (presencial o virtual), firmas digitalmente y entras a vivir. Sin papeleo interminable.',
      },
      {
        q: '¿Cuánto tiempo mínimo puedo quedarme?',
        a: 'Depende del sistema: en coliving, mínimo 3 meses. En temporal, desde 1 mes. En vacacional, desde 1 noche. Cada sistema tiene su lógica.',
      },
      {
        q: '¿Puedo ver el piso antes de comprometer nada?',
        a: 'Siempre. Ofrecemos visita presencial o videollamada. No pedimos señal ni compromiso antes de ver el espacio.',
      },
      {
        q: '¿Cómo se gestionan las incidencias?',
        a: 'Hay un canal de reporte directo con tu gestor. El objetivo es resolución en menos de 48h para incidencias habituales. Si hay urgencia, tenemos respuesta en el día.',
      },
      {
        q: '¿Con quién convivo en coliving?',
        a: 'Con personas seleccionadas por nosotros: verificación de identidad, solvencia y referencias. Priorizamos perfiles compatibles y buen ambiente de convivencia.',
      },
    ],
  },
  {
    categoria: 'Los sistemas',
    color: '#7c3a00',
    items: [
      {
        q: '¿Qué es exactamente el coliving?',
        a: 'Alquiler de habitaciones privadas en un piso compartido, con zonas comunes bien equipadas. Contratos de 3 meses en adelante. Suministros incluidos. Perfil: jóvenes profesionales, estudiantes de máster, personas que valoran la comunidad.',
      },
      {
        q: '¿En qué se diferencia el temporal del coliving?',
        a: 'El temporal está pensado para estancias de 1 a 6 meses con mayor flexibilidad. El coliving apunta a un perfil más estable y de más duración (3+ meses). Ambos incluyen suministros y gestión profesional.',
      },
      {
        q: '¿El vacacional es solo para turistas?',
        a: 'Principalmente sí: apartamento completo para viajes y estancias cortas. Pero también lo usan profesionales en visitas puntuales que prefieren la privacidad de un apartamento completo.',
      },
      {
        q: '¿Puedo cambiar de sistema si mis necesidades cambian?',
        a: 'Lo evaluamos caso a caso. Si acabas tu estancia temporal y quieres quedarte más tiempo, podemos ver si hay opción de coliving disponible. Siempre hablamos con honestidad sobre lo que hay.',
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
        <section style={{ background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 100%)', paddingTop: '140px', paddingBottom: '72px' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inicio</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Preguntas frecuentes</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '20px', maxWidth: '620px' }}>
              Preguntas frecuentes
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '520px', lineHeight: 1.7 }}>
              Todo lo que propietarios e inquilinos nos preguntan antes de empezar a trabajar juntos.
            </p>
          </div>
        </section>

        {/* FAQs POR CATEGORÍA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container" style={{ maxWidth: '860px' }}>
            {faqs.map((cat) => (
              <div key={cat.categoria} style={{ marginBottom: '64px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                  <div style={{ width: '4px', height: '28px', background: cat.color, borderRadius: '2px', flexShrink: 0 }} />
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--color-text)', margin: 0 }}>{cat.categoria}</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {cat.items.map((item, i) => (
                    <details
                      key={i}
                      style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}
                    >
                      <summary style={{
                        padding: '20px 24px',
                        fontWeight: 600,
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-text)',
                        cursor: 'pointer',
                        listStyle: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '16px',
                        userSelect: 'none',
                      }}>
                        <span>{item.q}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, color: cat.color }} aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
                      </summary>
                      <div style={{ padding: '0 24px 20px', borderTop: '1px solid var(--color-border)' }}>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.75, margin: '16px 0 0', maxWidth: '100%' }}>{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ¿NO ENCUENTRAS TU RESPUESTA? */}
        <section style={{ padding: 'clamp(40px,6vw,80px) 0', background: '#f0f4fa' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '560px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2vw,1.8rem)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '12px' }}>¿No encuentras tu respuesta?</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.7, marginBottom: '28px' }}>Escríbenos directamente. Respondemos en menos de 24 horas.</p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--color-primary)', color: 'white', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Contactar →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
