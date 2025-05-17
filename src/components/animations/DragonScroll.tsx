import React, { useEffect, useRef, useState } from 'react';
import { dragonHeadPath } from './svg/dragonHeadPath';

const DragonScroll: React.FC = () => {
  const dragonRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [dragonPath, setDragonPath] = useState("");
  const [pathLength, setPathLength] = useState(0);
  const [dragonHeadPosition, setDragonHeadPosition] = useState({ x: 0, y: 0 });
  const [dragonRotation, setDragonRotation] = useState(0);
  
  // Fixed parameters
  const rightOffset = 60;
  const startY = 100;
  
  // Track scroll position with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;
          setScrollPercentage(Math.min(currentScroll / totalHeight, 1));
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Generate dragon path
  useEffect(() => {
    if (!containerRef.current) return;
    
    const generatePath = () => {
      // Calculate the available height (viewport height minus starting position)
      const viewportHeight = window.innerHeight;
      const maxExtent = viewportHeight - startY - 100; // Leave 100px from bottom
      
      const startX = window.innerWidth - rightOffset;
      const extendedLength = maxExtent * scrollPercentage;
      
      // Path starting point
      let path = `M ${startX} ${startY}`;
      
      // Default end position (at start, no extension)
      let endX = startX;
      let endY = startY;
      let lastX = startX;
      let lastY = startY;
      let secondLastX = startX;
      let secondLastY = startY;
      
      if (scrollPercentage > 0.01) {
        const segmentCount = 40;
        const segmentHeight = extendedLength / segmentCount;
        const wiggleAmplitude = 25;
        
        for (let i = 1; i <= segmentCount; i++) {
          const progress = i / segmentCount;
          const y = startY + (progress * extendedLength);
          
          // Consistent wiggles
          const wiggleFrequency = 0.4;
          const wiggleX = startX + Math.sin(i * wiggleFrequency) * wiggleAmplitude;
          
          // Save the second last point for calculating direction
          if (i === segmentCount - 1) {
            secondLastX = wiggleX;
            secondLastY = y;
          }
          
          path += ` Q ${startX} ${y - segmentHeight/2}, ${wiggleX} ${y}`;
          
          // Save the last point as the end position
          if (i === segmentCount) {
            lastX = wiggleX;
            lastY = y;
            endX = wiggleX;
            endY = y;
          }
        }
        
        // Calculate rotation angle based on last two points
        const dx = lastX - secondLastX;
        const dy = lastY - secondLastY;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90; // Add 90 degrees to align dragon head
        setDragonRotation(angle);
      }
      
      return { path, endX, endY };
    };

    const { path, endX, endY } = generatePath();
    setDragonPath(path);
    
    // Fix positioning issue by using exact position with no arbitrary offsets
    setDragonHeadPosition({ 
      x: endX,
      y: endY
    });
  }, [scrollPercentage, rightOffset]);
  
  // Update path length after path generation
  useEffect(() => {
    if (dragonRef.current) {
      try {
        const length = dragonRef.current.getTotalLength();
        setPathLength(length);
      } catch (error) {
        setPathLength(2000);
      }
    }
  }, [dragonPath]);
  
  // Calculate dragon progress
  const dragonProgress = {
    strokeDasharray: `${pathLength} ${pathLength}`,
    strokeDashoffset: pathLength * (1 - scrollPercentage)
  };
  
  return (
    <>
      {/* Dragon body container */}
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50">
        <svg 
          className="w-full h-full" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="dragonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
            
            <filter id="dragon-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.3)" />
            </filter>
          </defs>

          {/* Dragon Body */}
          <path
            ref={dragonRef}
            d={dragonPath}
            className="dragon-body"
            fill="none"
            stroke="url(#dragonGradient)"
            strokeWidth="14"
            strokeLinecap="round"
            style={{
              ...dragonProgress,
              transition: "stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
            filter="url(#dragon-shadow)"
          />
          
          {/* Dragon Scales */}
          <path
            d={dragonPath}
            className="dragon-scales"
            fill="none"
            stroke="#c2410c"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="3 12"
            style={{
              ...dragonProgress,
              transition: "stroke-dashoffset 0.4s cubic-bezier(0.4, 0, 0.2, 1)" 
            }}
          />
        </svg>
      </div>
      
      {/* Completely separate head element positioned absolutely */}
      {scrollPercentage > 0.01 && (
        <div 
          className="fixed pointer-events-none z-50 dragon-head-container"
          style={{
            position: 'fixed',
            left: `${dragonHeadPosition.x}px`,
            top: `${dragonHeadPosition.y}px`,
            width: "200px",
            height: "200px",
            transform: `translate(-50%, -50%) rotate(${dragonRotation}deg)`, // Center the head at exact end point
            transformOrigin: 'center',
            willChange: 'transform, left, top'
          }}
        >
          {/* Custom SVG Dragon Head with adapted viewBox */}
          <svg 
            width="160" 
            height="160" 
            viewBox="0 0 1080 1080"
            className="dragon-head"
            style={{
              filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.3))",
              transform: "scale(0.18)",
              transformOrigin: "center"
            }}
          >
            {/* Tribal Dragon Head SVG */}
            <path
              className="dragon-head-path"
              style={{ fill: "#ea580c" }}
              d={dragonHeadPath}
            />
          </svg>
        </div>
      )}

      {/* Add extra whitespace to ensure scroll area */}
      <div className="w-full" style={{ height: "3000px" }}></div>
      
      <style>{`
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        
        .dragon-body {
          filter: drop-shadow(0 0 3px rgba(245, 158, 11, 0.2));
        }
        
        .dragon-head-container {
          transition: left 0.15s cubic-bezier(0.4, 0, 0.2, 1), 
                      top 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .dragon-head {
          transform-origin: center;
          animation: float 3s ease-in-out infinite;
          will-change: transform;
        }
        
        .dragon-head-path {
          transform-box: fill-box;
          transform-origin: center;
        }
        
        @keyframes float {
          0%, 100% { transform: scale(0.18) translateY(0); }
          50% { transform: scale(0.18) translateY(-20px); }
        }
      `}</style>
    </>
  );
};

export default DragonScroll;