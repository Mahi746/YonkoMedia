'use client'

import { motion } from 'framer-motion'

const CALENDLY_URL = 'https://calendly.com/akshay-yonkomedia/30min'

export default function CalendlyFloat() {
  const open = () => (window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL })

  return (
    <motion.button
      onClick={open}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 2, ease: 'easeOut' }}
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
  )
}
