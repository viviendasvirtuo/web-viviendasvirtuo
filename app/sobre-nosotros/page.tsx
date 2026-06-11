'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SobreNosotrosPage() {
  const [rentaMensual, setRentaMensual] = useState(800);
  const [sistema, setSistema] = useState<'coliving' | 'temporal' | 'vacacional'>('coliving');

  const multiplicadores = { coliving: 1.18, temporal: 1.28, vacacional: 1.55 };
  const etiquetas = { coliving: 'Coliving', temporal: 'Temporal', vacacional: 'Vacacional' };
  const estimado = Math.round(rentaMensual * multiplicadores[sistema]);
  const diferencia = estimado - rentaMensual;

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d5e 0%, #1a4a8a 100%)', paddingTop: '140px', paddingBottom: '80px' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inicio</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Sobre nosotros</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#90caf9', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Viviendas Virtuo</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '20px', maxWidth: '700px' }}>
              No somos una inmobiliaria.<br />
              <span style={{ color: '#90caf9' }}>Somos gestión de verdad.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-lg)', maxWidth: '560px', lineHeight: 1.7 }}>
              Viviendas Virtuo nació para resolver lo que las inmobiliarias no resuelven: la gestión continua, el día a día, el detalle que marca la diferencia para propietarios e inquilinos.
            </p>
          </div>
        </section>

        {/* QUÉ SOMOS */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px,100%),1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
              <div>
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Quiénes somos</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>Una empresa de gestión profesional de alquiler</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '16px', fontSize: 'var(--text-base)' }}>
                  Gestionamos viviendas en Barcelona bajo tres sistemas distintos: coliving, temporal y vacacional. Cada sistema tiene su lógica, su público y su operativa. Nosotros la dominamos.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, fontSize: 'var(--text-base)' }}>
                  Para el propietario, somos el socio que convierte su piso en rentabilidad sin dolores de cabeza. Para el inquilino, somos el gestor que siempre está disponible y cumple lo que promete.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { num: '3', label: 'Sistemas de gestión', sub: 'Coliving, Temporal, Vacacional' },
                  { num: '+50', label: 'Viviendas gestionadas', sub: 'En Barcelona y área metropolitana' },
                  { num: '98%', label: 'Ocupación media', sub: 'En los últimos 12 meses' },
                  { num: '24h', label: 'Tiempo de respuesta', sub: 'A propietarios e inquilinos' },
                ].map((s, i) => (
                  <div key={i} style={{ background: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-surface)', borderRadius: 'var(--radius-xl)', padding: '24px 20px', border: i % 2 !== 0 ? '1px solid var(--color-border)' : 'none' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 900, color: i % 2 === 0 ? 'white' : 'var(--color-primary)', lineHeight: 1, marginBottom: '6px' }}>{s.num}</div>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: i % 2 === 0 ? 'rgba(255,255,255,0.9)' : 'var(--color-text)', marginBottom: '4px' }}>{s.label}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: i % 2 === 0 ? 'rgba(255,255,255,0.65)' : 'var(--color-text-muted)' }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAS */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Cómo trabajamos</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Lo que nos diferencia</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '24px' }}>
              {[
                { title: 'Gestión integral, no intermediación', desc: 'No ponemos a propietarios e inquilinos en contacto y nos vamos. Nos quedamos. Gestionamos el contrato, el mantenimiento, las incidencias y la relación diaria.' },
                { title: 'Tres sistemas, una sola empresa', desc: 'Coliving para convivencia organizada. Temporal para estancias cortas. Vacacional para máxima rentabilidad turística. Cada piso va al sistema que le va mejor.' },
                { title: 'Transparencia total con el propietario', desc: 'Informe mensual de ocupación, ingresos y gastos. Sin sorpresas, sin letra pequeña. El propietario sabe exactamente qué pasa con su vivienda.' },
                { title: 'Inquilinos verificados', desc: 'Proceso de selección propio: verificación de identidad, solvencia y referencias. Priorizamos la calidad de convivencia sobre la velocidad de cierre.' },
                { title: 'Equipo accesible', desc: 'Hay una persona real detrás de cada vivienda. Con nombre. Con teléfono. Que coge las llamadas y resuelve los problemas.' },
                { title: 'Barcelona como especialidad', desc: 'Conocemos el mercado barcelonés en profundidad: sus barrios, su normativa, su demanda real. No gestionamos en abstracto.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '28px 24px', border: '1px solid var(--color-border)' }}>
                  <div style={{ width: '32px', height: '3px', background: 'var(--color-primary)', borderRadius: '2px', marginBottom: '16px' }} />
                  <h3 style={{ fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text)', marginBottom: '10px', lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SISTEMAS */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)' }}>Nuestros tres sistemas</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '20px' }}>
              {[
                { href: '/coliving', color: '#0f2d5e', label: 'Coliving', desc: 'Habitaciones a medio-largo plazo con comunidad gestionada. Estable, rentable y sin conflictos.', tag: 'Largo plazo' },
                { href: '/temporal', color: '#008f58', label: 'Temporal', desc: 'Estancias de 1 a 6 meses para trabajadores, estudiantes y profesionales en tránsito.', tag: '1–6 meses' },
                { href: '/vacacional', color: '#b84b00', label: 'Vacacional', desc: 'Apartamento completo para turistas. Gestión integral: check-in, limpieza y atención al huésped.', tag: 'Turismo' },
              ].map((s) => (
                <div key={s.href} style={{ background: s.color, borderRadius: 'var(--radius-xl)', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '999px', padding: '4px 14px', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'white', alignSelf: 'flex-start' }}>{s.tag}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 800, color: 'white', lineHeight: 1.1 }}>{s.label}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'var(--text-sm)', lineHeight: 1.65, flex: 1 }}>{s.desc}</p>
                  <Link href={s.href} style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 'var(--radius-lg)', padding: '10px 20px', color: 'white', fontSize: 'var(--text-sm)', fontWeight: 600, textDecoration: 'none', alignSelf: 'flex-start' }}>Ver sistema →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALCULADORA DE RENTABILIDAD */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Herramienta gratuita</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '12px' }}>¿Cuánto podría rendir tu vivienda?</h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', lineHeight: 1.7 }}>Ajusta los parámetros y obtén una estimación orientativa según el sistema de gestión.</p>
              </div>

              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 'clamp(28px,5vw,48px)', border: '1px solid var(--color-border)', boxShadow: '0 8px 32px rgba(15,45,94,0.07)' }}>

                {/* Selector de sistema */}
                <div style={{ marginBottom: '32px' }}>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '12px' }}>Sistema de gestión</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
                    {(['coliving', 'temporal', 'vacacional'] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => setSistema(s)}
                        style={{
                          padding: '10px 8px',
                          borderRadius: 'var(--radius-lg)',
                          border: sistema === s ? '2px solid var(--color-primary)' : '1.5px solid var(--color-border)',
                          background: sistema === s ? 'var(--color-primary)' : 'var(--color-surface)',
                          color: sistema === s ? 'white' : 'var(--color-text)',
                          fontWeight: 700,
                          fontSize: 'var(--text-sm)',
                          cursor: 'pointer',
                          transition: 'all 180ms ease',
                        }}
                      >
                        {etiquetas[s]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slider renta */}
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                    <label style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>Renta mensual actual (o estimada)</label>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 900, color: 'var(--color-primary)' }}>{rentaMensual.toLocaleString('es-ES')} €</span>
                  </div>
                  <input
                    type="range"
                    min={400}
                    max={3000}
                    step={50}
                    value={rentaMensual}
                    onChange={(e) => setRentaMensual(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--color-primary)', cursor: 'pointer', height: '6px' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>400 €</span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>3.000 €</span>
                  </div>
                </div>

                {/* Resultado */}
                <div style={{ background: 'linear-gradient(135deg, #0f2d5e, #1a4a8a)', borderRadius: 'var(--radius-lg)', padding: '24px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.6)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Estimación con Virtuo</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 900, color: 'white', lineHeight: 1 }}>{estimado.toLocaleString('es-ES')} €</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>al mes · sistema {etiquetas[sistema].toLowerCase()}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>Diferencia estimada</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 900, color: '#90caf9', lineHeight: 1 }}>+{diferencia.toLocaleString('es-ES')} €</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>más al mes</div>
                  </div>
                </div>

                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '16px', lineHeight: 1.6, textAlign: 'center' }}>
                  Estimación orientativa. Los resultados reales dependen de la vivienda, la zona y las condiciones del mercado. Contáctanos para un análisis personalizado.
                </p>

                <div style={{ marginTop: '24px', textAlign: 'center' }}>
                  <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--color-primary)', color: 'white', fontWeight: 700, padding: '13px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Quiero un análisis real →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA — HABLAMOS */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'linear-gradient(135deg, #0f2d5e, #1a4a8a)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>¿Hablamos?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>Si tienes una vivienda en Barcelona o buscas alojamiento gestionado, contáctanos.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/propietarios" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: '#0f2d5e', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Soy propietario</Link>
              <Link href="/inquilinos" style={{ display: 'inline-flex', alignItems: 'center', border: '1.5px solid rgba(255,255,255,0.5)', color: 'white', background: 'rgba(255,255,255,0.08)', fontWeight: 600, padding: '14px 28px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Busco alojamiento</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
