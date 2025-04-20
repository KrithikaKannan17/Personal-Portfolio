import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BackgroundProps {
  children: ReactNode;
  variant?: 'gradient' | 'dots' | 'waves' | 'mesh';
}

const Background = ({ children, variant = 'gradient' }: BackgroundProps) => {
  const variants = {
    gradient: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"
      />
    ),
    dots: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-indigo-900/30 to-purple-900/30"
      />
    ),
    waves: (
      <div className="fixed inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"
        />
        <motion.div
          animate={{
            x: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"
        />
        <motion.div
          animate={{
            x: ['100%', '0%', '100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"
        />
        <motion.div
          animate={{
            x: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"
        />
      </div>
    ),
    mesh: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/50 via-indigo-900/50 to-purple-900/50 backdrop-blur-sm"
      />
    ),
  };

  return (
    <div className="relative min-h-screen">
      {variants[variant]}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background; 