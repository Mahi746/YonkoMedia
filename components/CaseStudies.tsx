import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', val: 400 },
  { name: 'Feb', val: 300 },
  { name: 'Mar', val: 550 },
  { name: 'Apr', val: 800 },
  { name: 'May', val: 1200 },
  { name: 'Jun', val: 1800 },
];

const CaseStudies: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-brand-black">
      <div className="container mx-auto px-6 md:px-[140px]">
        <h2 className="font-grotesk font-bold text-4xl md:text-5xl mb-16 text-center">Proof it works.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Case Study 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-brand-charcoal rounded-3xl p-8 border border-white/5 overflow-hidden flex flex-col justify-between h-[400px]"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-white" />
            </div>
            <div>
                <h3 className="font-grotesk text-6xl font-bold text-white mb-2">42%</h3>
                <p className="font-sans text-gray-400 font-medium">Drop in Customer Acquisition Cost (CAC)</p>
            </div>
            <div className="mt-8">
                <p className="text-sm text-gray-500 mb-4">Fintech Startup • Series A</p>
                <div className="h-32 w-full opacity-50 group-hover:opacity-100 transition-opacity">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="val" stroke="#2563EB" fillOpacity={1} fill="url(#colorVal)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
          </motion.div>

          {/* Case Study 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-brand-white text-brand-black rounded-3xl p-8 border border-white/5 overflow-hidden flex flex-col justify-between h-[400px]"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-brand-black" />
            </div>
            <div>
                <h3 className="font-grotesk text-6xl font-bold text-brand-black mb-2">5x</h3>
                <p className="font-sans text-gray-600 font-medium">Higher conversions after site redesign</p>
            </div>
            <div className="mt-8 flex-grow flex items-end">
                <div className="w-full space-y-4">
                    <div className="flex justify-between text-sm font-bold border-b border-gray-200 pb-2">
                        <span>Before</span>
                        <span className="text-red-500">1.2% Conv.</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold border-b border-gray-900 pb-2">
                        <span>After</span>
                        <span className="text-brand-blue">6.1% Conv.</span>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Case Study 3 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-brand-charcoal rounded-3xl p-8 border border-white/5 overflow-hidden flex flex-col justify-between h-[400px]"
          >
             <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-white" />
            </div>
            <div>
                <h3 className="font-grotesk text-6xl font-bold text-white mb-2">70%</h3>
                <p className="font-sans text-gray-400 font-medium">Faster operations with automation</p>
            </div>
            <div className="mt-8 flex items-center justify-center h-32 relative">
                 {/* Abstract visual for speed/automation */}
                 <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-1/2 h-full bg-brand-accent shadow-[0_0_10px_#EAB308]"
                    />
                 </div>
            </div>
             <p className="text-sm text-gray-500 mt-4">SaaS Platform • Enterprise</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudies;