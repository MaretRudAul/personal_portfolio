// src/components/animations/TypeWriter.tsx
import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  text, 
  speed = 100, 
  delay = 0,
  className = ''
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        startTyping();
      }, delay);
      
      return () => clearTimeout(delayTimer);
    } else {
      startTyping();
    }
  }, []);

  const startTyping = () => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        // Set typing complete to true - this will hide the cursor
        setIsTypingComplete(true);
      }
    }, speed);
    
    return () => clearInterval(typingInterval);
  };

  return (
    <span className={className}>
      {displayedText}
      {/* Only show cursor when typing is not complete */}
      {!isTypingComplete && (
        <span className="animate-blink">|</span>
      )}
    </span>
  );
};

export default TypeWriter;