import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';

const PortfolioSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef(null);
  
  const videos = [
    { 
      url: 'https://www.youtube.com/watch?v=FveF-we6lcE', 
      title: 'Creative Reel',
      thumbnail: 'https://img.youtube.com/vi/FveF-we6lcE/maxresdefault.jpg',
      description: 'A showcase of creative video production techniques'
    },
    { 
      url: 'https://www.youtube.com/watch?v=uu7wwUcJOV8', 
      title: 'Product Showcase',
      thumbnail: 'https://img.youtube.com/vi/uu7wwUcJOV8/maxresdefault.jpg',
      description: 'Elegant product presentation and cinematography'
    },
    { 
      url: 'https://www.youtube.com/watch?v=vrOQrqI59YE', 
      title: 'Event Highlight',
      thumbnail: 'https://img.youtube.com/vi/vrOQrqI59YE/maxresdefault.jpg',
      description: 'Capturing memorable moments with dynamic storytelling'
    },
    { 
      url: 'https://www.youtube.com/watch?v=bFjptMMIXXo', 
      title: 'Brand Video',
      thumbnail: 'https://img.youtube.com/vi/bFjptMMIXXo/maxresdefault.jpg',
      description: 'Professional brand storytelling and visual identity'
    },
  ];

  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    stopAutoPlay();
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    stopAutoPlay();
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    stopAutoPlay();
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleVideoClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, videos.length]);

  return (
    <div className="relative max-w-6xl mx-auto p-4">
      {/* Main Slider Container */}
      <div className="relative mb-8">
        <div className="overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800">
          <div 
            className="flex transition-all duration-700 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              filter: isTransitioning ? 'blur(1px)' : 'blur(0px)'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {videos.map((video, index) => (
              <div key={index} className="w-full flex-shrink-0 relative group">
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay (non-blocking) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Play Button */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:bg-black/20 transition-all duration-300 z-20 pointer-events-auto"
                    onClick={() => handleVideoClick(video.url)}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Play className="w-12 h-12 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-auto">
                    <div 
                      className="bg-white/20 backdrop-blur-sm rounded-full p-2 cursor-pointer"
                      onClick={() => handleVideoClick(video.url)}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {video.title}
                    </h3>
                    <p className="text-white/80 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows (lower z-index than play button) */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white p-4 rounded-full transition-all duration-300 z-10 border border-white/20 hover:scale-110"
          aria-label="Previous video"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white p-4 rounded-full transition-all duration-300 z-10 border border-white/20 hover:scale-110"
          aria-label="Next video"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`transition-all duration-500 ease-out ${
              index === currentIndex
                ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg'
                : 'w-3 h-3 bg-slate-400 hover:bg-slate-300 rounded-full hover:scale-125'
            } disabled:cursor-not-allowed`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full bg-slate-200 rounded-full h-1 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / videos.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PortfolioSlider;
