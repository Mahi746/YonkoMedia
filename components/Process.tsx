'use client'

import { motion } from 'framer-motion'
import { AnimatedHeading, AnimatedTag } from './AnimatedText'

const CALENDLY_URL = 'https://calendly.com/akshay-yonkomedia/30min'
const openCalendly = () => (window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL })

const weeks = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6+']

const phases = [
  {
    num: '01',
    weeks: 'Week 1 & 2',
    title: 'Diagnosis + Alignment',
    sub: 'Understand the business. Find what\'s broken. Decide what actually matters.',
    accent: true,
    whatLabel: 'What happens here',
    what: [
      'Deep dive into your business, product, and market',
      'Review traffic, conversion, retention, and pricing',
      'Identify where revenue is leaking',
      'Align on priorities with your team',
    ],
    outputLabel: 'Output',
    output: ['Clear bottlenecks', 'Clear direction', 'Clear priorities'],
  },
  {
    num: '02',
    weeks: 'Week 3 onwards',
    title: 'Execution + Growth',
    sub: 'This is where things start moving.',
    accent: false,
    whatLabel: 'What we drive',
    what: [
      'Ad strategy and performance alignment',
      'Website and funnel improvements',
      'Content direction and distribution',
      'Ongoing optimisation across all four levers',
    ],
    outputLabel: 'How it works',
    output: ['We lead the strategy', 'Your team executes', 'Or we support execution where needed'],
  },
]

export default function Process() {
  return (
    <section id="how-it-works" className="py-16 md:py-28 px-5 md:px-6 bg-dark">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <AnimatedTag text="How we work" delay={0}
            className="inline-flex text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full mb-6" />
          <AnimatedHeading
            text="What working together actually looks like."
            delay={0.05}
            className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-white leading-tight mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/55 text-base max-w-md"
          >
            We don&apos;t jump into execution. We fix the system first.
          </motion.p>
        </div>

        {/* Gantt Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15 }}
          className="border border-white/8 rounded-2xl overflow-hidden bg-white/[0.02] mb-5"
        >
          {/* Week header */}
          <div className="flex border-b border-white/8">
            <div className="w-28 md:w-36 flex-shrink-0 px-5 py-3 border-r border-white/8">
              <span className="text-white/20 text-[11px] uppercase tracking-widest font-semibold">Timeline</span>
            </div>
            <div className="flex-1 flex">
              {weeks.map((w, i) => (
                <div key={w} className={`flex-1 py-3 text-center text-[11px] font-semibold text-white/25 ${i > 0 ? 'border-l border-white/[0.06]' : ''}`}>
                  {w}
                </div>
              ))}
            </div>
          </div>

          {/* Phase rows */}
          <div className="flex flex-col gap-0">
            {/* Phase 1 row */}
            <div className="flex items-center border-b border-white/[0.05]">
              <div className="w-28 md:w-36 flex-shrink-0 px-5 py-4 border-r border-white/8">
                <div className="text-white/25 text-[10px] uppercase tracking-widest mb-0.5">Phase 1</div>
                <div className="text-white/60 text-xs font-semibold">Diagnosis</div>
              </div>
              <div className="flex-1 relative h-14 px-2 flex items-center">
                {/* Grid lines */}
                <div className="absolute inset-0 flex pointer-events-none">
                  {weeks.map((_, i) => (
                    <div key={i} className={`flex-1 h-full ${i > 0 ? 'border-l border-white/[0.06] border-dashed' : ''}`} />
                  ))}
                </div>
                {/* Bar: W1–W2 = 2/6 = 33.33% */}
                <motion.div
                  initial={{ width: 0 }} whileInView={{ width: '33.33%' }}
                  viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative h-9 rounded-lg bg-accent flex items-center px-3 overflow-hidden"
                >
                  <span className="text-dark font-bold text-xs whitespace-nowrap">Diagnosis + Alignment</span>
                </motion.div>
              </div>
            </div>

            {/* Phase 2 row */}
            <div className="flex items-center">
              <div className="w-28 md:w-36 flex-shrink-0 px-5 py-4 border-r border-white/8">
                <div className="text-white/25 text-[10px] uppercase tracking-widest mb-0.5">Phase 2</div>
                <div className="text-white/60 text-xs font-semibold">Execution</div>
              </div>
              <div className="flex-1 relative h-14 px-2 flex items-center">
                {/* Grid lines */}
                <div className="absolute inset-0 flex pointer-events-none">
                  {weeks.map((_, i) => (
                    <div key={i} className={`flex-1 h-full ${i > 0 ? 'border-l border-white/[0.06] border-dashed' : ''}`} />
                  ))}
                </div>
                {/* Bar: W3–W6+ starts at 2/6, width 4/6 */}
                <motion.div
                  initial={{ width: 0 }} whileInView={{ width: '66.66%' }}
                  viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ marginLeft: '33.33%' }}
                  className="relative h-9 rounded-lg bg-white/[0.12] border border-white/10 flex items-center px-3 overflow-hidden"
                >
                  <span className="text-white/70 font-bold text-xs whitespace-nowrap">Execution + Growth</span>
                  <div className="absolute inset-0 rounded-lg"
                    style={{ background: 'linear-gradient(90deg, rgba(204,251,85,0.08) 0%, transparent 60%)' }} />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Phase detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {phases.map((p, i) => (
            <motion.div key={p.num}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/8 rounded-2xl p-7 flex flex-col gap-6"
            >
              {/* Number + title */}
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-display font-bold text-base ${
                  p.accent ? 'bg-accent text-dark' : 'bg-white/10 text-white'
                }`}>
                  {i + 1}
                </div>
                <div>
                  <div className="text-white/30 text-[11px] uppercase tracking-widest font-semibold mb-0.5">{p.weeks}</div>
                  <h3 className="font-display font-bold text-lg text-white leading-snug">{p.title}</h3>
                </div>
              </div>

              <p className="text-white/55 text-sm leading-relaxed -mt-2">{p.sub}</p>

              {/* What items */}
              <div>
                <p className="text-white/25 text-[11px] uppercase tracking-widest font-semibold mb-3">{p.whatLabel}</p>
                <ul className="space-y-2">
                  {p.what.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Output box */}
              <div className={`rounded-xl p-4 border ${p.accent ? 'bg-accent/8 border-accent/20' : 'bg-white/[0.04] border-white/8'}`}>
                <p className={`text-[11px] uppercase tracking-widest font-semibold mb-3 ${p.accent ? 'text-accent/60' : 'text-white/30'}`}>
                  {p.outputLabel}
                </p>
                <ul className="space-y-1.5">
                  {p.output.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 bg-white/[0.03] border border-white/8 rounded-2xl px-7 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/55 text-sm">
            <span className="text-white font-semibold">Everything starts working together.</span>{' '}
            Not in silos.
          </p>
          <button onClick={openCalendly}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-accent text-dark font-bold text-sm px-6 py-3 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(204,251,85,0.4)] transition-all duration-200">
            Start with a diagnosis →
          </button>
        </motion.div>

      </div>
    </section>
  )
}
