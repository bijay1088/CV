import React from 'react'
import './Skill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const Skill = () => {

  const programmingSkills = [
    { name: 'C#', rating: 4 },
    { name: 'JavaScript', rating: 4 },
    { name: 'Python', rating: 4 },
    { name: 'Java', rating: 3.5 },
    { name: 'SQL', rating: 4.5 },
    { name: 'HTML', rating: 4 },
    { name: 'CSS', rating: 3 },
    { name: 'XML', rating: 4 }
  ]

  const otherSkills = [
    { name: 'Multilanguage (English, Nepali, Hindi)', rating: 4.5 },
    { name: 'Time Management', rating: 4.5 },
    { name: 'Hard Working', rating: 5 },
    { name: 'Team Player', rating: 5 },
    { name: 'Technical Knowledge', rating: 4.5 },
    { name: 'Hardware', rating: 4.5 }
  ]

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
          <h3> Other Skills </h3>
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
