import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Inquilinos — Viviendas Virtuo',
  description: 'Encuentra tu habitación ideal en Barcelona. Coliving, alquiler temporal y vacacional gestionados por profesionales. Entra y vive.',
};

const SISTEMAS = [
  {
    label: 'Coliving',
    subtitle: 'Habitación a largo plazo',
    desc: 'Comunidad de convivencia, suministros incluidos, zonas comunes cuidadas. Ideal si te quedas 3+ meses.',
    href: '/coliving',
    color: '#0453ab',
    colorLight: '#e8f0fb',
    colorBar: '#0453ab',
    tag: 'Medio-largo plazo',
  },
  {
    label: 'Temporal',
    subtitle: 'Estancia de 1 a 6 meses',
    desc: 'Perfecto para proyectos, másters o rotaciones. Flexibilidad sin sacrificar comodidad.',
    href: '/temporal',
    color: '#008f58',
    colorLight: '#e6f7f0',
    colorBar: '#00c47a',
    tag: 'Corta duración',
  },
  {
    label: 'Vacacional',
    subtitle: 'Apartamento completo',
    desc: 'Para turistas o visitas puntuales. Apartamento íntegro, equipado y listo para disfrutar.',
    href: '/vacacional',
    color: '#b45309',
    colorLight: '#fef3e2',
    colorBar: '#f59e0b',
    tag: 'Días / semanas',
  },
];

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
              <a href="#opciones" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#1a2540', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver opciones disponibles</a>
              <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Contáctanos</Link>
            </div>
          </div>
        </section>

        {/* ELIGE TU OPCIÓN */}
        <section id="opciones" style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Nuestros sistemas</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>¿Qué tipo de alojamiento necesitas?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px,100%), 1fr))', gap: '24px' }}>
              {SISTEMAS.map((op) => (
                <div key={op.label} style={{
                  background: 'white',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 32px ${op.color}22`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                }}
                >
                  {/* Barra de color superior */}
                  <div style={{ height: '6px', background: op.colorBar, flexShrink: 0 }} />

                  <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                    {/* Tag de duración */}
                    <span style={{
                      display: 'inline-block',
                      background: op.colorLight,
                      color: op.color,
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      alignSelf: 'flex-start',
                    }}>{op.tag}</span>

                    {/* Label sistema */}
                    <p style={{ color: op.color, fontWeight: 800, fontSize: 'var(--text-lg)', fontFamily: 'var(--font-display)', margin: 0, lineHeight: 1.1 }}>{op.label}</p>

                    {/* Subtítulo */}
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>{op.subtitle}</h3>

                    {/* Descripción */}
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{op.desc}</p>

                    {/* CTA */}
                    <Link href={op.href} style={{
                      marginTop: 'auto',
                      paddingTop: '16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: op.color,
                      color: 'white',
                      fontWeight: 700,
                      fontSize: 'var(--text-sm)',
                      padding: '10px 20px',
                      borderRadius: 'var(--radius-lg)',
                      textDecoration: 'none',
                      alignSelf: 'flex-start',
                    }}>Ver {op.label.toLowerCase()} →</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LA DIFERENCIA VIRTUO */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>La diferencia Virtuo</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Alquilar debería ser fácil</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '24px' }}>
              {[
                { icon: '✅', title: 'Pisos verificados', desc: 'Visitamos y auditamos cada vivienda antes de ofrecerla. Sin sorpresas el día de entrada.' },
                { icon: '📋', title: 'Contratos claros', desc: 'Sin cláusulas abusivas. Todo por escrito, conforme a la normativa catalana vigente.' },
                { icon: '🔧', title: 'Mantenimiento real', desc: 'Incidencias atendidas en menos de 24h. Un equipo de verdad detrás de cada piso.' },
                { icon: '💸', title: 'Precio todo incluido', desc: 'Luz, agua, gas, wifi e IBI incluidos. Pagas una sola cuota, sin sustos a fin de mes.' },
              ].map((item) => (
                <div key={item.title} style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '28px 24px', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '14px' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Cómo funciona</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Entrar es sencillo</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '24px' }}>
              {[
                { paso: '01', title: 'Elige tu opción', desc: 'Selecciona el sistema que mejor encaja con tu estancia y necesidades.' },
                { paso: '02', title: 'Contacta con nosotros', desc: 'Cuéntanos qué buscas. Respondemos en menos de 2 horas.' },
                { paso: '03', title: 'Visita y confirma', desc: 'Te enseñamos el piso, resolvemos dudas y preparamos el contrato.' },
                { paso: '04', title: 'Entra a vivir', desc: 'Recibe las llaves, conéctate al wifi y empieza a disfrutar tu nuevo hogar.' },
              ].map((s) => (
                <div key={s.paso} style={{ position: 'relative', paddingTop: '16px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 900, color: 'var(--color-primary)', opacity: 0.15, lineHeight: 1, marginBottom: '8px' }}>{s.paso}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'linear-gradient(135deg, #1a2540 0%, #2a3f6e 100%)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>¿Listo para encontrar tu hogar?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>Escríbenos y te ayudamos a encontrar la opción perfecta para ti en Barcelona.</p>
            <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: '#1a2540', fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Contactar ahora</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
