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
    <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Process />
        <CaseStudies />
        <WhyUs />
        <Team />
        <FitCheck />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;