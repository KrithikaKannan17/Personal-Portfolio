import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Cloud, Database, Palette, Terminal } from 'lucide-react';
import Background from './Background';

const About = () => {
  const techStack = {
    languages: ['Python', 'Java', 'TypeScript', 'JavaScript', 'HTML/CSS', 'SQL (Postgres)', 'C/C++'],
    frameworks: ['React', 'React Native', 'Node.js', 'Flask', 'FastAPI'],
    developerTools: ['Git', 'VS Code', 'Visual Studio', 'PyCharm', 'Open Source'],
    libraries: ['pandas', 'NumPy', 'Matplotlib', 'TensorFlow', 'PyTorch'],
    cloudTechnologies: ['AWS', 'Redis', 'Google Cloud', 'Firebase', 'Blockchain'],
    ai: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
    designTools: ['Canva', 'Figma']
  };

  const icons = {
    languages: <Code className="w-6 h-6 text-purple-400" />,
    frameworks: <Cpu className="w-6 h-6 text-purple-400" />,
    developerTools: <Terminal className="w-6 h-6 text-purple-400" />,
    libraries: <Database className="w-6 h-6 text-purple-400" />,
    cloudTechnologies: <Cloud className="w-6 h-6 text-purple-400" />,
    ai: <Cpu className="w-6 h-6 text-purple-400" />,
    designTools: <Palette className="w-6 h-6 text-purple-400" />
  };

  return (
    <Background variant="gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Who Am I?</h2>
            <p className="text-gray-200 mb-4">
              I'm a passionate Computer Science student at the University of Waterloo with a keen interest in Data Science and Artificial Intelligence. My journey in technology is driven by a desire to create innovative solutions that make a real impact.
            </p>
            <p className="text-gray-200 mb-4">
              With a strong foundation in both technical and soft skills, I excel at bridging the gap between complex technical concepts and practical applications. My experience in various leadership roles has honed my ability to communicate effectively and work collaboratively in diverse teams.
            </p>
            <p className="text-gray-200 mb-4">
              When I'm not coding, you can find me engaging in public speaking, mentoring others, or exploring new technologies and their applications in solving real-world problems.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4 mt-8">What Are My Hobbies?</h2>
            <p className="text-gray-200 mb-4">
              I'm a public speaking enthusiast through and through. As a 3x speech champion, President of Gavels Club, and speaker at international events like the Qatar Debate, I've used my voice to tell stories, spark thought and inspire change.
            </p>
            <p className="text-gray-200 mb-4">
              Beyond the stage and the screen, I love event planning, debating, writing, and occasionally diving into a good book or spontaneous dance break. I've organized large-scale cultural programs, tech fests, and even podcast episodes through STEM NET, an initiative I help lead to support students in their academic journey.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4 mt-8">What Do I Do in My Leisure Time?</h2>
            <p className="text-gray-200 mb-4">
              When I'm not buried in code or prepping for a presentation, you'll probably find me:
            </p>
            <ul className="list-disc list-inside text-gray-200 mb-4 ml-4">
              <li>Journaling or writing reflective pieces</li>
              <li>Catching up on public speaking videos for inspiration</li>
              <li>Exploring new music (everything from lo-fi to Indian classical)</li>
              <li>Volunteering or mentoring other students</li>
              <li>Daydreaming about my next travel adventure — preferably somewhere scenic with good coffee!</li>
            </ul>
            <p className="text-gray-200 mb-4">
              I value deep conversations, quiet moments, and finding joy in the little things.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4 mt-8">What Are My Aspirations?</h2>
            <p className="text-gray-200 mb-4">
              I aspire to be more than just a data scientist — I want to be a builder of bridges: between people, perspectives, and possibilities. My dream is to work at the forefront of tech, where I can combine my passion for data science with my drive to make a meaningful impact on society.
            </p>
          </motion.div>

          {/* Right Side - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Tech Stack</h2>
            <div className="space-y-6">
              {Object.entries(techStack).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white/5 rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {icons[category as keyof typeof icons]}
                    <h3 className="text-lg font-medium text-white capitalize">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, itemIndex) => (
                      <motion.span
                        key={itemIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + itemIndex * 0.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-gray-200 rounded-full text-sm border border-purple-500/30 hover:border-purple-500/50 transition-colors"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Background>
  );
};

export default About;