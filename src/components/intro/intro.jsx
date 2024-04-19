import React from 'react'
import './intro.css';
import bg from '../../assests/backgroundimg.png';

import bag from '../../assests/bag.png'
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introname">Vaibhaw</span><br />a Developer</span>
            <p className="intropara">I'm a passionate developer with a keen interest in creating <br /> innovative solutions to real-world problems. With a strong <br /> foundation in programming languages and a knack for <br /> problem-solving, I thrive on challenges that push the <br /> boundaries of what's possible in the digital realm.

 </p>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlKpGmxcczfclnSSxxbxLSWfnTBMPXcltNTspMXTjfqQrvRXRrsFztRTGmscnbCjrmvmzg" ><button className='btn'><img src={bag} alt="bag" className='bag' />Hire me</button></a>
        </div>
        <img src={bg} alt="Bg" className='bg' />
    </section>
  )
}

export default Intro;