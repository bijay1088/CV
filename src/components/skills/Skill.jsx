import React from 'react'
import './Skill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import skills from '../../assets/skills.json'

const Skill = () => {

  const programmingSkills = skills.programmingSkills;

  const otherSkills = skills.softSkills;

  return (
    <div>
      <div className='skills cusContainer'>
        <div className="skills-list-col">
          <h3> Programming Skills </h3>
          {/* <p></p> */}
          <ul>
            {programmingSkills.map((skill, idx) => (
              <li key={idx}>
                {[...Array(Math.floor(skill.rating))].map((_, idx) => (
                  <FontAwesomeIcon key={idx} icon={faStar} className='me-1' />
                ))}
                {skill.rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalf} className='me-1' />}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="skills-list-col">
          <h3> Soft Skills </h3>
          <ul>
          {otherSkills.map((skill, idx) => (
              <li key={idx}>
                {[...Array(Math.floor(skill.rating))].map((_, idx) => (
                  <FontAwesomeIcon key={idx} icon={faStar} className='me-1' />
                ))}
                {skill.rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalf} className='me-1' />}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Skill
