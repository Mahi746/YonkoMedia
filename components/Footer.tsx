import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-brand-black border-t border-white/5 font-sans text-sm text-gray-500">
      <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-brand-blue rounded text-white flex items-center justify-center font-bold text-xs">Y</div>
           <span className="text-white font-bold">YonkoMedia</span>
        </div>
        
        <div className="flex gap-8">
            <a href="#" className="hover:text-brand-blue transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand-blue transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Instagram</a>
        </div>

        <div>
            &copy; {new Date().getFullYear()} YonkoMedia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;