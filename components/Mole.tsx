import React, { MouseEventHandler } from 'react';

interface MoleProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Mole: React.FC<MoleProps> = ({ onClick }) => {
  return (
    <div className="w-16 h-16 bg-red-500 rounded-full cursor-pointer" onClick={onClick}></div>
  );
};

export default Mole;