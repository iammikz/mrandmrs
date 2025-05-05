import React, { useEffect, useRef } from 'react';

function AudioPlayer({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Autoplay started successfully!
      }).catch(error => {
        // Autoplay was prevented. Mute the audio and inform the user.
        audio.muted = true;
        console.warn("Autoplay blocked:", error);
        // Optionally display a message to the user to unmute.
      });
    }

    return () => {
      audio.pause();
    };
  }, [src]);

  const handleUnmute = () => {
    audioRef.current.muted = false;
  };

  return (
    <div>
      <audio ref={audioRef} controls loop />
      {audioRef.current && audioRef.current.muted && (
        <button onClick={handleUnmute}>Unmute</button>
      )}
    </div>
  );
}

export default AudioPlayer;