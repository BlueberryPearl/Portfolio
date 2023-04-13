import React from "react";
import './Projects.css';
import dbc from './dbcThumnail.png'
import themeThumbnail from './themeThumbnail.png'
import tj from './tjThumbnail..png'

export default function Projects() {
    return (
        <main className="my-projects">
            <h1 className="my-projects-title">My Projects</h1>
            <div className="projects">
                <div className="dbc">
                    <img className="project-images" src={dbc} alt="Digital business card"></img>
                    <h2 className="project-title">Digital Business Card</h2>
                    <p className="project-description">This is my first React project! I created a digital business card to give a brief introduction about myself. It contains some interactive buttons and icons as well as still text and an image. </p>
                </div>
                <div className="travel-journal">
                    <img className="project-images" src={tj} alt="Travel Journal"></img>
                    <h2 className="project-title">Travel Journal</h2>
                    <p className="project-description">This is my second React project. I focused on making a clear yet appealing design. I also added links to all the locations mentioned</p>
                </div>
                <div className="cyclone-station">
                    <img className="project-images" src={themeThumbnail} alt="Cyclone Station"></img>
                    <h2 className="project-title">Cyclone Station</h2>
                    <p className="project-description">This is my first personal project in React. It is a theme generator to help get some inspiration for making art. I am constantly adding new features to it. My next action will be to add the Login and Sign up features to it.
                    </p>
                </div>
            </div>
        </main>
    )
}