'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const VIDEOS = [
  '/videos/Hero_Video_1.mp4',
  '/videos/Hero_Video_2.mp4',
  '/videos/Hero_Video_3.mp4',
];

const DURATION = 10000;
const FADE = 800;

const tickerItems = [
  'Coliving · alquiler por habitaciones',
  'Temporal · estancias de 1 a 6 meses',
  'Vacacional · apartamento completo',
  'Sin preocupaciones · máxima rentabilidad',
  'Gestión profesional · Barcelona y área metropolitana',
  'Selección de inquilinos · garantía de cobro',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [next, setNext]       = useState<number | null>(null);
  const [fading, setFading]   = useState(false);
  const [ready, setReady]     = useState<boolean[]>([false, false, false]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goTo = (idx: number) => {
    if (fading) return;
    if (!ready[idx]) {
      const check = setInterval(() => {
        if (ready[idx]) {
          clearInterval(check);
          setNext(idx);
          setFading(true);
          setTimeout(() => {
            setCurrent(idx);
            setNext(null);
            setFading(false);
          }, FADE);
        }
      }, 100);
      return;
    }
    setNext(idx);
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setNext(null);
      setFading(false);
    }, FADE);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % VIDEOS.length);
    }, DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, ready]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) {
        if (ready[i]) { v.currentTime = 0; v.play().catch(() => {}); }
      } else {
        v.pause();
      }
    });
  }, [current]);

  useEffect(() => {
    if (!ready[current]) return;
    const v = videoRefs.current[current];
    if (v) { v.currentTime = 0; v.play().catch(() => {}); }
  }, [ready, current]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      const markReady = () => {
        setReady(prev => { const n = [...prev]; n[i] = true; return n; });
      };
      if (v.readyState >= 3) { markReady(); return; }
      v.addEventListener('canplay', markReady, { once: true });
      v.load();
    });
  }, []);

  return (
    <section style={{
      position: 'relative',
      height: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'rgb(9,21,37)',
      backgroundImage: 'url(/images/hero-poster.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>

      {VIDEOS.map((src, i) => (
        <video
          key={src}
          ref={el => { videoRefs.current[i] = el; }}
          src={src}
          muted playsInline loop
          preload="auto"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            transition: `opacity ${FADE}ms ease`,
            opacity: i === current && ready[i] ? 1 : 0,
            zIndex: i === current ? 1 : (i === next ? 2 : 0),
          }}
        />
      ))}

      <div style={{ position: 'absolute', inset: 0, zIndex: 3, background: 'linear-gradient(to top, rgba(9,21,37,0.50) 0%, transparent 25%)' }} />

      <div style={{
        position: 'relative', zIndex: 4,
        flex: 1,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '80px',
        paddingBottom: '1rem',
        paddingLeft: 'clamp(1.25rem, 4vw, 3rem)',
        paddingRight: 'clamp(1.25rem, 4vw, 3rem)',
        maxWidth: '860px',
        marginInline: 'auto',
        width: '100%',
      }}>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 1.2rem + 3.5vw, 4.5rem)',
          fontWeight: 900, color: '#ffffff',
          lineHeight: 1.1, marginBottom: '1rem',
          letterSpacing: '-0.025em',
          textShadow: '0 2px 16px rgba(0,0,0,0.35)',
        }}>
          Alquilar en Barcelona sin miedo.
          <span style={{ display: 'block', color: '#ffffff', fontWeight: 700 }}>
            Con todo incluido. Hasta la tranquilidad.
          </span>
        </h1>

        <p style={{
          fontSize: 'clamp(0.95rem, 0.85rem + 0.5vw, 1.35rem)',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.90)',
          marginBottom: '1.5rem', lineHeight: 1.6,
          maxWidth: '46ch', marginInline: 'auto',
          textShadow: '0 1px 8px rgba(0,0,0,0.3)',
        }}>
          Cuando llegues a Barcelona, nosotros ya lo tenemos todo listo.
        </p>

        {/* 3 CTAs */}
        <div className="hero-ctas">
          <Link href="/coliving" className="hero-btn hero-btn--coliving">
            <span className="hero-btn-label">Coliving</span>
            <span className="hero-btn-sub">Tu habitación en Barcelona</span>
          </Link>
          <Link href="/temporal" className="hero-btn hero-btn--temporal">
            <span className="hero-btn-label">Temporal</span>
            <span className="hero-btn-sub">Estancias de corta duración</span>
          </Link>
          <Link href="/vacacional" className="hero-btn hero-btn--vacacional">
            <span className="hero-btn-label">Vacacional</span>
            <span className="hero-btn-sub">Todo el apartamento para ti</span>
          </Link>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '4.5rem', right: 'clamp(1.5rem, 3vw, 3rem)',
        zIndex: 5, display: 'flex', flexDirection: 'column', gap: '7px',
      }}>
        {VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Vídeo ${i + 1}`}
            style={{
              width: '3px', height: i === current ? '28px' : '14px',
              background: i === current ? '#ffffff' : 'rgba(255,255,255,0.3)',
              border: 'none', borderRadius: '2px', cursor: 'pointer',
              transition: 'all 0.3s ease', padding: 0,
            }}
          />
        ))}
      </div>

      <div aria-hidden="true" style={{
        position: 'relative', zIndex: 4, width: '100%', overflow: 'hidden',
        background: '#ffffff',
        padding: '12px 0',
      }}>
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot" />{item}
            </span>
          ))}
        </div>
      </div>

      <a href="#sistemas" aria-label="Ver sistemas" style={{
        position: 'absolute', bottom: '3.5rem',
        left: '50%', transform: 'translateX(-50%)',
        zIndex: 5, color: 'rgba(255,255,255,0.4)',
        transition: 'color 0.2s ease',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </a>

      <style>{`
        @keyframes ticker { 0% { transform:translateX(0) } 100% { transform:translateX(-50%) } }
        .ticker-track { display:flex; width:max-content; animation:ticker 28s linear infinite; }
        .ticker-track:hover { animation-play-state:paused; }
        .ticker-item { display:inline-flex; align-items:center; gap:10px; padding:0 2rem; font-size:clamp(0.7rem,0.65rem + 0.2vw,0.8rem); font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:#1a4a8a; white-space:nowrap; }
        .ticker-dot { width:4px; height:4px; border-radius:50%; background:#1a4a8a; opacity:0.35; flex-shrink:0; }

        /* --- Hero CTAs --- */
        .hero-ctas {
          display: flex;
          flex-direction: row;
          gap: 0.65rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          padding: 0.7rem 1.4rem;
          border-radius: 9999px;
          border: 1.5px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(10px);
          text-decoration: none;
          transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
          min-width: 140px;
        }
        .hero-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.55);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        .hero-btn-label {
          font-size: clamp(0.9rem, 0.8rem + 0.4vw, 1.05rem);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.01em;
        }
        .hero-btn-sub {
          font-size: clamp(0.65rem, 0.6rem + 0.2vw, 0.75rem);
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          letter-spacing: 0.03em;
        }

        .hero-btn--coliving  { background: rgba(4, 83, 171, 0.45); }
        .hero-btn--coliving:hover  { background: rgba(4, 83, 171, 0.70); }

        .hero-btn--temporal  { background: rgba(0, 143, 88, 0.45); }
        .hero-btn--temporal:hover  { background: rgba(0, 143, 88, 0.70); }

        .hero-btn--vacacional { background: rgba(196, 94, 0, 0.45); }
        .hero-btn--vacacional:hover { background: rgba(196, 94, 0, 0.70); }

        @media (max-width: 600px) {
          .hero-ctas {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.55rem;
            width: 100%;
            max-width: 320px;
          }
          .hero-btn--vacacional {
            grid-column: 1 / -1;
          }
          .hero-btn {
            min-width: unset;
          }
        }
      `}</style>
    </section>
  );
}
