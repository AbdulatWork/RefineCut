import React from 'react';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import FloatingContactButton from './components/FloatingContactButton';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default App;