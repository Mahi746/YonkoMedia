import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4"
    >
      <div className="flex items-center justify-between w-full max-w-6xl bg-brand-charcoal/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-blue rounded-md flex items-center justify-center font-grotesk font-bold text-lg">Y</div>
          <span className="font-grotesk font-bold text-xl tracking-tight">YonkoMedia</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-gray-300">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#fit" className="hover:text-white transition-colors">Fit Check</a>
        </nav>

        <Button 
          variant="primary" 
          className="!px-6 !py-2 !text-sm hidden md:flex"
          onClick={scrollToContact}
        >
          Let's Talk
        </Button>
        
        {/* Mobile Menu Icon Placeholder */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;