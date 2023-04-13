import React from "react";
import './About.css'


export default function About() {
    return (
        <main className="about">
            <div className="text-box">
                <h1 className="name">Najette Chouchane</h1>
                <h2 className="title">Frontend Developer</h2>
                <p className="intro">I am a frontend developer based in the UK. I create and design cool and awesome websites. I come from a creative background of illustration, animation and 3D modelling. </p>
                <h3 className="skills-title">Skills:</h3>
                <ul className="skills">
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Figma</li>
                </ul>
            </div>
        </main>
    )
}