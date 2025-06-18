import React, { useState } from 'react';

const MediaPlayer = ({ mediaType, mediaUrl, title, duration, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative bg-black/80 rounded-xl p-4 border border-blue-700/30">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-semibold">{title}</h3>
        <span className="text-blue-200 text-sm">{formatTime(duration)}</span>
      </div>

      {mediaType === 'video' ? (
        <video
          className="w-full rounded-lg"
          src={mediaUrl}
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          volume={volume}
        />
      ) : (
        <audio
          className="w-full rounded-lg"
          src={mediaUrl}
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          volume={volume}
        />
      )}

      {description && (
        <p className="text-gray-300 mt-4 text-sm">{description}</p>
      )}

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handlePlayPause}
            className="p-2 bg-blue-800/50 hover:bg-blue-700/50 rounded-full transition-colors text-blue-300"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isPlaying ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 15l4 4m0 0l-4 4m4-4H3" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9V5a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V9z" />
              )}
            </svg>
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-32 h-2 bg-blue-900/50 rounded-full cursor-pointer"
          />
        </div>
        <div className="text-blue-200 text-sm">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
