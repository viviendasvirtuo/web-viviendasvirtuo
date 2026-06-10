'use client';
import { useState, useCallback } from 'react';
import Link from 'next/link';

type Zona = 'badalona' | 'barcelona' | 'otra';
type SistemaActual = 'tradicional' | 'sin_alquilar' | 'otro_gestor';

interface ResultadoSistema {
  nombre: string;
  slug: string;
  descripcion: string;
  ingresoBruto: number;
  ingresoNeto: number;
  ocupacion: string;
  gestion: string;
  color: string;
  tag?: string;
}

const MULTIPLICADORES: Record<Zona, { preciom2Base: number; turistico: number }> = {
  badalona:  { preciom2Base: 12.5, turistico: 85 },
  barcelona: { preciom2Base: 17.0, turistico: 120 },
  otra:      { preciom2Base: 10.0, turistico: 65 },
};

const COMISION_VIRTUO = 0.20; // 20% gestión

function calcularResultados(m2: number, zona: Zona): ResultadoSistema[] {
  const { preciom2Base, turistico } = MULTIPLICADORES[zona];

  // Habitaciones estimadas según m²
  const nHab = m2 <= 50 ? 1 : m2 <= 80 ? 2 : m2 <= 110 ? 3 : m2 <= 140 ? 4 : 5;

  // COLIVING — alquiler por habitaciones, 95% ocupación
  const precioHabColiving = preciom2Base * 8 + (zona === 'barcelona' ? 80 : zona === 'badalona' ? 40 : 20);
  const brutoCo = Math.round(nHab * precioHabColiving * 0.95);
  const netoCo  = Math.round(brutoCo * (1 - COMISION_VIRTUO));

  // TEMPORAL — precio intermedio, 80% ocupación
  const precioHabTemporal = precioHabColiving * 1.35;
  const brutoTe = Math.round(nHab * precioHabTemporal * 0.80);
  const netoTe  = Math.round(brutoTe * (1 - COMISION_VIRTUO));

  // VACACIONAL — precio noche por m², alta temporada avg
  const noches = 22; // promedio mensual
  const precioNoche = (m2 / 10) * turistico / 10;
  const brutoVa = Math.round(noches * precioNoche);
  const netoVa  = Math.round(brutoVa * (1 - COMISION_VIRTUO - 0.05)); // +5% plataformas

  return [
    {
      nombre: 'Coliving',
      slug: '/coliving',
      descripcion: `${nHab} hab. × ${Math.round(precioHabColiving)}€/mes`,
      ingresoBruto: brutoCo,
      ingresoNeto: netoCo,
      ocupacion: '~95%',
      gestion: 'Máxima estabilidad',
      color: '#1a4a8a',
      tag: 'Más estable',
    },
    {
      nombre: 'Temporal',
      slug: '/temporal',
      descripcion: `${nHab} hab. corta duración`,
      ingresoBruto: brutoTe,
      ingresoNeto: netoTe,
      ocupacion: '~80%',
      gestion: 'Equilibrio rentabilidad',
      color: '#2d6bc4',
    },
    {
      nombre: 'Vacacional',
      slug: '/vacacional',
      descripcion: `~${noches} noches/mes`,
      ingresoBruto: brutoVa,
      ingresoNeto: netoVa,
      ocupacion: '~70%',
      gestion: 'Máxima rentabilidad',
      color: '#0f2d5e',
      tag: 'Mayor ingreso',
    },
  ];
}

