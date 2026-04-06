'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedHeading, AnimatedTag } from './AnimatedText'

const cases = [
  {
    id: 1,
    category: 'Traffic + Conversion',
    headline: 'How we doubled a hospitality brand\'s direct bookings',
    result: '30% → 60%',
    resultLabel: 'Direct bookings',
    tags: ['Traffic', 'Conversion'],
    teaser: 'A growing hospitality brand was over-reliant on OTA platforms, bleeding margin with every booking. We rebuilt their acquisition and conversion system.',
    levers: ['Rebuilt SEO and direct acquisition channels', 'Redesigned booking flow and landing pages', 'Rewrote messaging hierarchy for direct intent'],
    metric1: { label: 'Direct bookings', from: '30%', to: '60%' },
    metric2: { label: 'OTA dependency', from: '70%', to: '40%' },
  },
  {
    id: 2,
    category: 'All four levers',
    headline: 'From $40K/mo to $190K/mo in 90 days',
    result: '$1.3M',
    resultLabel: 'Revenue driven',
    tags: ['Traffic', 'Conversion', 'Retention', 'Pricing'],
    teaser: 'A SaaS brand had product-market fit but no growth system. Revenue was stuck. We diagnosed, aligned, and executed across all four levers simultaneously.',
    levers: ['Rebuilt paid and organic channel mix', 'Fixed funnel clarity and onboarding friction', 'Introduced LTV-driven retention sequences', 'Restructured pricing to unlock upsell paths'],
    metric1: { label: 'Monthly revenue', from: '$40K', to: '$190K' },
    metric2: { label: 'Timeline', from: '', to: '90 days' },
  },
  {
    id: 3,
    category: 'Traffic + Retention',
    headline: '200K to 670K+ followers with 11× blended ROAS',
    result: '11×',
    resultLabel: 'Blended ROAS',
    tags: ['Traffic', 'Retention'],
    teaser: 'A DTC brand was running ads without a system. High spend, inconsistent return. We rebuilt the full acquisition and retention loop.',
    levers: ['Rebuilt creative strategy and ad structure', 'Fixed attribution and channel mix', 'Built out email + retention flows from scratch', 'Grew organic social as a compounding asset'],
    metric1: { label: 'Social following', from: '200K', to: '670K+' },
    metric2: { label: 'Blended ROAS', from: '2.1×', to: '11×' },
  },
]

export default function CaseStudies() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [modal, setModal] = useState<typeof cases[0] | null>(null)

  return (
    <section className="py-28 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <AnimatedTag text="Case Studies" delay={0}
            className="inline-flex text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full mb-6" />
          <AnimatedHeading
            text="When the system works, numbers move."
            delay={0.05}
            className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-white leading-tight"
          />
        </div>

        {/* Cards — Apple style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.div key={c.id}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setModal(c)}
              className="relative group bg-white/[0.03] border border-white/8 rounded-3xl overflow-hidden cursor-pointer"
              style={{ minHeight: 380 }}>

              {/* Hover overlay */}
              <motion.div
                animate={{ opacity: hovered === c.id ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 bg-accent/[0.06] rounded-3xl pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-auto">
                  <div>
                    <span className="text-accent/50 text-[11px] font-semibold uppercase tracking-widest">{c.category}</span>
                    <h3 className="font-display font-bold text-lg text-white mt-2 leading-snug">{c.headline}</h3>
                  </div>

                  {/* + / arrow icon — Apple style */}
                  <motion.div
                    animate={{ rotate: hovered === c.id ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center ml-3 transition-colors duration-200 ${
                      hovered === c.id ? 'border-accent bg-accent' : 'border-white/15 bg-transparent'
                    }`}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M6.5 1v11M1 6.5h11" stroke={hovered === c.id ? '#010101' : 'rgba(255,255,255,0.6)'} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Result metric */}
                <div className="mt-8 mb-6">
                  <div className="text-accent font-bold text-4xl font-display">{c.result}</div>
                  <div className="text-white/30 text-xs mt-1">{c.resultLabel}</div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {c.tags.map(t => (
                    <span key={t} className="text-[11px] border border-white/10 text-white/40 px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>

                {/* Expand CTA on hover */}
                <AnimatePresence>
                  {hovered === c.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }} transition={{ duration: 0.2 }}
                      className="flex items-center gap-2 text-accent text-sm font-semibold">
                      Show me the full case
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7h12M8 2l5 5-5 5" stroke="#CCFB55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setModal(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }}
              className="fixed inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl top-1/2 -translate-y-1/2 bg-[#111] border border-white/10 rounded-3xl p-8 z-50 max-h-[85vh] overflow-y-auto">

              <div className="flex items-start justify-between mb-6">
                <span className="text-accent/50 text-xs font-semibold uppercase tracking-widest">{modal.category}</span>
                <button onClick={() => setModal(null)}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <h2 className="font-display font-bold text-2xl text-white mb-4 leading-snug">{modal.headline}</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">{modal.teaser}</p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[modal.metric1, modal.metric2].map((m) => (
                  <div key={m.label} className="bg-white/[0.04] border border-white/8 rounded-2xl p-5">
                    <div className="text-white/30 text-xs mb-2">{m.label}</div>
                    {m.from ? (
                      <div className="flex items-center gap-2">
                        <span className="text-white/30 text-lg font-bold">{m.from}</span>
                        <span className="text-white/20 text-sm">→</span>
                        <span className="text-accent font-bold text-xl">{m.to}</span>
                      </div>
                    ) : (
                      <div className="text-accent font-bold text-xl">{m.to}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Levers fixed */}
              <div>
                <p className="text-xs uppercase tracking-widest text-white/25 font-semibold mb-4">What we did</p>
                <ul className="space-y-3">
                  {modal.levers.map(l => (
                    <li key={l} className="flex items-start gap-3 text-white/60 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-accent text-dark font-bold py-4 rounded-full hover:scale-[1.02] transition-all duration-200">
                Get similar results →
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
