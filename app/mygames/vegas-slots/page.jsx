'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaAppleAlt, FaHeart, FaStar, FaInfoCircle, FaTimes } from 'react-icons/fa';

const icons = [FaGem, FaAppleAlt, FaHeart, FaStar];
const getRandom = () => Math.floor(Math.random() * icons.length);

export default function Page() {
  const [slots, setSlots] = useState([0, 1, 2]);
  const [spinning, setSpinning] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [streak, setStreak] = useState(0);
  const [result, setResult] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const spin = () => {
    if (spinning) return;

    setSpinning(true);
    setResult('');

    const newSlots = [getRandom(), getRandom(), getRandom()];
    setSlots(newSlots);

    setTimeout(() => {
      const isWin = newSlots.every((v) => v === newSlots[0]);

      if (isWin) {
        setResult('🎉 JACKPOT!');
        setWins((w) => w + 1);
        setStreak((s) => s + 1);
      } else {
        setResult('😢 Try Again!');
        setLosses((l) => l + 1);
        setStreak(0);
      }

      setSpinning(false);
    }, 1400);
  };

  const Reel = ({ index }) => {
    const Icon = icons[slots[index]];
    return (
      <motion.div
        className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-lg shadow-inner flex items-center justify-center relative"
        animate={spinning ? { y: [0, 60, -60, 0] } : { y: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 pointer-events-none rounded-lg" />
        <Icon className="text-3xl sm:text-4xl text-amber-600 z-10" />
      </motion.div>
    );
  };

  const total = wins + losses;
  const winRate = total > 0 ? Math.round((wins / total) * 100) : 0;

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex justify-center items-center text-white p-4">
        <div className="relative bg-gradient-to-t from-gray-800 to-gray-700 border-8 border-yellow-500 rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg p-4 sm:p-6 pb-14">

          {/* Header */}
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-300 text-center mb-4">🎰 Vegas Slots</h1>

          {/* Info button */}
          <button
            onClick={() => setShowInfo(true)}
            aria-label="How to play"
            className="absolute top-4 right-4 text-yellow-300 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
          >
            <FaInfoCircle size={24} />
          </button>

          {/* Win/Loss Stats */}
          <div className="flex flex-wrap justify-between text-green-400 font-mono text-xs sm:text-sm mb-4 gap-y-2">
            <div>✅ Wins: {wins}</div>
            <div>❌ Losses: {losses}</div>
            <div>📈 Rate: {winRate}%</div>
            <div>🔥 Streak: {streak}</div>
          </div>

          {/* Slot Reels */}
          <div className="bg-black border-8 border-gray-900 rounded-xl p-3 flex justify-center space-x-2 sm:space-x-4 shadow-inner">
            {[0, 1, 2].map((i) => (
              <Reel key={i} index={i} />
            ))}
          </div>

          {/* Spin Result */}
          {result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-lg sm:text-xl font-bold text-center mt-6 ${
                result.includes('JACKPOT') ? 'text-yellow-300 animate-pulse' : 'text-red-400'
              }`}
            >
              {result}
            </motion.div>
          )}

          {/* Roll Button */}
          <motion.button
            onClick={spin}
            disabled={spinning}
            whileHover={{ scale: 1.05, boxShadow: '0 0 12px #f87171' }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 w-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-black font-bold py-3 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed select-none"
            aria-label="Roll the slots"
          >
            {spinning ? 'Spinning...' : 'Roll'}
          </motion.button>
        </div>
      </main>

      {/* Modal backdrop */}
      {showInfo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
          onClick={() => setShowInfo(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div
            className="bg-gray-800 rounded-lg max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowInfo(false)}
              aria-label="Close modal"
              className="absolute top-3 right-3 text-yellow-400 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
            >
              <FaTimes size={24} />
            </button>

            <h2
              id="modal-title"
              className="text-yellow-300 text-2xl font-bold mb-4 text-center"
            >
              How to Play
            </h2>
            <div
              id="modal-description"
              className="text-white text-sm leading-relaxed space-y-3"
            >
              <p>🎰 Press the "Roll" button below to spin the reels.</p>
              <p>🍀 If all three symbols match, you win the jackpot!</p>
              <p>😢 If they don't match, better luck next time.</p>
              <p>📊 Track your wins, losses, and streaks at the top.</p>
              <p>👍 Have fun and try your luck!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
