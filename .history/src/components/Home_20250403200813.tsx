import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Youtube, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Background from './Background';

const Home = () => {
  return (
    <Background variant="gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 rounded-full bg-white/10 backdrop-blur-md border-4 border-white/20 flex items-center justify-center overflow-hidden">
              <User size={120} className="text-white/70" />
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Krithika Kannan
            </h1>
            <h2 className="text-xl md:text-2xl text-primary mb-6">
              Aspiring Data Scientist | Marketing Coordinator @ UW CS Club | Event Coordinator @ UW CS Club | Social Media Executive @ EmpowED | Competent Communicator @ Toastmasters | Public Speaker
            </h2>
            <p className="text-gray-200 mb-8">
              Hi, I'm Krithika Kannan - an Undergraduate student at the University of Waterloo.
              I'm doing an Honours in Computer Science with a minor in Entrepreneurship.
            </p>
            <div className="flex gap-4 mb-8">
              <Link
                to="/about"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors flex items-center gap-2"
              >
                About Me <ArrowRight size={20} />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                View Projects
              </Link>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/KrithikaKannan17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/krithikakannan06/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:krithikakannan06@gmail.com"
                className="text-gray-200 hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.youtube.com/@RoboRevolution24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-primary transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </Background>
  );
};

export default Home;
