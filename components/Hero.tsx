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
        paddingTop: '100px',
        paddingBottom: '1rem',
        paddingLeft: 'clamp(1.25rem, 4vw, 3rem)',
        paddingRight: 'clamp(1.25rem, 4vw, 3rem)',
        maxWidth: '860px',
        marginInline: 'auto',
        width: '100%',
      }}>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(255,255,255,0.10)',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: '9999px',
          padding: '0.3rem 1rem 0.3rem 0.6rem',
          marginBottom: '1.25rem',
          backdropFilter: 'blur(12px)',
        }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
          <span style={{ fontSize: 'clamp(0.7rem, 0.65rem + 0.2vw, 0.9rem)', fontWeight: 600, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.05em' }}>
            <span className="badge-desktop">Gestión profesional de alquiler · Barcelona y área metropolitana</span>
            <span className="badge-mobile"><span>Gestión profesional de alquiler</span><span>Barcelona y área metropolitana</span></span>
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 1.2rem + 3.5vw, 4.5rem)',
          fontWeight: 900, color: '#ffffff',
          lineHeight: 1.1, marginBottom: '1rem',
          letterSpacing: '-0.025em',
          textShadow: '0 2px 16px rgba(0,0,0,0.35)',
        }}>
          Tu vivienda genera ingresos.
          <span style={{ display: 'block', color: 'rgba(255,255,255,0.45)', fontWeight: 700 }}>
            Nosotros lo gestionamos todo.
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
          Tres sistemas de alquiler adaptados a tu propiedad. Sin esfuerzo, con rentabilidad máxima.
        </p>

        <div className="hero-ctas">
          <Link href="/contacto" className="btn btn-white btn-lg">Soy propietario</Link>
          <a href="#inquilinos" className="btn btn-ghost-white btn-lg">Busco habitación</a>
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
        borderTop: '1px solid rgba(255,255,255,0.10)',
        background: 'rgba(9,21,37,0.45)',
        backdropFilter: 'blur(8px)',
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
        .ticker-item { display:inline-flex; align-items:center; gap:10px; padding:0 2rem; font-size:clamp(0.7rem,0.65rem + 0.2vw,0.8rem); font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:rgba(255,255,255,0.5); white-space:nowrap; }
        .ticker-dot { width:4px; height:4px; border-radius:50%; background:rgba(255,255,255,0.25); flex-shrink:0; }
        .hero-ctas { display:flex; flex-direction:row; gap:0.65rem; flex-wrap:wrap; justify-content:center; }
        .badge-mobile { display:none; }
        .badge-desktop { display:inline; }
        @media (max-width:600px) {
          .hero-ctas { flex-direction:column; align-items:center; width:100%; max-width:280px; }
          .hero-ctas .btn { width:100%; justify-content:center; }
          .badge-desktop { display:none; }
          .badge-mobile { display:flex; flex-direction:column; align-items:center; line-height:1.5; }
        }
      `}</style>
    </section>
  );
}
