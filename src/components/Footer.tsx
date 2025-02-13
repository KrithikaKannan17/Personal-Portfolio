import React from 'react';
import { Github, Linkedin, Mail, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2025 Krithika Kannan | All Rights Reserved
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/KrithikaKannan17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/krithikakannan06/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:krithikakannan06@gmail.com"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.youtube.com/@RoboRevolution24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;