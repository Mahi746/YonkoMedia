'use client'

import { motion } from 'framer-motion'
import { AnimatedHeading, AnimatedTag } from './AnimatedText'

const phases = [
  {
    num: 'Phase 1',
    weeks: 'Week 1 & 2',
    title: 'Diagnosis + Alignment',
    sub: 'Understand the business. Find what\'s broken. Decide what actually matters.',
    accent: true,
    what: {
      label: 'What happens here',
      items: [
        'Deep dive into your business, product, and market',
        'Review traffic, conversion, retention, and pricing',
        'Identify where revenue is leaking',
        'Align on priorities with your team',
      ],
    },
    output: {
      label: 'Output',
      items: ['Clear bottlenecks', 'Clear direction', 'Clear priorities'],
    },
  },
  {
    num: 'Phase 2',
    weeks: 'Week 3 onwards',
    title: 'Execution + Growth',
    sub: 'This is where things start moving.',
    accent: false,
    what: {
      label: 'What we drive',
      items: [
        'Ad strategy and performance alignment',
        'Website and funnel improvements',
        'Content direction and distribution',
        'Ongoing optimisation across all four levers',
      ],
    },
    output: {
      label: 'How it works',
      items: [
        'We lead the strategy',
        'Your team executes',
        'Or we support execution where needed',
      ],
    },
  },
]

export default function Process() {
  return (
    <section id="how-it-works" className="py-28 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
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

        {/* Two-column phase layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8 rounded-3xl overflow-hidden border border-white/8">
          {phases.map((p, i) => (
            <motion.div key={p.num}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-dark p-10 flex flex-col gap-8">

              {/* Phase header pill */}
              <div className={`inline-flex self-start items-center gap-3 px-5 py-3 rounded-xl ${
                p.accent ? 'bg-accent' : 'bg-white/[0.08] border border-white/10'
              }`}>
                <div>
                  <div className={`text-xs font-bold uppercase tracking-widest ${p.accent ? 'text-dark/60' : 'text-white/40'}`}>
                    {p.num}
                  </div>
                  <div className={`font-display font-bold text-base leading-tight ${p.accent ? 'text-dark' : 'text-white'}`}>
                    {p.title}
                  </div>
                  <div className={`text-xs mt-0.5 ${p.accent ? 'text-dark/60' : 'text-white/40'}`}>
                    ({p.weeks})
                  </div>
                </div>
              </div>

              {/* Sub */}
              <p className="text-white/55 text-sm leading-relaxed -mt-2">{p.sub}</p>

              {/* What section */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">{p.what.label}</p>
                <ul className="space-y-2.5">
                  {p.what.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Output */}
              <div className={`rounded-2xl p-5 border ${
                p.accent ? 'bg-accent/8 border-accent/20' : 'bg-white/[0.04] border-white/8'
              }`}>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${p.accent ? 'text-accent/60' : 'text-white/30'}`}>
                  {p.output.label}
                </p>
                <ul className="space-y-2">
                  {p.output.items.map(item => (
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

        {/* Outcome callout */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 bg-white/[0.03] border border-white/8 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/55 text-sm">
            <span className="text-white font-semibold">Everything starts working together.</span>{' '}
            Not in silos.
          </p>
          <a href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-accent text-dark font-bold text-sm px-6 py-3 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(204,251,85,0.4)] transition-all duration-200">
            Start with a diagnosis →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
