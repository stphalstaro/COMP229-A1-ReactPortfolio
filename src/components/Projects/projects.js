/*File Name: projects.js
//Student Name: Stephanie Figueira
//StudentID: 301303854
//Date: 09/24/24*/

import React from 'react';
import './projects.css';

import Projbg1 from '../../images/projectsBg2.png'
import Portfolio1 from '../../images/aws-cloud.png'
import Projbg2 from '../../images/projectsBg2.png'
import Portfolio2 from '../../images/psgirl.jpg'
import Projbg3 from '../../images/projectsBg2.png'
import Portfolio3 from '../../images/flappyAstro.png'
import Projbg4 from '../../images/projectsBg2.png'
import Portfolio4 from '../../images/UnfinishedKirby.jpg'
import Projbg5 from '../../images/projectsBg2.png'
import Portfolio5 from '../../images/moveMaker3.png'
import Projbg6 from '../../images/projectsBg2.png'
import Portfolio6 from '../../images/musicApp.jpg'


const Projects = () => {
    const openFullSizeImage = (imageSrc) => {window.open(imageSrc, '_blank');
    };

    return (
        <section id='projects'>
            <h2 className="projectsTitle">My Projects</h2>
            <span className="projectsDesc">All of these projects were done by me or in collaboration</span>
            <br />
            <div className="worksImgs">
                <div className="workItem">
                    <img src={Projbg1} alt="AWS Cloud" 
                        className="worksImg thumbnail" onClick={() => openFullSizeImage(Portfolio1)}/>
                        <p className="workTitle">AWS Cloud500</p>
                    <p className="workCaption">Move Maker is a fitness app that is currently in progress. Done as a solo project, it will that allow users to schedule and customize workouts </p>
                </div>
                <div className="workItem">
                    <img src={Projbg2} alt="AI Images" className="worksImg thumbnail" onClick={() => openFullSizeImage(Portfolio2)}/>
                    <p className="workTitle">AI Images</p>
                    <p className="workCaption">Currently teaching myself how to draw AI images from my own sketches. It is a hobby that I hope to one day improve on</p>
                </div>
                <div className="workItem">
                    <img src={Projbg3} alt="Flappy" className="worksImg thumbnail" onClick={() => openFullSizeImage(Portfolio3)}/>
                    <p className="workTitle">Flappy Astronaut</p>
                    <p className="workCaption">This is a simple game utlizing Raspberry Pi, Sense HAT, a Web Browser and Python programming language. The game is played on Trinket.io</p>
                </div>
                <div className="workItem">
                    <img src={Projbg4} alt="Unfinished Kirby" className="worksImg thumbnail" onClick={() => openFullSizeImage(Portfolio4)}/>
                    <p className="workTitle">Digital Drawing</p>
                    <p className="workCaption">In progress. This is a digital drawing I am doing in Krita from a sketch I drew of the Nintendo character Kirby.</p>
                </div>
                <div className="workItem">
                    <img src={Projbg5} alt="Move Maker" className="worksImg thumbnail" onClick={() => openFullSizeImage(Portfolio5)}/>
                    <p className="workTitle">Move Maker</p>
                    <p className="workCaption">Move Maker is a fitness app that is currently in progress. Done as a solo project, it will that allow users to schedule and customize workouts </p>
                </div>
                <div className="workItem">
                    <img src={Projbg6} alt="Music App" className="worksImg thumbnail" onClick={() => openFullSizeImage(Portfolio6)} />
                    <p className="workTitle">EZ Dash</p>
                    <p className="workCaption">EZ Dash is a music app simil;ar to Spotify. Developed during a Software Requirements class in collaboration with a group. Our final project was very successful.</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;