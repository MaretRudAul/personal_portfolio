import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  text, 
  className = '', 
  speed = 75,
  delay = 0 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setStartAnimation(true);
    }, delay);
    
    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (!startAnimation) return;
    
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(current => current + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, startAnimation]);

  return <span className={className}>{displayText}<span className="animate-pulse">|</span></span>;
};

export default TypeWriter;