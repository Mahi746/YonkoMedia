'use client'

import { motion } from 'framer-motion'

const logos = [
  'The Hosteller',
  'Moggs Estates',
  'Bajaj Finserv',
  'Microsoft',
  'CoLLearn',
  'Jadecaps',
  'Tesu India',
  'Walk Of Elegance',
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
    <div className="inline-flex items-center gap-8 mx-8">
      <span className="font-display font-semibold text-base text-white/20 hover:text-white/45 transition-colors duration-300 select-none cursor-default tracking-tight whitespace-nowrap">
        {name}
      </span>
      <span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0" />
    </div>
  )
}
