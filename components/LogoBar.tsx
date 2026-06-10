export default function LogoBar() {
  const plataformas = [
    {
      name: 'Airbnb',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="80" height="22" aria-label="Airbnb">
          <path d="M11.994 1.428C6.259 1.428 1.6 6.103 1.6 11.856c0 5.754 4.659 10.429 10.394 10.429 5.736 0 10.406-4.675 10.406-10.43 0-5.752-4.67-10.427-10.406-10.427zm0 1.674c4.815 0 8.724 3.921 8.724 8.754 0 4.834-3.909 8.755-8.724 8.755-4.814 0-8.722-3.92-8.722-8.755 0-4.833 3.908-8.754 8.722-8.754zm-.01 3.142c-.61 0-1.208.155-1.74.454a3.505 3.505 0 0 0-1.274 1.238 3.498 3.498 0 0 0-.467 1.767c0 .95.313 1.834.878 2.551l3.593 4.577 3.604-4.589c.554-.706.866-1.59.866-2.539a3.489 3.489 0 0 0-.467-1.767 3.505 3.505 0 0 0-1.274-1.238 3.513 3.513 0 0 0-1.719-.454zm-.002 1.674c.5 0 .964.199 1.304.554.34.355.528.833.528 1.343 0 .51-.188.987-.528 1.342-.34.355-.804.554-1.304.554-.5 0-.964-.199-1.303-.554a1.88 1.88 0 0 1-.528-1.342c0-.51.187-.988.528-1.343.34-.355.803-.554 1.303-.554z"/>
        </svg>
      ),
    },
    {
      name: 'Booking.com',
      svg: (
        <svg viewBox="0 0 120 30" fill="currentColor" width="110" height="26" aria-label="Booking.com">
          <text x="0" y="22" fontFamily="var(--font-display)" fontSize="20" fontWeight="800">Booking.com</text>
        </svg>
      ),
    },
    {
      name: 'Idealista',
      svg: (
        <svg viewBox="0 0 100 26" fill="currentColor" width="90" height="22" aria-label="Idealista">
          <text x="0" y="20" fontFamily="var(--font-display)" fontSize="18" fontWeight="700">idealista</text>
        </svg>
      ),
    },
    {
      name: 'Fotocasa',
      svg: (
        <svg viewBox="0 0 100 26" fill="currentColor" width="90" height="22" aria-label="Fotocasa">
          <text x="0" y="20" fontFamily="var(--font-display)" fontSize="18" fontWeight="700">fotocasa</text>
        </svg>
      ),
    },
    {
      name: 'Habitaclia',
      svg: (
        <svg viewBox="0 0 110 26" fill="currentColor" width="100" height="22" aria-label="Habitaclia">
          <text x="0" y="20" fontFamily="var(--font-display)" fontSize="18" fontWeight="700">habitaclia</text>
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        paddingBlock: 'var(--space-5)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(var(--space-6), 4vw, var(--space-12))',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: 'var(--text-xs)', fontWeight: 600,
              color: 'var(--color-text-faint)',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Publicamos en
          </span>
          <div
            style={{
              width: '1px', height: '20px',
              background: 'var(--color-border)',
              flexShrink: 0,
            }}
          />
          {plataformas.map(p => (
            <div
              key={p.name}
              style={{ color: 'var(--color-text-faint)', flexShrink: 0 }}
              title={p.name}
            >
              {p.svg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
