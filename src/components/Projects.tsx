import React, { useState } from 'react';
import Image from 'next/image';
import ProjectCard from './ProjectCard';
import TypeWriter from './animations/TypeWriter';
import { Project } from '../types/project';

const projects: Project[] = [
  {
    title: 'The Adventurer\'s Terminal',
    description: 'An immersive, text-based RPG experience powered by AI that lets you create characters, explore worlds, and forge your own adventure narrative.',
    githubLink: 'https://github.com/MaretRudAul/The_Adventurers_Terminal',
    image: '/images/the_adventurers_terminal.png',
    year: '2025',
    techStack: ['Python', 'OpenAI API', 'Pydantic', 'FAISS', 'sentence transformers', 'JSON']
  },
  {
    title: 'Career Clarifier',
    description: 'An online business that helps college students and graduates identify their best career options.',
    liveLink: 'https://careerclarifier.com',
    image: '/images/careerclarifier.png',
    year: '2020-Present',
    techStack: ['Python', 'Flask', 'SQL', 'Gunicorn', 'Redis', 'WKHTMLToPDF', 'Celery', 'JS', 'Selenium', 'NGINX']
  },
  {
    title: 'A Guide to Time Travel',
    description: 'A website that enables users to allege that they\'ve time traveled to the past with a message from the future.',
    githubLink: 'https://github.com/MaretRudAul/Time_Travelor_Website',
    liveLink: '',
    image: '/src/assets/images/time_travel.png',
    year: '2024',
    techStack: ['Typescript', 'Angular', 'Tailwind', 'Django', 'Redis', 'Docker', 'SQL', 'websockets']
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my projects and skills.',
    githubLink: '',
    liveLink: '',
    year: '2025',
    techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Vite', 'Vercel', 'SVG'],
  },
  {
    title: 'FinishLine',
    description: '•	A website that scrapes anchorlink.vanderbilt.edu daily to compile and present career opportunities for students.',
    githubLink: 'https://github.com/MaretRudAul/FinishLine',
    liveLink: '',
    year: '2024',
    techStack: ['React', 'Flask', 'SQL', 'Selenium']
  },
  {
    title: 'Stellaris Mod',
    description: '',
    githubLink: '',
    liveLink: '',
    year: 'Year',
    techStack: ['Tech', 'Stack']
  },
  {
    title: 'Deep SVDD',
    description: '',
    githubLink: '',
    liveLink: '',
    year: 'Year',
    techStack: ['Tech', 'Stack']
  },
  {
    title: 'Vibe Chess',
    description: '',
    githubLink: '',
    liveLink: '',
    image: '',
    year: 'Year',
    techStack: ['Tech', 'Stack']
  },
  {
    title: 'CS 3891 Final Project',
    description: '',
    githubLink: '',
    liveLink: '',
    year: 'Year',
    techStack: ['Tech', 'Stack']
  },
  {
    title: 'CS 3892 Final Project',
    description: '',
    githubLink: '',
    liveLink: '',
    year: 'Year',
    techStack: ['Tech', 'Stack']
  },
  {
    title: 'Cybersecurity Final Paper',
    description: '',
    githubLink: '',
    liveLink: '',
    year: 'Year',
    techStack: ['Tech', 'Stack']
  }
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