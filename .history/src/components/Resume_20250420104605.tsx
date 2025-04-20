import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import Background from './Background';

const Resume = () => {
  return (
    <Background variant="gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Resume</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20"
        >
          <div className="flex justify-center">
            <iframe
              src="/resume.pdf"
              className="w-full h-[800px] rounded-lg"
              title="Resume"
            />
          </div>
        </motion.div>
      </div>
    </Background>
  );
};

export default Resume; 