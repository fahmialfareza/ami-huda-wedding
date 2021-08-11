import React from 'react';

function Backsound() {
  return (
    <>
      <audio allow="autoplay" autoPlay="true" hidden="hidden" loop="true">
        <source src="/audio/theweddingnasheed.mp3" type="audio/mpeg" />
        Browsermu tidak mendukung tag audio, upgrade donk!
      </audio>
    </>
  );
}

export default Backsound;
