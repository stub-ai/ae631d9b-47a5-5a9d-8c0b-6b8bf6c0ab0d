import React, { useState, useEffect } from 'react';
import GameBoard from '../components/GameBoard';

const Home = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGameOver(true);
    }, 30000); // game lasts for 30 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl mb-4">Whack-a-Mole</h1>
      <GameBoard moleAppearInterval={1000} gameDuration={30000} onScoreChange={setScore} />
      <p className="text-2xl mt-4">Score: {score}</p>
      {gameOver && <p className="text-2xl mt-4">Game Over!</p>}
    </div>
  );
};

export default Home;