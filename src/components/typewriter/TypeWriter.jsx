import React, { useState, useEffect } from 'react';
import './TypeWriter.css';

const Typewriter = ({ text, speed = 50 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const words = text.split(' ');
    const lastWord = words[words.length - 1];
  
    useEffect(() => {
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(prevText => prevText + text.charAt(currentIndex));
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
  
      return () => {
        clearInterval(typingInterval);
      };
    }, [text, speed, currentIndex]);
  
    return (
      <span>
        {displayText}
        <span className="blink">{lastWord}</span>
      </span>
    );
  };
  
  export default Typewriter;