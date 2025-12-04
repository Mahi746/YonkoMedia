import React, { useEffect } from 'react';

const FinalCTA: React.FC = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
    script.setAttribute("async", "true");
    if (head) {
      head.appendChild(script);
    }
    
    return () => {
      if (head && script.parentNode === head) {
        head.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-brand-black">
      {/* Moving Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-brand-black to-brand-charcoal bg-[length:200%_200%] animate-gradient-flow opacity-80" />
      
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent z-10" />

      <div className="container mx-auto px-6 md:px-[140px] relative z-10 text-center">
        <h2 className="font-grotesk font-bold text-5xl md:text-7xl mb-8 leading-tight">
          Ready to fix what’s <br /> slowing you down?
        </h2>
        <p className="font-sans text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Stop guessing. Start building a predictable growth engine today.
        </p>
        
        <div className="flex justify-center mt-12">
            <div 
              className="calendly-inline-widget w-full" 
              data-url="https://calendly.com/akshay-yonkomedia/30min" 
              style={{ minWidth: '320px', height: '700px' }} 
            />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;