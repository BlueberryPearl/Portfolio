import React from "react";
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <a className="email" href="mailto: najette@chouchane.com">najette@chouchane.com</a>
            <ul className="nav-pages">
                <li className="nav-link">About</li>
                <li className="nav-link">Projects</li>
                <li className="nav-link">Contact</li>
            </ul>
        </nav>
    )
}