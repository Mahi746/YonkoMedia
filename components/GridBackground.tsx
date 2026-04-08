'use client'

import { useEffect, useRef } from 'react'

const GRID      = 64    // grid cell size px
const HALF_LEN  = 130   // half-length of beam → 260px total
const THRESHOLD = 13    // px from a grid line before beam activates

export default function GridBackground() {
  const hRef = useRef<HTMLDivElement>(null)  // horizontal beam
  const vRef = useRef<HTMLDivElement>(null)  // vertical beam

  // Lerped current position
  const cur = useRef({ x: 0, y: 0 })
  // Raw target from cursor
  const tgt = useRef({ x: 0, y: 0 })
  // Which beam is active
  const mode = useRef<'h' | 'v' | 'none'>('none')
  // Per-beam opacity (lerped independently for smooth crossfade)
  const alphaH = useRef(0)
  const alphaV = useRef(0)

  useEffect(() => {
    const section = hRef.current?.closest('section') as HTMLElement | null
    if (!section) return

    let rafId: number

    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect()
      tgt.current = { x: e.clientX - r.left, y: e.clientY - r.top }

      const { x, y } = tgt.current
      const nearH  = Math.round(y / GRID) * GRID
      const nearV  = Math.round(x / GRID) * GRID
      const distH  = Math.abs(y - nearH)
      const distV  = Math.abs(x - nearV)

      if (distH < distV && distH < THRESHOLD)       mode.current = 'h'
      else if (distV <= distH && distV < THRESHOLD) mode.current = 'v'
      else                                           mode.current = 'none'
    }

    const onLeave = () => { mode.current = 'none' }

    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseleave', onLeave)

    const tick = () => {
      const L  = 0.1    // position lerp
      const AL = 0.09   // alpha lerp

      cur.current.x += (tgt.current.x - cur.current.x) * L
      cur.current.y += (tgt.current.y - cur.current.y) * L

      // Snap to nearest grid line from lerped position
      const gY = Math.round(cur.current.y / GRID) * GRID
      const gX = Math.round(cur.current.x / GRID) * GRID

      // Target alphas
      const tH = mode.current === 'h' ? 1 : 0
      const tV = mode.current === 'v' ? 1 : 0
      alphaH.current += (tH - alphaH.current) * AL
      alphaV.current += (tV - alphaV.current) * AL

      if (hRef.current) {
        hRef.current.style.transform = `translate(${cur.current.x - HALF_LEN}px, ${gY}px)`
        hRef.current.style.opacity   = String(alphaH.current)
      }
      if (vRef.current) {
        vRef.current.style.transform = `translate(${gX}px, ${cur.current.y - HALF_LEN}px)`
        vRef.current.style.opacity   = String(alphaV.current)
      }

      rafId = requestAnimationFrame(tick)
    }

    tick()
    return () => {
      cancelAnimationFrame(rafId)
      section.removeEventListener('mousemove', onMove)
      section.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const W = HALF_LEN * 2
  const T = 'rgba(204,251,85,0)'   // transparent end — no dark fringe

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Grid — visible at centre, fades to edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: `${GRID}px ${GRID}px`,
          WebkitMaskImage: 'radial-gradient(ellipse 70% 65% at 50% 45%, black 20%, transparent 78%)',
          maskImage: 'radial-gradient(ellipse 70% 65% at 50% 45%, black 20%, transparent 78%)',
        }}
      />

      {/* ── Horizontal beam ── */}
      <div
        ref={hRef}
        className="absolute top-0 left-0"
        style={{ opacity: 0, willChange: 'transform, opacity' }}
      >
        {/* wide soft bloom */}
        <div style={{
          position: 'absolute', top: -10, left: 0,
          width: W, height: 21,
          background: `linear-gradient(to right, ${T}, rgba(204,251,85,0.15), ${T})`,
          filter: 'blur(6px)',
        }} />
        {/* tight inner glow */}
        <div style={{
          position: 'absolute', top: -3, left: 0,
          width: W, height: 7,
          background: `linear-gradient(to right, ${T}, rgba(204,251,85,0.35), ${T})`,
          filter: 'blur(2px)',
        }} />
        {/* sharp 1px core */}
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: W, height: 1,
          background: `linear-gradient(to right, ${T}, #CCFB55 30%, #CCFB55 70%, ${T})`,
          boxShadow: '0 0 4px 1px rgba(204,251,85,0.7)',
        }} />
      </div>

      {/* ── Vertical beam ── */}
      <div
        ref={vRef}
        className="absolute top-0 left-0"
        style={{ opacity: 0, willChange: 'transform, opacity' }}
      >
        {/* wide soft bloom */}
        <div style={{
          position: 'absolute', top: 0, left: -10,
          width: 21, height: W,
          background: `linear-gradient(to bottom, ${T}, rgba(204,251,85,0.15), ${T})`,
          filter: 'blur(6px)',
        }} />
        {/* tight inner glow */}
        <div style={{
          position: 'absolute', top: 0, left: -3,
          width: 7, height: W,
          background: `linear-gradient(to bottom, ${T}, rgba(204,251,85,0.35), ${T})`,
          filter: 'blur(2px)',
        }} />
        {/* sharp 1px core */}
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: 1, height: W,
          background: `linear-gradient(to bottom, ${T}, #CCFB55 30%, #CCFB55 70%, ${T})`,
          boxShadow: '0 0 4px 1px rgba(204,251,85,0.7)',
        }} />
      </div>

    </div>
  )
}
