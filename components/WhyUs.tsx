import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, BrainCircuit } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-brand-charcoal border-b border-white/5">
      <div className="container mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="font-grotesk font-bold text-3xl md:text-5xl">
            Why we’re not like the agencies <br className="hidden md:block" /> you’ve fired before.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-6">
              <Lightbulb className="w-7 h-7" />
            </div>
            <h3 className="font-grotesk font-bold text-xl mb-3">Storytelling Brain</h3>
            <p className="font-sans text-gray-400 leading-relaxed">We don't just dump data. We weave your value prop into a narrative that compels users to act.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="w-14 h-14 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="font-grotesk font-bold text-xl mb-3">Strategic Depth</h3>
            <p className="font-sans text-gray-400 leading-relaxed">No surface-level hacks. We dig into your unit economics and build for long-term profitability.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white mb-6">
              <BrainCircuit className="w-7 h-7" />
            </div>
            <h3 className="font-grotesk font-bold text-xl mb-3">Problem-Solving Mindset</h3>
            <p className="font-sans text-gray-400 leading-relaxed">We love the messy stuff. Broken backends? Leaky funnels? We eat complexity for breakfast.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;