'use client';
import Image from 'next/image';

type Sistema = 'coliving' | 'temporal';

const habitaciones = [
  // ── COLIVING ──────────────────────────────────────────
  {
    ref: 'Mora_2026_01',
    sistema: 'coliving' as Sistema,
    titulo: 'Habitación Port BDN',
    zona: 'Eduard Maristany · Badalona',
    imagen: '/images/eduard_maristany_bdn.png',
    detalles: ['4 habitaciones nuevas', '2 baños nuevos'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 1050,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=Mora_2026_01&precio_hab=1050',
    mesesDisponible: 0,
  },
  {
    ref: 'Dmar_2026_02',
    sistema: 'coliving' as Sistema,
    titulo: 'Habitación Poblenou',
    zona: 'Diagonal Mar',
    imagen: '/images/zona_poblenou.png',
    detalles: ['4 habitaciones', '2 baños'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 1000,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=Dmar_2026_02&precio_hab=1000',
    mesesDisponible: 1,
  },
  {
    ref: 'PEspaña_2026_03',
    sistema: 'coliving' as Sistema,
    titulo: 'Habitación Pl. España',
    zona: 'Tarragona',
    imagen: '/images/zonas_plaza_espa%C3%B1a.jpg',
    detalles: ['5 habitaciones', '3 baños'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 900,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=PEspa%C3%B1a_2026_03&precio_hab=900',
    mesesDisponible: 3,
  },
  {
    ref: 'Ramblas_2026_02',
    sistema: 'coliving' as Sistema,
    titulo: 'Habitación Ramblas',
    zona: 'Canaletas',
    imagen: '/images/zona_ramblas.png',
    detalles: ['5 habitaciones', '3 baños'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 1100,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=Ramblas_2026_02&precio_hab=1100',
    mesesDisponible: 1,
  },
  // ── TEMPORAL ──────────────────────────────────────────
  {
    ref: 'Eixam_2026_01',
    sistema: 'temporal' as Sistema,
    titulo: 'Habitación Eixample',
    zona: 'Passeig de Gràcia / Provença',
    imagen: '/images/eixample01.jpg',
    detalles: ['5 habitaciones', '2 baños renovados'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 1200,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=Eixam_2026_01&precio_hab=1200',
    mesesDisponible: 0,
  },
  {
    ref: 'Sagrada_2026_03',
    sistema: 'temporal' as Sistema,
    titulo: 'Habitación Sagrada Família',
    zona: 'Marina',
    imagen: '/images/zona_sagrada_familia.png',
    detalles: ['6 habitaciones', '3 baños nuevos'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 950,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=Sagrada_2026_03&precio_hab=950',
    mesesDisponible: 3,
  },
  {
    ref: 'Gracia_2026_01',
    sistema: 'temporal' as Sistema,
    titulo: 'Habitación Gràcia',
    zona: 'Vila de Gràcia / Lesseps',
    imagen: '/images/piso_gracia.avif',
    detalles: ['4 habitaciones', 'Escritorio profesional'],
    extras: ['Terraza común', 'Suministros incluidos', 'WiFi'],
    precio: 950,
    tallyUrl: 'https://www.rentila.es/973654181148495',
    mesesDisponible: 0,
  },
  {
    ref: 'Sants_2026_01',
    sistema: 'temporal' as Sistema,
    titulo: 'Habitación Sants',
    zona: 'Sants-Badal / Plaça Sants',
    imagen: '/images/sants01.png',
    detalles: ['6 habitaciones', 'Hab. XXL +15m²', '3 baños completos'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 900,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=Sants_2026_01&precio_hab=750',
    mesesDisponible: 0,
  },
];

function getFechaDisponible(mesesExtra: number): string {
  const fecha = new Date();
  fecha.setMonth(fecha.getMonth() + 3 + mesesExtra);
  return fecha.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
}

interface Props {
  sistema: Sistema;
}

export default function HabitacionesDestacadas({ sistema }: Props) {
  const lista = habitaciones.filter((h) => h.sistema === sistema);

  const accentColor = sistema === 'coliving' ? '#0453ab' : '#008f58';
  const labelSistema = sistema === 'coliving' ? 'Coliving' : 'Temporal';

  return (
    <section style={{ background: '#f8f9fc', padding: '80px 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>

        {/* Cabecera */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{
            display: 'inline-block',
            background: '#e8f0fb',
            color: accentColor,
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '6px 16px',
            borderRadius: '999px',
            marginBottom: '16px',
          }}>
            Habitaciones {labelSistema}
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 700,
            color: '#0f2d5e',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            Encuentra tu habitación en Barcelona
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#5a6a7e',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Precio regulado según índice oficial INCASÒL. Todo incluido, sin sorpresas.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="habitaciones-grid">
          {lista.map((hab) => (
            <div
              key={hab.ref}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(26,74,138,0.07), 0 8px 24px rgba(26,74,138,0.05)',
                border: '1px solid rgba(26,74,138,0.08)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(26,74,138,0.12), 0 16px 40px rgba(26,74,138,0.08)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(26,74,138,0.07), 0 8px 24px rgba(26,74,138,0.05)';
              }}
            >
              {/* Imagen */}
              <div style={{ position: 'relative', width: '100%', height: '180px', flexShrink: 0 }}>
                <Image
                  src={hab.imagen}
                  alt={`Foto de ${hab.titulo}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
                <div style={{
                  position: 'absolute', top: '10px', left: '10px',
                  background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(4px)',
                  color: '#2e7d32', fontSize: '11px', fontWeight: 600,
                  padding: '4px 10px', borderRadius: '999px',
                }}>
                  ● Disponible {getFechaDisponible(hab.mesesDisponible)}
                </div>
                <div style={{
                  position: 'absolute', bottom: '8px', right: '10px',
                  background: 'rgba(0,0,0,0.45)', color: '#fff',
                  fontSize: '10px', fontFamily: 'monospace',
                  padding: '2px 7px', borderRadius: '6px',
                }}>
                  {hab.ref}
                </div>
              </div>

              {/* Contenido */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2d5e', marginBottom: '4px' }}>
                    {hab.titulo}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#5a6a7e', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>📍</span> {hab.zona}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {hab.detalles.map((d) => (
                    <span key={d} style={{
                      background: '#f0f4fa', color: accentColor,
                      fontSize: '11px', fontWeight: 500,
                      padding: '3px 10px', borderRadius: '8px',
                    }}>{d}</span>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid rgba(26,74,138,0.08)', paddingTop: '10px' }}>
                  <p style={{ fontSize: '10px', color: '#9aa5b4', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>Todo incluido</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {hab.extras.map((e) => (
                      <span key={e} style={{ fontSize: '11px', color: '#3d6b9e', display: 'flex', alignItems: 'center', gap: '3px' }}>
                        ✓ {e}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px' }}>
                  <div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: accentColor, lineHeight: 1 }}>
                      {hab.precio.toLocaleString('es-ES')}€
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#9aa5b4', marginLeft: '4px' }}>/mes</span>
                    <p style={{ fontSize: '10px', color: '#9aa5b4', marginTop: '2px' }}>Precio regulado INCASÒL</p>
                  </div>
                  <a
                    href={hab.tallyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: accentColor,
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      padding: '10px 16px',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Reservar →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota legal */}
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#9aa5b4', marginTop: '40px' }}>
          Todos los precios incluyen renta regulada según índice oficial y pack de servicios. Contratos conformes a la normativa catalana vigente.
        </p>
      </div>
    </section>
  );
}
