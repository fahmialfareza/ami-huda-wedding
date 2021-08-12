import React, { useEffect } from 'react';

function Backsound() {
  useEffect(() => {
    const audio = document.getElementById('audioNasheed');

    audio.play();
  }, []);

  return (
    <>
      <audio allow="autoplay" loop autoPlay id="audioNasheed">
        <source src="/audio/theweddingnasheed.mp3" />
      </audio>
    </>
  );
}

export default Backsound;
