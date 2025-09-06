import React, { useState, useEffect } from 'react';

const Typewriter = ({ phrases, speed = 100, pause = 2000 }) => {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[phraseIdx];
    
    if (!deleting && charIdx <= currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentPhrase.slice(0, charIdx));
        setCharIdx(charIdx + 1);
      }, speed);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentPhrase.slice(0, charIdx));
        setCharIdx(charIdx - 1);
      }, speed / 2);
    } else if (!deleting && charIdx > currentPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx < 0) {
      setDeleting(false);
      setPhraseIdx((phraseIdx + 1) % phrases.length);
      setCharIdx(0);
    }
    
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);

  return (
    <span className="relative">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        {displayed}
      </span>
      <span className="animate-pulse text-purple-600 ml-1">|</span>
    </span>
  );
};

export default Typewriter;