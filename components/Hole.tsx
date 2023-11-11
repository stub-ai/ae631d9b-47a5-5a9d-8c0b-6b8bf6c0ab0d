import React, { ReactNode } from 'react';

interface HoleProps {
  children: ReactNode;
}

const Hole: React.FC<HoleProps> = ({ children }) => {
  return (
    <div className="w-20 h-20 bg-gray-300 m-2 rounded-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default Hole;