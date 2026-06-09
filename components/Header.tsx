'use client';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: '#fff', borderBottom: '1px solid var(--color-border)',
      padding: '0 var(--space-8)'
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: '68px'
      }}>
        <a href="/" style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-primary)' }}>
          Viviendas Virtuo
        </a>
        <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.95rem' }}>
          <a href="#sistemas" style={{ color: 'var(--color-text-muted)' }}>Sistemas</a>
          <a href="#propietarios" style={{ color: 'var(--color-text-muted)' }}>Propietarios</a>
          <a href="#inquilinos" style={{ color: 'var(--color-text-muted)' }}>Inquilinos</a>
          <a href="#contacto" style={{
            background: 'var(--color-primary)', color: '#fff',
            padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-md)',
            fontWeight: 600, fontSize: '0.9rem'
          }}>Contactar</a>
        </nav>
      </div>
    </header>
  );
}
