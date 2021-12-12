import React from "react";
import styled from "styled-components";
const HeroStyled = styled.main`
  margin-bottom: 64px;

  h2 {
    font-size: 1em;
    color: #23ce23;
  }

  h1 {
    font-size: 2.5em;
  }

  h3 {
    font-size: 1.5em;
    color: #b9d8f3;
    margin-bottom: 12px;
  }

  p {
    font-size: 1em;
    margin-bottom: 24px;
  }

  a {
    width: 25%;
    font-size: 0.75em;
    background-color: transparent;
    color: #23ce23;
    border: 1px solid #23ce23;
    border-radius: 5px;
    padding: 0.5rem;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background: #23ce2325;
      color: #52e28e;
    }
  }

  @media only screen and (min-width: 1025px) {
    h1 {
      font-size: 3.5em;
    }

    p {
      width: 50%;
    }
  }
`;

export default function Hero() {
  return (
    <HeroStyled>
      <h2 data-aos="fade-right" data-aos-delay="400">
        Hello, my name is
      </h2>
      <h1 data-aos="fade-right" data-aos-delay="450">
        Mitchell Oliver
      </h1>
      <h3 data-aos="fade-right" data-aos-delay="900">
        I make things for the internet
      </h3>
      <p data-aos="fade-up" data-aos-delay="1200">
        I'm a software engineer center in building websites, applications, and
        everything else in between
      </p>
      <a
        data-aos="fade-up"
        data-aos-delay="1300"
        href="mailto:MitchellOliver1991@gmail.com"
      >
        Contact Me
      </a>
    </HeroStyled>
  );
}
