import React, { useState, useEffect, useRef } from 'react';
import './Skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import skills from '../../assets/skills.json';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skill = () => {
  const programmingSkills = skills.programmingSkills;
  const otherSkills = skills.softSkills;

  const [isInView, setIsInView] = useState(false);

  const progressBarRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.1, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); 
        }
      });
    }, options);

    progressBarRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const skillRating = (rating) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      if (!isInView) return; 

      const increaseProgress = setInterval(() => {
        setProgress((prev) => {
          if (prev >= rating * 20) {
            clearInterval(increaseProgress);
            return rating * 20;
          }
          return prev + 1;
        });
      }, 15);

      return () => clearInterval(increaseProgress);
    }, [rating, isInView]);

    return progress;
  };

  return (
    <div>
      <div className='skills cusContainer'>
        <div className="skills-list-col">
          <h3> Programming Skills </h3>
          <ul>
            {programmingSkills.map((skill, idx) => (
              <li key={idx}>
                <div className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="progress-bar-container" ref={(el) => (progressBarRef.current[idx] = el)}>
                    <ProgressBar
                      className='custom-progress-bar'
                      label={skill.level}
                      animated
                      now={skillRating(skill.rating)}
                      variant='success'
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="skills-list-col">
          <h3> Soft Skills </h3>
          <ul>
            {otherSkills.map((skill, idx) => (
              <li key={idx}>
                <div className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="progress-bar-container" ref={(el) => (progressBarRef.current[programmingSkills.length + idx] = el)}>
                    <ProgressBar
                      className='custom-progress-bar'
                      label={skill.level}
                      animated
                      now={skillRating(skill.rating)}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skill;
