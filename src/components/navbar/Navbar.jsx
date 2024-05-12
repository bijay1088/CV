import React, {useEffect, useState} from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    })

  },[]);

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  }

  const offset = menu ? -200 : -250;

  return (
    <nav className={`cusContainer ${sticky?'dark-nav':''}`}>
        {/* <img src={logo} alt="Gandaki Logo"  className='logo'/> */}
        <ul className={menu?'':'hide-burger'}>
            <li><Link to='home' smooth={true} offset={0} duration={100}>Home</Link></li>
            <li><Link to='project' smooth={true} offset={offset} duration={100}>Projects</Link></li>
            <li><Link to='skills' smooth={true} offset={offset} duration={100}>Skills</Link></li>
            <li><Link to='blog' smooth={true} offset={offset} duration={100}>Blog</Link></li>
            <li><Link to='contact' smooth={true} offset={offset} duration={100}><button className='cusBtn'>Contact</button></Link> </li>
        </ul>
        <FontAwesomeIcon icon={faBars} className='burger' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
