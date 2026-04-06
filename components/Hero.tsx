'use client'

import { motion } from 'framer-motion'
import GridBackground from './GridBackground'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
})

const float = (delay = 0) => ({
  animate: {
    y: [0, -8, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
  },
})

const floaters = [
  { label: 'Direct bookings', value: '30% → 60%', pos: 'top-[20%] left-[4%]', delay: 0 },
  { label: 'Socials grown',   value: '200K → 670K+', pos: 'bottom-[22%] left-[4%]', delay: 1 },
  { label: 'Revenue driven',  value: '$1.3M',       pos: 'top-[20%] right-[4%]', delay: 0.5 },
  { label: 'Blended ROAS',    value: '11×',         pos: 'bottom-[22%] right-[4%]', delay: 1.5 },
]

const levers = ['Traffic', 'Conversion', 'Retention', 'Pricing']

const CALENDLY_URL = 'https://calendly.com/akshay-yonkomedia/30min'
const openCalendly = () => (window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-dark">
      <GridBackground />

      {/* Radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #010101 100%)' }} />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(204,251,85,0.06) 0%, transparent 70%)' }} />

      {/* Floater cards — xl only */}
      {floaters.map((f) => (
        <motion.div
          key={f.label}
          {...float(f.delay)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ opacity: { duration: 0.6, delay: f.delay + 0.8 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: f.delay } }}
          className={`absolute hidden xl:block ${f.pos} bg-white/[0.04] border border-white/[0.08] backdrop-blur-md rounded-2xl px-5 py-4 min-w-[160px]`}
        >
          <div className="text-white/35 text-[11px] uppercase tracking-widest mb-1">{f.label}</div>
          <div className="text-accent font-bold text-2xl">{f.value}</div>
        </motion.div>
      ))}

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* Overline */}
        <motion.div {...fadeUp(0.1)} className="mb-5">
          <span className="inline-flex items-center gap-2 border border-accent/30 bg-accent/8 text-accent text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Fractional CMO Studio
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.2)}
          className="font-display font-bold text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-white mb-5">
          We make your growth
          <br />
          <span className="gradient-text">unstoppable.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p {...fadeUp(0.3)} className="text-white/50 text-base sm:text-lg max-w-lg leading-relaxed mb-6 px-2">
          We work as a fractional CMO to fix the four levers that actually drive revenue.
        </motion.p>

        {/* Formula — the IP */}
        <motion.div {...fadeUp(0.4)} className="mb-7 w-full max-w-lg px-2">
          <div className="flex items-center gap-0 border border-white/10 bg-white/[0.03] rounded-2xl px-4 sm:px-6 py-3.5 backdrop-blur-sm overflow-x-auto scrollbar-none">
            <span className="text-white/40 text-xs sm:text-sm font-medium mr-2 sm:mr-3 flex-shrink-0">Revenue =</span>
            {levers.map((l, i) => (
              <span key={l} className="flex items-center flex-shrink-0">
                <span className="text-accent font-semibold text-xs sm:text-sm cursor-default">{l}</span>
                {i < levers.length - 1 && (
                  <span className="text-white/20 mx-1.5 sm:mx-2 text-xs sm:text-sm">×</span>
                )}
              </span>
            ))}
          </div>
          <p className="text-white/20 text-xs mt-2 tracking-wide">Our proprietary growth framework</p>
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center justify-center gap-3">
          <button onClick={openCalendly}
            className="group inline-flex items-center gap-2 bg-accent text-dark font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-full hover:scale-105 hover:shadow-[0_0_36px_rgba(204,251,85,0.45)] transition-all duration-300">
            Fix my growth levers
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
          <a href="#how-it-works"
            className="inline-flex items-center gap-2 border border-white/10 text-white/60 hover:text-white hover:border-white/25 text-sm sm:text-base font-medium px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all duration-300">
            See how it works
          </a>
        </motion.div>
      </div>
    </section>
  )
}
