import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Gauge, Settings } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brand-black relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent transform -translate-y-1/2" />

      <div className="container mx-auto px-6 md:px-[140px] relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-grotesk font-bold text-4xl md:text-6xl mb-4">
            We fix the bottlenecks <br /> that slow your growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-3xl bg-brand-charcoal border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-32 bg-brand-blue/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-blue/20 transition-all" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-brand-black">
                <PenTool className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="font-grotesk font-bold text-3xl mb-4">Design</h3>
              <p className="font-sans text-gray-400 mb-8 leading-relaxed">
                We build interfaces that don't just look good—they sell. High-converting landing pages, funnels, and brand identities.
              </p>
              <ul className="space-y-3 font-sans text-sm font-medium text-gray-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> Conversion-led UI/UX</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> Landing Page Systems</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> Brand Strategy</li>
              </ul>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-3xl bg-brand-charcoal border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-32 bg-brand-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-accent/20 transition-all" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-brand-black">
                <Gauge className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="font-grotesk font-bold text-3xl mb-4">Performance</h3>
              <p className="font-sans text-gray-400 mb-8 leading-relaxed">
                Data-driven growth. We manage your ads, optimize your CRO, and deploy scaling frameworks that actually work.
              </p>
              <ul className="space-y-3 font-sans text-sm font-medium text-gray-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full" /> Paid Media Buying</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full" /> CRO Audits</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full" /> A/B Testing</li>
              </ul>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-3xl bg-brand-charcoal border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-32 bg-purple-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-purple-500/20 transition-all" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-brand-black">
                <Settings className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="font-grotesk font-bold text-3xl mb-4">Systems</h3>
              <p className="font-sans text-gray-400 mb-8 leading-relaxed">
                Chaos kills scaling. We implement backend automations, CRM cleanups, and tools to make your ops frictionless.
              </p>
              <ul className="space-y-3 font-sans text-sm font-medium text-gray-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Workflow Automation</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Tech Stack Optimization</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Data Pipeline Setup</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;