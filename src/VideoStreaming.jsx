import React, { useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);

  // Event handler when video is playing
  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Event handler when video is paused
  const handlePause = () => {
    setIsPlaying(false);
  };

  // Event handler for error when loading video
  const handleError = (e) => {
    setError("Error loading video.");
    console.error(e);
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <video
        ref={videoRef}
        controls
        onPlay={handlePlay}
        onPause={handlePause}
        onError={handleError}
        width="100%"
        height="auto"
      >
        <source
          src="http://localhost:3000/video"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
