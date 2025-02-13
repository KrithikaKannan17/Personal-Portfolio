import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Mic } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Hey! My name is Krithika Kannan, and I am a first-year Computer Science student at the University of Waterloo. 
              I'm passionate about software development, Data Science, AI, and robotics.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Right now, I'm working on full-stack development, algorithm design, and automation, 
              while also exploring machine learning, embedded systems, data science and cybersecurity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I've built projects in Python, Racket, C, C++, HTML/CSS and JS including QR code detection robots, 
              edge detection systems, and AI-powered automation tools.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm also actively involved in hackathons, coding competitions, and open-source development. 
              I am currently seeking Fall 2025 internships in software engineering, data science, AI, or robotics—let's connect!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Code className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p className="text-gray-600">Full-stack development and algorithm design</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Cpu className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Robotics</h3>
              <p className="text-gray-600">Building and programming autonomous systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">LANGUAGES KNOWN</h3>
              <p className="text-gray-600">C, C++, Python, MySQL, JavaScript, HTML/CSS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Mic className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Developer Tools</h3>
              <p className="text-gray-600">Git, VS Code, Visual Studio, QBasic, PyCharm</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;