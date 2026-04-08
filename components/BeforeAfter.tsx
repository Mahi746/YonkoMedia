'use client'

import { motion } from 'framer-motion'
import { AnimatedHeading, AnimatedTag } from './AnimatedText'

const levers = [
  {
    id: 'traffic',
    label: 'Traffic',
    before: ['Unpredictable sources', 'Low intent visitors', 'Poor conversion rate'],
    after: ['High intent traffic', 'Consistent growth', 'Real results'],
    insight: { text: 'Traffic that ', accent: 'drives revenue', end: ', not vanity metrics.' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="5" stroke="#CCFB55" strokeWidth="1.4" opacity="0.85"/>
        <circle cx="11" cy="11" r="1.8" fill="#CCFB55"/>
        <path d="M11 1v3M11 18v3M1 11h3M18 11h3" stroke="rgba(255,255,255,0.25)" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'conversion',
    label: 'Conversion',
    before: ['High bounce rate', 'Unclear next step', 'Lost opportunities'],
    after: ['Guided journey', 'Intent to action', 'More conversions'],
    insight: { text: 'Better journeys. Stronger signals. ', accent: 'More conversions.', end: '' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.5 4.5H8.5L11 2z" fill="rgba(204,251,85,0.15)" stroke="#CCFB55" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M3 6.5h16M5.5 6.5l2 4.5h7l2-4.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 11l-1.5 4h10l-1.5-4" stroke="#CCFB55" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.75"/>
        <circle cx="11" cy="18.5" r="1.8" fill="#CCFB55"/>
      </svg>
    ),
  },
  {
    id: 'retention',
    label: 'Retention',
    before: ['One-time purchases', 'No repeat behaviour', 'Unpredictable revenue'],
    after: ['Repeat purchases', 'Stronger relationships', 'Predictable growth'],
    insight: { text: 'Stronger retention. Higher LTV. ', accent: 'Revenue that compounds.', end: '' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 9a7 7 0 0 1 12.5-4" stroke="#CCFB55" strokeWidth="1.4" strokeLinecap="round" opacity="0.85"/>
        <path d="M18 13a7 7 0 0 1-12.5 4" stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M17.5 4l1 2.5-2.5.5" stroke="#CCFB55" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.5 18l-1-2.5 2.5-.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'pricing',
    label: 'Pricing',
    before: ['Low customer value', 'Volume dependent', 'Revenue plateaus'],
    after: ['Higher LTV', 'Stronger margins', 'Revenue compounds'],
    insight: { text: 'Sustainable growth. ', accent: 'Compounding revenue.', end: '' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l3.5 5.5H7.5L11 2z" fill="rgba(204,251,85,0.15)" stroke="#CCFB55" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M7.5 7.5L11 20l3.5-12.5" stroke="#CCFB55" strokeWidth="1.3" strokeLinejoin="round" opacity="0.7"/>
        <path d="M4 7.5h14" stroke="rgba(255,255,255,0.2)" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function BeforeAfter() {
  return (
    <section className="py-10 md:py-24 px-5 md:px-6 bg-dark">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-14">
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

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {levers.map((l, i) => (
            <motion.div key={l.id}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08 }}
              className="flex flex-col border border-white/8 rounded-3xl bg-white/[0.02] p-6 md:p-7 gap-5"
            >
              {/* Lever label + icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-accent/70 text-xs font-bold uppercase tracking-widest">{l.label}</span>
                </div>
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/8 flex items-center justify-center">
                  {l.icon}
                </div>
              </div>

              {/* Before / After */}
              <div className="flex items-stretch gap-0">

                {/* Before — formula box style */}
                <div className="flex-1 border border-white/10 bg-white/[0.03] rounded-2xl rounded-r-none backdrop-blur-sm p-4">
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/25" />
                    <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Before</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {l.before.map(t => (
                      <div key={t} className="flex items-center justify-between bg-white/[0.04] border border-white/[0.06] rounded-lg px-2.5 py-1.5">
                        <span className="text-white/35 text-xs">{t}</span>
                        <span className="text-white/20 text-xs font-bold">×</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow divider */}
                <div className="flex items-center justify-center px-0 flex-shrink-0 z-10">
                  <div className="w-8 h-8 rounded-full bg-dark border border-accent/30 flex items-center justify-center -mx-4 shadow-[0_0_14px_rgba(204,251,85,0.12)]">
                    <span className="text-accent text-xs font-bold">→</span>
                  </div>
                </div>

                {/* After — lime box style */}
                <div className="flex-1 border border-accent/20 bg-accent/[0.04] rounded-2xl rounded-l-none backdrop-blur-sm p-4">
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-accent/60 text-[10px] font-bold uppercase tracking-widest">After</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {l.after.map(t => (
                      <div key={t} className="flex items-center justify-between bg-accent/[0.08] border border-accent/15 rounded-lg px-2.5 py-1.5">
                        <span className="text-accent/80 text-xs font-medium">{t}</span>
                        <span className="text-accent text-xs font-bold">✓</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Insight bar — formula box style */}
              <div className="flex items-center gap-3 border border-white/10 bg-white/[0.03] rounded-2xl px-4 py-3 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <p className="text-white/55 text-xs leading-relaxed">
                  {l.insight.text}
                  <span className="text-accent font-semibold">{l.insight.accent}</span>
                  {l.insight.end}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
