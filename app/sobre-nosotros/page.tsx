'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Precio €/m² alquiler tradicional por ciudad (referencia mercado catalán 2024-2025)
const PRECIOS_CIUDAD: Record<string, { nombre: string; precioM2: number }> = {
  barcelona:  { nombre: 'Barcelona',  precioM2: 18.0 },
  badalona:   { nombre: 'Badalona',   precioM2: 13.0 },
  sabadell:   { nombre: 'Sabadell',   precioM2: 11.0 },
  terrassa:   { nombre: 'Terrassa',   precioM2: 11.0 },
  manresa:    { nombre: 'Manresa',    precioM2:  8.0 },
};

// Multiplicadores sobre renta tradicional por sistema
const MULTIPLICADORES = {
  coliving:    { factor: 1.20, label: 'Coliving',    desc: 'Habitaciones a medio-largo plazo' },
  temporal:    { factor: 1.32, label: 'Temporal',    desc: 'Estancias de 1 a 6 meses' },
  vacacional:  { factor: 1.65, label: 'Vacacional',  desc: 'Apartamento turístico completo' },
};

type Ciudad = keyof typeof PRECIOS_CIUDAD;
type Sistema = keyof typeof MULTIPLICADORES;
type TipoInmueble = 'habitacion' | 'piso';

