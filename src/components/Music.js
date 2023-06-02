import React, { useState, useEffect } from 'react';

const Music = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);

  useEffect(() => {
    setIsMusicPlaying(true);

    return () => {
      setIsMusicPlaying(false);
    };
  }, []);

  return (
    <div>
      {isMusicPlaying && (
        <audio src="./DarthVader.mp3" autoPlay loop />
      )}
    </div>
  );
};

export default Music;





