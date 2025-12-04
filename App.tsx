import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import FitCheck from './components/FitCheck';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#020617', // very dark navy
        color: '#f9fafb',           // near-white text
      }}
    >
      {/* Debug banner – just to be sure */}
      <div
        style={{
          position: 'fixed',
          top: 8,
          left: 8,
          zIndex: 9999,
          padding: '4px 8px',
          fontSize: 12,
          background: '#dc2626',
          color: '#fff',
          borderRadius: 4,
        }}
      >
        YonkoMedia is loaded
      </div>

      <Navbar />
      <Hero />
      <PainPoints />
      <Services />
      <Process />
      <CaseStudies />
      <WhyUs />
      <Team />
      <FitCheck />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
