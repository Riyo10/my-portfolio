'use client';
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SHAPE_TYPES = ["circle", "triangle", "square"];
const SHAPE_SIZE = 40;
const PLAYER_SIZE = 50;
const GAME_WIDTH = 400;
const GAME_HEIGHT = 600;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ShapeDodger() {
  const [playerX, setPlayerX] = useState(GAME_WIDTH / 2 - PLAYER_SIZE / 2);
  const [shapes, setShapes] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameRef = useRef(null);

  // Handle player movement with arrow keys
  useEffect(() => {
    function handleKey(e) {
      if (gameOver) return;
      if (e.key === "ArrowLeft" || e.key === "a") {
        setPlayerX((x) => Math.max(0, x - 20));
      } else if (e.key === "ArrowRight" || e.key === "d") {
        setPlayerX((x) => Math.min(GAME_WIDTH - PLAYER_SIZE, x + 20));
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameOver]);

  // Add new shapes periodically
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setShapes((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: SHAPE_TYPES[randomInt(0, SHAPE_TYPES.length - 1)],
          x: randomInt(0, GAME_WIDTH - SHAPE_SIZE),
          y: -SHAPE_SIZE,
          speed: 2 + score * 0.05,
        },
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, [score, gameOver]);

  // Move shapes down and check collisions
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setShapes((prev) => {
        const newShapes = prev
          .map((shape) => ({
            ...shape,
            y: shape.y + shape.speed,
          }))
          .filter((shape) => shape.y < GAME_HEIGHT + SHAPE_SIZE);

        // Collision detection
        for (let shape of newShapes) {
          if (
            shape.y + SHAPE_SIZE > GAME_HEIGHT - PLAYER_SIZE - 10 &&
            shape.x + SHAPE_SIZE > playerX &&
            shape.x < playerX + PLAYER_SIZE
          ) {
            setGameOver(true);
            break;
          }
        }

        return newShapes;
      });
      setScore((s) => s + 1);
    }, 30);

    return () => clearInterval(interval);
  }, [playerX, gameOver]);

  // Render shape based on type
  function renderShape(shape) {
    const baseStyle = `absolute cursor-pointer`;

    switch (shape.type) {
      case "circle":
        return (
          <motion.div
            key={shape.id}
            className={`${baseStyle} bg-purple-500 rounded-full`}
            style={{
              width: SHAPE_SIZE,
              height: SHAPE_SIZE,
              top: shape.y,
              left: shape.x,
            }}
            whileHover={{ scale: 1.3, rotate: 15, backgroundColor: "#a78bfa" }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        );
      case "square":
        return (
          <motion.div
            key={shape.id}
            className={`${baseStyle} bg-green-500`}
            style={{
              width: SHAPE_SIZE,
              height: SHAPE_SIZE,
              top: shape.y,
              left: shape.x,
            }}
            whileHover={{ scale: 1.3, rotate: 45, backgroundColor: "#4ade80" }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        );
      case "triangle":
        return (
          <motion.div
            key={shape.id}
            className={`${baseStyle} w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-l-transparent border-r-transparent border-b-yellow-400`}
            style={{
              top: shape.y,
              left: shape.x,
            }}
            whileHover={{ scale: 1.3, rotate: -15, borderBottomColor: "#facc15" }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4 select-none">Shape Dodger</h1>

      <div
        ref={gameRef}
        className="relative bg-gray-800 rounded-lg border border-gray-700"
        style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
      >
        {/* Player */}
        <motion.div
          className="absolute bg-blue-500 rounded-md shadow-lg"
          style={{
            width: PLAYER_SIZE,
            height: PLAYER_SIZE,
            bottom: 10,
            left: playerX,
          }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 12px rgba(59, 130, 246, 0.8)" }}
        />

        {/* Shapes */}
        <AnimatePresence>
          {shapes.map((shape) => renderShape(shape))}
        </AnimatePresence>

        {/* Game Over Overlay */}
        {gameOver && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-4 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-4xl font-bold mb-4">Game Over!</h2>
            <p className="mb-6 text-xl">Your Score: {score}</p>
            <button
              onClick={() => {
                setScore(0);
                setShapes([]);
                setGameOver(false);
                setPlayerX(GAME_WIDTH / 2 - PLAYER_SIZE / 2);
              }}
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Restart
            </button>
          </motion.div>
        )}
      </div>

      <div className="mt-6 flex justify-between w-[400px]">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Go Back</span>
        </button>

        <div className="text-lg font-semibold select-none">Score: {score}</div>
      </div>
    </div>
  );
}

export default ShapeDodger;
