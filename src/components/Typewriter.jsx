import React from 'react';

const Typewriter = ({ phrases, speed = 80, pause = 1200 }) => {
  const [displayed, setDisplayed] = React.useState('');
  const [phraseIdx, setPhraseIdx] = React.useState(0);
  const [charIdx, setCharIdx] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
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
    <span className="text-primary font-bold">
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default Typewriter;