export default function CalculadoraRentabilidad() {
  const [m2, setM2] = useState(80);
  const [zona, setZona] = useState<Zona>('badalona');
  const [sistemaActual, setSistemaActual] = useState<SistemaActual>('tradicional');
  const [calculado, setCalculado] = useState(false);
  const [resultados, setResultados] = useState<ResultadoSistema[]>([]);

  const handleCalcular = useCallback(() => {
    const res = calcularResultados(m2, zona);
    setResultados(res);
    setCalculado(true);
  }, [m2, zona]);

  const ingresoActual = (() => {
    const { preciom2Base } = MULTIPLICADORES[zona];
    const base = m2 * preciom2Base * 0.75;
    if (sistemaActual === 'tradicional') return Math.round(base * 0.90);
    if (sistemaActual === 'sin_alquilar') return 0;
    return Math.round(base * 0.85);
  })();

  const maxNeto = resultados.length ? Math.max(...resultados.map(r => r.ingresoNeto)) : 1;

  return (
    <section style={{
      background: 'linear-gradient(160deg, #0d1b2e 0%, #1a3a6e 60%, #0f2d5e 100%)',
      padding: 'clamp(4rem, 8vw, 7rem) 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Fondo decorativo sutil */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Cabecera */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)', borderRadius: '100px',
            padding: '6px 18px', fontSize: 'var(--text-xs)', fontWeight: 600,
            color: 'rgba(255,255,255,0.8)', letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}>Calculadora de rentabilidad</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800, color: 'white', lineHeight: 1.15,
            marginBottom: '1rem', letterSpacing: '-0.02em',
          }}>¿Cuánto puede rendir tu piso?</h2>
          <p style={{
            color: 'rgba(255,255,255,0.65)', fontSize: 'var(--text-base)',
            maxWidth: '520px', margin: '0 auto',
          }}>Introduce los datos de tu vivienda y ve en segundos cuánto podrías ganar con cada sistema Virtuo.</p>
        </div>

        {/* Card calculadora */}
        <div style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '24px',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          backdropFilter: 'blur(20px)',
          maxWidth: '760px',
          margin: '0 auto',
        }}>

          {/* Inputs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}>

            {/* m² con slider */}
            <div>
              <label style={{
                display: 'block', fontSize: 'var(--text-xs)', fontWeight: 700,
                color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase',
                letterSpacing: '0.08em', marginBottom: '0.75rem',
              }}>Superficie</label>
              <div style={{
                background: 'rgba(255,255,255,0.08)', borderRadius: '12px',
                padding: '1rem 1.25rem',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'white' }}>{m2}</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-sm)' }}>m²</span>
                </div>
                <input
                  type="range" min={30} max={250} step={5} value={m2}
                  onChange={e => { setM2(Number(e.target.value)); setCalculado(false); }}
                  style={{ width: '100%', accentColor: '#4a9eff' }}
                  aria-label="Superficie en metros cuadrados"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>
                  <span>30 m²</span><span>250 m²</span>
                </div>
              </div>
            </div>

            {/* Zona */}
            <div>
              <label style={{
                display: 'block', fontSize: 'var(--text-xs)', fontWeight: 700,
                color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase',
                letterSpacing: '0.08em', marginBottom: '0.75rem',
              }}>Ubicación</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {([
                  { value: 'badalona', label: 'Badalona', sub: 'Barcelonès Nord' },
                  { value: 'barcelona', label: 'Barcelona ciudad', sub: 'Alta demanda' },
                  { value: 'otra', label: 'Otra zona', sub: 'Área metropolitana' },
                ] as { value: Zona; label: string; sub: string }[]).map(opt => (
                  <button key={opt.value} onClick={() => { setZona(opt.value); setCalculado(false); }}
                    style={{
                      textAlign: 'left', padding: '10px 14px',
                      borderRadius: '10px', border: '1px solid',
                      borderColor: zona === opt.value ? 'rgba(74,158,255,0.6)' : 'rgba(255,255,255,0.1)',
                      background: zona === opt.value ? 'rgba(74,158,255,0.15)' : 'rgba(255,255,255,0.04)',
                      cursor: 'pointer', transition: 'all 180ms',
                    }}>
                    <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: zona === opt.value ? '#7ec8ff' : 'rgba(255,255,255,0.8)' }}>{opt.label}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.4)', marginTop: '1px' }}>{opt.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Sistema actual */}
            <div>
              <label style={{
                display: 'block', fontSize: 'var(--text-xs)', fontWeight: 700,
                color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase',
                letterSpacing: '0.08em', marginBottom: '0.75rem',
              }}>Situación actual</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {([
                  { value: 'tradicional', label: 'Alquiler tradicional', sub: 'Con contrato anual' },
                  { value: 'sin_alquilar', label: 'Sin alquilar', sub: 'Piso vacío ahora' },
                  { value: 'otro_gestor', label: 'Otro gestor', sub: 'Quiero comparar' },
                ] as { value: SistemaActual; label: string; sub: string }[]).map(opt => (
                  <button key={opt.value} onClick={() => { setSistemaActual(opt.value); setCalculado(false); }}
                    style={{
                      textAlign: 'left', padding: '10px 14px',
                      borderRadius: '10px', border: '1px solid',
                      borderColor: sistemaActual === opt.value ? 'rgba(74,158,255,0.6)' : 'rgba(255,255,255,0.1)',
                      background: sistemaActual === opt.value ? 'rgba(74,158,255,0.15)' : 'rgba(255,255,255,0.04)',
                      cursor: 'pointer', transition: 'all 180ms',
                    }}>
                    <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: sistemaActual === opt.value ? '#7ec8ff' : 'rgba(255,255,255,0.8)' }}>{opt.label}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.4)', marginTop: '1px' }}>{opt.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Botón calcular */}
          <button onClick={handleCalcular} style={{
            width: '100%', padding: '1rem 2rem',
            background: 'linear-gradient(135deg, #2d6bc4 0%, #1a4a8a 100%)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '12px', color: 'white',
            fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700,
            cursor: 'pointer', transition: 'all 200ms', letterSpacing: '-0.01em',
            boxShadow: '0 4px 20px rgba(26,74,138,0.4)',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            Calcular mi rentabilidad →
          </button>
        </div>

        {/* Resultados */}
        {calculado && (
          <div style={{
            marginTop: '2.5rem',
            animation: 'fadeUp 400ms cubic-bezier(0.16,1,0.3,1) both',
          }}>
            {/* Ingreso actual vs Virtuo */}
            {sistemaActual !== 'sin_alquilar' && (
              <div style={{
                textAlign: 'center', marginBottom: '1.5rem',
                color: 'rgba(255,255,255,0.55)', fontSize: 'var(--text-sm)',
              }}>
                Tu ingreso estimado actual:{' '}
                <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{ingresoActual.toLocaleString('es-ES')}€/mes</span>
              </div>
            )}

            {/* Cards de sistemas */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              maxWidth: '760px',
              margin: '0 auto',
            }}>
              {resultados.map((r, i) => {
                const esMejor = r.ingresoNeto === maxNeto;
                const mejora = ingresoActual > 0
                  ? Math.round(((r.ingresoNeto - ingresoActual) / ingresoActual) * 100)
                  : null;
                const barWidth = Math.round((r.ingresoNeto / maxNeto) * 100);

                return (
                  <div key={i} style={{
                    background: esMejor ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${esMejor ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)'}`,
                    borderRadius: '16px',
                    padding: '1.5rem',
                    position: 'relative',
                    transition: 'transform 200ms',
                  }}>
                    {r.tag && (
                      <span style={{
                        position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                        background: esMejor ? '#4a9eff' : '#2d6bc4',
                        color: 'white', fontSize: 'var(--text-xs)', fontWeight: 700,
                        padding: '3px 12px', borderRadius: '100px', whiteSpace: 'nowrap',
                        letterSpacing: '0.04em',
                      }}>{r.tag}</span>
                    )}

                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-lg)', color: 'white', marginBottom: '2px' }}>{r.nombre}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.45)' }}>{r.descripcion}</div>
                    </div>

                    {/* Ingreso neto */}
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.45)', marginBottom: '4px' }}>Ingreso neto estimado</div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: esMejor ? '#7ec8ff' : 'white' }}>
                          {r.ingresoNeto.toLocaleString('es-ES')}
                        </span>
                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-sm)' }}>€/mes</span>
                      </div>
                      {mejora !== null && (
                        <div style={{
                          fontSize: 'var(--text-xs)', fontWeight: 600, marginTop: '4px',
                          color: mejora > 0 ? '#5ddc8a' : mejora < 0 ? '#ff7b7b' : 'rgba(255,255,255,0.4)',
                        }}>
                          {mejora > 0 ? `+${mejora}% vs. tu situación actual` : mejora < 0 ? `${mejora}% vs. tu situación actual` : 'Similar a tu situación actual'}
                        </div>
                      )}
                    </div>

                    {/* Barra visual */}
                    <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '100px', height: '4px', marginBottom: '1rem' }}>
                      <div style={{
                        height: '100%', borderRadius: '100px',
                        width: `${barWidth}%`,
                        background: esMejor ? 'linear-gradient(90deg, #4a9eff, #7ec8ff)' : 'rgba(255,255,255,0.3)',
                        transition: 'width 600ms cubic-bezier(0.16,1,0.3,1)',
                      }} />
                    </div>

                    {/* Datos clave */}
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                      <div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.35)' }}>Ocupación</div>
                        <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>{r.ocupacion}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.35)' }}>Gestión</div>
                        <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>{r.gestion}</div>
                      </div>
                    </div>

                    <Link href={r.slug} style={{
                      display: 'block', textAlign: 'center',
                      padding: '8px 16px', borderRadius: '8px',
                      background: esMejor ? 'rgba(74,158,255,0.2)' : 'rgba(255,255,255,0.07)',
                      border: `1px solid ${esMejor ? 'rgba(74,158,255,0.4)' : 'rgba(255,255,255,0.1)'}`,
                      color: esMejor ? '#7ec8ff' : 'rgba(255,255,255,0.6)',
                      fontSize: 'var(--text-sm)', fontWeight: 600, textDecoration: 'none',
                      transition: 'all 150ms',
                    }}>Ver sistema →</Link>
                  </div>
                );
              })}
            </div>

            {/* CTA final */}
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-xs)', marginBottom: '1.25rem' }}>
                * Estimación orientativa basada en datos de mercado de la zona. Solicita un análisis personalizado gratuito.
              </p>
              <Link href="/contacto" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'white', color: 'var(--color-primary)',
                padding: '14px 32px', borderRadius: '100px',
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-base)',
                textDecoration: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                transition: 'transform 200ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                Quiero un análisis gratuito de mi piso
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
