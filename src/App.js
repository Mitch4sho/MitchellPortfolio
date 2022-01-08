import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
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
  gap: 50px;

  @media only screen and (min-width: 1025px) {
    width: 50%;

    gap: 200px;
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
        <Projects />
        <Contact />
      </MainContentStyled>
    </div>
  );
}

export default App;
