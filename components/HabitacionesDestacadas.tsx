'use client';
import Image from 'next/image';

type Sistema = 'coliving' | 'temporal' | 'vacacional';

const habitaciones = [
  // ── COLIVING ──────────────────────────────────────────
  {
    ref: 'Mora_2026_01',
    sistema: 'coliving' as Sistema,
    titulo: 'Habitación Port BDN',
    zona: 'Eduard Maristany · Badalona',
    imagen: '/images/eduard_maristany_bdn.png',
    detalles: ['4 hab.', '2 baños nuevos'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 1050,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=Mora_2026_01&precio_hab=1050',
  },
  {
    ref: 'Dmar_2026_02',
    sistema: 'coliving' as Sistema,
    titulo: 'Habitación Poblenou',
    zona: 'Diagonal Mar',
    imagen: '/images/zona_poblenou.png',
    detalles: ['4 hab.', '2 baños'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 1000,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=Dmar_2026_02&precio_hab=1000',
  },
  {
    ref: 'PEspaña_2026_03',
    sistema: 'coliving' as Sistema,
    titulo: 'Habitación Pl. España',
    zona: 'Tarragona',
    imagen: '/images/zonas_plaza_espa%C3%B1a.jpg',
    detalles: ['5 hab.', '3 baños'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 900,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=PEspa%C3%B1a_2026_03&precio_hab=900',
  },
  {
    ref: 'Ramblas_2026_02',
    sistema: 'coliving' as Sistema,
    titulo: 'Habitación Ramblas',
    zona: 'Canaletas',
    imagen: '/images/zona_ramblas.png',
    detalles: ['5 hab.', '3 baños'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 1100,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=Ramblas_2026_02&precio_hab=1100',
  },
  // ── TEMPORAL ──────────────────────────────────────────
  {
    ref: 'Eixam_2026_01',
    sistema: 'temporal' as Sistema,
    titulo: 'Habitación Eixample',
    zona: 'Passeig de Gràcia / Provença',
    imagen: '/images/eixample01.jpg',
    detalles: ['5 hab.', '2 baños renovados'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 1200,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=Eixam_2026_01&precio_hab=1200',
  },
  {
    ref: 'Sagrada_2026_03',
    sistema: 'temporal' as Sistema,
    titulo: 'Habitación Sagrada Família',
    zona: 'Marina',
    imagen: '/images/zona_sagrada_familia.png',
    detalles: ['6 hab.', '3 baños nuevos'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 950,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=Sagrada_2026_03&precio_hab=950',
  },
  {
    ref: 'Gracia_2026_01',
    sistema: 'temporal' as Sistema,
    titulo: 'Habitación Gràcia',
    zona: 'Vila de Gràcia / Lesseps',
    imagen: '/images/piso_gracia.avif',
    detalles: ['4 hab.', 'Escritorio profesional'],
    extras: ['Terraza común', 'Suministros incluidos', 'WiFi'],
    precio: 950,
    tallyUrl: 'https://www.rentila.es/973654181148495',
  },
  {
    ref: 'Sants_2026_01',
    sistema: 'temporal' as Sistema,
    titulo: 'Habitación Sants',
    zona: 'Sants-Badal / Plaça Sants',
    imagen: '/images/sants01.png',
    detalles: ['6 hab.', 'Hab. XXL +15m²'],
    extras: ['Cerradura inteligente', 'Suministros incluidos', 'WiFi'],
    precio: 900,
    tallyUrl: 'https://tally.so/r/pbO1lV?inmueble=Sants_2026_01&precio_hab=750',
  },
  // ── VACACIONAL ────────────────────────────────────────
  // (añadir apartamentos vacacionales aquí cuando estén disponibles)
];

interface Props {
  sistema?: Sistema;
  sistemas?: Sistema[];
  mostrarTitulo?: boolean;
}

export default function HabitacionesDestacadas({ sistema, sistemas, mostrarTitulo = true }: Props) {
  const lista = sistemas
    ? habitaciones.filter((h) => sistemas.includes(h.sistema))
    : habitaciones.filter((h) => h.sistema === sistema);

  const sistemaEfectivo = sistemas ? sistemas[0] : sistema;
  const accentColor =
    sistemaEfectivo === 'coliving' ? '#0453ab' :
    sistemaEfectivo === 'temporal' ? '#008f58' :
    '#c45e00';

  const labelSistema =
    sistemaEfectivo === 'coliving' ? 'Coliving' :
    sistemaEfectivo === 'temporal' ? 'Temporal' :
    'Vacacional';

  return (
    <section style={{ background: '#f8f9fc', padding: mostrarTitulo ? '80px 0' : '0' }}>
      <style>{`
        .hab-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (min-width: 1600px) {
          .hab-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 900px) {
          .hab-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .hab-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>

        {/* Cabecera */}
        {mostrarTitulo && (
          <div style={{ textAlign: 'center', marginBottom: '56px', maxWidth: '700px', margin: '0 auto 56px' }}>
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
              {sistemaEfectivo === 'vacacional' ? 'Apartamentos' : 'Habitaciones'} {labelSistema}
            </span>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 700,
              color: '#0f2d5e',
              marginBottom: '16px',
              lineHeight: 1.2,
            }}>
              {sistemaEfectivo === 'vacacional'
                ? 'Apartamentos disponibles en Barcelona'
                : 'Encuentra tu habitación en Barcelona'}
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#5a6a7e', lineHeight: 1.6 }}>
              {sistemaEfectivo === 'vacacional'
                ? 'Apartamentos completos gestionados profesionalmente. Precio todo incluido.'
                : 'Precio regulado según índice oficial INCASÒL. Todo incluido, sin sorpresas.'}
            </p>
          </div>
        )}

        {/* Sin resultados */}
        {lista.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 24px', color: '#9aa5b4' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Próximamente disponible</p>
            <p style={{ fontSize: '0.9rem' }}>Estamos preparando nuevas unidades. Contáctanos para más información.</p>
          </div>
        )}

        {lista.length > 0 && (
          <div className="hab-grid">
            {lista.map((hab) => {
              const cardAccent =
                hab.sistema === 'coliving' ? '#0453ab' :
                hab.sistema === 'temporal' ? '#008f58' :
                '#c45e00';
              return (
                <div
                  key={hab.ref}
                  style={{
                    background: '#ffffff',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.1), 0 16px 40px rgba(0,0,0,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)';
                  }}
                >
                  {/* Imagen */}
                  <div style={{ position: 'relative', width: '100%', height: '240px', flexShrink: 0 }}>
                    <Image
                      src={hab.imagen}
                      alt={`Foto de ${hab.titulo}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1600px) 33vw, 25vw"
                    />
                    <div style={{
                      position: 'absolute', top: '14px', left: '14px',
                      background: 'rgba(255,255,255,0.96)',
                      backdropFilter: 'blur(6px)',
                      color: '#1a1a1a',
                      fontSize: '12px',
                      fontWeight: 600,
                      padding: '6px 14px',
                      borderRadius: '999px',
                    }}>
                      Tour 3D
                    </div>
                  </div>

                  {/* Contenido */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f2d5e', lineHeight: 1.2, flex: 1 }}>
                        {hab.titulo}
                      </h3>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{ fontSize: '10px', color: '#9aa5b4', lineHeight: 1 }}>Desde</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: cardAccent, lineHeight: 1.1 }}>
                          {hab.precio.toLocaleString('es-ES')}€
                        </div>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.85rem', color: '#5a6a7e', display: 'flex', alignItems: 'center', gap: '4px', margin: 0 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {hab.zona}
                    </p>

                    <p style={{ fontSize: '0.8rem', color: '#9aa5b4', margin: 0 }}>
                      {hab.detalles.join(' · ')}
                    </p>

                    <a
                      href={hab.tallyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        marginTop: 'auto',
                        textAlign: 'center',
                        border: `1.5px solid ${cardAccent}`,
                        color: cardAccent,
                        background: '#ffffff',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        padding: '12px 16px',
                        borderRadius: '16px',
                        textDecoration: 'none',
                        transition: 'background 0.18s ease, color 0.18s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = cardAccent;
                        (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff';
                        (e.currentTarget as HTMLAnchorElement).style.color = cardAccent;
                      }}
                    >
                      Explorar habitación →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <p style={{ textAlign: 'center', fontSize: '12px', color: '#9aa5b4', marginTop: '40px' }}>
          Todos los precios incluyen renta regulada según índice oficial y pack de servicios. Contratos conformes a la normativa catalana vigente.
        </p>
      </div>
    </section>
  );
}
