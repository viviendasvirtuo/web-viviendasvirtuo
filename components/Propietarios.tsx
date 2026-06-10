'use client';
import { useState } from 'react';
import Link from 'next/link';

const pasos = [
  {
    num: '01',
    title: 'Analizamos tu vivienda',
    desc: 'Visita gratuita o videollamada. Estudiamos la propiedad, la zona y el potencial de cada sistema para darte la recomendación más rentable, con estimación de ingresos real.',
  },
  {
    num: '02',
    title: 'Preparamos y publicamos',
    desc: 'Si es necesario, orientamos sobre decoración básica. Hacemos las fotos profesionales y publicamos en todas las plataformas relevantes en menos de una semana.',
  },
  {
    num: '03',
    title: 'Gestionamos todo',
    desc: 'Contratos, selección de inquilinos, check-ins, mantenimiento, incidencias… Todo sin que muevas un dedo. Equipo humano accesible en todo momento.',
  },
  {
    num: '04',
    title: 'Cobras puntualmente',
    desc: 'Liquidación mensual garantizada. Recibes un informe detallado con ingresos, gastos y estado de tu propiedad. Transparencia total.',
  },
];

export default function Propietarios() {
  const [activo, setActivo] = useState(0);

  return (
    <section id="propietarios" className="section section-dark">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))',
            gap: 'clamp(var(--space-10), 6vw, var(--space-20))',
            alignItems: 'center',
          }}
        >
          {/* Texto izquierda */}
          <div>
            <p className="section-label section-label--white">Para propietarios</p>
            <h2
              className="section-title section-title--white"
              style={{ marginBottom: 'var(--space-5)' }}
            >
              Tu vivienda trabaja.
              <br />Tú descansas.
            </h2>
            <p
              className="section-subtitle section-subtitle--white"
              style={{ marginBottom: 'var(--space-10)' }}
            >
              Gestión 360° sin complicaciones. Desde el primer contacto hasta la liquidación mensual, nos ocupamos de absolutamente todo.
            </p>

            {/* Ventajas clave */}
            <ul
              style={{
                display: 'flex', flexDirection: 'column',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-10)',
                listStyle: 'none',
              }}
            >
              {[
                'Sin contratos de exclusividad — salida cuando quieras',
                'Seguro de impago incluido en contrato',
                'Informe mensual detallado en tu email',
              ].map(item => (
                <li
                  key={item}
                  style={{
                    display: 'flex', alignItems: 'flex-start',
                    gap: 'var(--space-3)', fontSize: 'var(--text-sm)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#60a5fa" strokeWidth="2.5"
                    style={{ flexShrink: 0, marginTop: '3px' }}
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn btn-white">Quiero rentabilizar mi piso</Link>
              <a href="#sistemas" className="btn btn-ghost-white">Ver sistemas</a>
            </div>
          </div>

          {/* Acordeón de pasos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {pasos.map((paso, i) => (
              <div
                key={paso.num}
                role="button"
                tabIndex={0}
                aria-expanded={activo === i}
                onClick={() => setActivo(i)}
                onKeyDown={e => e.key === 'Enter' && setActivo(i)}
                style={{
                  padding: 'var(--space-5) var(--space-6)',
                  borderRadius: 'var(--radius-lg)',
                  border: `1px solid ${activo === i ? 'rgba(96,165,250,0.35)' : 'rgba(255,255,255,0.07)'}`,
                  background: activo === i ? 'rgba(255,255,255,0.07)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all var(--transition)',
                  outline: 'none',
                }}
                onMouseEnter={e => {
                  if (activo !== i) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                }}
                onMouseLeave={e => {
                  if (activo !== i) (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontSize: 'var(--text-xs)', fontWeight: 900,
                      color: activo === i ? '#60a5fa' : 'rgba(255,255,255,0.2)',
                      letterSpacing: '0.08em', flexShrink: 0, marginTop: '2px',
                      fontFamily: 'var(--font-display)',
                      transition: 'color var(--transition)',
                    }}
                  >
                    {paso.num}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 700, fontSize: 'var(--text-base)',
                        color: activo === i ? '#fff' : 'rgba(255,255,255,0.6)',
                        marginBottom: activo === i ? 'var(--space-3)' : 0,
                        transition: 'color var(--transition)',
                      }}
                    >
                      {paso.title}
                    </div>
                    {activo === i && (
                      <p
                        style={{
                          fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.55)',
                          lineHeight: 1.7, maxWidth: '46ch',
                          animation: 'fadeIn 0.25s ease both',
                        }}
                      >
                        {paso.desc}
                      </p>
                    )}
                  </div>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke={activo === i ? '#60a5fa' : 'rgba(255,255,255,0.2)'}
                    strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px', transition: 'all var(--transition)', transform: activo === i ? 'rotate(90deg)' : 'none' }}
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
