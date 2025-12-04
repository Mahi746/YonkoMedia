import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    { title: "Design", subtitle: "Clarity + Conversion", desc: "We strip away the noise and rebuild your visual funnel for maximum trust and action." },
    { title: "Performance", subtitle: "Scaling + Testing", desc: "We inject traffic and run ruthless experiments to lower CAC and boost ROAS." },
    { title: "Systems", subtitle: "Automation + Efficiency", desc: "We automate the follow-through so you can handle 10x volume without breaking." },
  ];

  return (
    <section id="process" className="py-24 bg-brand-charcoal border-y border-white/5">
      <div className="container mx-auto px-6 md:px-[140px]">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <h2 className="font-grotesk font-bold text-4xl md:text-5xl">The D.P.S. Model</h2>
            <p className="font-sans text-gray-400 max-w-sm text-right md:text-left">Our proprietary framework for predictable, scalable revenue growth.</p>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {steps.map((step, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pt-8 md:pt-0"
                    >
                         {/* Dot */}
                        <div className="hidden md:flex absolute top-12 left-0 w-full justify-center">
                             <div className="w-3 h-3 bg-brand-blue rounded-full relative z-10 transform -translate-y-1/2 ring-4 ring-brand-charcoal" />
                        </div>

                        <div className="bg-brand-gray/30 p-8 rounded-xl border border-white/5 hover:border-brand-blue/30 transition-colors md:mt-24">
                            <span className="font-grotesk font-bold text-6xl text-white/5 absolute top-4 right-4">0{index + 1}</span>
                            <h3 className="font-grotesk font-bold text-2xl text-white mb-1">{step.title}</h3>
                            <h4 className="font-sans font-medium text-brand-blue text-sm uppercase tracking-wider mb-4">{step.subtitle}</h4>
                            <p className="font-sans text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;