'use client';
import Link from 'next/link';
import Image from 'next/image';

const alojamientos = [
  {
    id: 1,
    titulo: 'Coliving Mirallers · City Center',
    precio: 'Desde 620€/mes',
    sistema: 'Coliving',
    colorSistema: '#0453ab',
    bgSistema: '#eef3fb',
    href: '/coliving',
    img: 'https://picsum.photos/seed/coliving1/600/400',
    amenities: [
      { icon: 'wifi', label: 'WiFi incluido' },
      { icon: 'clean', label: 'Limpieza semanal' },
      { icon: 'tools', label: 'Mantenimiento' },
      { icon: 'wash', label: 'Lavandería' },
    ],
  },
  {
    id: 2,
    titulo: 'Temporal Eixample · Bright Room',
    precio: 'Desde 780€/mes',
    sistema: 'Temporal',
    colorSistema: '#008f58',
    bgSistema: '#e8f7f1',
    href: '/temporal',
    img: 'https://picsum.photos/seed/temporal2/600/400',
    amenities: [
      { icon: 'wifi', label: 'WiFi incluido' },
      { icon: 'clean', label: 'Limpieza semanal' },
      { icon: 'tools', label: 'Mantenimiento' },
      { icon: 'wash', label: 'Lavandería' },
    ],
  },
  {
    id: 3,
    titulo: 'Vacacional Barceloneta · Sea Views',
    precio: 'Desde 95€/noche',
    sistema: 'Vacacional',
    colorSistema: '#c45e00',
    bgSistema: '#fef3e8',
    href: '/vacacional',
    img: 'https://picsum.photos/seed/vacacional3/600/400',
    amenities: [
      { icon: 'wifi', label: 'WiFi incluido' },
      { icon: 'clean', label: 'Limpieza diaria' },
      { icon: 'tools', label: 'Mantenimiento 24h' },
      { icon: 'wash', label: 'Ropa de cama' },
    ],
  },
];

const AmenityIcon = ({ type }: { type: string }) => {
  const style = { width: 15, height: 15, flexShrink: 0 as const };
  if (type === 'wifi') return (
    <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
  if (type === 'clean') return (
    <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 3l18 18" /><path d="M8 8v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3" />
      <path d="M10 3H6a2 2 0 0 0-2 2v3" /><path d="M14 3h4a2 2 0 0 1 2 2v3" />
    </svg>
  );
  if (type === 'tools') return (
    <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
  return (
    <svg {...style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3" />
      <path d="M21 7h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
      <path d="M3 12h18" />
    </svg>
  );
};

export default function AlojamientosDestacados() {
  return (
    <section style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--color-bg)' }}>
      <div className="container">

        {/* Cabecera */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            color: 'var(--color-primary)',
            fontWeight: 700,
            fontSize: 'var(--text-sm)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>Espacios seleccionados</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem,2.5vw,2.2rem)',
            fontWeight: 800,
            color: 'var(--color-text)',
            lineHeight: 1.2,
            marginBottom: '14px',
          }}>Nuestros espacios destacados</h2>
          <p style={{
            fontSize: 'var(--text-base)',
            color: 'var(--color-text-muted)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.65,
          }}>Pisos verificados en Barcelona, con todo incluido y gestión profesional.</p>
        </div>

        {/* Grid de cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '24px',
        }}>
          {alojamientos.map((a) => (
            <article
              key={a.id}
              style={{
                background: 'white',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid #e8ecf2',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.11), 0 2px 6px rgba(0,0,0,0.06)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Imagen */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '3/2', overflow: 'hidden', background: '#e8ecf2' }}>
                <Image
                  src={a.img}
                  alt={a.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                {/* Badge sistema */}
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: a.colorSistema,
                  background: 'rgba(255,255,255,0.93)',
                  borderRadius: 'var(--radius-full)',
                  padding: '4px 10px',
                  backdropFilter: 'blur(4px)',
                }}>{a.sistema}</span>
              </div>

              {/* Contenido */}
              <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>

                {/* Título + precio */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    lineHeight: 1.3,
                    margin: 0,
                  }}>{a.titulo}</h3>
                  <p style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 700,
                    color: a.colorSistema,
                    whiteSpace: 'nowrap',
                    margin: 0,
                    flexShrink: 0,
                  }}>{a.precio}</p>
                </div>

                {/* Amenities */}
                <ul style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px 14px',
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}>
                  {a.amenities.map((am) => (
                    <li key={am.label} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-text-muted)',
                    }}>
                      <span style={{ color: a.colorSistema }}>
                        <AmenityIcon type={am.icon} />
                      </span>
                      {am.label}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                  <Link
                    href={a.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      color: 'white',
                      background: a.colorSistema,
                      padding: '10px 18px',
                      borderRadius: 'var(--radius-lg)',
                      textDecoration: 'none',
                      transition: 'opacity 0.15s ease, transform 0.15s ease',
                      width: '100%',
                      justifyContent: 'center',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88';
                      (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                      (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                    }}
                  >
                    Ver disponibilidad
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
