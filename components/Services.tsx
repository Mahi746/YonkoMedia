'use client'

import { motion } from 'framer-motion'

const deliverables = [
  {
    num: '01',
    title: 'Growth Audit',
    desc: 'A deep-dive into your funnel, channels, and conversion points to find exactly where you\'re leaving money on the table.',
  },
  {
    num: '02',
    title: 'Strategy Document',
    desc: 'A prioritized growth strategy with quick wins, long-term plays, and channel-level guidance — built for your business.',
  },
  {
    num: '03',
    title: 'Execution Playbook',
    desc: 'A step-by-step playbook your team can act on from day one. No fluff — just clear experiments, owners, and timelines.',
  },
  {
    num: '04',
    title: 'Revenue Roadmap',
    desc: 'A 90-day revenue roadmap tied to measurable milestones. Know exactly what to do, when, and why.',
  },
]

const pricing = [
  {
    stage: 'Seed Stage',
    range: 'Pre-revenue',
    price: '$4,000',
    features: ['Growth audit', 'Strategy document', '1 growth channel'],
  },
  {
    stage: 'Growth Stage',
    range: '$0M – $2M ARR',
    price: '$12,000',
    features: ['Full audit', 'Strategy + playbook', '3 growth channels', 'Revenue roadmap'],
    highlight: true,
  },
  {
    stage: 'Scale Stage',
    range: '$2M+ ARR',
    price: '$25,000',
    features: ['Deep-dive audit', 'Full strategy suite', 'All channels', 'Roadmap + exec support'],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Services() {
  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">The Offering</span>
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-tight mt-4 mb-6">
            The Growth Sprint™
          </h2>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            A focused 2-week engagement that delivers your complete growth strategy,
            execution playbook, and a revenue roadmap built for your stage. No retainers.
            No fluff. Just results.
          </p>
        </motion.div>

        {/* Deliverables grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden mb-20"
        >
          {deliverables.map((d) => (
            <motion.div
              key={d.num}
              variants={item}
              className="bg-dark p-8 hover:bg-white/[0.02] transition-colors duration-300 group"
            >
              <span className="text-accent/40 font-display font-bold text-sm">{d.num}</span>
              <h3 className="font-display font-bold text-xl mt-3 mb-3 group-hover:text-accent transition-colors duration-300">
                {d.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="font-display font-bold text-2xl mb-2">Pricing</h3>
          <p className="text-white/40 text-sm">Based on your company stage.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {pricing.map((p) => (
            <motion.div
              key={p.stage}
              variants={item}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                p.highlight
                  ? 'border-accent bg-accent/5 hover:bg-accent/8'
                  : 'border-white/8 bg-white/[0.02] hover:border-white/15'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-8 bg-accent text-dark text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="text-white/40 text-sm font-medium mb-1">{p.stage}</div>
              <div className="text-white/25 text-xs mb-4">{p.range}</div>
              <div className={`font-display font-extrabold text-4xl mb-6 ${p.highlight ? 'text-accent' : 'text-white'}`}>
                {p.price}
              </div>
              <ul className="space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-white/60 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 w-full inline-flex justify-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  p.highlight
                    ? 'bg-accent text-dark hover:bg-accent/90 hover:scale-[1.02]'
                    : 'border border-white/10 text-white hover:border-white/25'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
