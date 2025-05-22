import React, { useState, useEffect, useRef } from 'react';
import { FaVolumeMute, FaVolumeUp, FaVolumeDown, FaVolumeOff } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30); // Default volume at 30%
  const audioRef = useRef(null);

  // Soft saxophone background music (royalty-free)
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play error:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, volume]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsPlaying(false);
    } else if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  return (
    <motion.div 
      className="fixed bottom-4 right-4 z-50 bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <audio ref={audioRef} loop>
        <source src={musicUrl} type="audio/mpeg" />
      </audio>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleMusic}
          className="text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
          aria-label={isPlaying ? "Mute music" : "Play music"}
        >
          {volume === 0 ? (
            <FaVolumeOff size={18} />
          ) : isPlaying ? (
            <FaVolumeUp size={18} />
          ) : (
            <FaVolumeDown size={18} />
          )}
        </button>

        <div className="flex items-center gap-2 w-32">
          <FaVolumeDown size={14} className="text-gray-300" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-1.5 rounded-full appearance-none bg-gray-600 outline-none accent-purple-500"
          />
          <FaVolumeUp size={14} className="text-gray-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;