'use client';
import { useState } from 'react';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [perfil, setPerfil] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <section id="contacto" style={{ padding: '5rem var(--space-8)', background: 'linear-gradient(135deg,#1a4a8a,#0f2d5e)', color: '#fff' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
          ¿Tienes una vivienda o buscas habitación?
        </h2>
        <p style={{ opacity: 0.85, marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Cuéntanos tu caso y te respondemos en menos de 24 horas.
        </p>
        {enviado ? (
          <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>✓ Mensaje recibido</p>
            <p style={{ opacity: 0.85, marginTop: '0.5rem' }}>Te contactamos en menos de 24 horas.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" placeholder="Tu nombre" required style={{ padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: 'none', fontSize: '1rem', width: '100%' }} />
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Tu email" required style={{ padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: 'none', fontSize: '1rem', width: '100%' }} />
            <select value={perfil} onChange={e => setPerfil(e.target.value)} style={{ padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: 'none', fontSize: '1rem', width: '100%', color: perfil ? '#1a1a2e' : '#6b7280' }}>
              <option value="">Soy propietario / Busco habitación</option>
              <option value="propietario">Soy propietario</option>
              <option value="inquilino">Busco habitación</option>
            </select>
            <textarea value={mensaje} onChange={e => setMensaje(e.target.value)} placeholder="Cuéntanos tu caso brevemente" rows={4} style={{ padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: 'none', fontSize: '1rem', width: '100%', resize: 'vertical' }} />
            <button type="submit" style={{ background: '#fff', color: 'var(--color-primary)', padding: '0.9rem', borderRadius: 'var(--radius-md)', fontWeight: 700, fontSize: '1rem' }}>Enviar mensaje</button>
          </form>
        )}
      </div>
    </section>
  );
}
