import React from 'react';

function Backsound() {
  return (
    <>
      <audio id="nasheed" hidden="hidden" loop="true">
        <source src="/audio/theweddingnasheed.mp3" />
      </audio>
    </>
  );
}

export default Backsound;
