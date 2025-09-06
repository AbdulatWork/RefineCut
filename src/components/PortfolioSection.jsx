import React from 'react';
import PortfolioSlider from './PortfolioSlider';

const PortfolioSection = () => {
  return (
    <section className="py-20 px-4 bg-white" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the magic we create with every project. From concept to completion, we deliver content that converts.
          </p>
        </div>
        <PortfolioSlider />
      </div>
    </section>
  );
};

export default PortfolioSection;