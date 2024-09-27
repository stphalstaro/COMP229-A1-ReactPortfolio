//File Name: navbar.js
//Student Name: Stephanie Figueira
//StudentID: 301303854
//Date: 09/24/24*/

import React from 'react';
import './navbar.css';
import logo from '../../images/steph.png';
import contactImg from '../../images/chat.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="steph" className='steph'/>
            <div className="desktopMenu">
                <Link activeClass="active" to="introContent" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">About Me</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Projects</Link>
                <Link activeClass="active" to="services" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Services</Link>

            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
            }}>
                
                <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me</button>

        </nav>
    )
}

export default Navbar