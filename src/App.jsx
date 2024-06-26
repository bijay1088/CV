import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/footer/Footer'
import Title from './components/title/Title'
import Project from './components/project/Project'
import Home from './components/home/Home'
import NavBar from './components/navbar/Navbar'
import Skill from './components/skills/Skill'
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <div>
      <NavBar />
      <Home />
      <div className='cusContainer'>
        <Title title='my projects' subTitle='What I have made'/>
        <Project />
        <Title title='my skills' subTitle='What I can do'/>
        <Skill />
        <Title title='my blogs' subTitle='Personal Experiences'/>
        <Blog />
        <Title title='contact me' subTitle='Get in touch'/>
        <Contact />
        <Footer />
      </div>
    </div>
      
      
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
