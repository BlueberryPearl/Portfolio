import React, { useState, useEffect } from "react";
import './ScrollButton.css'
import { ReactComponent as Arrow } from "./arrow.svg";

const ScrollButton = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true)
            } else if (window.innerWidth < 481 && window.scrollY > 50) {
                setShowScrollButton(true)
            }
            else {
                setShowScrollButton(false)
            }
            console.log(showScrollButton)
        })
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }




    return (
        <div>
            {showScrollButton && <Arrow className="scroll-button" onClick={scrollTop} />}
        </div>
    )
}

export default ScrollButton