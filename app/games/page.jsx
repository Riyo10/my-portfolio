'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const games = [
  {
    name: 'Memory Game',
    description: 'A memory matching game where you flip cards to find pairs.',
    link: '/mygames/memory-game',
  },
  // {
  //   name: 'Shape Dodger',
  //   description: 'Dodge falling shapes and survive as long as you can!',
  //   link: '/mygames/Shape-dodger',
  // },
  {
    name: '2048',
    description: 'Slide the tiles to combine numbers and reach the 2048 tile!',
    link: '/mygames/2048',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function GamesPage() {
  return (
    <motion.section
      className="min-h-screen bg-black text-white py-24 px-6 md:px-16"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#FF6B2D] tracking-tight"
          variants={item}
        >
          🎮 My Games
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={container}
        >
          {games.map((game, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] border border-[#FF6B2D]/40 rounded-lg p-6 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div>
                <h2 className="text-2xl font-bold text-[#FF6B2D] mb-2">{game.name}</h2>
                <p className="text-gray-300 text-sm">{game.description}</p>
              </div>
              <Link href={game.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="mt-6 w-full bg-[#FF6B2D] hover:bg-[#e55a1e] text-white font-semibold py-2 rounded-md shadow-md"
                >
                  Play 🎮
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
