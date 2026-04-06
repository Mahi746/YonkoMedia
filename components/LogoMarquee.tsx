'use client'

import { motion } from 'framer-motion'

const logos = [
  'Stripe', 'Notion', 'Linear', 'Vercel', 'Loom',
  'Intercom', 'Webflow', 'Figma', 'Airtable', 'Framer',
  'Superhuman', 'Coda', 'Retool', 'Amplitude', 'Mixpanel',
]

// Duplicate for seamless loop
const allLogos = [...logos, ...logos]

export default function LogoMarquee() {
  return (
    <section className="py-16 border-y border-white/5 overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-white/25 text-xs font-semibold uppercase tracking-[0.2em] mb-10"
      >
        Trusted by ambitious brands
      </motion.p>

      <div className="marquee-track relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {allLogos.map((name, i) => (
            <LogoItem key={`a-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LogoItem({ name }: { name: string }) {
  return (
    <div className="inline-flex items-center mx-10">
      <span className="font-display font-bold text-lg text-white/15 hover:text-white/40 transition-colors duration-300 select-none cursor-default tracking-tight">
        {name}
      </span>
    </div>
  )
}
