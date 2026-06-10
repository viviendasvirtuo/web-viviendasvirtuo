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
  disabled?: boolean;
  disabledMsg?: string;
}

/*
  PRECIOS REALES — Fuente: Idealista / Fotocasa, junio 2026
  ─────────────────────────────────────────────────────────
  Coliving (alquiler habitación, medio-largo plazo):
    Badalona:  600 – 780 € / hab  → base 680 €
    Barcelona: 700 – 950 € / hab  → base 800 €
    Otra zona: 500 – 680 € / hab  → base 580 €

  Temporal (corta duración, 1-6 meses, extra ~20% vs coliving):
    Badalona:  750 – 950 € / hab  → base 840 €
    Barcelona: 850 – 1.100 € / hab → base 980 €
    Otra zona: 600 – 800 € / hab  → base 700 €

  Alquiler tradicional (€/m²/mes):
    Badalona + BCN:  ~12-14 €/m²  → usamos 13 €/m²
    Otra zona:       ~9-11 €/m²   → usamos 10 €/m²

  Vacacional (noche, apartamento completo):
    Badalona:  80 – 110 €/noche   → base 90 €/noche
    Barcelona: 110 – 160 €/noche  → base 130 €/noche
    Otra zona: 60 – 85 €/noche    → base 72 €/noche
*/

const DATOS: Record<Zona, {
  precioHabColiving: number;
  precioHabTemporal: number;
  precioNocheBase: number;
  precioM2Tradicional: number;
}> = {
  badalona: {
    precioHabColiving:    680,
    precioHabTemporal:    840,
    precioNocheBase:       90,
    precioM2Tradicional:   13,
  },
  barcelona: {
    precioHabColiving:    800,
    precioHabTemporal:    980,
    precioNocheBase:      130,
    precioM2Tradicional:   13,
  },
  otra: {
    precioHabColiving:    580,
    precioHabTemporal:    700,
    precioNocheBase:       72,
    precioM2Tradicional:   10,
  },
};

const COMISION_VIRTUO = 0.20;   // 20% gestión Virtuo
const GASTOS_VACACIONAL = 0.08; // ~8% plataformas + limpieza extra

function nHabitaciones(m2: number): number {
  if (m2 <= 45) return 1;
  if (m2 <= 70) return 2;
  if (m2 <= 100) return 3;
  if (m2 <= 130) return 4;
  return 5;
}

