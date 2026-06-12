'use client';
import Link from 'next/link';

const SISTEMAS = [
  {
    label: 'Coliving',
    subtitle: 'Habitación a largo plazo',
    desc: 'Comunidad de convivencia, suministros incluidos, zonas comunes cuidadas. Ideal si te quedas 3+ meses.',
    href: '/coliving',
    color: '#0453ab',
    colorLight: '#e8f0fb',
    colorBar: '#0453ab',
    tag: 'Medio-largo plazo',
  },
  {
    label: 'Temporal',
    subtitle: 'Estancia de 1 a 6 meses',
    desc: 'Perfecto para proyectos, másters o rotaciones. Flexibilidad sin sacrificar comodidad.',
    href: '/temporal',
    color: '#008f58',
    colorLight: '#e6f7f0',
    colorBar: '#00c47a',
    tag: 'Corta duración',
  },
  {
    label: 'Vacacional',
    subtitle: 'Apartamento completo',
    desc: 'Para turistas o visitas puntuales. Apartamento íntegro, equipado y listo para disfrutar.',
    href: '/vacacional',
    color: '#b45309',
    colorLight: '#fef3e2',
    colorBar: '#f59e0b',
    tag: 'Días / semanas',
  },
];

export default function SistemaCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px,100%), 1fr))', gap: '24px' }}>
      {SISTEMAS.map((op) => (
        <div
          key={op.label}
          style={{
            background: 'white',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 32px ${op.color}33`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
          }}
        >
          {/* Barra de color superior */}
          <div style={{ height: '6px', background: op.colorBar, flexShrink: 0 }} />

          <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            {/* Tag de duración */}
            <span style={{
              display: 'inline-block',
              background: op.colorLight,
              color: op.color,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '3px 10px',
              borderRadius: '999px',
              alignSelf: 'flex-start',
            }}>{op.tag}</span>

            {/* Label sistema */}
            <p style={{ color: op.color, fontWeight: 800, fontSize: 'var(--text-lg)', fontFamily: 'var(--font-display)', margin: 0, lineHeight: 1.1 }}>{op.label}</p>

            {/* Subtítulo */}
            <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>{op.subtitle}</h3>

            {/* Descripción */}
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{op.desc}</p>

            {/* CTA */}
            <Link
              href={op.href}
              style={{
                marginTop: 'auto',
                paddingTop: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: op.color,
                color: 'white',
                fontWeight: 700,
                fontSize: 'var(--text-sm)',
                padding: '10px 20px',
                borderRadius: 'var(--radius-lg)',
                textDecoration: 'none',
                alignSelf: 'flex-start',
              }}
            >
              Ver {op.label.toLowerCase()} →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
