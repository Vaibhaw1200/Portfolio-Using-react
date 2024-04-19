import React from 'react'
import './Footer.css';

import linkedin from '../../assests/Linkedin-logo-icon-png.png';
import github from '../../assests/github logo.png';
import instagram from '../../assests/iglogo.webp';
import facebook from '../../assests/Facebook_icon.png';


const Footer = () => {
  return (
  <section id='footer'>
     <div className="Linkss">
    <a href="https://www.linkedin.com/in/vaibhaw-anand/"><img src={linkedin} alt="Linkedin" /></a>
    <a href="https://github.com/Vaibhaw1200"><img src={github} alt="Github" /></a>
    <a href="https://www.instagram.com/__vaibhavanand__/"><img src={instagram} alt="Instagram" /></a>
    <a href="https://www.facebook.com/vaibhav.anand.549668/"><img src={facebook} alt="" /></a>
   </div>
  </section>
  )
}

export default Footer;