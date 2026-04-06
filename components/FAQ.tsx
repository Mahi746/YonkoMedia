'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'What exactly is a fractional CMO?',
    a: 'A fractional CMO gives you senior marketing leadership — strategy, direction, execution oversight — without the cost of a full-time hire. You get the thinking and the system, not just deliverables.',
  },
  {
    q: 'How is this different from hiring a marketing agency?',
    a: 'Agencies execute campaigns. We build the system that makes campaigns work. We diagnose first, align second, and then drive execution — whether that\'s through your team or ours.',
  },
  {
    q: 'What do the four levers actually mean for my business?',
    a: 'Traffic, Conversion, Retention, and Pricing are the only four inputs that determine your revenue. Most businesses have one or two working well and ignore the others. We find which levers are limiting growth and fix them in sequence.',
  },
  {
    q: 'How long before we see results?',
    a: 'Phase 1 (weeks 1–2) is diagnosis and alignment — no execution yet. Phase 2 is where things start moving. Most clients see meaningful shifts within 60–90 days. The system compounds from there.',
  },
  {
    q: 'Do we need a big team or big budget to work together?',
    a: 'No. We\'ve worked with lean teams and bootstrapped brands. The system scales to your resources — we tell you where to focus, so nothing is wasted.',
  },
  {
    q: 'How do we get started?',
    a: 'Book a discovery call. We\'ll spend 30 minutes understanding your business and whether there\'s a fit. If there is, we\'ll outline exactly what Phase 1 looks like for you.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 md:py-28 px-5 md:px-6 bg-dark">
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
