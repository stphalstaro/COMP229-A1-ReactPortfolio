//File Name: about.js
//Student Name: Stephanie Figueira
//StudentID: 301303854
//Date: 09/24/24*/

import React from 'react';
import './about.css';
import resume from '../../images/SFResume2024.pdf'; // Ensure this path is correct
import contactImg from '../../images/resumeIcon.png';

const About = () => {
    return (
        <section id="about">
            <span className="aboutTitle">About Me</span>
            <span className="myDesc">
                My name is Stephanie Figueira. I am a Software Engineering Student at Centennial College. 
                I consider myself a creative person, somewhat eccentric and friendly. I am working towards 
                becoming a front-end developer, with aspirations of a full-stack career. My favorite programming 
                language is JavaScript. In my spare time I like to play video games, create digital art, watch 
                movies, do pilates or yoga and explore new activities around my home city.
            </span>

            {/* Button wrapped in a div so it can be styled */}
            <div className="buttonContainer">
                <a href={resume} className="resumeBtn" target="_blank" rel="noopener noreferrer">
                    <img src={contactImg} alt="Contact Icon" className="desktopMenuImg" /> Resume
                </a>
            </div>
        </section>
    );
};

export default About;

