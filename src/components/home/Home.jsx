import React from 'react'
import './Home.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Typewriter from '../typewriter/TypeWriter.jsx';
import { counter } from '@fortawesome/fontawesome-svg-core';

const Home = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);

  };
  return (
    <div className='home cusContainer'>
        <div className="home-text">
            <h1 onClick={handleClick}><Typewriter text="Welcome to my journey ." speed={100}/></h1>
            {count == 10 ? <h1><Typewriter text={"Hi, I am Shanyra and I want to be a programmer ."}/></h1> : null} {/* Easter egg for my cousin */}
            <p>I am a beginner programmer who likes technologies, both hardware and software, and is passionate in the field.
            I am good at thinking logically which helps me solve my problems and work on backend efficiently. <br/>
            I am a quick learner and can manage my time properly which helps me to work on multiple projects at the same time and meet deadlines. <br/>
            I am always looking for every opportunity I can get to improve my skills.</p>
            {/* <button className='cusBtn'>Read More</button> */}
            
        </div>
    </div>
  )
}

export default Home
