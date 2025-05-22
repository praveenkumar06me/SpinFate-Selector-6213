import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGlassCheers, FaMusic, FaGamepad, FaPizzaSlice } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MusicPlayer from './MusicPlayer';

const FunFridayLanding = () => {
  const activities = [
    {icon: <FaGlassCheers size={40} className="text-purple-500" />, title: "Happy Hour", description: "Unwind with refreshing drinks, tasty snacks, and the sweet thrill of paying for it all yourself"},
    {icon: <FaMusic size={40} className="text-yellow-500" />, title: "Music & Dance", description: "Show off your moves to the hottest beats"},
    {icon: <FaGamepad size={40} className="text-red-500" />, title: "Game Zone", description: "Friendly competitions and challenges"},
    {icon: <FaPizzaSlice size={40} className="text-green-500" />, title: "Food Galore", description: "Delicious treats for everyone… in your magical, imaginary world where calories don't count, guac isn't extra, and your fries never go missing"}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white relative overflow-hidden">
      {/* Music Player in bottom left */}
      <MusicPlayer />

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-purple-400">Questera</span> Fun Friday
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Where work ends and fun begins! Get ready for an unforgettable office party experience.
          </p>
        </motion.div>

        {/* Party Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          ].map((img, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img src={img} alt={`Party scene ${index + 1}`} className="w-full h-48 md:h-64 object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Activities Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Today's Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  {activity.icon}
                  <h3 className="text-xl font-semibold mt-4">{activity.title}</h3>
                  <p className="text-gray-300 mt-2">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spin the Wheel CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 max-w-3xl mx-auto shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Ready for the Main Event?</h2>
          <p className="text-xl mb-6">Spin our lucky wheel to win amazing prizes and surprises!</p>
          <Link
            to="/spin"
            className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Spin the Wheel
            <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FunFridayLanding;