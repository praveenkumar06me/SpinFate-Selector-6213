import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const WinnerPopup = ({ winner, onRemove, onNext }) => {
  return (
    <AnimatePresence>
      {winner && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-800 rounded-xl p-6 max-w-md w-full shadow-xl"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Winner!</h2>
              <p className="text-xl text-purple-400 font-semibold mb-6">{winner}</p>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={onRemove}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  <IoClose size={18} />
                  Remove
                </button>
                <button
                  onClick={onNext}
                  className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WinnerPopup;