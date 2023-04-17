import React from "react";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
