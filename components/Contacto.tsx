'use client';
import { useState } from 'react';
import { insertarLead } from '@/lib/supabase';

export default function Contacto() {
  const [form, setForm] = useState({
    tipo: 'propietario' as 'propietario' | 'inquilino',
    sistema: 'sin_definir' as 'coliving' | 'temporal' | 'vacacional' | 'sin_definir',
    nombre: '',
    telefono: '',
    email: '',
    ciudad: '',
    mensaje: '',
  });
  const [estado, setEstado] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado('loading');
    try {
      await insertarLead(form);
      setEstado('ok');
      setForm({ tipo: 'propietario', sistema: 'sin_definir', nombre: '', telefono: '', email: '', ciudad: '', mensaje: '' });
    } catch {
      setEstado('error');
    }
  };

  return (
    <>
      <style>{`
        .contacto { background: var(--color-surface); }
        .contacto__inner {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: var(--space-16);
          align-items: start;
        }
        .contacto__info-title {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 800;
          color: var(--color-text);
          line-height: 1.2;
          margin-bottom: var(--space-4);
        }
        .contacto__info-desc {
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-bottom: var(--space-8);
        }
        .contacto__datos {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }
        .contacto__dato {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }
        .contacto__dato-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: var(--color-primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .contacto__form {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: var(--space-8);
          box-shadow: var(--shadow-md);
        }
        .form-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-2);
          margin-bottom: var(--space-6);
          background: var(--color-surface);
          padding: 0.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
        }
        .form-tab {
          padding: 0.6rem;
          border-radius: calc(var(--radius-md) - 2px);
          border: none;
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition);
          background: transparent;
          color: var(--color-text-muted);
        }
        .form-tab--active {
          background: var(--color-primary);
          color: #fff;
          box-shadow: var(--shadow-sm);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4);
          margin-bottom: var(--space-4);
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          margin-bottom: var(--space-4);
        }
        .form-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--color-text);
          letter-spacing: 0.01em;
        }
        .form-label span { color: var(--color-primary); margin-left: 2px; }
        .form-input {
          width: 100%;
          padding: 0.7rem 0.875rem;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-text);
          background: var(--color-surface);
          transition: border-color var(--transition), box-shadow var(--transition);
          outline: none;
        }
        .form-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(26,74,138,0.1);
        }
        .form-input::placeholder { color: var(--color-text-faint); }
        .form-success {
          text-align: center;
          padding: var(--space-10);
        }
        .form-success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #dcfce7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto var(--space-4);
        }
        .form-success-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: var(--space-2);
        }
        .form-success-desc {
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }
        @media (max-width: 900px) {
          .contacto__inner { grid-template-columns: 1fr; gap: var(--space-10); }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="section contacto" id="contacto">
        <div className="container">
          <div className="contacto__inner">
            <div>
              <span className="section-label">Contacto</span>
              <h2 className="contacto__info-title">Hablemos sobre tu propiedad</h2>
              <p className="contacto__info-desc">
                Sin compromisos. Te contactamos en menos de 24h para entender tu situación y ver cómo podemos ayudarte.
              </p>

              <div className="contacto__datos">
                <div className="contacto__dato">
                  <div className="contacto__dato-icon">📍</div>
                  <span>Barcelona y área metropolitana</span>
                </div>
                <div className="contacto__dato">
                  <div className="contacto__dato-icon">⏱️</div>
                  <span>Respuesta en menos de 24 horas</span>
                </div>
                <div className="contacto__dato">
                  <div className="contacto__dato-icon">🎯</div>
                  <span>Análisis de propiedad gratuito y sin compromiso</span>
                </div>
                <div className="contacto__dato">
                  <div className="contacto__dato-icon">🔒</div>
                  <span>Tus datos están seguros. Nunca los compartimos.</span>
                </div>
              </div>
            </div>

            <div className="contacto__form">
              {estado === 'ok' ? (
                <div className="form-success">
                  <div className="form-success-icon">✅</div>
                  <div className="form-success-title">¡Mensaje recibido!</div>
                  <p className="form-success-desc">Nos ponemos en contacto contigo en menos de 24 horas. Gracias por confiar en Viviendas Virtuo.</p>
                  <button
                    onClick={() => setEstado('idle')}
                    className="btn btn-outline"
                    style={{ marginTop: 'var(--space-6)' }}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-tabs">
                    <button
                      type="button"
                      className={`form-tab ${form.tipo === 'propietario' ? 'form-tab--active' : ''}`}
                      onClick={() => setForm(p => ({ ...p, tipo: 'propietario' }))}
                    >
                      🏠 Soy propietario
                    </button>
                    <button
                      type="button"
                      className={`form-tab ${form.tipo === 'inquilino' ? 'form-tab--active' : ''}`}
                      onClick={() => setForm(p => ({ ...p, tipo: 'inquilino' }))}
                    >
                      🔑 Busco habitación
                    </button>
                  </div>

                  <div className="form-row">
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Nombre<span>*</span></label>
                      <input name="nombre" value={form.nombre} onChange={handleChange} required className="form-input" placeholder="Tu nombre" />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Teléfono<span>*</span></label>
                      <input name="telefono" value={form.telefono} onChange={handleChange} required className="form-input" placeholder="+34 600 000 000" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Email</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} className="form-input" placeholder="tu@email.com" />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Ciudad</label>
                      <input name="ciudad" value={form.ciudad} onChange={handleChange} className="form-input" placeholder="Barcelona" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Sistema de interés</label>
                    <select name="sistema" value={form.sistema} onChange={handleChange} className="form-input">
                      <option value="sin_definir">No lo tengo claro aún</option>
                      <option value="coliving">Coliving (medio-largo plazo)</option>
                      <option value="temporal">Temporal (corta duración)</option>
                      <option value="vacacional">Vacacional (turismo)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Cuéntanos más (opcional)</label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      className="form-input"
                      rows={3}
                      placeholder={form.tipo === 'propietario' ? 'Tipo de propiedad, ubicación, situación actual...' : 'Cuándo necesitas la habitación, zona preferida, duración...'}
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  {estado === 'error' && (
                    <p style={{ color: 'var(--color-error)', fontSize: '0.85rem', marginBottom: 'var(--space-4)' }}>
                      ⚠️ Ha ocurrido un error. Por favor, inténtalo de nuevo.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={estado === 'loading'}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', opacity: estado === 'loading' ? 0.7 : 1 }}
                  >
                    {estado === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                  </button>

                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-faint)', textAlign: 'center', marginTop: 'var(--space-3)' }}>
                    Al enviar aceptas que nos pongamos en contacto contigo. Sin spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
