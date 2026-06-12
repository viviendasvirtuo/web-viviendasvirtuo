'use client';
import { useState } from 'react';

const TALLY_PROPIETARIO = 'https://tally.so/r/n0NyGB';
const TALLY_INQUILINO   = 'https://tally.so/r/2EaJNe';

const INFO = {
  propietario: {
    telefono: '+34 611 806 603',
    telefonoHref: 'tel:+34611806603',
    email: 'propietarios@viviendasvirtuo.com',
    emailHref: 'mailto:propietarios@viviendasvirtuo.com',
    tituloFormulario: 'Auditoría Técnica de Viabilidad Residencial',
    descripcion: 'Analizamos tu propiedad y te decimos qué sistema maximiza tu rentabilidad. Sin compromiso.',
    cta: 'Iniciar auditoría gratuita →',
  },
  inquilino: {
    telefono: '+34 611 806 603',
    telefonoHref: 'tel:+34611806603',
    email: 'inquilinos@viviendasvirtuo.com',
    emailHref: 'mailto:inquilinos@viviendasvirtuo.com',
    tituloFormulario: 'Solicitud de Estancia',
    descripcion: 'Cuéntanos qué buscas: zona, duración y presupuesto. Te encontramos la opción ideal.',
    cta: 'Solicitar estancia →',
  },
};

export default function Contacto() {
  const [tipo, setTipo] = useState<'propietario' | 'inquilino'>('propietario');
  const info = INFO[tipo];

  function handleClick() {
    const url = tipo === 'propietario' ? TALLY_PROPIETARIO : TALLY_INQUILINO;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contacto" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px, 100%), 1fr))',
          gap: 'var(--space-16)',
          alignItems: 'start',
        }}>

          {/* Info lateral */}
          <div>
            <p className="section-label">Contacto</p>
            <h2 className="section-title">Hablemos de tu propiedad<br />o de tu próximo hogar</h2>
            <p className="section-subtitle" style={{ marginBottom: 'var(--space-8)' }}>
              Sin compromiso. En menos de 24 horas un experto de Virtuo se pone en contacto contigo.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <a href={info.telefonoHref} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textDecoration: 'none' }}>
                <span style={{ fontSize: '1.5rem' }}>📞</span>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Teléfono</div>
                  <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: 'var(--text-base)' }}>{info.telefono}</div>
                </div>
              </a>

              <a href={info.emailHref} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textDecoration: 'none' }}>
                <span style={{ fontSize: '1.5rem' }}>✉️</span>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                  <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: 'var(--text-sm)', wordBreak: 'break-all' }}>{info.email}</div>
                </div>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <span style={{ fontSize: '1.5rem' }}>📍</span>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Zona de actuación</div>
                  <div style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: 'var(--text-base)' }}>Barcelona y área metropolitana</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card selector */}
          <div style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-8)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--color-border)',
          }}>
            <p style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-text)', marginBottom: 'var(--space-3)' }}>
              ¿Eres propietario o inquilino?
            </p>

            {/* Toggle */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
              {(['propietario', 'inquilino'] as const).map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTipo(t)}
                  style={{
                    padding: 'var(--space-3)',
                    borderRadius: 'var(--radius-md)',
                    border: `2px solid ${tipo === t ? 'var(--color-primary)' : 'var(--color-border)'}`,
                    background: tipo === t ? '#e8f0fa' : 'transparent',
                    color: tipo === t ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    fontWeight: 700,
                    fontSize: 'var(--text-sm)',
                    cursor: 'pointer',
                  }}>
                  {t === 'propietario' ? '🏠 Propietario' : '👤 Inquilino'}
                </button>
              ))}
            </div>

            {/* Descripción dinámica */}
            <div style={{
              background: 'var(--color-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-4) var(--space-5)',
              marginBottom: 'var(--space-6)',
              border: '1px solid var(--color-border)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
            }}>
              <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: 'var(--space-1)' }}>
                {info.tituloFormulario}
              </strong>
              {info.descripcion}
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={handleClick}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}>
              {info.cta}
            </button>

            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textAlign: 'center', marginTop: 'var(--space-3)' }}>
              Sin compromiso · Te respondemos en menos de 24h
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
