import React, { useState, useEffect } from 'react';
import Hole from './Hole';
import Mole from './Mole';

interface GameBoardProps {
  moleAppearInterval: number;
  gameDuration: number;
  onScoreChange: (score: (prevScore: number) => number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ moleAppearInterval, gameDuration, onScoreChange }) => {
  const [molePosition, setMolePosition] = useState(Math.floor(Math.random() * 9));

  useEffect(() => {
    const interval = setInterval(() => {
      setMolePosition(Math.floor(Math.random() * 9));
    }, moleAppearInterval);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, gameDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [moleAppearInterval, gameDuration]);

  const handleMoleClick = () => {
    onScoreChange((prevScore) => prevScore + 1);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {[...Array(9)].map((_, i) => (
        <Hole key={i}>
          {i === molePosition && <Mole onClick={handleMoleClick} />}
        </Hole>
      ))}
    </div>
  );
};

export default GameBoard;