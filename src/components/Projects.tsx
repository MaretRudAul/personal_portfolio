import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import TypeWriter from './animations/TypeWriter';
import { Project } from '../types/project';

const projects: Project[] = [
  {
    title: 'The Adventurer\'s Terminal',
    description: 'An immersive, text-based RPG experience powered by AI that lets you create characters, explore worlds, and forge your own adventure narrative.',
    githubLink: 'https://github.com/MaretRudAul/The_Adventurers_Terminal',
    image: '/src/assets/images/the_adventurers_terminal.png'
  },
  {
    title: 'Career Clarifier',
    description: 'An online business that helps college students and graduates identify their best career options.',
    liveLink: 'https://careerclarifier.com',
    image: '/src/assets/images/careerclarifier.png'
  },
  {
    title: 'Stellaris Mod',
    description: '',
    githubLink: '',
    liveLink: ''
  },
  {
    title: 'A Guide to Time Travel',
    description: '',
    githubLink: '',
    liveLink: ''
  },
  {
    title: 'Deep SVDD',
    description: '',
    githubLink: '',
    liveLink: ''
  },
  {
    title: 'Vibe Chess',
    description: '',
    githubLink: '',
    liveLink: '',
    image: ''
  },
  {
    title: 'CS 3891 Final Project',
    description: '',
    githubLink: '',
    liveLink: ''
  },
  {
    title: 'CS 3892 Final Project',
    description: '',
    githubLink: '',
    liveLink: ''
  },
  {
    title: 'Cybersecurity Final Paper',
    description: '',
    githubLink: '',
    liveLink: ''
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