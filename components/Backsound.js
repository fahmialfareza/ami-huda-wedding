import React from 'react';
import Sound from 'react-sound';

function Backsound({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
}) {
  return (
    <>
      <Sound
        url="/audio/theweddingnasheed.mp3"
        playStatus={Sound.status.PLAYING}
        loop={true}
        playFromPosition={0}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
    </>
  );
}

export default Backsound;
