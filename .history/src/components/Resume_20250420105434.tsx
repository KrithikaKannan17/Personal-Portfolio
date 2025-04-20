import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import Background from './Background';
import { useState } from 'react';

const Resume = () => {
  const [pdfError, setPdfError] = useState(false);
  const resumePath = `${import.meta.env.BASE_URL}resume.pdf`;

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
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          
          <motion.a
            href={resumePath}
            download
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20"
        >
          <div className="flex justify-center">
            {pdfError ? (
              <div className="text-white text-center">
                <p className="mb-4">Unable to display PDF. Please use the download button above to view the resume.</p>
              </div>
            ) : (
              <iframe
                src={resumePath}
                className="w-full h-[800px] rounded-lg"
                title="Resume"
                onError={() => setPdfError(true)}
              />
            )}
          </div>
        </motion.div>
      </div>
    </Background>
  );
};

export default Resume; 