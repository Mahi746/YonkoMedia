'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedHeading, AnimatedTag } from './AnimatedText'

const problems = [
  "We're getting traffic, but revenue isn't growing",
  "We're spending on ads, but returns are inconsistent",
  "Our website isn't converting the way it should",
  "We're growing, but it feels slower than expected",
  "We don't have a clear growth direction",
  "We've tried agencies, nothing really changed",
]

const responses = [
  { label: 'Your system looks stable.', sub: "You're in a good place. Let's keep it that way.", cta: false },
  { label: 'There are weak links in your growth engine.', sub: 'Small leaks compound over time. Worth addressing before they get louder.', cta: false },
  { label: 'There are weak links in your growth engine.', sub: 'Small leaks compound over time. Worth addressing before they get louder.', cta: false },
  { label: 'Your revenue is leaking across multiple stages.', sub: "It's not one thing — it's a few things working against each other.", cta: true },
  { label: 'Your revenue is leaking across multiple stages.', sub: "It's not one thing — it's a few things working against each other.", cta: true },
  { label: 'You do not need more activity.', sub: 'You need system alignment. Every lever is pulling in a different direction.', cta: true },
  { label: 'You do not need more activity.', sub: 'You need system alignment. Every lever is pulling in a different direction.', cta: true },
]

const CALENDLY_URL = 'https://calendly.com/akshay-yonkomedia/30min'
const openCalendly = () => (window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL })

export default function ProblemChecklist() {
  const [checked, setChecked] = useState<boolean[]>(new Array(problems.length).fill(false))
  const toggle = (i: number) => setChecked(p => { const n = [...p]; n[i] = !n[i]; return n })
  const count = checked.filter(Boolean).length
  const res = responses[count]

  return (
    <section className="py-10 md:py-24 px-5 md:px-6 bg-dark">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8 md:mb-14">
          <AnimatedTag
            text="Self Check"
            delay={0}
            className="inline-flex text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full mb-6"
          />
          <AnimatedHeading
            text="What's slowing down your growth right now?"
            delay={0.05}
            className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-white leading-tight mb-5"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/60 text-base max-w-md leading-relaxed"
          >
            Check what feels familiar. The more boxes you tick, the clearer the bottleneck.
          </motion.p>
        </div>

        {/* 2-column checklist grid */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12"
        >
          {problems.map((p, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
              onClick={() => toggle(i)}
              className={`flex items-start gap-4 text-left px-6 py-5 rounded-2xl border transition-all duration-200 ${
                checked[i]
                  ? 'bg-accent/8 border-accent/30 text-white'
                  : 'bg-white/[0.03] border-white/8 text-white/65 hover:border-white/18 hover:bg-white/[0.05]'
              }`}
            >
              <div className={`mt-0.5 w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition-all duration-200 ${
                checked[i] ? 'bg-accent border-accent' : 'border-white/25'
              }`}>
                {checked[i] && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#010101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="text-sm leading-relaxed font-medium">{p}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Response */}
        <AnimatePresence mode="wait">
          <motion.div
            key={count}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}
            className={`rounded-2xl p-8 border transition-all duration-300 ${
              count >= 3
                ? 'border-accent/25 bg-accent/5'
                : 'border-white/8 bg-white/[0.03]'
            }`}
          >
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <div className={`text-xs font-semibold uppercase tracking-widest mb-2 ${count >= 3 ? 'text-accent' : 'text-white/35'}`}>
                  {count} of {problems.length} checked
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{res.label}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-lg">{res.sub}</p>
              </div>
              {res.cta && (
                <motion.button
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                  onClick={openCalendly}
                  className="flex-shrink-0 self-center inline-flex items-center gap-2 bg-accent text-dark font-bold text-sm px-6 py-3 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(204,251,85,0.4)] transition-all duration-200"
                >
                  Let&apos;s fix the levers →
                </motion.button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
