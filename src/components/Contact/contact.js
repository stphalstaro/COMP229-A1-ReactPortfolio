//File Name: contact.js
//Stden Name: Stephanie Figueira
//StudentID: 301303854
//Date: 09/24/24

import React from 'react';
import './contact.css';
import linked from '../../images/linkedin.png';
import gitHub from '../../images/github.png';


const Contacts = () => {
    return (
        <section id='contactPage'>
            <h2 className="contactTitle">Contact Me</h2>
            <div className='contact'>
                <div className="contact-panel">
                    <h3>My Information</h3>
                    <p><strong>Email:</strong> sfiguei5@my.centennialcollege.ca</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <br />
                    <div className="contactIcons">
                    <div className="contactLink" onClick={() => window.open('https://www.linkedin.com/in/stephanie-figueira-8b6b5b2ba', '_blank')}>
                    <img src={linked} alt="LinkedIn" className="contactImgs" />
                </div>
                <div className="contactLink" onClick={() => window.open('https://github.com/stphalstaro', '_blank')}>
                    <img src={gitHub} alt="GitHub" className="contactImgs" />
                </div>
                </div>
                </div>

                    <span className="contactDesc"> Alternatively, you can fill out the form below to get in touch.</span>

                
                <form className="contactForm">
                    <input type="text" className="name" placeholder='Your Name' />
                    <input type="email" className="email" placeholder='Your Email' />
                    <textarea className="msg" name="message"rows="5" placeholder='Your Message'></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    
                </form>
            </div>
        </section>
    );
}

export default Contacts;