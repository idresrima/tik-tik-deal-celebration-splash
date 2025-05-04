
import React, { useEffect, useState } from 'react';

type ConfettiPiece = {
  id: number;
  x: number;
  size: number;
  color: string;
  animationDuration: number;
};

const colors = ['#1EAEDB', '#33C3F0', '#4CD471', '#A5E8B5', '#FFD166', '#FF6B6B'];

const Confetti: React.FC = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Generate 100 confetti pieces
    const newConfetti = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 0.8 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      animationDuration: Math.random() * 3 + 2,
    }));
    setConfetti(newConfetti);

    // Hide confetti after animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute top-0 animate-fall"
          style={{
            left: `${piece.x}%`,
            width: `${piece.size * 16}px`,
            height: `${piece.size * 16}px`,
            backgroundColor: piece.color,
            animationDuration: `${piece.animationDuration}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
            opacity: Math.random() * 0.5 + 0.5,
            zIndex: 9999,
          }}
        />
      ))}
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-100px) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(calc(100vh + 100px)) rotate(720deg);
              opacity: 0;
            }
          }
          .animate-fall {
            animation: fall linear forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Confetti;
