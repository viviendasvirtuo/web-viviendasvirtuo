export default function Footer() {
  return (
    <footer style={{
      background: '#0f2d5e', color: 'rgba(255,255,255,0.6)',
      padding: '2rem var(--space-8)', textAlign: 'center', fontSize: '0.9rem'
    }}>
      <p>© {new Date().getFullYear()} Viviendas Virtuo · Todos los derechos reservados</p>
    </footer>
  );
}
