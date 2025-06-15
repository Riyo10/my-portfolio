'use client';

import React, { useState, useEffect } from 'react';
import { FaRedo } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import confetti from 'canvas-confetti';

const emojis = ['🍎', '🍕', '🎈', '🐶', '🚗', '⚽', '🎵', '🌟'];

const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [lock, setLock] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (matched.length === emojis.length) {
      setIsWinner(true);
      runConfetti();
    }
  }, [matched]);

  const runConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function frame() {
      confetti({
        particleCount: 5,
        ...defaults,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });
      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    }
    frame();
  };

  const resetGame = () => {
    const shuffled = shuffleArray([...emojis, ...emojis]).map((emoji, index) => ({
      id: index,
      emoji,
    }));
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setLock(false);
    setIsWinner(false);
  };

  const handleFlip = (index) => {
    if (lock || flipped.includes(index) || matched.includes(cards[index].emoji)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setLock(true);
      const [first, second] = newFlipped;
      if (cards[first].emoji === cards[second].emoji) {
        setMatched((prev) => [...prev, cards[first].emoji]);
        setTimeout(() => {
          setFlipped([]);
          setLock(false);
        }, 600);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setLock(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-black flex flex-col items-center justify-center p-6 relative font-sans">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center drop-shadow">
        🧠 Memory Match Game
      </h1>

      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index) || matched.includes(card.emoji);
          return (
            <motion.div
              key={card.id}
              className="w-20 h-20 bg-white/90 rounded-lg shadow-lg flex items-center justify-center text-2xl sm:text-3xl font-bold cursor-pointer"
              onClick={() => handleFlip(index)}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ perspective: 1000 }}
            >
              <motion.div className="select-none">{isFlipped ? card.emoji : '❓'}</motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <button
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded flex items-center gap-2 shadow-md transition"
          onClick={resetGame}
        >
          <FaRedo />
          <span>Restart</span>
        </button>

        <Link
          href="/games"
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded shadow-md transition"
        >
          Go Back
        </Link>
      </div>

      {isWinner && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-24 bg-emerald-100 border-4 border-emerald-700 text-emerald-900 px-6 py-3 rounded-md shadow-xl font-bold text-lg text-center"
        >
          🎉 Congratulations! You won! 🎉
        </motion.div>
      )}
    </div>
  );
}
