import React, { useLayoutEffect, useRef, useState } from 'react'

function Example2() {
  const cardRef = useRef(null)
  const rafRef = useRef(0)
  const previousTimeRef = useRef(0)
  const frameBatchRef = useRef(0)
  const fpsSumRef = useRef(0)

  const [perf, setPerf] = useState({
    fps: 0,
    ms: 0,
    frames: 0,
    status: 'Preparing the 3D animation…',
  })

  useLayoutEffect(() => {
    const card = cardRef.current
    if (!card) return

    card.style.opacity = '0'
    card.style.transform = 'perspective(1200px) rotateX(14deg) rotateY(15deg) scale(1.05)'
    card.style.transition = 'opacity 180ms ease-out'
    card.style.willChange = 'transform, box-shadow'

    requestAnimationFrame(() => {
      card.style.opacity = '1'
    })

    previousTimeRef.current = performance.now()

    const animate = (time) => {
      const elapsed = time / 1000
      const rotateX = 14 + Math.sin(elapsed * 0.9) * 10
      const rotateY = 16 + Math.cos(elapsed * 0.7) * 12
      const scale = 1.04 + Math.sin(elapsed * 1.2) * 0.03
      const shadowOpacity = 0.16 + Math.abs(Math.sin(elapsed * 0.8)) * 0.06

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
      card.style.boxShadow = `0 40px 90px rgba(0, 0, 0, ${shadowOpacity}), 0 18px 48px rgba(0, 0, 0, 0.12)`

      const delta = time - previousTimeRef.current
      const frameTime = delta || 16.7
      const fps = 1000 / frameTime
      previousTimeRef.current = time
      frameBatchRef.current += 1
      fpsSumRef.current += fps

      if (frameBatchRef.current >= 15) {
        setPerf((current) => ({
          fps: Math.round(fpsSumRef.current / frameBatchRef.current),
          ms: frameTime.toFixed(1),
          frames: current.frames + frameBatchRef.current,
          status: 'Running with useLayoutEffect for smooth paint-ready animation',
        }))
        frameBatchRef.current = 0
        fpsSumRef.current = 0
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>Example 2: useLayoutEffect 3D Animation</h1>
        <p style={styles.description}>
          This animation uses <strong>useLayoutEffect</strong> to apply the first transform before the browser paints, preventing flicker and keeping the 3D effect smooth.
        </p>
      </div>

      <div style={styles.scene}>
        <div ref={cardRef} style={styles.card}>
          <div style={styles.glow} />
          <div style={styles.cardFace}>
            <span style={styles.cardText}>React</span>
            <span style={styles.cardSub}>useLayoutEffect</span>
          </div>
        </div>
      </div>

      <div style={styles.stats}>
        <div style={styles.statItem}>
          <span style={styles.statLabel}>FPS</span>
          <strong>{perf.fps}</strong>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statLabel}>Frame</span>
          <strong>{perf.ms} ms</strong>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statLabel}>Rendered</span>
          <strong>{perf.frames}</strong>
        </div>
      </div>

      <p style={styles.note}>{perf.status}</p>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '28px',
    padding: '32px',
    background: 'radial-gradient(circle at top, rgba(63, 94, 251, 0.16), transparent 35%), radial-gradient(circle at bottom right, rgba(255, 95, 109, 0.14), transparent 25%), #0d1117',
    color: '#e8eef8',
    textAlign: 'center',
  },
  header: {
    maxWidth: '720px',
  },
  title: {
    fontSize: 'clamp(2rem, 2.8vw, 3.4rem)',
    margin: '0 0 14px',
    letterSpacing: '-0.04em',
  },
  description: {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: '#c8d7ff',
    margin: 0,
  },
  scene: {
    width: '100%',
    maxWidth: '420px',
    perspective: '1400px',
  },
  card: {
    position: 'relative',
    width: '100%',
    minHeight: '320px',
    borderRadius: '28px',
    background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.98), rgba(12, 21, 44, 0.95))',
    border: '1px solid rgba(255,255,255,0.08)',
    overflow: 'hidden',
    boxShadow: '0 40px 90px rgba(0, 0, 0, 0.16)',
    transformStyle: 'preserve-3d',
    opacity: 0,
  },
  glow: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 20% 20%, rgba(96, 165, 250, 0.28), transparent 28%), radial-gradient(circle at 80% 18%, rgba(59, 130, 246, 0.16), transparent 26%)',
    pointerEvents: 'none',
  },
  cardFace: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    gap: '14px',
    padding: '24px',
  },
  cardText: {
    fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
    fontWeight: 800,
    letterSpacing: '-0.05em',
    textTransform: 'uppercase',
    textShadow: '0 24px 60px rgba(19, 45, 101, 0.35)',
    color: '#f8fafc',
  },
  cardSub: {
    fontSize: '1rem',
    color: '#a5b4fc',
    textTransform: 'uppercase',
    letterSpacing: '0.24em',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '16px',
    width: '100%',
    maxWidth: '640px',
  },
  statItem: {
    background: 'rgba(15, 23, 42, 0.86)',
    border: '1px solid rgba(148, 163, 184, 0.12)',
    borderRadius: '18px',
    padding: '20px 18px',
    textAlign: 'left',
  },
  statLabel: {
    display: 'block',
    fontSize: '0.85rem',
    color: '#94a3b8',
    marginBottom: '6px',
    letterSpacing: '0.08em',
  },
  note: {
    fontSize: '0.95rem',
    color: '#dbeafe',
    maxWidth: '640px',
    margin: '0 auto',
    lineHeight: 1.7,
  },
}

export default Example2
