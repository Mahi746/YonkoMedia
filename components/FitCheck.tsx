import React from 'react';
import { Check, X } from 'lucide-react';

const FitCheck: React.FC = () => {
  return (
    <section id="fit" className="py-24 bg-brand-black">
      <div className="container mx-auto px-10">
        <h2 className="font-grotesk font-bold text-4xl text-center mb-12">Good fit? Let’s find out.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Good Fit */}
          <div className="bg-brand-charcoal/50 border border-brand-blue/20 rounded-2xl p-8">
            <h3 className="font-grotesk font-bold text-2xl text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white">
                <Check className="w-5 h-5" />
              </span>
              Good Fit
            </h3>
            <ul className="space-y-4">
              {["You have product-market fit.", "You're spending $5k+/mo on ads (or want to).", "You value systems over quick hacks.", "You want a partner, not an order taker."].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-gray-300">
                  <Check className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not a Fit */}
          <div className="bg-brand-charcoal/30 border border-white/5 rounded-2xl p-8 opacity-80">
             <h3 className="font-grotesk font-bold text-2xl text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-gray-400">
                <X className="w-5 h-5" />
              </span>
              Not a Fit
            </h3>
            <ul className="space-y-4">
              {["You're looking for the cheapest option.", "You think 'design' is just making things pretty.", "You need micromanagement.", "You want magical overnight results."].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-gray-400">
                  <X className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitCheck;