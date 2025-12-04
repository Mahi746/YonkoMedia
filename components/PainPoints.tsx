import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, Filter, MousePointerClick, HelpCircle, ServerCrash } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    { icon: <DollarSign className="w-6 h-6" />, title: "Ads burning cash", text: "Spending more to acquire less." },
    { icon: <TrendingDown className="w-6 h-6" />, title: "High CAC", text: "Customer costs are eating margins." },
    { icon: <Filter className="w-6 h-6" />, title: "Funnels leaking", text: "Traffic hits, but doesn't stick." },
    { icon: <MousePointerClick className="w-6 h-6" />, title: "Low conversions", text: "Clicks aren't becoming cash." },
    { icon: <HelpCircle className="w-6 h-6" />, title: "Confusing website", text: "Visitors get lost in the noise." },
    { icon: <ServerCrash className="w-6 h-6" />, title: "Broken backend", text: "Systems can't handle scale." },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-brand-charcoal relative">
      <div className="container mx-auto px-6 md:px-[140px]">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-grotesk font-bold text-3xl md:text-5xl mb-6">
            If this sounds familiar, <br />
            <span className="text-gray-400">you’re exactly who we built this for.</span>
          </h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group p-8 rounded-2xl bg-brand-gray/50 border border-white/5 hover:border-brand-blue/50 hover:bg-brand-gray transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                {point.icon}
              </div>
              <h3 className="font-grotesk font-bold text-xl mb-2">{point.title}</h3>
              <p className="font-sans text-gray-400 text-sm leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;