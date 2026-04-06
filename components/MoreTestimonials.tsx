'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'By asking the right questions, Yonkomedia rewrote our entire growth strategy. 40% better-qualified leads in 3 months.',
    name: 'Sophie Chen',
    title: 'Head of Growth, Nexio',
    initials: 'SC',
  },
  {
    quote: 'The playbook is the single best document our team has ever worked from. Crystal clear, actionable, and built for our stage.',
    name: 'Remi Adeyemi',
    title: 'Founder, Drift Labs',
    initials: 'RA',
  },
  {
    quote: 'We went from zero growth structure to a fully operating growth machine in 2 weeks. Worth every penny.',
    name: 'Lena Müller',
    title: 'CMO, Traxion',
    initials: 'LM',
  },
  {
    quote: 'Finally an agency that gets it. No fluff, no buzzwords — just a clear strategy that actually worked.',
    name: 'Tom Halliday',
    title: 'CEO, Sparkline',
    initials: 'TH',
  },
  {
    quote: 'Sales cycle went from 3 months to 6 weeks. The positioning work alone was transformational.',
    name: 'Aisha Patel',
    title: 'VP Marketing, Solvr',
    initials: 'AP',
  },
  {
    quote: 'Our team was aligned for the first time ever. Everyone knew the priorities. Shipped 3 experiments in week one.',
    name: 'Carlos Rivera',
    title: 'Founder, Buildfast',
    initials: 'CR',
  },
  {
    quote: 'Converted 2 enterprise clients from inbound in the first month after the sprint. Absolutely floored.',
    name: 'Nina Okafor',
    title: 'CEO, Clearpath',
    initials: 'NO',
  },
  {
    quote: 'They showed us where we were burning cash and what was actually working. CAC down 35%, LTV up.',
    name: 'Felix Wagner',
    title: 'Co-founder, Stackr',
    initials: 'FW',
  },
  {
    quote: 'The 90-day roadmap gave us more clarity than 6 months of internal strategy sessions. Remarkable.',
    name: 'Yemi Adeniyi',
    title: 'Growth Lead, Fundflow',
    initials: 'YA',
  },
]

export default function MoreTestimonials() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3rem)]">
            More love from our clients ❤️
          </h2>
          <p className="text-white/30 text-sm mt-3">Real results from real companies.</p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="break-inside-avoid bg-white/[0.03] border border-white/8 rounded-xl p-6 hover:border-accent/15 hover:bg-white/[0.05] transition-all duration-300 group mb-4"
            >
              <blockquote className="text-white/60 text-sm leading-relaxed mb-5 group-hover:text-white/80 transition-colors duration-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xs flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">{t.name}</div>
                  <div className="text-white/30 text-xs">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
