
import React from 'react';
import { Sparkles } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative group">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-tik-gradient animate-pulse-gentle">
          Tik Tik Deal
        </h1>
        <Sparkles 
          className="absolute -top-4 -right-8 text-tikBlue animate-float" 
          size={24} 
        />
        <Sparkles 
          className="absolute -bottom-2 -left-6 text-tikGreen animate-float animate-delay-300" 
          size={20} 
        />
      </div>
    </div>
  );
};

export default Logo;
