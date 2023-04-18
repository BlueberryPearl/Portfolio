import React from "react";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { useRef } from "react";
import ScrollButton from "./Components/ScrollButton";

function App() {
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  }





  return (
    <div className="App">
      <ScrollButton />
      <Navbar scroll={scrollToSection}
        about={about}
        projects={projects}
        contact={contact} />
      <About about={about} />
      <Projects projects={projects} />
      <Contact contact={contact} />
    </div>
  );
}

export default App;
