import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundProps {
  variant?: 'gradient' | 'dots' | 'waves' | 'mesh';
  className?: string;
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ variant = 'gradient', className = '', children }) => {
  const variants = {
    gradient: 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500',
    dots: 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]',
    waves: 'bg-[linear-gradient(45deg,#ff6b6b,#4ecdc4,#45b7d1,#96c93d)]',
    mesh: 'bg-[radial-gradient(at_40%_20%,hsla(28,100%,74%,1)_0px,transparent_50%),radial-gradient(at_80%_0%,hsla(189,100%,56%,1)_0px,transparent_50%),radial-gradient(at_0%_50%,hsla(355,100%,93%,1)_0px,transparent_50%)]'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${variants[variant]} ${className}`}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Background; 