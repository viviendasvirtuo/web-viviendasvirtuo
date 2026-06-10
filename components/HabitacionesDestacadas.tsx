'use client';
import Image from 'next/image';

const habitaciones = [
  {
    ref: 'Mora_2026_01',
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
    ref: 'Eixam_2026_01',
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
    ref: 'Gracia_2026_01',
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
    titulo: 'Habitación Sants',
    zona: 'Sants-Badal / Plaça Sants',
    imagen: '/images/sants01.png',
    detalles: ['6 habitaciones', 'Hab. XXL +15m²', '3 baños completos'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 900,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=Sants_2026_01&precio_hab=750',
    mesesDisponible: 0,
  },
  {
    ref: 'Dmar_2026_02',
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
    ref: 'Ramblas_2026_02',
    titulo: 'Habitación Ramblas',
    zona: 'Canaletas',
    imagen: '/images/zona_ramblas.png',
    detalles: ['5 habitaciones', '3 baños'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 1100,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=Ramblas_2026_02&precio_hab=1100',
    mesesDisponible: 1,
  },
  {
    ref: 'Sagrada_2026_03',
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
    ref: 'PEspaña_2026_03',
    titulo: 'Habitación Pl. España',
    zona: 'Tarragona',
    imagen: '/images/zonas_plaza_españa.jpg',
    detalles: ['5 habitaciones', '3 baños'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 900,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=PEspa%C3%B1a_2026_03&precio_hab=900',
    mesesDisponible: 3,
  },
];

function getFechaDisponible(mesesExtra: number): string {
  const fecha = new Date();
  fecha.setMonth(fecha.getMonth() + 3 + mesesExtra);
  return fecha.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
}

export default function HabitacionesDestacadas() {
  return (
    <section style={{
      background: '#f8f9fc',
      padding: '80px 0',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        {/* Cabecera */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{
            display: 'inline-block',
            background: '#e8f0fb',
            color: '#1a4a8a',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '6px 16px',
            borderRadius: '999px',
            marginBottom: '16px',
          }}>
            Habitaciones disponibles
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

        {/* Grid de cards: 4 columnas en desktop, 2 en tablet, 1 en móvil */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
          className="habitaciones-grid"
        >
          {habitaciones.map((hab) => (
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
              {/* Imagen superior */}
              <div style={{ position: 'relative', width: '100%', height: '180px', flexShrink: 0 }}>
                <Image
                  src={hab.imagen}
                  alt={`Foto de ${hab.titulo}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
                {/* Badge disponibilidad sobre la imagen */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(4px)',
                  color: '#2e7d32',
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: '999px',
                }}>
                  ● Disponible {getFechaDisponible(hab.mesesDisponible)}
                </div>
                {/* Ref discreta */}
                <div style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '10px',
                  background: 'rgba(0,0,0,0.45)',
                  color: '#fff',
                  fontSize: '10px',
                  fontFamily: 'monospace',
                  padding: '2px 7px',
                  borderRadius: '6px',
                }}>
                  {hab.ref}
                </div>
              </div>

              {/* Contenido */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>

                {/* Título y zona */}
                <div>
                  <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#0f2d5e',
                    marginBottom: '4px',
                  }}>
                    {hab.titulo}
                  </h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#5a6a7e',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    <span>📍</span> {hab.zona}
                  </p>
                </div>

                {/* Detalles de la vivienda */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {hab.detalles.map((d) => (
                    <span key={d} style={{
                      background: '#f0f4fa',
                      color: '#1a4a8a',
                      fontSize: '11px',
                      fontWeight: 500,
                      padding: '3px 10px',
                      borderRadius: '8px',
                    }}>
                      {d}
                    </span>
                  ))}
                </div>

                {/* Servicios incluidos */}
                <div style={{
                  borderTop: '1px solid rgba(26,74,138,0.08)',
                  paddingTop: '10px',
                }}>
                  <p style={{ fontSize: '10px', color: '#9aa5b4', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                    Todo incluido
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {hab.extras.map((e) => (
                      <span key={e} style={{
                        fontSize: '11px',
                        color: '#3d6b9e',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px',
                      }}>
                        ✓ {e}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Precio y CTA */}
                <div style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '8px',
                }}>
                  <div>
                    <span style={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: '#1a4a8a',
                      lineHeight: 1,
                    }}>
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
                      background: '#1a4a8a',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      padding: '10px 16px',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#0f2d5e')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#1a4a8a')}
                  >
                    Reservar →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota legal */}
        <p style={{
          textAlign: 'center',
          fontSize: '12px',
          color: '#9aa5b4',
          marginTop: '40px',
        }}>
          Todos los precios incluyen renta regulada según índice oficial y pack de servicios. Contratos conformes a la normativa catalana vigente.
        </p>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .habitaciones-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .habitaciones-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
