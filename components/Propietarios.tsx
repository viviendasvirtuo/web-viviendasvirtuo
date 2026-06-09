'use client';
import { useState } from 'react';

const pasos = [
  { num: '01', title: 'Analizamos tu vivienda', desc: 'Visita gratuita o videollamada. Estudiamos la propiedad, la zona y el potencial de cada sistema para darte la recomendación más rentable.' },
  { num: '02', title: 'Preparamos y publicamos', desc: 'Nos encargamos de la decoración básica si es necesaria, las fotos profesionales y la publicación en todas las plataformas.' },
  { num: '03', title: 'Gestionamos todo', desc: 'Contratos, selección de inquilinos, check-ins, mantenimiento, incidencias... Todo sin que muevas un dedo.' },
  { num: '04', title: 'Cobras puntualmente', desc: 'Liquidación mensual garantizada. Recibes un informe detallado con ingresos, gastos y estado de tu propiedad.' },
];

export default function Propietarios() {
  const [activo, setActivo] = useState(0);

  return (
    <section id="propietarios" className="section section-dark">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px, 100%), 1fr))',
          gap: 'var(--space-16)',
          alignItems: 'center',
        }}>
          <div>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Para propietarios</p>
            <h2 className="section-title section-title--white">Tu vivienda trabaja.<br />Tú descansas.</h2>
            <p className="section-subtitle section-subtitle--white" style={{ marginBottom: 'var(--space-10)' }}>
              Gestión 360° sin complicaciones. Desde el primer contacto hasta la liquidación mensual, nos ocupamos de absolutamente todo.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <a href="#contacto" className="btn btn-white">Quiero rentabilizar mi piso</a>
              <a href="#sistemas" className="btn btn-ghost-white">Ver sistemas</a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {pasos.map((paso, i) => (
              <div
                key={paso.num}
                onClick={() => setActivo(i)}
                style={{
                  padding: 'var(--space-5) var(--space-6)',
                  borderRadius: 'var(--radius-lg)',
                  border: `1px solid ${activo === i ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.07)'}`,
                  background: activo === i ? 'rgba(255,255,255,0.08)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all var(--transition)',
                }}
                onMouseEnter={e => {
                  if (activo !== i) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                }}
                onMouseLeave={e => {
                  if (activo !== i) (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                  <span style={{
                    fontSize: 'var(--text-xs)', fontWeight: 800,
                    color: activo === i ? '#60a5fa' : 'rgba(255,255,255,0.3)',
                    letterSpacing: '0.1em', flexShrink: 0, marginTop: '3px',
                  }}>{paso.num}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: activo === i ? '#fff' : 'rgba(255,255,255,0.7)', marginBottom: activo === i ? 'var(--space-2)' : 0, transition: 'all var(--transition)' }}>
                      {paso.title}
                    </div>
                    {activo === i && (
                      <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '48ch' }}>
                        {paso.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
