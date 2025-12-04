import React from 'react';
import { Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-brand-charcoal relative border-b border-white/5">
      <div className="container mx-auto px-6 md:px-[140px]">
        <div className="mb-16 max-w-3xl">
          <h2 className="font-grotesk font-bold text-3xl md:text-5xl mb-6">
            Meet the obsessives.
          </h2>
          <p className="font-sans text-gray-400 text-lg leading-relaxed">
            We’re not a bloated agency with junior account managers. <br className="hidden md:block"/>
            We’re two co-founders who take your growth personally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Akshay */}
            <div className="group p-10 rounded-3xl bg-brand-black border border-white/5 hover:border-brand-blue/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-24 h-24 rounded-2xl bg-brand-gray border border-white/10 flex items-center justify-center shadow-lg">
                           <span className="font-grotesk font-bold text-3xl text-white">AS</span>
                        </div>
                        <a href="https://www.linkedin.com/in/akshayshirsagar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                    
                    <h3 className="font-grotesk font-bold text-2xl text-white mb-2">Akshay Shirsagar</h3>
                    <p className="font-sans text-brand-blue text-sm font-bold uppercase tracking-wider mb-6">Performance Marketer & Co-Founder</p>
                    
                    <p className="font-sans text-gray-400 leading-relaxed">
                        "Stop setting money on fire." <br/><br/>
                        Akshay engineers the funnels and ad frameworks that turn $1 into $5. He combines creative strategy with ruthless data analysis. If it doesn't track, it doesn't exist.
                    </p>
                </div>
            </div>

            {/* Mahipal */}
            <div className="group p-10 rounded-3xl bg-brand-black border border-white/5 hover:border-brand-accent/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-24 h-24 rounded-2xl bg-brand-gray border border-white/10 flex items-center justify-center shadow-lg">
                           <span className="font-grotesk font-bold text-3xl text-white">MC</span>
                        </div>
                        <a href="https://www.linkedin.com/in/mahipalchharang/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                    
                    <h3 className="font-grotesk font-bold text-2xl text-white mb-2">Mahipal Chharang</h3>
                    <p className="font-sans text-brand-accent text-sm font-bold uppercase tracking-wider mb-6">Design Growth Strategist & Co-Founder</p>
                    
                    <p className="font-sans text-gray-400 leading-relaxed">
                        "Make it pop? No, make it pay." <br/><br/>
                        Mahipal builds visual systems that don't just look pretty—they convert. He aligns premium aesthetics with psychological triggers to turn visitors into buyers. Strategic design, not decoration.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Team;