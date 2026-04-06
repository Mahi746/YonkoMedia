'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CALENDLY_URL = 'https://calendly.com/akshay-yonkomedia/30min'

export default function CalendlyFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const open = () => (window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={open}
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-accent text-dark font-bold text-sm px-5 py-3.5 rounded-full shadow-[0_4px_24px_rgba(204,251,85,0.35)] hover:shadow-[0_4px_32px_rgba(204,251,85,0.55)] transition-shadow duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="3" width="14" height="12" rx="2" stroke="#010101" strokeWidth="1.4"/>
            <path d="M1 7h14" stroke="#010101" strokeWidth="1.4"/>
            <path d="M5 1v3M11 1v3" stroke="#010101" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          Book a free call
        </motion.button>
      )}
    </AnimatePresence>
  )
}
