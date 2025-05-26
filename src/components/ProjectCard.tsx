import React from 'react';
import Image from 'next/image';
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
    // Wrapper div that contains the card and the year badge
    <div className="relative h-full">
      {/* Year badge - positioned relative to wrapper instead of card */}
      {year && (
        <div className="absolute -top-3 -right-3 bg-highlight text-white text-xs font-bold rounded-full px-2 py-1 z-30">
          {year}
        </div>
      )}
    
      {/* Card container */}
      <div 
        className="border rounded-lg p-4 flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white relative z-10 overflow-hidden h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {image && (
          <>
            {/* Single image as background with layered opacity effect */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority
              />
              {/* Overlay layer: transparent at top, white elsewhere */}
              <div 
                className="absolute inset-0 z-10" 
                style={{ 
                  background: 'linear-gradient(to bottom, transparent 120px, rgba(255,255,255,0.9) 120px)' 
                }}
              />
            </div>
            
            {/* Spacer for the top image area (no actual image) */}
            <div className="w-full h-24 mb-2 relative z-10 flex-shrink-0" />
          </>
        )}
        
        {/* Content - ensure it's above the background image */}
        <div className="relative z-10 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm mb-3 line-clamp-3">{description}</p>
          
          {/* Tech stack section */}
          {techStack && techStack.length > 0 && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100/80 backdrop-blur-sm text-gray-800 text-xs px-1.5 py-0.5 rounded"
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
                Live Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;