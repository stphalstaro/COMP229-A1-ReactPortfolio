//File Name: intro.js
//Student Name: Stephanie Figueira
//StudentID: 301303854
//Date: 09/24/24*/

import React from 'react'
import './intro.css'; //links stylesheet page specifically for the intro
import bg from '../../images/headshot.png'; //my headshot img
import btnImg from '../../images/woman.png';
import { Link } from 'react-scroll'; //allows button link to access other pages


const Intro = () => {
    return (
        //handles the left section of main page introContent
        //handles the right section of main page img
        //span handles individual sections of the text when edited in css
        <section id="intro">
            <div className="introContent">
                <span className="welcome">Hello World!</span>
                <span className="introText">Welcome to my first portfolio page with<span className="introName"> React</span></span>
                <br />
                
                <span className="missionStatement">Mission Statement</span>
                <p className="introPara">This website was created to showcase the abilities of Stephanie to prospective employers who may want to view her work. These projects are displayed to showcase skills, experience and value to potential employers and collaborators.</p>
                <br />
                <br />

                <button className="aboutBtn" onClick={() => {
                document.getElementById('about').scrollIntoView({behavior: 'smooth'});
                }}>
                <img src={btnImg} alt="" className="desktopMenuImg"/>About Me</button>
                <img src={bg} alt="Me" className="bg"/>

            </div>
        </section>
    )
}

export default Intro;