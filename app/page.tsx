'use client';

import { useState } from 'react';

export default function Home() {
  const [grid, setGrid] = useState<number[]>(Array(9).fill(0));

  const handleClick = (index: number) => {
    // Check if box is locked
    if (grid[index] >= 15) return;

    const newGrid = [...grid];
    newGrid[index] += 1;
    const newValue = newGrid[index];

    // Rule A: Divisible by 3 - decrement right neighbor
    if (newValue % 3 === 0) {
      const col = index % 3;
      if (col !== 2) { // Not in last column
        const rightIndex = index + 1;
        if (newGrid[rightIndex] < 15) { // Not locked
          newGrid[rightIndex] -= 1;
        }
      }
    }

    // Rule B: Divisible by 5 - increment below neighbor by 2
    if (newValue % 5 === 0) {
      const row = Math.floor(index / 3);
      if (row !== 2) { // Not in bottom row
        const belowIndex = index + 3;
        if (newGrid[belowIndex] < 15) { // Not locked
          newGrid[belowIndex] += 2;
        }
      }
    }

    setGrid(newGrid);
  };

  const handleReset = () => {
    setGrid(Array(9).fill(0));
  };

  const getBoxStyle = (value: number) => {
    if (value >= 15) {
      return 'bg-red-600 text-white cursor-not-allowed';
    }
    if (value % 2 === 0) {
      return 'bg-[#e0e0e0] text-black cursor-pointer hover:opacity-80';
    }
    return 'bg-[#1a237e] text-white cursor-pointer hover:opacity-80';
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            🎮 Ripple Grid Game
          </h1>
          <p className="text-gray-600 text-lg">
            Click the boxes and watch the ripple effects!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Game Board */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {grid.map((value, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  disabled={value >= 15}
                  className={`
                    w-24 h-24 
                    rounded 
                    text-3xl font-bold
                    transition-all
                    ${getBoxStyle(value)}
                  `}
                  style={{
                    boxShadow: '2px 2px 0px black'
                  }}
                >
                  {value}
                </button>
              ))}
            </div>
            <button
              onClick={handleReset}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md"
            >
              Reset Game
            </button>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              📖 How to Play
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2">🖱️ Basic Rule</h3>
                <p className="text-sm">Click any box to increase its number by 1</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-900 mb-2">⚡ Ripple Effect A</h3>
                <p className="text-sm">When a number is divisible by 3, the box to the RIGHT decreases by 1</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-purple-900 mb-2">💫 Ripple Effect B</h3>
                <p className="text-sm">When a number is divisible by 5, the box BELOW increases by 2</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-red-900 mb-2">🔒 Locked State</h3>
                <p className="text-sm">When a box reaches 15 or higher, it turns red and becomes locked (cannot be clicked or changed)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                <h3 className="font-semibold text-gray-900 mb-2">🎨 Color Code</h3>
                <p className="text-sm">
                  <span className="inline-block w-4 h-4 bg-[#e0e0e0] border border-gray-300 mr-2"></span>
                  Even numbers = Light Gray<br/>
                  <span className="inline-block w-4 h-4 bg-[#1a237e] mr-2"></span>
                  Odd numbers = Navy Blue<br/>
                  <span className="inline-block w-4 h-4 bg-red-600 mr-2"></span>
                  Locked (15+) = Red
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">Built with Next.js, React & Tailwind CSS</p>
        </div>
      </div>
    </main>
  );
}
