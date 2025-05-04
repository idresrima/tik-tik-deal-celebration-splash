
import { useEffect, useState } from 'react';
import Confetti from '../components/Confetti';
import Logo from '../components/Logo';
import ComingSoon from '../components/ComingSoon';
import { PartyPopper } from 'lucide-react';

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Delay confetti slightly for better user experience
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-6">
      {showConfetti && <Confetti />}
      
      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="mb-8 animate-float">
          <PartyPopper size={48} className="text-tikBlue" />
        </div>
        
        <div className="space-y-8 text-center">
          <Logo />
          <ComingSoon />
        </div>
        
        <div className="mt-16 md:mt-20 flex flex-col items-center">
          <div className="flex space-x-4 mb-8">
            <div className="h-3 w-3 rounded-full bg-tikBlue animate-pulse"></div>
            <div className="h-3 w-3 rounded-full bg-tikGreen animate-pulse animate-delay-100"></div>
            <div className="h-3 w-3 rounded-full bg-tikBlue-light animate-pulse animate-delay-200"></div>
          </div>
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tik Tik Deal. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
