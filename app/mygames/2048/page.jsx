'use client'
import React, { useEffect, useState } from 'react'

const GRID_SIZE = 4

function createEmptyGrid() {
  return Array(GRID_SIZE).fill(0).map(() => Array(GRID_SIZE).fill(0))
}

function addRandomTile(grid) {
  const empty = []
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (grid[r][c] === 0) empty.push([r, c])
    }
  }
  if (empty.length === 0) return grid
  const [r, c] = empty[Math.floor(Math.random() * empty.length)]
  const newGrid = grid.map((row) => [...row])
  newGrid[r][c] = Math.random() < 0.9 ? 2 : 4
  return newGrid
}

function slide(row, scoreCallback) {
  const newRow = row.filter((val) => val !== 0)
  for (let i = 0; i < newRow.length - 1; i++) {
    if (newRow[i] === newRow[i + 1]) {
      newRow[i] *= 2
      scoreCallback(newRow[i])
      newRow[i + 1] = 0
    }
  }
  return newRow.filter((val) => val !== 0).concat(Array(GRID_SIZE).fill(0)).slice(0, GRID_SIZE)
}

function rotateGrid(grid) {
  return grid[0].map((_, i) => grid.map((row) => row[i]))
}

function checkGameOver(grid) {
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (grid[r][c] === 0) return false
      if (c < GRID_SIZE - 1 && grid[r][c] === grid[r][c + 1]) return false
      if (r < GRID_SIZE - 1 && grid[r][c] === grid[r + 1][c]) return false
    }
  }
  return true
}

function getTileColor(value) {
  const colors = {
    2: 'bg-yellow-100 text-black',
    4: 'bg-yellow-200 text-black',
    8: 'bg-orange-300 text-white',
    16: 'bg-orange-400 text-white',
    32: 'bg-orange-500 text-white',
    64: 'bg-orange-600 text-white',
    128: 'bg-red-400 text-white',
    256: 'bg-red-500 text-white',
    512: 'bg-pink-500 text-white',
    1024: 'bg-purple-500 text-white',
    2048: 'bg-green-500 text-white',
  }
  return colors[value] || 'bg-gray-700 text-white'
}

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const [grid, setGrid] = useState(createEmptyGrid())
  const [score, setScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const [showHowToPlay, setShowHowToPlay] = useState(false)

  // Touch state for swipe detection
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const minSwipeDistance = 50 // minimum distance to count as a swipe

  // Initialize grid only after client mount
  useEffect(() => {
    setGrid(addRandomTile(addRandomTile(createEmptyGrid())))
    setMounted(true)
  }, [])

  const move = (direction) => {
    let rotated = grid

    if (direction === 'up') rotated = rotateGrid(rotated)
    if (direction === 'down') rotated = rotateGrid(rotated).map((row) => row.reverse())
    if (direction === 'right') rotated = rotated.map((row) => row.reverse())

    const newGrid = rotated.map((row) => slide(row, (s) => setScore((prev) => prev + s)))

    if (JSON.stringify(newGrid) === JSON.stringify(rotated)) return

    if (direction === 'up') rotated = rotateGrid(newGrid)
    if (direction === 'down') rotated = rotateGrid(newGrid.map((row) => row.reverse()))
    if (direction === 'right') rotated = newGrid.map((row) => row.reverse())
    if (direction === 'left') rotated = newGrid

    const updatedGrid = addRandomTile(rotated)
    setGrid(updatedGrid)

    if (checkGameOver(updatedGrid)) {
      setTimeout(() => setIsGameOver(true), 200)
    }
  }

  const handleKey = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault()
        move('up')
        break
      case 'ArrowDown':
        e.preventDefault()
        move('down')
        break
      case 'ArrowLeft':
        e.preventDefault()
        move('left')
        break
      case 'ArrowRight':
        e.preventDefault()
        move('right')
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [grid])

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    const touch = e.touches[0]
    setTouchStart({ x: touch.clientX, y: touch.clientY })
    setTouchEnd(null)
  }

  const onTouchMove = (e) => {
    const touch = e.touches[0]
    setTouchEnd({ x: touch.clientX, y: touch.clientY })
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const dx = touchEnd.x - touchStart.x
    const dy = touchEnd.y - touchStart.y

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > minSwipeDistance) {
      // Horizontal swipe
      if (dx > 0) move('right')
      else move('left')
    } else if (Math.abs(dy) > minSwipeDistance) {
      // Vertical swipe
      if (dy > 0) move('down')
      else move('up')
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  const resetGame = () => {
    setGrid(addRandomTile(addRandomTile(createEmptyGrid())))
    setScore(0)
    setIsGameOver(false)
  }

  const goBack = () => {
    window.history.back()
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4 relative">
      <div className="max-w-md w-full space-y-4 text-white z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">2048</h1>
          <div className="flex items-center space-x-4">
            <div className="text-lg">Score: {score}</div>
            <button
              onClick={() => setShowHowToPlay((prev) => !prev)}
              className="px-3 py-1 border border-white rounded-md hover:bg-white hover:text-black transition text-sm"
              aria-expanded={showHowToPlay}
              aria-controls="how-to-play"
            >
              How to Play
            </button>
          </div>
        </div>

        {showHowToPlay && (
          <div
            id="how-to-play"
            className="bg-neutral-800 p-4 rounded-md text-sm leading-relaxed max-h-48 overflow-y-auto"
          >
            <h2 className="font-bold text-lg mb-2">How to play 2048</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Use the <strong>arrow keys</strong> or <strong>swipe</strong> on mobile to slide tiles on the grid.</li>
              <li>When two tiles with the same number touch, they <em>merge</em> into one with their sum.</li>
              <li>Your goal is to create a tile with the number <strong>2048</strong>.</li>
              <li>The game ends when there are no valid moves left.</li>
              <li>Try to get the highest score by combining tiles efficiently!</li>
            </ul>
          </div>
        )}

        <div
          className="grid grid-cols-4 gap-2 bg-neutral-800 p-4 rounded-lg shadow-md"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {grid.flat().map((cell, i) => (
            <div
              key={i}
              className={`aspect-square w-full flex items-center justify-center text-2xl font-extrabold rounded-md transition-all duration-100 ${getTileColor(cell)}`}
            >
              {cell !== 0 ? cell : ''}
            </div>
          ))}
        </div>

        <div className="text-center space-y-2">
          <button
            onClick={resetGame}
            className="mt-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300 transition w-full"
          >
            New Game
          </button>
          <button
            onClick={goBack}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition w-full"
          >
            Go Back
          </button>
        </div>
      </div>

      {isGameOver && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-20">
          <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Game Over</h2>
            <p className="text-white mb-4">No more moves available!</p>
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300 transition"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
