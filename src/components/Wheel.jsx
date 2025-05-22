import React from 'react';
import { motion } from 'framer-motion';
import WheelSegment from './WheelSegment';

const colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6C5CE7', '#A8E6CF'];

const Wheel = ({ names, rotation, isSpinning, onSpin }) => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
      <motion.div
        className="wheel relative w-full h-full rounded-full border-4 border-white/20 shadow-lg"
        animate={{ rotate: rotation }}
        transition={{
          duration: isSpinning ? 4 : 0,
          ease: "easeOut",
        }}
      >
        {names.map((name, index) => (
          <WheelSegment
            key={name}
            name={name}
            color={colors[index % colors.length]}
            rotation={(360 / names.length) * index}
            size={names.length}
          />
        ))}
      </motion.div>
      
      {/* Spin button in the center */}
      <button
        onClick={onSpin}
        disabled={names.length < 2 || isSpinning}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10
          w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center
          transition-all ${names.length < 2 || isSpinning
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-purple-600 text-white hover:bg-purple-500 shadow-lg'
          }`}
      >
        <span className="text-lg font-bold">
          {isSpinning ? '...' : 'SPIN'}
        </span>
      </button>
      
      {/* Wheel pointer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-white" />
      </div>
    </div>
  );
};

export default Wheel;