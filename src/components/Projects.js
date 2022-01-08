import React from "react";
import Project from "./Project";
import styled from "styled-components";
import projectsData from "../projects.json";

const ProjectsStyled = styled.div`
  h2 {
    width: 100%;
    margin-bottom: 36px;

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
`;

const ProjectListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 100px;

  li {
    list-style: none;
  }
`;

export default function Projects() {
  return (
    <ProjectsStyled id="projects">
      <h2 data-aos="fade-up" data-aos-delay="100">
        Projects
      </h2>
      <ProjectListStyled>
        {projectsData.map((project, i) => {
          return (
            <li key={i}>
              <Project
                project={project}
                data-aos="fade-up"
                data-aos-delay="200"
              />
            </li>
          );
        })}
      </ProjectListStyled>
    </ProjectsStyled>
  );
}
