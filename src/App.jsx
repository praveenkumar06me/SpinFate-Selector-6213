import React,{useState} from 'react';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import FunFridayLanding from './components/FunFridayLanding';
import Wheel from './components/Wheel';
import NameInput from './components/NameInput';
import NameList from './components/NameList';
import Confetti from './components/Confetti';
import WinnerPopup from './components/WinnerPopup';
import MusicPlayer from './components/MusicPlayer';

function SpinWheelApp() {
  const [names,setNames]=useState([]);
  const [rotation,setRotation]=useState(0);
  const [isSpinning,setIsSpinning]=useState(false);
  const [showConfetti,setShowConfetti]=useState(false);
  const [winner,setWinner]=useState(null);

  const handleAddName=(name)=> {
    if (names.length < 50 && !names.includes(name)) {
      setNames([...names,name]);
    }
  };

  const handleRemoveName=(nameToRemove)=> {
    setNames(names.filter(name=> name !==nameToRemove));
  };

  const handleClearAll=()=> {
    setNames([]);
  };

  const spinWheel=()=> {
    if (names.length < 2 || isSpinning) return;
    setIsSpinning(true);
    const newRotation=rotation + 1440 + Math.random() * 360;
    setRotation(newRotation);
    setTimeout(()=> {
      setIsSpinning(false);
      setShowConfetti(true);
      const winnerIndex=Math.floor((360 - (newRotation % 360)) / (360 / names.length));
      const newWinner=names[winnerIndex];
      setWinner(newWinner);
    },4000);
  };

  const handleRemoveWinner=()=> {
    handleRemoveName(winner);
    setWinner(null);
    setShowConfetti(false);
  };

  const handleNext=()=> {
    setWinner(null);
    setShowConfetti(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Fun party background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-purple-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto pt-12 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Fun at Questera, Let's Spin
        </h1>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Wheel Section */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <Wheel
                names={names}
                rotation={rotation}
                isSpinning={isSpinning}
                onSpin={spinWheel}
              />
            </div>
          </div>

          {/* Name Input Section */}
          <div className="flex-1 w-full md:max-w-md space-y-6">
            <NameInput onAdd={handleAddName} />
            <AnimatePresence>
              <NameList
                names={names}
                onRemove={handleRemoveName}
                onClearAll={handleClearAll}
              />
            </AnimatePresence>
          </div>
        </div>

        <Confetti isVisible={showConfetti} />
        <WinnerPopup 
          winner={winner}
          onRemove={handleRemoveWinner}
          onNext={handleNext}
        />
      </div>

      {/* Add Music Player */}
      <MusicPlayer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FunFridayLanding />} />
        <Route path="/spin" element={<SpinWheelApp />} />
      </Routes>
    </Router>
  );
}

export default App;