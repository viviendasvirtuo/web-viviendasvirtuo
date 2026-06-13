import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Iniciar sesión — Viviendas Virtuo',
  description: 'Accede a tu portal de inquilino o propietario en Viviendas Virtuo.',
};

export default function IniciarSesion() {
  return (
    <>
      <Header />
      <main style={{
        minHeight: '100dvh',
        background: '#f0f4fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(80px, 12vw, 120px) 16px clamp(48px, 6vw, 80px)',
      }}>
        <div style={{
          background: 'white',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 8px 40px rgba(26,74,138,0.10)',
          padding: 'clamp(32px, 5vw, 56px)',
          width: '100%',
          maxWidth: '440px',
        }}>
          {/* Logo mark */}
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px',
              background: '#1a4a8a',
              borderRadius: 'var(--radius-lg)',
              marginBottom: '16px',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 9.5L12 3l9 6.5V21H3V9.5Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
                <rect x="9" y="14" width="6" height="7" rx="1" stroke="white" strokeWidth="1.6"/>
              </svg>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 2vw, 1.75rem)',
              fontWeight: 900,
              color: 'var(--color-text)',
              lineHeight: 1.15,
              marginBottom: '8px',
            }}>Iniciar sesión</h1>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
              ¿Es tu primera vez?{' '}
              <span style={{ color: '#1a4a8a', fontWeight: 600, cursor: 'pointer' }}>Regístrate</span>
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label
                htmlFor="email"
                style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text)' }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="tu@email.com"
                style={{
                  padding: '11px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px solid var(--color-border)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text)',
                  outline: 'none',
                  transition: 'border-color 0.18s',
                  background: 'white',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#1a4a8a')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              />
            </div>

            {/* Password */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <label
                  htmlFor="password"
                  style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text)' }}
                >
                  Contraseña
                </label>
                <span style={{ fontSize: 'var(--text-xs)', color: '#1a4a8a', fontWeight: 500, cursor: 'pointer' }}>
                  ¿Olvidaste tu contraseña?
                </span>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                style={{
                  padding: '11px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px solid var(--color-border)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text)',
                  outline: 'none',
                  transition: 'border-color 0.18s',
                  background: 'white',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#1a4a8a')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              />
            </div>

            {/* Botón principal */}
            <button
              type="submit"
              style={{
                marginTop: '4px',
                padding: '13px 28px',
                background: '#1a4a8a',
                color: 'white',
                fontWeight: 700,
                fontSize: 'var(--text-base)',
                borderRadius: 'var(--radius-lg)',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.18s',
                width: '100%',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#0f2d5e')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#1a4a8a')}
            >
              Iniciar sesión
            </button>
          </form>

          {/* Separador */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            margin: '24px 0',
          }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>
              o conéctate con
            </span>
            <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
          </div>

          {/* Botones sociales */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {/* Google */}
            <button
              type="button"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '11px 16px',
                border: '1.5px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                background: 'white',
                cursor: 'pointer',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--color-text)',
                transition: 'background 0.18s, border-color 0.18s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#f8f9fc'; e.currentTarget.style.borderColor = '#aaa'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>

            {/* Facebook */}
            <button
              type="button"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '11px 16px',
                border: '1.5px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                background: 'white',
                cursor: 'pointer',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--color-text)',
                transition: 'background 0.18s, border-color 0.18s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#f8f9fc'; e.currentTarget.style.borderColor = '#aaa'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
