import React, { useEffect } from 'react';

function Backsound() {
  useEffect(() => {
    document.getElementById('audioBack').play();
    document.getElementById('audioBack').play();
  }, []);

  return (
    <div style={{ position: 'fixed', zIndex: 99999, bottom: 0, right: 0 }}>
      <audio
        id="audioBack"
        controls
        loop
        src="audio/theweddingnasheed.mp3"
      ></audio>
    </div>
  );
}

export default Backsound;
