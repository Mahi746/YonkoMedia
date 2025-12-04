import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-black">
      {/* Moving Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-blue/30 via-brand-black to-brand-charcoal bg-[length:200%_200%] animate-gradient-flow opacity-60" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />

      {/* Abstract Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div className="container mx-auto px-10 z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span className="font-sans text-xs uppercase tracking-widest font-medium text-gray-300">YonkoMedia Growth Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-grotesk font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 tracking-tight"
          >
            We fix what’s killing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">your conversions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Better design. Better performance. Better systems. <br className="hidden md:block" />
            We remove the bottlenecks slowing your growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              variant="primary" 
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={scrollToContact}
            >
              Fix my bottlenecks
            </Button>
            {/* <Button variant="outline" icon={<ChevronRight className="w-4 h-4" />}>
              See how we work
            </Button> */}
          </motion.div>
        </div>

        {/* Abstract System UI Graphic */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="mt-20 mx-auto max-w-4xl perspective-1000"
        >
             <div className="relative rounded-xl border border-white/10 bg-brand-charcoal/50 backdrop-blur-xl p-4 shadow-2xl overflow-hidden aspect-[16/9] flex items-center justify-center">
                 {/* Decorative Grid */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                 
                 {/* Floating Elements imitating a complex system dashboard */}
                 <div className="grid grid-cols-3 gap-4 w-full h-full p-8 relative z-10">
                    <div className="col-span-2 row-span-2 rounded-lg bg-white/5 border border-white/10 p-6 flex flex-col justify-between">
                        <div className="w-1/3 h-4 bg-brand-blue/20 rounded mb-4" />
                        <div className="flex items-end gap-2 h-32">
                             {[40, 65, 50, 80, 55, 90, 100].map((h, i) => (
                                 <motion.div 
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1.5, delay: 1 + (i * 0.1) }}
                                    className="flex-1 bg-gradient-to-t from-brand-blue/20 to-brand-blue rounded-t-sm" 
                                 />
                             ))}
                        </div>
                    </div>
                    <div className="col-span-1 rounded-lg bg-white/5 border border-white/10 p-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                                <ArrowRight className="w-4 h-4 -rotate-45" />
                            </div>
                            <div>
                                <div className="text-2xl font-grotesk font-bold">+142%</div>
                                <div className="text-xs text-gray-400">Conversion Rate</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 rounded-lg bg-white/5 border border-white/10 p-4 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent" />
                        <div className="font-grotesk text-xl font-bold">System Active</div>
                    </div>
                 </div>
             </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
