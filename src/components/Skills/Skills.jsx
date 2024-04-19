import React from 'react'
import './Skills.css';
import java from '../../assests/java logo.png';
import dsa from '../../assests/dsalogo1.png';
import reactlogo from '../../assests/reactlogo (1).png';
import javascript from '../../assests/js logo.png';
import htmllogo from '../../assests/html_logo-removebg-preview.png';
import css from '../../assests/csslogo.jpeg';
import nodejs from '../../assests/nodejslogo.png';
import expresslogo from '../../assests/Expressjslogo.png'
import clogo from '../../assests/clogo.png';
import dbmslogo from '../../assests/dbms logo.png';
import kotlinlogo from '../../assests/kotlin logo.jpeg';


const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">As an enthusiastic developer, I've ventured into a diverse array of technologies and frameworks, eager to bring innovative solutions to fruition. With proficiency ranging from low-level programming in C to full-stack web development utilizing React Js, HTML, CSS, JavaScript, Node.js, and Express.js, I've crafted dynamic and user-friendly applications. My experience extends to database management systems, ensuring data integrity and reliability in projects like my bus reservation system. Alongside this, my intermediate-level expertise in Java, coupled with a solid understanding of data structures and algorithms, has equipped me to solve complex problems efficiently. Additionally, my familiarity with Kotlin adds versatility to my skill set, enabling me to adapt to new technologies and challenges with enthusiasm and agility.</span>
       <div className="skillBars"> 
       <div className="skillBar">
            <img src={java} alt="java" className="skillbarimg" />
            <div className="skillBarText">
                <h2>Java</h2>
                <p>Intermediate proficiency in Java, actively enhancing skills to develop robust software solutions.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={dsa} alt="dsa" className="skillbarimg" />
            <div className="skillBarText">
                <h2>Data Structures Algoritm</h2>
                <p>Intermediate proficiency in Data Structures and Algorithms, capable of solving complex problems efficiently.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={reactlogo} alt="react" className="skillbarimg" />
            <div className="skillBarText">
                <h2>React js</h2>
                <p>Intermediate proficiency in React.js, skilled in building reusable components and dynamic user interfaces.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={javascript} alt="javascript" className="skillbarimg" />
            <div className="skillBarText">
                <h2>Javascript</h2>
                <p>Intermediate proficiency in JavaScript, experienced in building interactive and dynamic web applications.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={htmllogo} alt="Html" className="skillbarimg" />
            <div className="skillBarText">
                <h2>HtML</h2>
                <p>Intermediate proficiency in HTML, skilled in structuring and styling web content for optimal user experience.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={css} alt="CSS" className="skillbarimg" />
            <div className="skillBarText">
                <h2>CSS</h2>
                <p>Intermediate proficiency in CSS, experienced in crafting responsive and visually appealing web designs</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={nodejs} alt="nodejs" className="skillbarimg" />
            <div className="skillBarText">
                <h2>NODE JS</h2>
                <p>Intermediate proficiency in Node.js, skilled in building server-side applications and RESTful APIs.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={expresslogo} alt="Express js" className="skillbarimg" />
            <div className="skillBarText">
                <h2>Express Js</h2>
                <p>Basic understanding of Express.js and motivated to expand proficiency in building web applications with Node.js.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={clogo} alt="C" className="skillbarimg" />
            <div className="skillBarText">
                <h2>C Language</h2>
                <p>Intermediate proficiency in C language, experienced in low-level programming and system design.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={dbmslogo} alt="react" className="skillbarimg" />
            <div className="skillBarText">
                <h2>DataBase Mangement System</h2>
                <p>Intermediate proficiency in Database Management Systems, continuously expanding knowledge to optimize data storage and retrieval.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={kotlinlogo} alt="react" className="skillbarimg" />
            <div className="skillBarText">
                <h2>Kotlin</h2>
                <p>Beginner in Kotlin, actively learning to leverage its modern features for Android app development..</p>
            </div>
        </div>
        </div>
    
   
         </section>
  )
}

export default Skills;