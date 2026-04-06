'use client'

import { motion } from 'framer-motion'
import { AnimatedHeading, AnimatedTag } from './AnimatedText'

const cards = [
  {
    lever: 'Traffic',
    before: 'Traffic is coming in from everywhere',
    after: 'Traffic is intentional and worth scaling',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="3" fill="#CCFB55"/>
        <path d="M4 16h5M23 16h5M16 4v5M16 23v5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7.5 7.5l3.5 3.5M21 21l3.5 3.5M24.5 7.5L21 11M11 21l-3.5 3.5" stroke="#CCFB55" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    lever: 'Conversion',
    before: 'People visit but don\'t convert',
    after: 'Clear path from interest to action',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 8h20l-4 7H10L6 8z" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 15l-2 5h16l-2-5" stroke="#CCFB55" strokeWidth="1.5" strokeLinejoin="round" opacity="0.7"/>
        <circle cx="16" cy="26" r="2.5" fill="#CCFB55"/>
      </svg>
    ),
  },
  {
    lever: 'Retention',
    before: 'Customers come and disappear',
    after: 'Retention starts compounding revenue',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="9" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 3"/>
        <circle cx="16" cy="16" r="5" stroke="#CCFB55" strokeWidth="1.5" opacity="0.7"/>
        <path d="M16 11v5l3 3" stroke="#CCFB55" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    lever: 'Pricing',
    before: 'Revenue depends on volume',
    after: 'Each customer becomes more valuable',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="20" width="5" height="8" rx="1" fill="rgba(255,255,255,0.12)"/>
        <rect x="13.5" y="14" width="5" height="14" rx="1" fill="rgba(255,255,255,0.15)"/>
        <rect x="21" y="7" width="5" height="21" rx="1" fill="#CCFB55" opacity="0.85"/>
      </svg>
    ),
  },
]

export default function BeforeAfter() {
  return (
    <section className="py-28 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <AnimatedTag text="The Shift" delay={0}
            className="inline-flex text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full mb-6" />
          <AnimatedHeading
            text="What changes when we come in."
            delay={0.05}
            className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-white leading-tight mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/55 text-base max-w-md"
          >
            We don&apos;t add more work. We remove what&apos;s not working.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <motion.div key={c.lever}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative bg-white/[0.03] border border-white/8 rounded-3xl p-8 overflow-hidden hover:border-accent/20 transition-all duration-400">

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(204,251,85,0.06), transparent)' }} />

              {/* Lever tag + icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-accent/60 text-xs font-semibold uppercase tracking-widest">{c.lever}</span>
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  {c.icon}
                </div>
              </div>

              {/* Before */}
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-px bg-white/20" />
                  <span className="text-white/25 text-[10px] uppercase tracking-widest font-semibold">Before</span>
                </div>
                <p className="text-white/35 text-sm pl-6 line-through decoration-white/15">{c.before}</p>
              </div>

              {/* Divider arrow */}
              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-white/8" />
                <div className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M1 6l4 4 4-4" stroke="#CCFB55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex-1 h-px bg-white/8" />
              </div>

              {/* After */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-px bg-accent/40" />
                  <span className="text-accent/60 text-[10px] uppercase tracking-widest font-semibold">After</span>
                </div>
                <p className="text-white font-semibold text-sm pl-6 leading-relaxed">{c.after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
