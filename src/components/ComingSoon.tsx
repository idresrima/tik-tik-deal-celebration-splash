
import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="relative">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800">
          <span className="text-tikBlue">Coming</span> <span className="text-tikGreen">Soon</span>
        </h2>
        <div className="h-1 w-full bg-tik-gradient mt-1 rounded-full"></div>
      </div>
      
      <p className="text-center text-gray-600 max-w-md px-4 mt-4">
        Get ready for the best deals with just a few tiks! Your new favorite shopping app is about to launch.
      </p>
    </div>
  );
};

export default ComingSoon;
