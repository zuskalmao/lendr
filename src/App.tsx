import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import UtilitySection from './components/UtilitySection';
import FlashLoanDemo from './components/FlashLoanDemo';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const scrollToHashElement = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('load', scrollToHashElement);
    window.addEventListener('hashchange', scrollToHashElement);

    return () => {
      window.removeEventListener('load', scrollToHashElement);
      window.removeEventListener('hashchange', scrollToHashElement);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <UtilitySection />
      <FlashLoanDemo />
      <CommunitySection />
      <Footer />
    </div>
  );
}

export default App;
