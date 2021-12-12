import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Contact from "./Contact/Contact";
import Project from "./Projects/Project";
import Aos from "aos";
import styled from "styled-components";
import "aos/dist/aos.css";

const MainContentStyled = styled.div`
  width: 85%;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 1025px) {
    width: 50%;
  }
`;

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  });

  return (
    <div>
      <NavBar />
      <MainContentStyled>
        <Hero />
        <AboutMe />
        <Project />
        <Contact />
      </MainContentStyled>
    </div>
  );
}

export default App;
