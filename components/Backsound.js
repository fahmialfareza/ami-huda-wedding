import React from 'react';

function Backsound() {
  return (
    <>
      {/* <audio id="nasheed" hidden="hidden" loop="true">
        <source src="/audio/theweddingnasheed.mp3" />
      </audio> */}
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/ZJF0Sjw1aK8?controls=0&autoplay=1&loop=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </>
  );
}

export default Backsound;
