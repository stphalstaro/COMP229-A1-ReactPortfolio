//File Name: services.js
//Student Name: Stephanie Figueira
//StudentID: 301303854
//Date: 09/24/24*/

import React from 'react';
import './services.css';
import webD from '../../images/development2.png';
import videoFile from '../../images/gallery.mp4';
import sliderG from '../../images/backend.png'; 
import sliderGPopup from '../../images/navCode.png';
import srs from '../../images/srs.png'; 
import srsPopup from '../../images/diagram3.png';
import digitalArt from '../../images/dart.png'; 
import digitalArtPopup from '../../images/FaridaG.jpg';
import sql from '../../images/sql.png';
import sqlPopup from '../../images/SQL2.png'; 

const Services = () => {
    const openImage = (imageSrc) => {
        window.open(imageSrc, '_blank'); // Opens the image in a new window/tab
    };

    const openVideo = (videoSrc) => {   // Open the video in a new pop-up window
        window.open(videoSrc, '_blank', 'width=400,height=200'); // Size of the pop-up window

    };

    return (
        <section id='services'>
            <h2 className="serviceList">Services I offer</h2>
            <span className="serviceDisplay">Below are some of the services I offer</span>
            <div className="serviceBars">
                <div className="skillBar" onClick={() => openVideo(videoFile)}>
                    <img src={webD} alt="Web Development" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>I have experience with creating and designing websites / Interfaces, DOM manipulation, HTML and CSS. </p>
                    </div>
                </div>
                <div className="skillBar" onClick={() => openImage(sliderGPopup)}>
                    <img src={sliderG} alt="Agile" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Back End-Programming</h2>
                        <p>I have 2 years experience with different programming languages that include C#, JavaScript, Java and Python</p>
                    </div>
                </div>
                <div className="skillBar" onClick={() => openImage(srsPopup)}>
                    <img src={srs} alt="AI Girl" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>SRS Document Creation</h2>
                        <p>Farmiliar with creating SRS projects and using Visual Paradigm</p>
                    </div>
                </div>
                <div className="skillBar" onClick={() => openImage(digitalArtPopup)}>
                    <img src={digitalArt} alt="Digital Art" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Digital Art</h2>
                        <p>As a hobby, I have created various digital art projects. The newest interest is using my own sketches to create AI art.</p>
                    </div>
                </div>
                <div className="skillBar" onClick={() => openImage(sqlPopup)}>
                    <img src={sql} alt="SQL Database" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>SQL Databases / MongoDB</h2>
                        <p>I like to use SQL and MongoDB</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
