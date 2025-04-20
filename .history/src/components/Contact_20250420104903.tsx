import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Youtube } from 'lucide-react';
import Background from './Background';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:krithikakannan06@gmail.com',
      label: 'krithikakannan06@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/krithikakannan06/',
      label: 'linkedin.com/in/krithikakannan06'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/KrithikaKannan17',
      label: 'github.com/KrithikaKannan17'
    },
    {
      name: 'Devpost',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/KrithikaKannan17',
      label: 'github.com/KrithikaKannan17'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-6 h-6" />,
      href: 'https://devpost.com/krithikakannan06?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav',
      label: 'DevPost'
    }
  ];

  return (
    <Background variant="gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20"
        >
          <div className="grid gap-8">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-200 hover:text-purple-400 transition-colors p-4 rounded-lg hover:bg-white/5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.icon}
                <div>
                  <h2 className="text-lg font-semibold">{link.name}</h2>
                  <p className="text-gray-300">{link.label}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </Background>
  );
};

export default Contact;