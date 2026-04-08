'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Work', 'Results', 'Process', 'FAQ']
const CALENDLY_URL = 'https://calendly.com/akshay-yonkomedia/30min'
const openCalendly = () => (window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL })

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark/90 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-display font-bold text-xl tracking-tight select-none">
            yonko<span className="text-accent">media</span>
          </a>

          {/* Desktop links — pill capsule */}
          <div className="hidden md:flex items-center gap-1 border border-white/10 bg-white/[0.04] backdrop-blur-sm rounded-full px-2 py-1.5">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/55 hover:text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-white/[0.07] transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={openCalendly}
              className="hidden md:inline-flex bg-accent text-dark font-semibold text-sm px-5 py-2.5 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(204,251,85,0.4)] transition-all duration-200"
            >
              Start Growing →
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-dark/95 backdrop-blur-md border-b border-white/5 px-6 py-6 flex flex-col gap-5 md:hidden"
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white/70 hover:text-white text-lg font-medium"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => { openCalendly(); setMenuOpen(false) }}
              className="mt-2 inline-flex bg-accent text-dark font-semibold text-sm px-5 py-3 rounded-full justify-center"
            >
              Start Growing →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
