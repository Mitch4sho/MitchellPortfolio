import React from "react";
import styled from "styled-components";
import Github from "./Github";
import LinkIcon from "./LinkIcon";

const ProjectStyled = styled.div`
  display: grid;

  img {
    width: 100%;
    grid-column: 1/ -1;
    opacity: 0.25;
    border-radius: 5px;

    grid-area: 1 / 6 / -1 / -1;
  }

  @media only screen and (min-width: 1025px) {
  }
`;

const ProjectContentStyled = styled.div`
  text-align: right;
  z-index: 2;
  padding: 10px 10px;

  grid-column: 1 / -1;
  grid-area: 1 / 1 / -1 / 7;

  h3 {
    color: #23ce23;
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
    background-color: #7a7081;
    color: #edf5fc;
    padding: 25px;
    border-radius: 5px;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    margin-bottom: 10px;
  }

  li {
    color: #23ce23;
  }

  div {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
`;

export default function Project({ project }) {
  const test = require(`../Assets/jpgImages/${project.image}`);
  return (
    <ProjectStyled>
      <ProjectContentStyled>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>
          <li>{project.techOne}</li>
          <li>{project.techTwo}</li>
          <li>{project.techThree}</li>
        </ul>
        <div>
          <Github gitHub={project.code} link={project.codeUrl} />
          <LinkIcon demo={project.demo} link={project.demoUrl} />
        </div>
      </ProjectContentStyled>
      <img src={test.default} alt="Project_Image" />
    </ProjectStyled>
  );
}
