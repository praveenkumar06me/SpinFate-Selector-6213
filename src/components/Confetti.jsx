import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Confetti = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2"
          initial={{
            top: "50%",
            left: "50%",
            scale: 0,
          }}
          animate={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            scale: Math.random() * 2 + 1,
            opacity: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          style={{
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;