function calcularResultados(m2: number, zona: Zona): ResultadoSistema[] {
  const d = DATOS[zona];
  const nHab = nHabitaciones(m2);

  // ── COLIVING ──────────────────────────────────────────
  // Ajuste menor por m²: pisos grandes → ligeramente más por hab por mayor calidad
  const ajusteM2 = Math.round((m2 - 70) * 0.8); // ±€ según tamaño relativo
  const precioHabCo = d.precioHabColiving + ajusteM2;
  const brutoCo = Math.round(nHab * precioHabCo * 0.95); // 95% ocupación
  const netoCo  = Math.round(brutoCo * (1 - COMISION_VIRTUO));

  // ── TEMPORAL ──────────────────────────────────────────
  const precioHabTe = d.precioHabTemporal + ajusteM2;
  const brutoTe = Math.round(nHab * precioHabTe * 0.82); // 82% ocupación media
  const netoTe  = Math.round(brutoTe * (1 - COMISION_VIRTUO));

  // ── VACACIONAL ────────────────────────────────────────
  // Precio por noche sube con el tamaño (más habitaciones = más personas)
  const factorM2 = 1 + (nHab - 2) * 0.15; // cada hab extra suma 15% al precio noche
  const precioNoche = Math.round(d.precioNocheBase * Math.max(0.75, factorM2));
  const noches = 22; // ~22 noches/mes con 70% ocupación
  const brutoVa = Math.round(noches * precioNoche);
  const netoVa  = Math.round(brutoVa * (1 - COMISION_VIRTUO - GASTOS_VACACIONAL));

  const vacacionalDisabled = zona === 'barcelona';

  return [
    {
      nombre: 'Coliving',
      slug: '/coliving',
      descripcion: `${nHab} hab. × ${precioHabCo.toLocaleString('es-ES')}€/mes`,
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
      ocupacion: '~82%',
      gestion: 'Equilibrio rentabilidad',
      color: '#2d6bc4',
    },
    {
      nombre: 'Vacacional',
      slug: '/vacacional',
      descripcion: vacacionalDisabled ? 'Sin licencias turísticas' : `~${noches} noches × ${precioNoche}€`,
      ingresoBruto: vacacionalDisabled ? 0 : brutoVa,
      ingresoNeto: vacacionalDisabled ? 0 : netoVa,
      ocupacion: '~70%',
      gestion: 'Máxima rentabilidad',
      color: '#c84820',
      tag: vacacionalDisabled ? undefined : 'Mayor ingreso',
      disabled: vacacionalDisabled,
      disabledMsg: 'Barcelona ciudad no concede nuevas licencias turísticas desde 2012. Si tienes licencia en vigor, consúltanos.',
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

  // Ingreso actual estimado (alquiler tradicional = precio mercado × m²)
  const ingresoActual = (() => {
    const precioM2 = DATOS[zona].precioM2Tradicional;
    const base = m2 * precioM2;
    if (sistemaActual === 'tradicional') return Math.round(base * 0.92);
    if (sistemaActual === 'sin_alquilar') return 0;
    return Math.round(base * 0.88); // otro gestor: algo menos eficiente
  })();

  const activosNeto = resultados.filter(r => !r.disabled).map(r => r.ingresoNeto);
  const maxNeto = activosNeto.length ? Math.max(...activosNeto) : 1;

  return (
    <section style={{
      background: 'linear-gradient(160deg, #0d1b2e 0%, #1a3a6e 60%, #0f2d5e 100%)',
      padding: 'clamp(4rem, 8vw, 7rem) 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}>
            {/* m² */}
            <div>
              <label style={{
                display: 'block', fontSize: 'var(--text-xs)', fontWeight: 700,
                color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase',
                letterSpacing: '0.08em', marginBottom: '0.75rem',
              }}>Superficie</label>
              <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem 1.25rem' }}>
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
                  { value: 'barcelona', label: 'Barcelona ciudad', sub: 'Sin nuevas lic. turísticas' },
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

            {/* Situación actual */}
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
          <div style={{ marginTop: '2.5rem', animation: 'fadeUp 400ms cubic-bezier(0.16,1,0.3,1) both' }}>
            {sistemaActual !== 'sin_alquilar' && (
              <div style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.55)', fontSize: 'var(--text-sm)' }}>
                Tu ingreso estimado actual:{' '}
                <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{ingresoActual.toLocaleString('es-ES')}€/mes</span>
              </div>
            )}

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              maxWidth: '760px',
              margin: '0 auto',
            }}>
              {resultados.map((r, i) => {
                const esMejor = !r.disabled && r.ingresoNeto === maxNeto;
                const mejora = !r.disabled && ingresoActual > 0
                  ? Math.round(((r.ingresoNeto - ingresoActual) / ingresoActual) * 100)
                  : null;
                const barWidth = r.disabled ? 0 : Math.round((r.ingresoNeto / maxNeto) * 100);

                return (
                  <div key={i} style={{
                    background: r.disabled ? 'rgba(255,255,255,0.02)' : esMejor ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${r.disabled ? 'rgba(255,255,255,0.06)' : esMejor ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)'}`,
                    borderRadius: '16px',
                    padding: '1.5rem',
                    position: 'relative',
                    opacity: r.disabled ? 0.55 : 1,
                  }}>
                    {r.tag && !r.disabled && (
                      <span style={{
                        position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                        background: esMejor ? '#4a9eff' : '#2d6bc4',
                        color: 'white', fontSize: 'var(--text-xs)', fontWeight: 700,
                        padding: '3px 12px', borderRadius: '100px', whiteSpace: 'nowrap',
                        letterSpacing: '0.04em',
                      }}>{r.tag}</span>
                    )}

                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-lg)', color: r.disabled ? 'rgba(255,255,255,0.4)' : 'white', marginBottom: '2px' }}>
                        {r.nombre}
                      </div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.45)' }}>
                        {r.descripcion}
                      </div>
                    </div>

                    {r.disabled ? (
                      <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
                        {r.disabledMsg}
                      </p>
                    ) : (
                      <>
                        <div style={{ marginBottom: '1rem' }}>
                          <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.45)', marginBottom: '4px' }}>Ingreso neto estimado</div>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 900, color: 'white', lineHeight: 1 }}>
                            {r.ingresoNeto.toLocaleString('es-ES')}€
                            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 500, color: 'rgba(255,255,255,0.45)', marginLeft: '4px' }}>/mes</span>
                          </div>
                          {mejora !== null && (
                            <div style={{
                              display: 'inline-flex', alignItems: 'center', gap: '4px',
                              marginTop: '6px',
                              fontSize: 'var(--text-xs)', fontWeight: 700,
                              color: mejora >= 0 ? '#4ade80' : '#f87171',
                            }}>
                              {mejora >= 0 ? '▲' : '▼'} {Math.abs(mejora)}% vs. tu situación actual
                            </div>
                          )}
                        </div>

                        {/* Barra de progreso */}
                        <div style={{ marginBottom: '1rem' }}>
                          <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '99px', overflow: 'hidden' }}>
                            <div style={{
                              height: '100%',
                              width: `${barWidth}%`,
                              background: esMejor ? '#4a9eff' : 'rgba(255,255,255,0.3)',
                              borderRadius: '99px',
                              transition: 'width 600ms cubic-bezier(0.16,1,0.3,1)',
                            }} />
                          </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1.25rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)' }}>
                            <span style={{ color: 'rgba(255,255,255,0.4)' }}>Ocupación</span>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{r.ocupacion}</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)' }}>
                            <span style={{ color: 'rgba(255,255,255,0.4)' }}>Gestión</span>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{r.gestion}</span>
                          </div>
                        </div>

                        <Link href={r.slug} style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                          padding: '10px 0',
                          background: 'rgba(255,255,255,0.08)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '10px',
                          fontSize: 'var(--text-xs)', fontWeight: 700,
                          color: 'rgba(255,255,255,0.8)',
                          textDecoration: 'none',
                          transition: 'all 180ms',
                        }}>Ver sistema →</Link>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            <p style={{
              textAlign: 'center', marginTop: '1.5rem',
              fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.35)',
              maxWidth: '480px', margin: '1.5rem auto 0',
            }}>
              * Estimación orientativa basada en datos de mercado de la zona (Idealista / Fotocasa, jun. 2026).
              Solicita un análisis personalizado gratuito.
            </p>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/contacto" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px',
                background: 'white', color: '#0f2d5e',
                borderRadius: '12px', fontWeight: 700,
                fontSize: 'var(--text-sm)', textDecoration: 'none',
                transition: 'all 200ms',
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
              }}>Quiero un análisis gratuito de mi piso →</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
