import React from 'react'
import './Projects.css';
import bus from '../../assests/busreservation.png';
import bike from '../../assests/bike.jpg';
import rps from '../../assests/rps.png';
const Projects = () => {
  return (
  
   <section id='Project'>
  <div>
    <h2 className="PHeading">Projects</h2>
  </div>
     <div className="cardgallery">
        <div className="card">
            <img src={bus} alt="Bus-reservation-system" className='cardimg' />
            <div className="carddescription">
                <h2>Bus Reservation System</h2>
                <p>A bus reservation system developed in C for efficient booking and management of seats, enhancing travel planning.</p>
            </div>
        </div>
        <div className="card">
            <img src={bike} alt="bike" className='cardimg'  />
            <div className="carddescription">
                <h2>Two Wheeler Showroom Website </h2>
                <p>A full-stack two-wheeler showroom website built with HTML, CSS, JavaScript, Node.js, Express.js, and DBMS for seamless experience</p>
            </div>
        </div>
        <div className="card">
            <img src={rps} alt="bike" className='cardimg'  />
            <div className="carddescription">
                <h2>Rock,Paper&Scissor game</h2>
                <p>A Java-based rock-paper-scissors game offering interactive gameplay with user input and random computer choices</p>
            </div>
        </div>
      
       
    </div>
   </section>
    
  )
}

export default Projects;