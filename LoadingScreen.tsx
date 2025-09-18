import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

// Bear mascot image - Custom bear from Imgur
const bearImage = "https://i.imgur.com/DuvwmDi.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress over 7 seconds with fallback timeout
    const startTime = Date.now();
    const maxDuration = 7500; // 7.5 seconds max
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const targetProgress = Math.min((elapsed / 7000) * 100, 100);
      
      setProgress(prev => {
        const nextProgress = Math.max(prev + 1, Math.floor(targetProgress));
        
        if (nextProgress >= 100 || elapsed >= maxDuration) {
          clearInterval(interval);
          // Small delay before calling onComplete for smoother transition
          setTimeout(onComplete, 500);
          return 100;
        }
        return nextProgress;
      });
    }, 70);

    // Failsafe timeout to prevent infinite loading
    const failsafe = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(onComplete, 500);
    }, maxDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(failsafe);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ 
        backgroundColor: '#191970',
        opacity: Math.max(0.98 - (progress * 0.003), 0.68) // Very slowly fade from 98% to 68% opacity
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Pattern - Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 text-center">
        {/* Bear Logo Animation */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        >
          <motion.img 
            src={bearImage} 
            alt="Bear mascot"
            className="w-20 h-20"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl lg:text-4xl text-white mb-2 tracking-tight">
            Welcome
          </h1>
          <p className="text-gray-300 text-lg">
            Loading portfolio...
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="w-64 mx-auto"
        >
          <div className="relative">
            {/* Progress Bar Background */}
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              {/* Progress Bar Fill */}
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            
            {/* Glowing Effect */}
            <motion.div
              className="absolute inset-0 h-2 bg-gradient-to-r from-blue-400/50 to-blue-600/50 rounded-full blur-sm"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          
          {/* Progress Percentage */}
          <motion.div
            className="mt-4 text-gray-400 text-sm tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            {progress}%
          </motion.div>
        </motion.div>


      </div>
    </motion.div>
  );
}