import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Yonkomedia — Fractional CMO Studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#010101',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '0',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)',
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #CCFB55, #a8d63a)',
            opacity: 0.8,
          }}
        />

        {/* Center glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse at center, rgba(204,251,85,0.07) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            padding: '80px 96px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
            <span style={{ fontSize: '52px', fontWeight: 700, color: '#ffffff', letterSpacing: '-1px' }}>yonko</span>
            <span style={{ fontSize: '52px', fontWeight: 700, color: '#CCFB55', letterSpacing: '-1px' }}>media</span>
          </div>

          {/* Tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '28px',
            }}
          >
            <span
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#CCFB55',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                background: 'rgba(204,251,85,0.1)',
                border: '1px solid rgba(204,251,85,0.2)',
                padding: '6px 14px',
                borderRadius: '100px',
              }}
            >
              Fractional CMO Studio
            </span>
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '40px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-1px' }}>
              The system that makes
            </span>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#CCFB55', lineHeight: 1.1, letterSpacing: '-1px' }}>
              revenue compound.
            </span>
          </div>

          {/* Formula */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px',
              padding: '14px 20px',
              marginBottom: '40px',
              width: 'fit-content',
            }}
          >
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>Revenue =</span>
            <span style={{ fontSize: '14px', color: '#CCFB55', fontWeight: 700 }}>Traffic</span>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.2)' }}>×</span>
            <span style={{ fontSize: '14px', color: '#CCFB55', fontWeight: 700 }}>Conversion</span>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.2)' }}>×</span>
            <span style={{ fontSize: '14px', color: '#CCFB55', fontWeight: 700 }}>Retention</span>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.2)' }}>×</span>
            <span style={{ fontSize: '14px', color: '#CCFB55', fontWeight: 700 }}>Pricing</span>
          </div>

          {/* Metrics */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
            {[
              { value: '$1.3M', label: 'Revenue Driven' },
              { value: '11×', label: 'Blended ROAS' },
              { value: '670K+', label: 'Social Reach' },
              { value: '2×', label: 'Direct Bookings' },
            ].map((m, i) => (
              <div key={m.label} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && (
                  <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)', margin: '0 20px' }} />
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '26px', fontWeight: 700, color: '#CCFB55', lineHeight: 1 }}>{m.value}</span>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px', textTransform: 'uppercase' }}>{m.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #CCFB55, #a8d63a)',
            opacity: 0.4,
          }}
        />
      </div>
    ),
    { ...size }
  )
}
