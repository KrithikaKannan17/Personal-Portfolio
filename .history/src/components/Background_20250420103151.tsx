import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundProps {
  variant?: 'gradient' | 'dots' | 'waves' | 'mesh';
  className?: string;
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ variant = 'gradient', className = '', children }) => {
  const variants = {
    gradient: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900',
    dots: 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]',
    waves: 'relative bg-gradient-to-r from-indigo-900 to-purple-900',
    mesh: 'bg-[radial-gradient(at_40%_20%,hsla(28,100%,74%,1)_0px,transparent_50%),radial-gradient(at_80%_0%,hsla(189,100%,56%,1)_0px,transparent_50%),radial-gradient(at_0%_50%,hsla(355,100%,93%,1)_0px,transparent_50%)]'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen ${variants[variant]} ${className}`}
    >
      {variant === 'waves' ? (
        <>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900" />
            <div className="absolute inset-0 opacity-50">
              <motion.div 
                className="absolute w-[200%] h-[50%] top-0 left-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_48%)]" 
                style={{ backgroundSize: '20px 20px' }}
                animate={{
                  x: ['0%', '-100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute w-[200%] h-[50%] top-[10%] left-[-50%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_48%)]" 
                style={{ backgroundSize: '30px 30px' }}
                animate={{
                  x: ['0%', '-100%'],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute w-[200%] h-[50%] top-[20%] left-[25%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_48%)]" 
                style={{ backgroundSize: '40px 40px' }}
                animate={{
                  x: ['0%', '-100%'],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
        </>
      ) : (
        <motion.div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          animate={{
            background: [
              'rgba(0, 0, 0, 0.2)',
              'rgba(0, 0, 0, 0.3)',
              'rgba(0, 0, 0, 0.2)',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Background; 