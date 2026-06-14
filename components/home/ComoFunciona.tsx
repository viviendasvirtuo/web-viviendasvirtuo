'use client';

import { useRef, useState, useEffect } from 'react';

const pasos = [
  { paso: '01', title: 'Elige tu habitación', desc: 'Explora la web y selecciona la opción que mejor encaja con tus fechas y necesidades.', badge: null },
  { paso: '02', title: 'Consulta disponibilidad', desc: 'Contacta con nosotros de inmediato. Debido a la alta demanda de nuestros modelos, las habitaciones libres se reservan rápido.', badge: 'Plazas limitadas' },
  { paso: '03', title: 'Contrato digital exprés', desc: 'Si la habitación sigue libre, resolvemos tus dudas, validamos tu perfil y firmamos el contrato de forma digital, sin papeleos ni esperas.', badge: null },
  { paso: '04', title: 'Entra a vivir hoy mismo', desc: 'Recibe tus accesos y empieza tu nueva etapa en Barcelona desde ese mismo instante. Todo está pensado para llegar y funcionar desde el primer minuto.', badge: null },
];

export default function ComoFunciona() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const [paths, setPaths] = useState<string[]>(['', '', '']);
  const [svgWidth, setSvgWidth] = useState(0);

  useEffect(() => {
    function recalc() {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const centers = circleRefs.map((ref) => {
        if (!ref.current) return null;
        const r = ref.current.getBoundingClientRect();
        return {
          x: r.left - containerRect.left + r.width / 2,
          y: r.top - containerRect.top,
        };
      });
      if (centers.some((c) => c === null)) return;
      const newPaths = [0, 1, 2].map((i) => {
        const c1 = centers[i]!;
        const c2 = centers[i + 1]!;
        return `M ${c1.x} ${c1.y} Q ${(c1.x + c2.x) / 2} ${c1.y - 40} ${c2.x} ${c2.y}`;
      });
      setPaths(newPaths);
      setSvgWidth(containerRect.width);
    }

    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section style={{
      padding: 'clamp(60px,8vw,100px) 0',
      backgroundImage: 'linear-gradient(rgba(10,20,50,0.68), rgba(10,20,50,0.68)), url(/images/como-funciona-bg.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="container">

        {/* Cabecera */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ color: '#6effc0', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Empieza hoy mismo</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '12px' }}>Cómo funciona</h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'rgba(255,255,255,0.75)', margin: '0 auto' }}>Fácil, rápido y sin complicaciones.</p>
        </div>

        {/* Contenedor con flechas flotantes encima */}
        <div ref={containerRef} style={{ position: 'relative' }}>

          {/* SVG de arcos dinámicos */}
          {svgWidth > 0 && (
            <svg
              aria-hidden="true"
              className="cf-arcos"
              style={{ position: 'absolute', top: '-50px', left: 0, width: '100%', height: '60px', pointerEvents: 'none', zIndex: 2 }}
              viewBox={`0 0 ${svgWidth} 60`}
            >
              <defs>
                <marker id="arrow-cf" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 z" fill="white" />
                </marker>
              </defs>
              {paths.map((d, i) =>
                d ? (
                  <path
                    key={i}
                    d={d}
                    stroke="white"
                    strokeWidth={3}
                    fill="none"
                    strokeLinecap="round"
                    opacity={0.6}
                    markerEnd="url(#arrow-cf)"
                  />
                ) : null
              )}
            </svg>
          )}

          {/* Grid de tarjetas */}
          <div className="cf-grid">
            {pasos.map((s, idx) => (
              <div key={s.paso} className="cf-paso">
                <div
                  ref={circleRefs[idx]}
                  style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    background: 'var(--color-primary)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem',
                    marginBottom: '16px', flexShrink: 0,
                  }}
                >
                  {s.paso}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', margin: 0, lineHeight: 1.3 }}>{s.title}</h3>
                    {s.badge && (
                      <span style={{ background: '#fff3e0', color: '#c45e00', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{s.badge}</span>
                    )}
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        .cf-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }
        .cf-paso {
          background: white;
          border: 1px solid rgba(26,74,138,0.10);
          border-radius: var(--radius-xl);
          padding: 28px 24px;
          box-shadow: 0 2px 8px rgba(26,74,138,0.06);
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 900px) {
          .cf-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cf-arcos {
            display: none;
          }
        }
        @media (max-width: 480px) {
          .cf-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
