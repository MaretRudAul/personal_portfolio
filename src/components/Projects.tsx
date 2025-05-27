import React, { useState } from 'react';
import Image from 'next/image';
import ProjectCard from './ProjectCard';
import TypeWriter from './animations/TypeWriter';
import { Project } from '../types/project';

const projects: Project[] = [
  // Might be a good idea to add a "category" to these projects. Like web dev, machine learning, autonomous vehicles, cybersecurity, software dev, etc.
  {
    title: 'Career Clarifier',
    description: 'An online business that helps college students and graduates identify their best career options.',
    liveLink: 'https://careerclarifier.com',
    image: '/images/careerclarifier.png',
    year: '2020-Present',
    techStack: ['Angular', 'Flask', 'SQL', 'Gunicorn', 'Redis', 'WKHTMLToPDF', 'Celery', 'Javascript', 'Selenium', 'NGINX']
  },
  {
    title: 'Antichess Reinforcement Learning Engine',
    description: 'Created an RL engine for the chess variant Antichess using Proximal Policy Optimization. Working on training, improvements, optimizations, and a playable UI.',
    githubLink: 'https://github.com/MaretRudAul/antichess_engine',
    liveLink: '',
    image: '/images/antichess.png',
    year: '2025, in progress',
    techStack: ['PyTorch', 'Reinforcement Learning (Stable-Baselines3)', 'Gymnasium', 'Convolutional Neural Networks', 'Proximal Policy Optimization', 'Python', ]
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my projects and skills.',
    githubLink: 'https://github.com/MaretRudAul/personal_portfolio',
    liveLink: 'https://personal-portfolio-theta-jet-26.vercel.app/',
    image: '/images/portfolio_website.png',
    year: '2025, in progress',
    techStack: ['Next.js', 'React', 'Tailwind', 'TypeScript', 'Vite', 'Vercel', 'SVG'],
  },
  {
    title: 'Autonomous Vehicle Simulation',
    description: 'Simulated an autonomous vehicle using Dijkstra\'s for routing, a modified pure pursuit controller, an EKF with GPU + IMU data for localization, and camera frame bounding boxes + EKF for perception. 2nd place in class competition.',
    githubLink: '',
    liveLink: 'https://www.youtube.com/watch?v=31X2WBa5Lyo',
    image: '/images/cs3892.png',
    year: '2025',
    techStack: ['Julia']
  },
  // {
  //   title: 'SoK: Vulnerabilities in In-Vehicle Communication Protocols',
  //   description: 'Wrote an unpublished SoK paper on vulnerabilities and defenses in in-vehicle communication protocols.',
  //   githubLink: '',
  //   liveLink: '', // insert link to paper publicly available on this website. 
  //   year: '2025',
  //   techStack: []
  // }
  {
    title: 'A Guide to Time Travel',
    description: 'A website that enables users to allege that they\'ve time traveled to the past with a message from the future.',
    githubLink: 'https://github.com/MaretRudAul/Time_Travelor_Website',
    liveLink: '',
    image: '/images/a_guide_to_time_travel.png',
    year: '2024',
    techStack: ['Angular', 'Tailwind', 'Typescript', 'Django', 'Redis', 'Docker', 'SQL', 'websockets']
  },
  {
    title: 'FinishLine',
    description: 'A website that scrapes anchorlink.vanderbilt.edu daily to compile and present career opportunities for students.',
    githubLink: 'https://github.com/MaretRudAul/FinishLine',
    liveLink: '',
    year: '2024',
    techStack: ['React', 'Flask', 'SQL', 'Selenium', 'Python', 'Javascript']
  },
  {
    title: 'The Adventurer\'s Terminal',
    description: 'An immersive, text-based RPG experience powered by AI that lets you create characters, explore worlds, and forge your own adventure narrative.',
    githubLink: 'https://github.com/MaretRudAul/The_Adventurers_Terminal',
    image: '/images/the_adventurers_terminal.png',
    year: '2025',
    techStack: ['OpenAI API', 'Python', 'Pydantic', 'FAISS', 'sentence transformers', 'JSON']
  },
  {
    title: 'I am the Senate!',
    description: 'A Stellaris mod that enables players to take control of their interplanetary federation, Star Wars style. 5 star rating and ~5,000 users at its peak.',
    githubLink: 'https://github.com/MaretRudAul/i_am_the_senate/tree/main',
    liveLink: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2087122974',
    image: '/images/i_am_the_senate.jpg',
    year: '2020',
    techStack: ['Paradox Interactive custom scripting language']
  },
  // {
  //   title: 'Deep SVDD',
  //   description: '',
  //   githubLink: '',
  //   liveLink: '',
  //   year: 'Year',
  //   techStack: ['Tech', 'Stack']
  // },
  // {
  //   title: 'Vibe Chess',
  //   description: '',
  //   githubLink: '',
  //   liveLink: '',
  //   image: '',
  //   year: 'Year',
  //   techStack: ['Tech', 'Stack']
  // },
  // {
  //   title: 'CS 3891 Final Project',
  //   description: '',
  //   githubLink: '',
  //   liveLink: '',
  //   year: 'Year',
  //   techStack: ['Tech', 'Stack']
  // },
];

const Projects: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen">
      {backgroundImage && (
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10 transition-all duration-500 ease-in-out"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            zIndex: 0
          }}
        />
      )}
      
      <div className="relative z-10">
        <div className="mb-6">
          <TypeWriter 
            text="My Projects" 
            className="text-3xl font-semibold"
            speed={100}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map(project => (
            <ProjectCard 
              key={project.title} 
              {...project} 
              setBackgroundImage={setBackgroundImage} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;