import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Background from './Background';

const Home = () => {
  return (
    <Background variant="gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="flex justify-center"
          >
            <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-md border-4 border-white/20 flex items-center justify-center overflow-hidden shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Krithika Kannan"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Krithika Kannan
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl text-primary mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Aspiring Data Scientist | Marketing Coordinator @ UW CS Club | Event Coordinator @ UW CS Club | Social Media Executive @ EmpowED | Competent Communicator @ Toastmasters | Public Speaker
            </motion.h2>
            <motion.p 
              className="text-gray-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Hi, I'm Krithika Kannan - an Undergraduate student at the University of Waterloo.
              I'm doing an Honours in Computer Science with a minor in Entrepreneurship.
            </motion.p>

            <motion.div 
              className="flex gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Link
                to="/about"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                About Me <ArrowRight size={20} />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-purple-500 text-purple-500 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a
                href="https://github.com/KrithikaKannan17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/krithikakannan06/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:krithikakannan06@gmail.com"
                className="text-gray-200 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.youtube.com/@RoboRevolution24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Youtube size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Background>
  );
};

export default Home;
