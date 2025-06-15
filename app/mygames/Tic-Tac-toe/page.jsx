'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaRegCircle } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

export default function TicTacToe() {
  const [mode, setMode] = useState(null); // 'single' | 'multi'
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (mode === 'single' && !xTurn && !winner) {
      const timeout = setTimeout(() => cpuMove(), 500);
      return () => clearTimeout(timeout);
    }
  }, [xTurn, mode, winner]);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = xTurn ? 'X' : 'O';
    setBoard(newBoard);
    setXTurn(!xTurn);
    checkWinner(newBoard);
  };

const cpuMove = () => {
  const available = board
    .map((v, i) => (v === null ? i : null))
    .filter((v) => v !== null);
  if (available.length === 0) return;

  // 20% chance CPU makes a random move (imperfection)
  if (Math.random() < 0.2) {
    const move = available[Math.floor(Math.random() * available.length)];
    handleClick(move);
    return;
  }

  // Minimax function to find best move
  const minimax = (newBoard, isMaximizing) => {
    const winner = checkWinnerForMinimax(newBoard);
    if (winner !== null) {
      if (winner === 'O') return 10; // CPU wins
      else if (winner === 'X') return -10; // Player wins
      else if (winner === 'Draw') return 0;
    }

    const spots = newBoard
      .map((v, i) => (v === null ? i : null))
      .filter((v) => v !== null);

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < spots.length; i++) {
        newBoard[spots[i]] = 'O';
        const score = minimax(newBoard, false);
        newBoard[spots[i]] = null;
        bestScore = Math.max(score, bestScore);
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < spots.length; i++) {
        newBoard[spots[i]] = 'X';
        const score = minimax(newBoard, true);
        newBoard[spots[i]] = null;
        bestScore = Math.min(score, bestScore);
      }
      return bestScore;
    }
  };

  // Helper for minimax to check winner without side effect
  const checkWinnerForMinimax = (b) => {
    for (const [a, b1, c] of winningCombos) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
        return b[a];
      }
    }
    if (!b.includes(null)) return 'Draw';
    return null;
  };

  let bestScore = -Infinity;
  let move = null;

  for (let i = 0; i < available.length; i++) {
    const idx = available[i];
    const newBoard = [...board];
    newBoard[idx] = 'O';
    const score = minimax(newBoard, false);
    if (score > bestScore) {
      bestScore = score;
      move = idx;
    }
  }

  handleClick(move);
};


  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXTurn(true);
    setWinner(null);
  };

  const resetAll = () => {
    resetGame();
    setMode(null);
  };

  const renderIcon = (value) => {
    if (value === 'X') return <FaTimes className="text-red-500 w-8 h-8" />;
    if (value === 'O') return <FaRegCircle className="text-blue-500 w-8 h-8" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">🎮 Tic Tac Toe</h1>

      {!mode ? (
        <div className="flex flex-col gap-4 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2 rounded font-semibold"
            onClick={() => setMode('single')}
          >
            Single Player (vs CPU)
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold"
            onClick={() => setMode('multi')}
          >
            Multiplayer (Local)
          </motion.button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {board.map((cell, i) => (
              <motion.button
                key={i}
                onClick={() => mode === 'single' && !xTurn ? null : handleClick(i)}
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-800 rounded shadow-inner flex items-center justify-center text-3xl"
              >
                {renderIcon(cell)}
              </motion.button>
            ))}
          </div>

          {winner && (
            <motion.div
              className="mt-4 text-xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {winner === 'Draw' ? '🤝 It’s a Draw!' : `🎉 ${winner} Wins!`}
            </motion.div>
          )}

          <div className="flex gap-4 mt-6">
            <button
              onClick={resetGame}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded font-semibold"
            >
              <FiRefreshCw /> Restart
            </button>
            <button
              onClick={resetAll}
              className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded font-semibold"
            >
              Back to Mode Select
            </button>
          </div>
        </>
      )}
    </div>
  );
}
