'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 px-6 py-20 bg-dark">
      <div className="max-w-7xl mx-auto">

        {/* CTA block */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative bg-white/[0.03] border border-white/8 rounded-3xl p-12 md:p-16 text-center mb-20 overflow-hidden">

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 bg-accent/8 rounded-full blur-[80px]" />
          </div>

          <div className="relative">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Ready to fix your growth?</span>
            <h2 className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-tight mt-4 mb-4 text-white">
              Build a system that
              <br />
              <span className="gradient-text">actually compounds.</span>
            </h2>
            <p className="text-white/40 text-base max-w-md mx-auto mb-10">
              Book a 30-minute discovery call. We&apos;ll figure out which lever is limiting your growth — and what to do about it.
            </p>
            <a href="mailto:hello@yonkomedia.com"
              className="inline-flex items-center gap-3 bg-accent text-dark font-bold text-base px-9 py-5 rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(204,251,85,0.5)] transition-all duration-300">
              Book a Discovery Call →
            </a>
            <p className="text-white/20 text-xs mt-4">No pitch. No pressure. Just clarity.</p>
          </div>
        </motion.div>

        {/* Bottom nav */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <a href="/" className="font-display font-bold text-2xl tracking-tight text-white">
            yonko<span className="text-accent">media</span>
          </a>

          <nav className="flex flex-wrap gap-6">
            {[
              { label: 'How it works', href: '#how-it-works' },
              { label: 'Case Studies', href: '#contact' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Contact', href: 'mailto:hello@yonkomedia.com' },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                className="text-white/35 hover:text-white text-sm transition-colors duration-200">{label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {[
              { label: 'Twitter', href: 'https://twitter.com/yonkomedia', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/> },
              { label: 'LinkedIn', href: 'https://linkedin.com/company/yonkomedia', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/> },
            ].map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all duration-200">
                <svg width="14" height="14" viewBox="0 0 24 24">{icon}</svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} Yonkomedia. All rights reserved.</p>
          <p className="text-white/15 text-xs">Revenue = Traffic × Conversion × Retention × Pricing</p>
        </div>
      </div>
    </footer>
  )
}
