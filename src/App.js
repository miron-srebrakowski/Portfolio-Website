import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import SectionSeparator from "./components/SectionSeparator";
import Languages from "./components/Languages";
import Fade from "react-reveal/Fade";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <SectionSeparator color="white" />
      <Projects />
      <SectionSeparator color="white" />
      <Fade>
        <Skills />
      </Fade>
      <br />
      <Fade>
        <Education />
      </Fade>
      <br />
      <Fade>
        <Languages />
      </Fade>
      <SectionSeparator color="white" />
      <Contact />
    </main>
  );
}