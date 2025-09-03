import React, { useRef, useEffect } from 'react';
import PortfolioCard from './PortfolioCard';
import '@glidejs/glide/dist/css/glide.core.min.css';

const videos = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'https://www.youtube.com/watch?v=ScMzIvxBSi4',
];

const PortfolioSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    import('@glidejs/glide').then(({ default: Glide }) => {
      if (sliderRef.current) {
        new Glide(sliderRef.current, {
          type: 'carousel',
          perView: 1,
          gap: 24,
          autoplay: 4000,
          hoverpause: true,
          breakpoints: {
            640: { perView: 1 },
            1024: { perView: 2 },
          },
        }).mount();
      }
    });
  }, []);

  return (
    <div className="glide w-full" ref={sliderRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {videos.map((url, idx) => (
            <li className="glide__slide" key={idx}>
              <PortfolioCard videoUrl={url} />
            </li>
          ))}
        </ul>
      </div>
      <div className="glide__arrows flex justify-center mt-4" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left mx-2 px-4 py-2 bg-gray-200 rounded" data-glide-dir="<">Prev</button>
        <button className="glide__arrow glide__arrow--right mx-2 px-4 py-2 bg-gray-200 rounded" data-glide-dir=">">Next</button>
      </div>
    </div>
  );
};

export default PortfolioSlider;
