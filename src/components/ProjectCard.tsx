import React from 'react';
import { Project } from '../types/project';

interface ProjectCardProps extends Project {
  setBackgroundImage: (image: string | null) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  githubLink, 
  liveLink, 
  image, 
  year,
  techStack,
  setBackgroundImage 
}) => {
  const handleMouseEnter = () => {
    if (image) setBackgroundImage(image);
  };
  
  const handleMouseLeave = () => {
    setBackgroundImage(null);
  };

  return (
    <div 
      className="border rounded-lg p-4 h-auto flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white relative z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Year badge */}
      {year && (
        <div className="absolute -top-3 -right-3 bg-highlight text-white text-xs font-bold rounded-full px-2 py-1 z-10">
          {year}
        </div>
      )}
      
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-24 object-cover rounded-md mb-2"
        />
      )}
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm mb-3 line-clamp-3">{description}</p>
      
      {/* Tech stack section */}
      {techStack && techStack.length > 0 && (
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-800 text-xs px-1.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-auto flex flex-wrap gap-2">
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-700 transition"
          >
            GitHub
          </a>
        )}
        {liveLink && (
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs bg-accent text-white px-2 py-1 rounded hover:bg-accent/90 transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;