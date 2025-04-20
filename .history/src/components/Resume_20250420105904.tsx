import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Background from './Background';

const Resume = () => {
  return (
    <Background variant="gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Resume</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />

          {/* Download Button */}
          <motion.a
            href="/resume.pdf"
            download="Krithika_Kannan_Resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Embedded PDF Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20"
        >
          <object
            data="/resume.pdf"
            type="application/pdf"
            width="100%"
            height="800px"
            className="rounded-lg"
          >
            <p className="text-white text-center">
              Unable to display PDF file.
              <a
                href="/resume.pdf"
                download="Krithika_Kannan_Resume.pdf"
                className="text-purple-400 hover:text-purple-300 ml-2 underline"
              >
                Download Instead
              </a>
            </p>
          </object>
        </motion.div>
      </div>
    </Background>
  );
};

export default Resume;
