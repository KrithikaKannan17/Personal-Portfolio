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
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg border border-white/20"
        >
          <div className="flex items-center justify-center mb-8">
            <FileText className="w-12 h-12 text-primary" />
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Download My Resume</h2>
            <p className="text-gray-200 mb-6">
              Click the button below to download my resume in PDF format.
            </p>
            <a
              href="https://drive.google.com/drive/my-drive?q=after:2025-01-11%20parent:0AM6YTaopybFSUk9PVA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white mb-4">Skills & Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Data Analysis',
                'Machine Learning',
                'Python',
                'JavaScript',
                'React',
                'TypeScript',
                'SQL',
                'AWS',
                'Git',
                'UI/UX Design',
                'Public Speaking',
                'Project Management'
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-lg text-center"
                >
                  <span className="text-gray-200">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Background>
  );
};

export default Resume; 