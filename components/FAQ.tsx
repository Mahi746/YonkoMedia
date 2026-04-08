'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'What exactly is a fractional CMO?',
    a: 'A fractional CMO gives you senior marketing leadership — strategy, direction, execution oversight — without the cost of a full-time hire. You get the thinking and the system, not just deliverables.',
  },
  {
    q: 'Why not just hire a full-time CMO?',
    a: 'A full-time CMO costs £150K–£250K a year before bonuses, equity, and onboarding time. Most businesses at the £1M–£10M stage don\'t need a full-time hire — they need senior thinking applied to the right problems, fast. That\'s exactly what this is. You get the strategy, the system, and the execution oversight without the overhead.',
  },
  {
    q: 'We\'ve tried agencies before and nothing changed. Why is this different?',
    a: 'Agencies are incentivised to run activity — ads, content, campaigns — because that\'s what they bill for. We\'re incentivised to fix your system, because that\'s what we\'re measured on. We diagnose first. We don\'t touch execution until we know exactly which lever is broken and why. That\'s the difference between activity and actual growth.',
  },
  {
    q: 'What do the four levers actually mean for my business?',
    a: 'Traffic, Conversion, Retention, and Pricing are the only four inputs that determine your revenue. Most businesses have one or two working well and ignore the others. We find which levers are limiting growth and fix them in sequence.',
  },
  {
    q: 'How do you know which lever to fix first?',
    a: 'That\'s what Phase 1 is for. Before we recommend anything, we audit all four levers and find where the biggest leak is. Most businesses assume it\'s traffic. It\'s usually conversion or retention. We go where the data points, not where it\'s easiest to sell.',
  },
  {
    q: 'Do you just make a plan and disappear?',
    a: 'No. Strategy without execution is just a document. After Phase 1, we move into active execution — either leading your existing team, plugging in our own specialists, or both. We stay in it until the system is working. You\'ll have direct access throughout, not a monthly slide deck.',
  },
  {
    q: 'How quickly can we realistically expect results?',
    a: 'Weeks 1–2 are diagnosis. No execution, just clarity. From Week 3 onwards, things start moving. Most clients see measurable shifts within 60–90 days — not vanity metrics, actual revenue movement. The compounding happens from month 3 onwards when the levers start working together.',
  },
  {
    q: 'What does it cost to work with you?',
    a: 'We don\'t publish fixed pricing because the scope varies. What we can tell you: it\'s structured as a monthly engagement, scoped to your stage and goals. The discovery call is free, and if there\'s no fit, we\'ll tell you that too. Book 30 minutes and we\'ll give you a straight answer.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-10 md:py-24 px-5 md:px-6 bg-dark">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">FAQ</span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-white mt-5">
            Questions we hear often.
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                open === i ? 'border-accent/25 bg-white/[0.04]' : 'border-white/8 bg-white/[0.02]'
              }`}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left">
                <span className={`font-display font-semibold text-base leading-snug transition-colors duration-200 ${open === i ? 'text-white' : 'text-white/75'}`}>
                  {f.q}
                </span>
                <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }}
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-colors duration-200 ${
                    open === i ? 'bg-accent border-accent' : 'border-white/20 bg-transparent'
                  }`}>
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M5.5 1v9M1 5.5h9" stroke={open === i ? '#010101' : 'rgba(255,255,255,0.5)'} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <p className="px-7 pb-6 text-white/55 text-sm leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
