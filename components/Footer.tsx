export default function Footer() {
  const sistemas = [
    { label: 'Coliving', href: '#sistemas' },
    { label: 'Temporal', href: '#sistemas' },
    { label: 'Vacacional', href: '#sistemas' },
  ];
  const empresa = [
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Propietarios', href: '#propietarios' },
    { label: 'Inquilinos', href: '#inquilinos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <style>{`
        .footer {
          background: var(--color-primary-dark);
          color: rgba(255,255,255,0.65);
          padding: var(--space-16) 0 var(--space-8);
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--space-10);
          margin-bottom: var(--space-12);
        }
        .footer__brand-logo {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          margin-bottom: var(--space-4);
        }
        .footer__brand-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          color: #fff;
        }
        .footer__brand-desc {
          font-size: 0.85rem;
          line-height: 1.65;
          max-width: 28ch;
          margin-bottom: var(--space-6);
        }
        .footer__social {
          display: flex;
          gap: var(--space-2);
        }
        .footer__social-link {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.6);
          transition: all var(--transition);
          font-size: 0.85rem;
        }
        .footer__social-link:hover {
          background: rgba(255,255,255,0.15);
          color: #fff;
        }
        .footer__col-title {
          font-family: var(--font-display);
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.4);
          margin-bottom: var(--space-4);
        }
        .footer__links {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
        .footer__link {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.6);
          transition: color var(--transition);
          text-decoration: none;
        }
        .footer__link:hover { color: #fff; }
        .footer__contact-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-2);
          font-size: 0.85rem;
          margin-bottom: var(--space-2);
        }
        .footer__bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: var(--space-6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          flex-wrap: wrap;
          gap: var(--space-3);
        }
        @media (max-width: 768px) {
          .footer__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .footer__grid { grid-template-columns: 1fr; }
          .footer__bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <div className="footer__brand-logo">
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-label="Virtuo">
                  <rect width="36" height="36" rx="8" fill="rgba(255,255,255,0.1)"/>
                  <path d="M8 10h4l6 14 6-14h4L18 28 8 10z" fill="white"/>
                  <circle cx="18" cy="10" r="2.5" fill="#60a5fa"/>
                </svg>
                <span className="footer__brand-name">Viviendas Virtuo</span>
              </div>
              <p className="footer__brand-desc">
                Gestión profesional de alquiler en Barcelona. Coliving, temporal y vacacional.
              </p>
              <div className="footer__social">
                <a href="#" className="footer__social-link" aria-label="Instagram">ig</a>
                <a href="#" className="footer__social-link" aria-label="LinkedIn">in</a>
                <a href="#" className="footer__social-link" aria-label="WhatsApp">wa</a>
              </div>
            </div>

            <div>
              <div className="footer__col-title">Sistemas</div>
              <div className="footer__links">
                {sistemas.map(l => <a key={l.label} href={l.href} className="footer__link">{l.label}</a>)}
              </div>
            </div>

            <div>
              <div className="footer__col-title">Empresa</div>
              <div className="footer__links">
                {empresa.map(l => <a key={l.label} href={l.href} className="footer__link">{l.label}</a>)}
              </div>
            </div>

            <div>
              <div className="footer__col-title">Contacto</div>
              <div className="footer__contact-item">📍 Barcelona y área metropolitana</div>
              <div className="footer__contact-item">⏱️ Respuesta en 24h</div>
              <div style={{ marginTop: 'var(--space-4)' }}>
                <a href="#contacto" className="btn btn-white" style={{ fontSize: '0.8rem', padding: '0.5rem 1.2rem', minHeight: '38px' }}>Contactar ahora</a>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© 2025 Viviendas Virtuo. Todos los derechos reservados.</span>
            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <a href="#" className="footer__link">Aviso legal</a>
              <a href="#" className="footer__link">Política de privacidad</a>
              <a href="#" className="footer__link">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
