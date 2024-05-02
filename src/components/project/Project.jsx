import React, {useState} from 'react'
import './Project.css'
import Warframe from '../../assets/warframe.png';
import Gandaki from '../../assets/gandaki.png';
import Discord from '../../assets/discord.png';
import Car from '../../assets/carRental.png';
import Venue from '../../assets/merovenue.png';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import { FaLanguage } from 'react-icons/fa';


const Project = () => {

  const projects = [
    { image: Warframe,
      name: 'Warframe Tracker',
      description: 'A website that tracks the current status of the game Warframe. It shows in game cycles, events, and such through api calls so that players do not have to open game.',
      link: 'https://bijay1088.github.io/MyFrame_Webassembly/',
      language: 'Blazor .Net'
    },
    {
      image: Gandaki,
      name: 'Gandaki Studio Store Page',
      description: 'A website for a local company. It is a simple website that shows the services provided by the company.',
      link: 'https://bijay1088.github.io/Gandaki-Studio/',
      language: 'React'
    },
    {
      image: Discord,
      name: 'Discord Bot',
      description: 'A discord bot that can moderate chat, display images from the internet, play mini games and other mini stuff. It was a fun side project I made while learning python.',
      link: 'https://replit.com/@bijaybaniya1088/Bot1088#main.py/',
      language: 'Python'
    },
    {
      image: Car,
      name: 'Car Rental',
      description: 'A website for a car rental company. It is a simple website that shows the services provided by the company. This was made as a part of a course project.',
      link: 'https://github.com/Sandesh926/Car_Rental_System',
      language: 'React and .Net'
    },
    {
      image: Venue,
      name: 'Mero Venue',
      description: 'A website for a venue booking company. This was made for a final year project while I was working so it is a little rough. It has fully functional backend and frontend with a database to store the data of services, login system and payment method.',
      link: 'https://github.com/bijay1088/MeroVenue',
      language: 'React and NodeJs'
    }
  ]


  const handlePrev = () => {
    setIndex(prevIndex => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex(prevIndex => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const [index, setIndex] = useState(0);
  return (
    <div className='project'>
      <div className='cusCarousel'>
        <BsArrowLeftCircleFill className='arrow arrow_left' onClick={handlePrev} />
        {projects.map((project, idx) => (
          <img key={idx} src={project.image} className={index === idx ? 'cusImg' : 'cusImg cusImg_hidden'} alt={`image_${idx}`} />
        ))}
        <div className='project_details'>
          <h2>{projects[index].name}</h2>
          <p>{projects[index].description}</p>
          <p>Made using {projects[index].language}</p>
          <a className='link' href={projects[index].link} target='_blank' rel='noreferrer'>View Project</a>
        </div>
        <BsArrowRightCircleFill className='arrow arrow_right' onClick={handleNext} />
        <span className='indicators'>
          {projects.map((_, idx) => (
            <span key={idx} className={idx === index ? 'indicator' : 'indicator indicator_inactive'} onClick={() => setIndex(idx)} />
          ))}
        </span>
      </div>
      <div className='project_details_small'>
        <h2>{projects[index].name}</h2>
        <p>{projects[index].description}</p>
        <p>Made using {projects[index].language}</p>
        <a className='link' href={projects[index].link} target='_blank' rel='noreferrer'>View Project</a>
      </div>
      
    </div>
    
  )
}

export default Project


