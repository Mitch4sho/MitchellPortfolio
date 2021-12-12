import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Contact from "./Contact/Contact";
import Project from "./Projects/Project";
import Aos from "aos";
import styled from "styled-components";
import "aos/dist/aos.css";

const MainContentStyled = styled.div``;

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  });

  return (
    <div>
      <NavBar />
      <div id="content">
        <Hero />
        <section className="aboutMe" id="aboutMe">
          <AboutMe />
        </section>
        <section className="projects" id="work">
          <Project />
        </section>
        <section className="contact" id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
