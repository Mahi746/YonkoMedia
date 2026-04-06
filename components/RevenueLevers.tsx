'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedHeading, AnimatedTag } from './AnimatedText'

const levers = [
  {
    num: '01', label: 'Traffic',
    headline: 'Qualified visitors entering your system.',
    truths: ['More traffic doesn\'t mean more growth.', 'Wrong traffic kills conversion.'],
    fixes: ['Where your demand comes from', 'Which channels actually matter', 'What\'s worth scaling'],
    outcome: 'Better quality traffic, not just more traffic.',
    visual: (
      <div className="flex flex-col gap-4">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Channel quality score</p>
        {[
          { ch: 'Organic Search', score: 58 },
          { ch: 'Paid Social',    score: 71 },
          { ch: 'Direct',        score: 84 },
          { ch: 'Referral',      score: 43 },
        ].map((r, i) => (
          <div key={r.ch}>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-white/50">{r.ch}</span>
              <span className="text-accent font-semibold">{r.score}%</span>
            </div>
            <div className="w-full bg-white/8 rounded-full h-1.5">
              <motion.div
                initial={{ width: 0 }} whileInView={{ width: `${r.score}%` }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="h-1.5 rounded-full bg-accent"
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '02', label: 'Conversion',
    headline: '% of traffic that actually becomes revenue.',
    truths: ['People are coming in but not buying.', 'Your system is leaking.'],
    fixes: ['Website clarity', 'Funnel flow', 'Decision friction', 'Messaging hierarchy'],
    outcome: 'More revenue from the same traffic.',
    visual: (
      <div className="flex flex-col gap-3">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Conversion funnel</p>
        {[
          { label: 'Visitors',    pct: 100 },
          { label: 'Engaged',     pct: 62 },
          { label: 'Considered',  pct: 38 },
          { label: 'Converted',   pct: 18, accent: true },
        ].map((s, i) => (
          <div key={s.label} className="flex items-center gap-3">
            <motion.div
              initial={{ width: 0 }} whileInView={{ width: `${s.pct}%` }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`h-10 rounded-lg flex items-center px-3 ${s.accent ? 'bg-accent' : 'bg-white/8'}`}
            >
              <span className={`text-xs font-semibold whitespace-nowrap ${s.accent ? 'text-dark' : 'text-white/50'}`}>{s.label}</span>
            </motion.div>
            <span className="text-white/30 text-xs flex-shrink-0">{s.pct}%</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '03', label: 'Retention',
    headline: 'How long customers stay and how often they return.',
    truths: ['Most brands ignore this.', 'This is where compounding actually happens.'],
    fixes: ['Lifecycle journeys', 'Retention flows', 'Repeat purchase strategy', 'Engagement systems'],
    outcome: 'Higher lifetime value per customer.',
    visual: (
      <div className="flex flex-col gap-4">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Repeat purchase rate</p>
        <div className="flex items-end gap-1.5 h-28">
          {[22, 28, 31, 38, 44, 51, 58].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }} whileInView={{ height: `${h}%` }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex-1 rounded-t-sm"
              style={{ background: i === 6 ? '#CCFB55' : `rgba(204,251,85,${0.12 + i * 0.07})` }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-xl px-4 py-3">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
          <span className="text-white/70 text-xs">LTV up 65% after system alignment</span>
        </div>
      </div>
    ),
  },
  {
    num: '04', label: 'Pricing',
    headline: 'How much revenue you generate per customer.',
    truths: ['You don\'t always need more customers.', 'You need to capture more value.'],
    fixes: ['Offer structure', 'Pricing logic', 'Monetization gaps', 'Upsell paths'],
    outcome: 'More revenue without more effort.',
    visual: (
      <div className="flex flex-col gap-3">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Revenue per customer</p>
        {[
          { tier: 'Entry',   rev: '$240',   bar: 24,  accent: false },
          { tier: 'Core',    rev: '$780',   bar: 58,  accent: false },
          { tier: 'Premium', rev: '$2,400', bar: 100, accent: true  },
        ].map((t, i) => (
          <div key={t.tier}
            className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${t.accent ? 'bg-accent/10 border-accent/25' : 'bg-white/[0.04] border-white/8'}`}>
            <div className="w-16 flex-shrink-0">
              <div className="text-white/35 text-xs mb-0.5">{t.tier}</div>
              <div className={`font-bold text-sm ${t.accent ? 'text-accent' : 'text-white/70'}`}>{t.rev}</div>
            </div>
            <div className="flex-1 bg-white/8 rounded-full h-1.5">
              <motion.div
                initial={{ width: 0 }} whileInView={{ width: `${t.bar}%` }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="h-1.5 rounded-full"
                style={{ background: t.accent ? '#CCFB55' : 'rgba(255,255,255,0.25)' }}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
]

export default function RevenueLevers() {
  const [active, setActive] = useState(0)
  const lever = levers[active]

  return (
    <section className="py-28 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <AnimatedTag text="The Framework" delay={0}
            className="inline-flex text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full mb-6" />
          <AnimatedHeading
            text="Your revenue grows faster when these levers work together."
            delay={0.05}
            className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-white leading-tight"
          />
        </div>

        {/* Tab row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex border border-white/10 rounded-2xl overflow-hidden mb-1 bg-white/[0.02]"
        >
          {levers.map((l, i) => (
            <button key={l.label} onClick={() => setActive(i)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 font-display font-bold transition-all duration-200 relative ${
                active === i ? 'bg-accent text-dark' : 'text-white/40 hover:text-white/70'
              } ${i > 0 ? 'border-l border-white/8' : ''}`}
            >
              <span className={`text-xs ${active === i ? 'text-dark/50' : 'text-white/20'}`}>{l.num}</span>
              <span className="uppercase tracking-wider text-xs hidden sm:inline">{l.label}</span>
              <span className="uppercase tracking-wider text-xs sm:hidden">{l.label.slice(0, 4)}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <div className="border border-white/8 rounded-b-2xl overflow-hidden bg-white/[0.02]">
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]"
            >
              {/* Left text */}
              <div className="p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/8">
                <div className="text-accent/60 text-xs font-bold uppercase tracking-widest mb-4">
                  {lever.num} / {lever.label}
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-5 leading-snug">{lever.headline}</h3>
                <div className="space-y-1.5 mb-7">
                  {lever.truths.map(t => (
                    <p key={t} className="text-white/55 text-sm leading-relaxed">— {t}</p>
                  ))}
                </div>
                <div className="mb-7">
                  <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-3">We fix</p>
                  <ul className="space-y-2">
                    {lever.fixes.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-white/65 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-3 bg-accent/8 border border-accent/20 rounded-xl px-4 py-3">
                  <span className="text-accent">→</span>
                  <p className="text-white text-sm font-semibold">{lever.outcome}</p>
                </div>
              </div>

              {/* Right visual */}
              <div className="p-10 flex flex-col justify-center">
                {lever.visual}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
