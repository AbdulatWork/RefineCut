import React from 'react';
import { Play } from 'lucide-react';
import Typewriter from './Typewriter';
import LiquidEther from './LiquidEther';

const HeroSection = () => {
  return (
    
   
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className='w-full h-full absolute inset-0 z-0'>

          <div style={{ width: '100%', height: 1000, position: 'relative' }}>
            <LiquidEther
              colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
              mouseForce={20}
              cursorSize={100}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.7}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>
        </div>

        

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl  mb-8 leading-tight">
          <span className="text-black ">
            Let's create
          </span>
          <br />
          <span className="block mt-4">
            <Typewriter
              phrases={[
                'Faceless Videos',
                'Viral Insta Reels',
                'Stunning Ads',
                'Event Highlights',
                'YouTube Shorts',
                'Product Promos',
              ]}
            />
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-800 font-semibold" 
          >
          Professional video editing that transforms your vision into captivating content that stops the scroll and drives engagement.
        </p>


        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#portfolio"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Play size={20} />
              <span>View Our Work</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          
            <a
            href="#contact"
            className="px-8 py-4 border-3 border-black bg-white bg-opacity-90 text-black rounded-full font-bold text-lg hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black bg-white bg-opacity-20 rounded-full flex justify-center shadow-lg">
          <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      {/* Custom Styles for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>

  );
};

export default HeroSection;