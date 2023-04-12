import React from "react";
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <a className="email" href="mailto: najette@chouchane.com">najette@chouchane.com</a>
            <ul className="nav-pages">
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}