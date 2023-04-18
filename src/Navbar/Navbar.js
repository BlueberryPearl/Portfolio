import React from "react";
import './Navbar.css'

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <a className="email" href="mailto: najette@chouchane.com">najette@chouchane.com</a>
            <ul className="nav-pages">
                <li onClick={() => props.scroll(props.about)} className="nav-link">About</li>
                <li onClick={() => props.scroll(props.projects)} className="nav-link">Projects</li>
                <li onClick={() => props.scroll(props.contact)} className="nav-link">Contact</li>
            </ul>
        </nav>
    )
}