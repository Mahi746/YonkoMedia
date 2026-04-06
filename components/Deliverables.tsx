'use client'

import { motion } from 'framer-motion'

const deliverables = [
  {
    label: '01 / Strategy',
    title: 'Growth Strategy',
    subtitle: '4–6 prioritized growth strategies ranked by impact and effort',
    description:
      'We map your entire growth surface — acquisition, activation, retention, and revenue — and surface the highest-leverage opportunities specific to your business. No generic frameworks.',
    visual: (
      <div className="relative h-44 bg-white/[0.03] rounded-xl border border-white/5 p-6 overflow-hidden">
        {[85, 70, 55, 40, 25].map((w, i) => (
          <div key={i} className="flex items-center gap-3 mb-3">
            <div className="text-white/20 text-xs w-24 flex-shrink-0">
              {['SEO + Content', 'Paid Social', 'Product-Led', 'Partnerships', 'Email Nurture'][i]}
            </div>
            <div
              className="h-2 rounded-full bg-accent/30"
              style={{ width: `${w}%` }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="h-full rounded-full bg-accent"
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: '02 / Execution',
    title: 'Execution Playbook',
    subtitle: 'A step-by-step playbook your team executes from day one',
    description:
      'Every strategy in the document is backed by a concrete execution plan — experiments to run, assets to build, metrics to watch. Your team will always know what to do next.',
    visual: (
      <div className="relative h-44 bg-white/[0.03] rounded-xl border border-white/5 p-6 overflow-hidden">
        <div className="space-y-3">
          {[
            { week: 'Week 1', task: 'Audit & quick wins', done: true },
            { week: 'Week 2', task: 'Channel experiments', done: true },
            { week: 'Week 3', task: 'Conversion optimization', done: false },
            { week: 'Week 4', task: 'Scale winners', done: false },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`w-4 h-4 rounded flex-shrink-0 flex items-center justify-center ${
                  row.done ? 'bg-accent' : 'border border-white/15'
                }`}
              >
                {row.done && (
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="#010101" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </div>
              <span className="text-white/30 text-xs w-14">{row.week}</span>
              <span className={`text-xs ${row.done ? 'text-white/70' : 'text-white/30'}`}>{row.task}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: '03 / Roadmap',
    title: 'Revenue Roadmap',
    subtitle: '90-day revenue roadmap tied to measurable milestones',
    description:
      'We don\'t hand you a strategy and disappear. The revenue roadmap connects every initiative to a number — so you always know what\'s moving the needle and what isn\'t.',
    visual: (
      <div className="relative h-44 bg-white/[0.03] rounded-xl border border-white/5 p-6 overflow-hidden">
        <div className="flex items-end gap-2 h-full pb-2">
          {[30, 45, 55, 70, 75, 80, 95].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex-1 rounded-t-md"
              style={{
                background: `rgba(204, 251, 85, ${0.2 + i * 0.1})`,
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-2 left-6 right-6 flex justify-between">
          {['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7'].map((m) => (
            <span key={m} className="text-white/20 text-xs">{m}</span>
          ))}
        </div>
      </div>
    ),
  },
]

export default function Deliverables() {
  return (
    <section className="py-28 px-6 bg-white/[0.015]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Deliverables</span>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] mt-4 max-w-2xl leading-tight">
            What you walk away with.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 group"
            >
              {/* Text side */}
              <div className="flex flex-col justify-center">
                <span className="text-accent/50 text-xs font-semibold uppercase tracking-widest mb-4">{d.label}</span>
                <h3 className="font-display font-extrabold text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors duration-300">
                  {d.title}
                </h3>
                <p className="text-white/50 text-sm font-medium mb-4">{d.subtitle}</p>
                <p className="text-white/35 text-sm leading-relaxed">{d.description}</p>
              </div>

              {/* Visual side */}
              <div>{d.visual}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
