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
      className="border rounded-lg p-4 h-64 flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white relative z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-24 object-cover rounded-md mb-2"
        />
      )}
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm mb-auto line-clamp-3">{description}</p>
      
      <div className="mt-2 flex flex-wrap gap-2">
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