import React from 'react';

const PortfolioCard = ({ videoUrl }) => {
  // Extract YouTube video ID
  const match = videoUrl.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  const videoId = match ? match[1] : null;
  return (
    <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col items-center">
      {videoId ? (
        <iframe
          width="320"
          height="180"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      ) : (
        <div className="text-red-500">Invalid YouTube URL</div>
      )}
    </div>
  );
};

export default PortfolioCard;
