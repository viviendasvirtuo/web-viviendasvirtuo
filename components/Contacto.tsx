'use client';
import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contacto() {
  const [tipo, setTipo] = useState<'propietario' | 'inquilino'>('propietario');
  const [sistema, setSistema] = useState('sin_definir');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [estado, setEstado] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nombre.trim() || !telefono.trim()) {
      setErrorMsg('Por favor rellena nombre y teléfono.');
      return;
    }
    setEstado('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tipo,
          sistema: tipo === 'propietario' ? sistema : null,
          nombre: nombre.trim(),
          telefono: telefono.trim(),
          email: email.trim() || null,
          mensaje: mensaje.trim() || null,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Error al enviar');
      }
      setEstado('success');
    } catch (err: unknown) {
      setEstado('error');
      const msg = err instanceof Error ? err.message : 'Error desconocido';
      setErrorMsg(msg || 'Algo salió mal. Inténtalo de nuevo o llámanos directamente.');
    }
  }

  if (estado === 'success') {
    return (
      <section id="contacto" className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <div style={{
            padding: 'var(--space-16)',
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-lg)',
          }}>
            <div style={{ fontSize: '4rem', marginBottom: 'var(--space-4)' }}>🎉</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }}>
              ¡Recibido!
            </h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', maxWidth: '40ch', margin: '0 auto' }}>
              Te contactamos en menos de 24 horas. Si prefieres hablar ahora, llámanos directamente.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.8rem 1rem',
    borderRadius: 'var(--radius-md)',
    border: '1.5px solid var(--color-border)',
    background: 'var(--color-bg)',
    fontSize: 'var(--text-base)',
    color: 'var(--color-text)',
    transition: 'border-color var(--transition)',
    outline: 'none',
  };

  return (
    <section id="contacto" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px, 100%), 1fr))',
          gap: 'var(--space-16)',
          alignItems: 'start',
        }}>
          {/* Info */}
          <div>
            <p className="section-label">Contacto</p>
            <h2 className="section-title">Hablemos de tu propiedad<br />o de tu próximo hogar</h2>
            <p className="section-subtitle" style={{ marginBottom: 'var(--space-8)' }}>
              Sin compromiso. En menos de 24 horas un experto de Virtuo se pone en contacto contigo.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {[
                { icon: '📞', label: 'Teléfono', val: '+34 900 000 000' },
                { icon: '✉️', label: 'Email', val: 'hola@viviendasvirtuo.com' },
                { icon: '📍', label: 'Zona de actuación', val: 'Barcelona y área metropolitana' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--text-base)' }}>
                  <span style={{ fontSize: '1.5rem' }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.label}</div>
                    <div style={{ fontWeight: 600, color: 'var(--color-text)' }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-8)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--color-border)',
          }}>
            <form onSubmit={handleSubmit} noValidate>
              {/* Toggle propietario / inquilino */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
                {(['propietario', 'inquilino'] as const).map(t => (
                  <button
                    key={t} type="button"
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
                      textTransform: 'capitalize',
                    }}>
                    {t === 'propietario' ? '🏠 Propietario' : '👤 Inquilino'}
                  </button>
                ))}
              </div>

              {tipo === 'propietario' && (
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--space-2)' }}>
                    ¿Qué sistema te interesa?
                  </label>
                  <select value={sistema} onChange={e => setSistema(e.target.value)} style={{ ...inputStyle }}>
                    <option value="sin_definir">No lo sé aún, me asesoran</option>
                    <option value="coliving">Coliving (habitaciones)</option>
                    <option value="temporal">Temporal (estancias cortas)</option>
                    <option value="vacacional">Vacacional (apartamento turístico)</option>
                  </select>
                </div>
              )}

              <div style={{ marginBottom: 'var(--space-4)' }}>
                <label htmlFor="nombre" style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--color-text)' }}>Nombre *</label>
                <input id="nombre" type="text" required placeholder="Tu nombre" value={nombre} onChange={e => setNombre(e.target.value)} style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--color-border)')} />
              </div>

              <div style={{ marginBottom: 'var(--space-4)' }}>
                <label htmlFor="telefono" style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--color-text)' }}>Teléfono *</label>
                <input id="telefono" type="tel" required placeholder="+34 600 000 000" value={telefono} onChange={e => setTelefono(e.target.value)} style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--color-border)')} />
              </div>

              <div style={{ marginBottom: 'var(--space-4)' }}>
                <label htmlFor="email" style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--color-text)' }}>
                  Email <span style={{ color: 'var(--color-text-faint)', fontWeight: 400 }}>(opcional)</span>
                </label>
                <input id="email" type="email" placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--color-border)')} />
              </div>

              <div style={{ marginBottom: 'var(--space-6)' }}>
                <label htmlFor="mensaje" style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--color-text)' }}>
                  Cuéntanos algo <span style={{ color: 'var(--color-text-faint)', fontWeight: 400 }}>(opcional)</span>
                </label>
                <textarea id="mensaje" rows={3}
                  placeholder={tipo === 'propietario' ? 'Tipo de piso, zona, situación actual...' : 'Zona que buscas, duración, presupuesto...'}
                  value={mensaje} onChange={e => setMensaje(e.target.value)}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--color-primary)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--color-border)')} />
              </div>

              {errorMsg && (
                <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 'var(--radius-md)', padding: 'var(--space-3) var(--space-4)', marginBottom: 'var(--space-4)', fontSize: 'var(--text-sm)', color: '#dc2626' }}>
                  {errorMsg}
                </div>
              )}

              <button type="submit" disabled={estado === 'loading'} className="btn btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center', opacity: estado === 'loading' ? 0.7 : 1 }}>
                {estado === 'loading' ? 'Enviando...' : 'Enviar mensaje →'}
              </button>

              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', textAlign: 'center', marginTop: 'var(--space-3)' }}>
                Sin compromiso · Te respondemos en menos de 24h
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
