'use client';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from '@/components/Footer';
import { useState } from 'react';

const valores = [
  { titulo: 'Transparencia total', texto: 'Sin letra pequeña, sin sorpresas. Antes de firmar cualquier contrato sabes exactamente qué incluye y qué no.' },
  { titulo: 'Respuesta en 24h', texto: 'Propietarios e inquilinos tienen siempre un interlocutor real. Las incidencias se resuelven, no se ignoran.' },
  { titulo: 'Rentabilidad real', texto: 'Optimizamos cada vivienda para el sistema que más renta: Coliving, Temporal o Vacacional. Sin ideología, con datos.' },
  { titulo: 'Gestión sin fricciones', texto: 'El propietario no tiene que preocuparse de nada. Contratos, cobros, incidencias y rotaciones: lo gestionamos nosotros.' },
];

const hitos = [
  { año: '2019', texto: 'Primera vivienda en gestión en Badalona' },
  { año: '2021', texto: 'Lanzamiento del sistema Temporal para trabajadores desplazados' },
  { año: '2022', texto: 'Incorporación del sistema Vacacional en Barcelona ciudad' },
  { año: '2024', texto: 'Más de 40 viviendas gestionadas en el área metropolitana' },
  { año: '2025', texto: 'Digitalización completa: contratos, pagos e incidencias online' },
];

const testimonios = [
  {
    nombre: 'María G.',
    ciudad: 'Badalona',
    sistema: 'Coliving',
    texto: 'Llevaba dos años con el piso semivacío, gestionándolo yo misma y perdiendo tiempo y dinero. Desde que Virtuo lo gestiona cobro puntual cada mes y no tengo que hacer absolutamente nada.',
    antes: '650 €/mes',
    despues: '1.050 €/mes',
  },
  {
    nombre: 'Jordi M.',
    ciudad: 'Barcelona',
    sistema: 'Vacacional',
    texto: 'Tenía el piso en alquiler tradicional. Me propusieron el sistema Vacacional y en el primer mes ya había superado lo que ganaba en tres meses antes. El cambio fue inmediato.',
    antes: '900 €/mes',
    despues: '1.800 €/mes',
  },
  {
    nombre: 'Laia P.',
    ciudad: 'Badalona',
    sistema: 'Temporal',
    texto: 'Lo que más me convenció fue que tienen respuesta real. No un chatbot, no un formulario. Una persona. Eso para mí vale más que cualquier porcentaje de rentabilidad.',
    antes: '700 €/mes',
    despues: '980 €/mes',
  },
];

const proceso = [
  { dia: 'Día 1', titulo: 'Nos llamas o escribes', desc: 'Cuéntanos tu vivienda en 5 minutos. Sin compromiso, sin visita todavía.' },
  { dia: 'Día 3', titulo: 'Visita y propuesta', desc: 'Visitamos la vivienda y te presentamos qué sistema encaja mejor con estimación de ingresos.' },
  { dia: 'Día 7', titulo: 'Firma del contrato', desc: 'Todo digital. Firmas desde el móvil, sin desplazamientos ni papeles.' },
  { dia: 'Día 15', titulo: 'Primeros inquilinos', desc: 'En Coliving y Temporal, tiempo medio de 10-15 días hasta la primera ocupación.' },
  { dia: 'Mes 1', titulo: 'Primer ingreso', desc: 'Recibes el importe acordado en tu cuenta. A partir de aquí, tú no tienes que hacer nada más.' },
];

// Rangos de rentabilidad por zona y sistema (€/hab/mes)
const RANGOS: Record<string, Record<string, [number, number]>> = {
  badalona: {
    coliving:   [380, 480],
    temporal:   [420, 550],
    vacacional: [600, 900],
    tradicional:[300, 400],
  },
  barcelona: {
    coliving:   [500, 650],
    temporal:   [550, 720],
    vacacional: [900, 1400],
    tradicional:[400, 600],
  },
  otra: {
    coliving:   [320, 430],
    temporal:   [360, 480],
    vacacional: [500, 750],
    tradicional:[280, 380],
  },
};

function calcHabs(m2: number): number {
  if (m2 < 50) return 1;
  if (m2 < 80) return 2;
  if (m2 < 110) return 3;
  if (m2 < 140) return 4;
  return 5;
}