export default function SobreNosotrosPage() {
  const [ciudad, setCiudad]           = useState<Ciudad>('barcelona');
  const [tipo, setTipo]               = useState<TipoInmueble>('piso');
  const [metros, setMetros]           = useState<number>(60);
  const [habitaciones, setHabitaciones] = useState<number>(2);
  const [sistema, setSistema]         = useState<Sistema>('coliving');

  const calculo = useMemo(() => {
    const { precioM2 } = PRECIOS_CIUDAD[ciudad];
    const metrosCalculo = tipo === 'habitacion' ? Math.max(metros, 10) : metros;
    const rentaTrad = Math.round(precioM2 * metrosCalculo);
    const { factor } = MULTIPLICADORES[sistema];
    const rentaVirtuo = Math.round(rentaTrad * factor);
    const diferenciaMes = rentaVirtuo - rentaTrad;
    const diferenciaAnio = diferenciaMes * 12;
    const porcentaje = Math.round((factor - 1) * 100);
    return { rentaTrad, rentaVirtuo, diferenciaMes, diferenciaAnio, porcentaje };
  }, [ciudad, tipo, metros, habitaciones, sistema]);

  const btnBase: React.CSSProperties = {
    padding: '10px 8px',
    borderRadius: 'var(--radius-lg)',
    fontWeight: 700,
    fontSize: 'var(--text-sm)',
    cursor: 'pointer',
    transition: 'all 180ms ease',
    textAlign: 'center',
  };

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
                  { num: '3',   label: 'Sistemas de gestión',    sub: 'Coliving, Temporal, Vacacional' },
                  { num: '+50', label: 'Viviendas gestionadas',  sub: 'En Barcelona y área metropolitana' },
                  { num: '98%', label: 'Ocupación media',        sub: 'En los últimos 12 meses' },
                  { num: '24h', label: 'Tiempo de respuesta',    sub: 'A propietarios e inquilinos' },
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
                { href: '/coliving',   color: '#0f2d5e', label: 'Coliving',    desc: 'Habitaciones a medio-largo plazo con comunidad gestionada. Estable, rentable y sin conflictos.', tag: 'Largo plazo' },
                { href: '/temporal',   color: '#008f58', label: 'Temporal',    desc: 'Estancias de 1 a 6 meses para trabajadores, estudiantes y profesionales en tránsito.', tag: '1–6 meses' },
                { href: '/vacacional', color: '#b84b00', label: 'Vacacional',  desc: 'Apartamento completo para turistas. Gestión integral: check-in, limpieza y atención al huésped.', tag: 'Turismo' },
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

        {/* ======================== CALCULADORA ======================== */}
        <section style={{ padding: 'clamp(60px,8vw,110px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Herramienta gratuita</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.8vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '14px' }}>¿Cuánto puede rendir tu vivienda?</h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-base)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
                  Introduce los datos de tu inmueble y compara la renta tradicional con lo que obtendrías gestionando con Virtuo.
                </p>
              </div>

              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 'clamp(28px,5vw,52px)', border: '1px solid var(--color-border)', boxShadow: '0 8px 40px rgba(15,45,94,0.09)' }}>

                {/* FILA 1: Ciudad + Tipo */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '24px', marginBottom: '28px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '10px' }}>Ciudad</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      {Object.entries(PRECIOS_CIUDAD).map(([key, val]) => (
                        <button key={key} onClick={() => setCiudad(key as Ciudad)} style={{ ...btnBase, border: ciudad === key ? '2px solid var(--color-primary)' : '1.5px solid var(--color-border)', background: ciudad === key ? 'var(--color-primary)' : 'var(--color-surface)', color: ciudad === key ? 'white' : 'var(--color-text)' }}>
                          {val.nombre}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '10px' }}>Tipo de inmueble</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      {([['piso', '🏠 Piso completo'], ['habitacion', '🛏 Habitación']] as const).map(([key, lbl]) => (
                        <button key={key} onClick={() => setTipo(key)} style={{ ...btnBase, padding: '12px 8px', border: tipo === key ? '2px solid var(--color-primary)' : '1.5px solid var(--color-border)', background: tipo === key ? 'var(--color-primary)' : 'var(--color-surface)', color: tipo === key ? 'white' : 'var(--color-text)' }}>
                          {lbl}
                        </button>
                      ))}
                    </div>
                    {tipo === 'piso' && (
                      <div style={{ marginTop: '16px' }}>
                        <label style={{ display: 'block', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '10px' }}>Número de habitaciones</label>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          {[1,2,3,4,5].map((n) => (
                            <button key={n} onClick={() => setHabitaciones(n)} style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-lg)', border: habitaciones === n ? '2px solid var(--color-primary)' : '1.5px solid var(--color-border)', background: habitaciones === n ? 'var(--color-primary)' : 'var(--color-surface)', color: habitaciones === n ? 'white' : 'var(--color-text)', fontWeight: 700, fontSize: 'var(--text-sm)', cursor: 'pointer', transition: 'all 180ms ease', flexShrink: 0 }}>
                              {n === 5 ? '5+' : n}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* FILA 2: Metros */}
                <div style={{ marginBottom: '28px', paddingTop: '24px', borderTop: '1px solid var(--color-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                    <label style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>{tipo === 'habitacion' ? 'Metros cuadrados de la habitación' : 'Metros cuadrados del piso'}</label>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 900, color: 'var(--color-primary)' }}>{metros} m²</span>
                  </div>
                  <input type="range" min={tipo === 'habitacion' ? 8 : 30} max={tipo === 'habitacion' ? 30 : 200} step={tipo === 'habitacion' ? 1 : 5} value={metros} onChange={(e) => setMetros(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--color-primary)', cursor: 'pointer', height: '6px' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{tipo === 'habitacion' ? '8 m²' : '30 m²'}</span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{tipo === 'habitacion' ? '30 m²' : '200 m²'}</span>
                  </div>
                </div>

                {/* FILA 3: Sistema */}
                <div style={{ marginBottom: '32px', paddingTop: '24px', borderTop: '1px solid var(--color-border)' }}>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)', marginBottom: '12px' }}>Sistema de gestión Virtuo</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
                    {(Object.entries(MULTIPLICADORES) as [Sistema, typeof MULTIPLICADORES[Sistema]][]).map(([key, val]) => (
                      <button key={key} onClick={() => setSistema(key)} style={{ ...btnBase, padding: '12px 8px', border: sistema === key ? '2px solid var(--color-primary)' : '1.5px solid var(--color-border)', background: sistema === key ? 'var(--color-primary)' : 'var(--color-surface)', color: sistema === key ? 'white' : 'var(--color-text)' }}>
                        <div style={{ fontWeight: 800, marginBottom: '2px' }}>{val.label}</div>
                        <div style={{ fontSize: 'var(--text-xs)', opacity: 0.8 }}>{val.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* RESULTADO */}
                <div style={{ background: 'linear-gradient(135deg, #0f2d5e, #1a4a8a)', borderRadius: 'var(--radius-xl)', padding: 'clamp(24px,4vw,36px)', marginBottom: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-lg)', padding: '20px 16px', border: '1px solid rgba(255,255,255,0.12)' }}>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.55)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Alquiler tradicional</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 900, color: 'rgba(255,255,255,0.75)', lineHeight: 1 }}>{calculo.rentaTrad.toLocaleString('es-ES')} €</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>al mes · referencia mercado</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.14)', borderRadius: 'var(--radius-lg)', padding: '20px 16px', border: '1px solid rgba(255,255,255,0.25)' }}>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.7)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Con Virtuo · {MULTIPLICADORES[sistema].label}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 900, color: 'white', lineHeight: 1 }}>{calculo.rentaVirtuo.toLocaleString('es-ES')} €</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>al mes estimado</div>
                    </div>
                    <div style={{ background: 'rgba(144,202,249,0.15)', borderRadius: 'var(--radius-lg)', padding: '20px 16px', border: '1px solid rgba(144,202,249,0.3)' }}>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(144,202,249,0.8)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Extra al año</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 900, color: '#90caf9', lineHeight: 1 }}>+{calculo.diferenciaAnio.toLocaleString('es-ES')} €</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(144,202,249,0.6)', marginTop: '4px' }}>+{calculo.porcentaje}% sobre alquiler trad.</div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.55)' }}>Alquiler tradicional</span>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.55)' }}>Con Virtuo</span>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '999px', height: '10px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${Math.round((1 / MULTIPLICADORES[sistema].factor) * 100)}%`, background: 'rgba(255,255,255,0.35)', borderRadius: '999px', display: 'inline-block' }} />
                      <div style={{ height: '100%', width: `${Math.round((1 - 1 / MULTIPLICADORES[sistema].factor) * 100)}%`, background: '#90caf9', borderRadius: '999px', display: 'inline-block', marginLeft: '2px' }} />
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', lineHeight: 1.65, textAlign: 'center', marginBottom: '24px' }}>
                  Estimación basada en precios de referencia del mercado de alquiler en Cataluña (2024–2025). Los resultados reales dependen de la ubicación exacta, el estado de la vivienda y las condiciones del mercado.
                </p>
                <div style={{ textAlign: 'center' }}>
                  <Link href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--color-primary)', color: 'white', fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>
                    Quiero un análisis personalizado →
                  </Link>
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
