import React from 'react';

const PortfolioCard = ({ videoUrl, title }) => {
  const match = videoUrl.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  const videoId = match ? match[1] : null;
  
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl transition-all duration-500 hover:scale-105">
      {videoId ? (
        <div className="aspect-video relative">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1`}
            title={title || "Video"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        </div>
      ) : (
        <div className="aspect-video flex items-center justify-center text-red-400 bg-gray-800 rounded-2xl">
          <span className="text-sm">Invalid Video URL</span>
        </div>
      )}
    </div>
  );
};

export default PortfolioCard;