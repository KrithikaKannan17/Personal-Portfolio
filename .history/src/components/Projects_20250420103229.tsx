import { motion } from 'framer-motion';
import { Github, Youtube } from 'lucide-react';
import Background from './Background';

interface Project {
  title: string;
  description: string;
  link: string;
  type: 'software' | 'robotics';
  videoLink?: string;
  technologies?: string[];
}

const projects: Project[] = [
  {
    title: 'LAW-DER',
    description: 'Architected a full-stack legal assistance platform integrating Cohere LLMs (Embed, Command A, Re-Rank) with ChromaDB-based vector search across four distinct legal corpora—case law, statutes, regulations, and precedents—for accurate, multilingual legal insights.',
    link: 'https://github.com/KrithikaKannan17/Law-Der',
    type: 'software',
    videoLink: 'https://www.youtube.com/watch?v=xWbFIB8Moqk',
    technologies: ['Next.js', 'Flask', 'Cohere', 'Redis', 'AWS', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'DigiTag',
    description: 'Promote safe and authentic buying of luxury products over the internet using blockchain technology to transfer ownerships of the expensive products directly using digital wallet to make process authentic, safe and personalised for you.' ,
    link: 'https://github.com/KrithikaKannan17/DigiTag',
    type: 'software',
    technologies: ['JavaScript', 'React', 'Vite', 'ICP', 'Motoko']
  },
  {
    title: 'LOYALTICS',
    description: 'To predict customer churn in the banking and insurance sectors by analyzing customer behavior and transactional data',
    link: 'https://github.com/KrithikaKannan17/LOYALTICS',
    type: 'software',
    technologies: ['Python', 'React', 'Vite', 'Tailwind CSS', 'Lucide React']
  },
  {
    title: 'GenMate',
    description: 'A web application designed to foster meaningful connections between teenagers and senior citizens enabling skill-sharing, mentorship, and companionship, creating an enriching intergenerational experience.',
    link: 'https://github.com/KrithikaKannan17/GenMate',
    type: 'software',
    technologies: ['Python', 'Lucide React', 'Vite', 'Tailwind CSS', 'ESLint']
  },
  {
    title: 'LOYALTICS',
    description: ' To predict customer churn in the banking and insurance sectors by analyzing customer behavior and transactional data',
    link: 'https://github.com/KrithikaKannan17/LOYALTICS',
    type: 'software',
    technologies: ['Python', 'React', 'Vite', 'Tailwind CSS', 'Lucide React']
  },
  {
    title: 'WatSpot',
    description: 'A tool designed to help UW students find the perfect study space based on their preferences for noise level, aesthetics, and proximity to food.',
    link: 'https://github.com/KrithikaKannan17/WatSpot',
    type: 'software',
    technologies: ['Python', 'React', 'Node.js', 'MySQL', 'HTML/CSS', 'Flask']
  },
  {
    title: 'WellNexus',
    description: 'A health-focused application providing BMI-based assessments and personalized recommendations for diet, exercise, and medical advice.',
    link: 'https://github.com/KrithikaKannan17/WellNexus',
    type: 'software',
    technologies: ['React', 'Python', 'Flask', 'Firebase', 'Node.js']
  },
  {
    title: 'TaskHive',
    description: 'A task management system that allows users to efficiently organize their workload with features for adding, updating, removing, and completing tasks.',
    link: 'https://github.com/KrithikaKannan17/TaskHive',
    type: 'software',
    technologies: ['Python', 'Flask', 'MySQL']
  },
  {
    title: 'QR Code Detection Robot',
    description: 'A robot that scans and processes QR codes using computer vision and machine learning algorithms with Iriun Camera integration.',
    link: '#',
    type: 'robotics',
    videoLink: 'https://www.youtube.com/watch?v=z1SXdaf03F0',
    technologies: ['C', 'OpenCV', 'Machine Learning']
  },
  {
    title: 'Edge Detection Robot',
    description: 'An autonomous robot that navigates and maps its environment using advanced sensors and computer vision for edge detection.',
    link: '#',
    type: 'robotics',
    videoLink: 'https://www.youtube.com/watch?v=gquLT2XvLCA',
    technologies: ['C++', 'Computer Vision', 'Sensors']
  },
  {
    title: 'Line Follower Robot',
    description: 'An autonomous robot capable of following predefined paths using infrared sensors and contrast detection.',
    link: '#',
    type: 'robotics',
    videoLink: 'https://www.youtube.com/watch?v=kFhih0ulOWw',
    technologies: ['Arduino', 'Racket', 'Sensors']
  },
  {
    title: 'Transistor Tap Robot',
    description: 'A robot utilizing transistors as electronic switches for controlling signal flow in circuits, integrating coding with mechanical operations.',
    link: '#',
    type: 'robotics',
    videoLink: 'https://www.youtube.com/watch?v=TZyzCiS3Lq0',
    technologies: ['Electronics', 'C++', 'Hardware']
  }
];

const Projects = () => {
  return (
    <Background variant="dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/20"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.videoLink && (
                    <a
                      href={project.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                    >
                      <Youtube size={20} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Background>
  );
};

export default Projects;