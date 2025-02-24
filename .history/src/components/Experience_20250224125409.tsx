import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Calendar, ChevronRight } from 'lucide-react';

interface Experience {
  title: string;
  organization: string;
  period?: string;
  description: string[];
  type: 'work' | 'club';
}

const experiences: Experience[] = [
  {
    title: 'Social Media & Digital Content Coordinator',
    organization: 'University of Waterloo Computer Science Club',
    description: [
      'Spearheaded marketing efforts for club events, leveraging digital and on-campus promotional strategies.',
      'Designed and executed targeted advertising campaigns to maximize event participation.',
      'Collaborated with fellow coordinators to ensure effective outreach and engagement.'
    ],
    type: 'work'
  },
  {
    title: 'Marketing Coordinator',
    organization: 'University of Waterloo Computer Science Club',
    description: [
      'Spearheaded marketing efforts for club events, leveraging digital and on-campus promotional strategies.',
      'Designed and executed targeted advertising campaigns to maximize event participation.',
      'Collaborated with fellow coordinators to ensure effective outreach and engagement.'
    ],
    type: 'work'
  },
  {
    title: 'Event Coordinator',
    organization: 'University of Waterloo Computer Science Club',
    description: [
      'Organized and facilitated various club events such as Industry Talk, Co-op Panel, Prof Talks, Trivia Event and Term Events.',
      'Managed logistics, event setup, and coordination with speakers and attendees.',
      'Developed creative event ideas to foster community within the CS student body.'
    ],
    type: 'work'
  },
  {
    title: 'Teaching Assistant',
    organization: 'Devamatha CMI Public School, Thrissur',
    description: [
      'Served as a Teaching Assistant for Computer Science professor of Grades 9 and 10.',
      'Delivered engaging lessons in Python and MySQL to build strong programming foundations.',
      'Provided hands-on guidance and mentoring to students in their learning journey by creating tests.'
    ],
    type: 'work'
  },
  {
    title: 'President',
    organization: 'Zenith Toastmasters Club',
    description: [
      'Oversaw speech contests, club meetings, and leadership workshops.',
      'Provided mentorship to enhance members\' public speaking and leadership skills.',
      'Promoted collaborative and competitive spirit within the club.'
    ],
    type: 'work'
  },
  {
    title: 'Vice President',
    organization: 'STEM NET',
    description: [
      'Led STEM education initiatives including webinars, podcasts, and newsletters.',
      'Managed strategic planning and team coordination for impactful educational experiences.',
      'Mentored aspiring STEM students in their academic and career journeys.'
    ],
    type: 'work'
  },
];

const clubs = [
  {
    title: 'Core Member',
    organization: 'Wat.AI Club',
    description: [
      'Contributed to AI-focused research and development projects, collaborating with peers to explore applications of OpenAI.',
      'Engaged in brainstorming sessions, coding challenges, and real-world AI applications.',
      'Worked on projects that integrate machine learning and artificial intelligence principles.'
    ],
    type: 'club'
  },
  {
    title: 'Logistics Volunteer',
    organization: 'University of Waterloo Women in Computer Science Club',
    description: [
      'Assisted in organizing Technovation workshops for women in tech by mentorship, assisted participants with their projects, and supported workshop facilitation.',
      'Supported TechNova events by assisting in organizing panel discussions, networking sessions, and hands-on technical workshops, ensuring a welcoming and inclusive environment.'
    ],
    type: 'club'
  },
  {
    title: 'Debater',
    organization: 'University of Waterloo Debate Club',
    description: [
      'Engaged in competitive debating and critical thinking exercises.',
      'Participated in intercollegiate debates on diverse topics.'
    ],
    type: 'club'
  },
  {
    title: 'Volunteer',
    organization: 'DeapQatar Conservation',
    description: [
      'Leading the fight against plastic pollution, raising environmental awareness in Qatar.',
      '40 kilos of trash removed from nature. 1 million smiles!'
    ],
    type: 'club'
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Experience</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Work Experience</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="timeline-item"
                >
                  <div className="timeline-dot" />
                  <div className="bg-white p-6 rounded-lg shadow-md ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-primary font-medium mb-2">{exp.organization}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Clubs Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-8">
              <Users className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Clubs & Activities</h2>
            </div>
            <div className="space-y-8">
              {clubs.map((club, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="timeline-item"
                >
                  <div className="timeline-dot" />
                  <div className="bg-white p-6 rounded-lg shadow-md ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{club.title}</h3>
                    <p className="text-primary font-medium mb-2">{club.organization}</p>
                    <ul className="space-y-2">
                      {club.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;