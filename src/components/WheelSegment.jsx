import React from 'react';
import { motion } from 'framer-motion';

const WheelSegment = ({ name, color, rotation, size }) => {
  const degrees = 360 / size;
  
  return (
    <motion.div
      className="absolute w-full h-full origin-bottom-left"
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: '50% 50%',
      }}
    >
      <div
        className="absolute w-1/2 h-[2px] origin-[100%_50%] -translate-y-1/2"
        style={{
          backgroundColor: color,
          transform: `rotate(${degrees / 2}deg)`,
        }}
      />
      <div
        className="absolute text-white text-sm font-medium left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `rotate(${degrees / 2}deg) translateY(-70px)`,
        }}
      >
        {name}
      </div>
    </motion.div>
  );
};

export default WheelSegment;