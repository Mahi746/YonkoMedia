'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Revenue went from $42K/mo to $190K/mo in 90 days. Yonkomedia\'s playbook was the most tactical growth document we\'ve ever received. It actually worked.',
    metric: '+350% revenue in 90 days',
    name: 'Marcus Levin',
    title: 'CEO, Stackflow',
    initials: 'ML',
  },
  {
    quote:
      'They didn\'t just give us a strategy — they gave us clarity. We went from guessing to executing. CAC dropped 40%, LTV went up, and we finally have a growth engine.',
    metric: '40% lower CAC',
    name: 'Priya Nair',
    title: 'CMO, Loopbase',
    initials: 'PN',
  },
  {
    quote:
      '3x growth in 6 months, purely from the playbook they handed us. Our team was fully aligned, everyone knew the priority, and we shipped fast. Couldn\'t ask for more.',
    metric: '3× growth in 6 months',
    name: 'James Owusu',
    title: 'Founder, Candix',
    initials: 'JO',
  },
]

export default function Testimonials() {
  return (
    <section id="results" className="py-28 px-6 bg-white/[0.015]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Results</span>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] mt-4">
            Numbers don&apos;t lie.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex flex-col bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:border-accent/20 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              {/* Metric badge */}
              <div className="inline-flex self-start items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {t.metric}
              </div>

              {/* Quote */}
              <blockquote className="text-white/70 text-sm leading-relaxed flex-1 mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/35 text-xs">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
