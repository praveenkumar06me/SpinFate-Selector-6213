import React from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const NameList = ({ names, onRemove, onClearAll }) => {
  if (names.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-semibold">Participants ({names.length})</h2>
        <button
          onClick={onClearAll}
          className="text-red-400 hover:text-red-300 text-sm transition-colors"
        >
          Clear All
        </button>
      </div>
      <div className="space-y-2">
        {names.map((name) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center justify-between bg-gray-800 rounded-lg p-3"
          >
            <span className="text-white">{name}</span>
            <button
              onClick={() => onRemove(name)}
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <IoClose size={20} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NameList;