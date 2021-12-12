import React from "react";
import styled from "styled-components";
import ProfilePic from "../Assets/jpgImages/IMG_3363 2.jpg";

const AboutMeStyled = styled.div`
  h2 {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 20px;
  }

  h2::after {
    content: "";
    display: block;
    background-color: #b9d8f3;
    width: 100px;
    height: 1px;
  }

  section {
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
  }

  li {
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    list-style: none;
  }

  li::before {
    content: ">";
    color: #23ce23;
    margin-right: 3px;
  }

  img {
    display: none;
  }

  @media only screen and (min-width: 1025px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 20px;

    h2 {
      grid-column: 1 / 3;
    }

    h2::after {
      width: 300px;
    }

    section {
      grid-column: 1/1;
    }

    img {
      display: block;
      max-width: 300px;
      border-radius: 5px;
      grid-column: 2/3;
    }
  }
`;

export default function AboutMe() {
  return (
    <AboutMeStyled>
      <h2 data-aos="fade-up">About Me</h2>
      <section data-aos="fade-up">
        <p>Hi! My name is Mitchell, and I'm a Software Engineer.</p>
        <p>
          I worked in the warehouse industry for serval years. During my time in
          the industry, I ran a side business selling shoes and vintage clothes.
          While running this business, I was trying to save time and created an
          application to manage inventory. while developing this app, I fell in
          love with software development
        </p>
        <p>
          The drive to become a better engineer led me to do small side
          projects. Eventually, I started contributing to an open-source project
          called pontoon for Mozilla. While contributing for Mozilla, I led
          development on user search updates using React and Django, reducing
          errors by 20% and increasing productivity by 10%. I'm also a software
          engineer fellow at formation, improving my data structures and
          algorithms skills and building my fundamentals as an engineer.
        </p>
        <p>
          Right now, I'm looking for a role in the tech industry focused on
          frontend technologies.
        </p>
        <ul>
          <li data-aos="fade-up" data-aos-delay="300">
            JavaScript (ES6+)
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            React.js
          </li>
          <li data-aos="fade-up" data-aos-delay="500">
            HTML5
          </li>
          <li data-aos="fade-up" data-aos-delay="600">
            CSS3
          </li>
          <li data-aos="fade-up" data-aos-delay="700">
            Version control
          </li>
          <li data-aos="fade-up" data-aos-delay="800">
            Docker
          </li>
          <li data-aos="fade-up" data-aos-delay="900">
            Python / Django
          </li>
        </ul>
      </section>
      <img src={ProfilePic} alt="Mitchell Profile" />
    </AboutMeStyled>
  );
}
