import React, { useState } from 'react';
import './navbar.css';
import logoo from '../../assests/logoo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showSideButton, setShowSideButton] = useState(false);

  
  const toggleSideButton = () => {
    setShowSideButton(!showSideButton);
  };

  return (
    <nav className="navbar">
      <img src={logoo} alt="logo" className='logo'/>
      <div className="desktopmenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuitems'> Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuitems'>About </Link>
        <Link activeClass='active' to='Project' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuitems'>Projects</Link>
        <Link activeClass='active' to='contactme' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuitems'>Contact me </Link>
      </div>
      
      {/* Show side button only if screen width is below 1152 pixels */}
      {showSideButton && (
        <div className="sideMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='sideMenuitems'> Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='sideMenuitems'>About </Link>
          <Link activeClass='active' to='Project' spy={true} smooth={true} offset={-100} duration={500} className='sideMenuitems'>Projects</Link>
          <Link activeClass='active' to='footer' spy={true} smooth={true} duration={500} offset={-100} className='sideMenuitems'>Contact me </Link>
        </div>
      )}
      <div className="connectwithme">
        <a href="#footer"><button><img src="" alt="" />connect with me</button></a>
      </div>

      {/* Side button */}
      <button className="sideMenuButton" onClick={toggleSideButton}>
        Menu
      </button>
    </nav>
  );
}

export default Navbar;