function Calculadora() {
  const [m2, setM2] = useState(80);
  const [zona, setZona] = useState<'badalona'|'barcelona'|'otra'>('badalona');

  const habs = calcHabs(m2);
  const rangos = RANGOS[zona];
  const tradicional = Math.round((rangos.tradicional[0] + rangos.tradicional[1]) / 2);
  const coliving    = Math.round(habs * (rangos.coliving[0]   + rangos.coliving[1])   / 2);
  const temporal    = Math.round(habs * (rangos.temporal[0]   + rangos.temporal[1])   / 2);
  const vacacional  = Math.round(habs * (rangos.vacacional[0] + rangos.vacacional[1]) / 2);

  const sistemas = [
    { id: 'coliving',   label: 'Coliving',   color: '#1a4a8a', importe: coliving,   pct: Math.round((coliving   / tradicional - 1) * 100) },
    { id: 'temporal',   label: 'Temporal',   color: '#1a6b52', importe: temporal,   pct: Math.round((temporal   / tradicional - 1) * 100) },
    { id: 'vacacional', label: 'Vacacional', color: '#7c3d1a', importe: vacacional, pct: Math.round((vacacional / tradicional - 1) * 100) },
  ];
  const maxImporte = Math.max(coliving, temporal, vacacional);

  return (
    <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: '0 8px 40px rgba(13,27,46,0.08)' }}>
      {/* Cabecera */}
      <div style={{ background: 'linear-gradient(135deg, #0f2d5e, #1a4a8a)', padding: 'clamp(24px,3vw,36px)' }}>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Calculadora de rentabilidad</p>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem,2vw,1.8rem)', fontWeight: 800, color: 'white', margin: 0 }}>¿Cuánto puede generar tu vivienda?</h3>
      </div>

      {/* Inputs */}
      <div style={{ padding: 'clamp(24px,3vw,36px)', borderBottom: '1px solid var(--color-border)', display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-end' }}>
        {/* Metros */}
        <div style={{ flex: '1 1 200px' }}>
          <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text)', marginBottom: '8px' }}>
            Superficie: <strong style={{ color: 'var(--color-primary)' }}>{m2} m²</strong>
            <span style={{ fontWeight: 400, color: 'var(--color-text-muted)', marginLeft: '6px' }}>({habs} hab. estimadas)</span>
          </label>
          <input
            type="range" min={30} max={200} step={5} value={m2}
            onChange={e => setM2(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#1a4a8a', cursor: 'pointer', height: '4px' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '4px' }}>
            <span>30 m²</span><span>200 m²</span>
          </div>
        </div>
        {/* Zona */}
        <div style={{ flex: '1 1 180px' }}>
          <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text)', marginBottom: '8px' }}>Ubicación</label>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {(['badalona', 'barcelona', 'otra'] as const).map(z => (
              <button key={z} onClick={() => setZona(z)} style={{
                padding: '7px 14px', borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-sm)', fontWeight: 600, cursor: 'pointer',
                border: zona === z ? 'none' : '1px solid var(--color-border)',
                background: zona === z ? '#1a4a8a' : 'var(--color-surface)',
                color: zona === z ? 'white' : 'var(--color-text-muted)',
                transition: 'all 180ms',
              }}>{z.charAt(0).toUpperCase() + z.slice(1)}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div style={{ padding: 'clamp(24px,3vw,36px)' }}>
        {/* Alquiler tradicional — referencia */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', padding: '14px 18px', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>Alquiler tradicional (referencia)</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--color-text-muted)' }}>{tradicional.toLocaleString('es-ES')} €/mes</span>
        </div>

        {/* Barras de sistemas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {sistemas.map(s => (
            <div key={s.id}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text)' }}>{s.label}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'white', background: s.color, borderRadius: 'var(--radius-full)', padding: '2px 9px' }}>+{s.pct}%</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 900, color: s.color }}>{s.importe.toLocaleString('es-ES')} €/mes</span>
                </div>
              </div>
              <div style={{ height: '8px', background: 'var(--color-surface)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(s.importe / maxImporte) * 100}%`, background: s.color, borderRadius: 'var(--radius-full)', transition: 'width 400ms cubic-bezier(0.16,1,0.3,1)' }} />
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '20px', lineHeight: 1.5 }}>
          * Estimación orientativa basada en datos de mercado del área metropolitana de Barcelona. El resultado real depende del estado, ubicación exacta y demanda de cada vivienda.
        </p>

        <a href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '20px', background: '#1a4a8a', color: 'white', fontWeight: 700, padding: '13px 24px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>
          Quiero una estimación real para mi vivienda →
        </a>
      </div>
    </div>
  );
}

export default function SobreNosotrosPage() {
  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(160deg, #0f2d5e 0%, #1a4a8a 60%, #1e5ba8 100%)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(144,202,249,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.04) 0%, transparent 50%)', pointerEvents: 'none' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>Inicio</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>Sobre nosotros</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '20px', maxWidth: '640px' }}>
              Gestionamos viviendas como si fueran nuestras
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lg)', maxWidth: '520px', lineHeight: 1.7, marginBottom: '40px' }}>
              Viviendas Virtuo no es una inmobiliaria. Somos un equipo especializado en gestión profesional de alquiler, con tres sistemas adaptados a cada tipo de vivienda y propietario.
            </p>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[{ num: '+40', label: 'Viviendas gestionadas' }, { num: '+200', label: 'Inquilinos atendidos' }, { num: '98%', label: 'Propietarios satisfechos' }].map((s, i, arr) => (
                <div key={i} style={{ paddingRight: i < arr.length - 1 ? '32px' : 0, borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 900, color: 'white', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)', marginTop: '6px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALCULADORA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(500px,100%), 1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
              <div>
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Rentabilidad real</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  ¿Cuánto estás dejando de ganar cada mes?
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, fontSize: 'var(--text-base)', marginBottom: '24px' }}>
                  La mayoría de propietarios gana entre un 30% y un 80% menos de lo que podría. La diferencia está en el sistema de alquiler que usas, no en la vivienda.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Sin compromiso — la consulta inicial es gratuita', 'Propuesta personalizada en 48h', 'Comparativa real con tu situación actual'].map((t, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a4a8a" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Calculadora />
            </div>
          </div>
        </section>

        {/* COMPARATIVA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>No somos una inmobiliaria</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>La diferencia está en lo que hacemos después de firmar</h2>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-muted)', borderBottom: '2px solid var(--color-border)', width: '36%' }}></th>
                    <th style={{ textAlign: 'center', padding: '14px 16px', fontSize: 'var(--text-sm)', fontWeight: 700, color: 'white', background: '#1a4a8a', borderRadius: 'var(--radius-md) var(--radius-md) 0 0' }}>Virtuo</th>
                    <th style={{ textAlign: 'center', padding: '14px 16px', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-muted)', borderBottom: '2px solid var(--color-border)' }}>Inmobiliaria</th>
                    <th style={{ textAlign: 'center', padding: '14px 16px', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-muted)', borderBottom: '2px solid var(--color-border)' }}>Gestión propia</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Busca inquilinos', true, true, false],
                    ['Gestiona incidencias', true, false, false],
                    ['Cobra la renta', true, false, false],
                    ['Gestiona rotaciones', true, false, false],
                    ['Optimiza el sistema según el mercado', true, false, false],
                    ['Tiempo que te lleva al mes', '0h', '2-4h', '8-15h'],
                    ['Garantía de cobro', 'Sí', 'No', 'No'],
                  ].map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--color-surface)' : 'var(--color-bg)' }}>
                      <td style={{ padding: '14px 16px', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text)', borderBottom: '1px solid var(--color-border)' }}>{row[0]}</td>
                      {[row[1], row[2], row[3]].map((val, j) => (
                        <td key={j} style={{ textAlign: 'center', padding: '14px 16px', borderBottom: '1px solid var(--color-border)', background: j === 0 ? 'rgba(26,74,138,0.04)' : 'transparent', fontWeight: j === 0 ? 700 : 400 }}>
                          {typeof val === 'boolean'
                            ? val
                              ? <span style={{ color: '#1a4a8a', fontSize: '18px' }}>✓</span>
                              : <span style={{ color: 'var(--color-text-muted)', fontSize: '18px' }}>—</span>
                            : <span style={{ fontSize: 'var(--text-sm)', color: j === 0 ? '#1a4a8a' : 'var(--color-text-muted)' }}>{val}</span>
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Cómo funciona</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)' }}>De llamada a primer ingreso en 30 días</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px,100%), 1fr))', gap: '16px', maxWidth: '960px', margin: '0 auto' }}>
              {proceso.map((p, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 'clamp(20px,2.5vw,28px)', border: '1px solid var(--color-border)', position: 'relative' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)', fontWeight: 800, color: 'white', background: '#1a4a8a', borderRadius: 'var(--radius-full)', padding: '4px 12px', display: 'inline-block', marginBottom: '14px', letterSpacing: '0.05em' }}>{p.dia}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>{p.titulo}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                  {i < proceso.length - 1 && (
                    <div aria-hidden="true" style={{ position: 'absolute', right: '-9px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', background: '#f0f4fa', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M5 2l3 3-3 3" stroke="#1a4a8a" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Propietarios reales</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)' }}>Lo que dicen quienes ya trabajan con nosotros</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px,100%), 1fr))', gap: '24px' }}>
              {testimonios.map((t, i) => (
                <div key={i} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'clamp(24px,3vw,36px)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Antes / después */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ flex: 1, background: '#f0f4fa', borderRadius: 'var(--radius-lg)', padding: '12px 14px', textAlign: 'center' }}>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Antes</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text-muted)' }}>{t.antes}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-primary)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                    <div style={{ flex: 1, background: 'rgba(26,74,138,0.06)', borderRadius: 'var(--radius-lg)', padding: '12px 14px', textAlign: 'center' }}>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '4px' }}>Con Virtuo</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 800, color: '#1a4a8a' }}>{t.despues}</div>
                    </div>
                  </div>
                  {/* Texto */}
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>&ldquo;{t.texto}&rdquo;</p>
                  {/* Autor */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '4px', borderTop: '1px solid var(--color-border)' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1a4a8a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-sm)', flexShrink: 0 }}>{t.nombre[0]}</div>
                    <div>
                      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-text)' }}>{t.nombre}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{t.ciudad} · Sistema {t.sistema}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: '#f0f4fa' }}>
          <div className="container">
            <div style={{ maxWidth: '680px', marginBottom: '48px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Nuestros valores</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>Lo que nos guía en cada decisión</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px,100%), 1fr))', gap: '20px' }}>
              {valores.map((v, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'clamp(24px,3vw,32px)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', marginBottom: '16px' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '10px' }}>{v.titulo}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.65, fontSize: 'var(--text-sm)', margin: 0 }}>{v.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRAYECTORIA */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Trayectoria</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'var(--color-text)' }}>Construido paso a paso</h2>
            </div>
            <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
              {hitos.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px', position: 'relative', paddingBottom: i < hitos.length - 1 ? '40px' : '0' }}>
                  {i < hitos.length - 1 && <div style={{ position: 'absolute', left: '52px', top: '32px', bottom: 0, width: '2px', background: 'var(--color-border)' }} />}
                  <div style={{ flexShrink: 0, width: '80px', paddingTop: '4px' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 800, color: 'var(--color-primary)' }}>{h.año}</span>
                  </div>
                  <div style={{ flexShrink: 0, width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '7px', position: 'relative', zIndex: 1 }} />
                  <p style={{ color: 'var(--color-text)', fontSize: 'var(--text-base)', lineHeight: 1.6, paddingTop: '3px', margin: 0 }}>{h.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTÍAS */}
        <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'linear-gradient(135deg, #0f2d5e, #1a4a8a)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Sin riesgos</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'white' }}>Nuestras garantías como gestores</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px,100%), 1fr))', gap: '20px', maxWidth: '960px', margin: '0 auto 48px' }}>
              {[
                { titulo: 'Sin ocupación, sin comisión', desc: 'Si la vivienda no tiene inquilinos, no cobramos comisión de gestión. Nuestro interés es que esté siempre ocupada.' },
                { titulo: 'Respuesta a incidencias en 48h', desc: 'Garantizamos resolución o respuesta en menos de 48h para cualquier incidencia no urgente. Urgencias, el mismo día.' },
                { titulo: 'Liquidación mensual puntual', desc: 'El ingreso llega a tu cuenta entre el 1 y el 5 de cada mes, sin excusas ni retrasos.' },
                { titulo: 'Vivienda devuelta en perfecto estado', desc: 'Coordinamos revisión y limpieza entre cada inquilino. Si hay daños, los gestionamos y reclamamos.' },
              ].map((g, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-xl)', padding: 'clamp(20px,2.5vw,28px)', backdropFilter: 'blur(8px)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'white', marginBottom: '8px' }}>{g.titulo}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0 }}>{g.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <a href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#1a4a8a', fontWeight: 700, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)', marginRight: '16px' }}>Hablar con un experto</a>
              <a href="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'rgba(255,255,255,0.08)', fontWeight: 600, padding: '14px 32px', borderRadius: 'var(--radius-lg)', textDecoration: 'none', fontSize: 'var(--text-base)' }}>Ver preguntas frecuentes</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
