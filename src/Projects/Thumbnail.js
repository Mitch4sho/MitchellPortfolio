import React from "react";
import { Link } from "react-router-dom";
import  "./Projects.css";
import testImage from "../Assets/jpgImages/profileLarge.jpg";

// this section will pull data form json file 

 export function Thumbnail(props) {
    return(
      <div className = "projectContent">
        <h3 className = "projectTitle">{props.title}</h3>
        <div className = "projectDescription">
          <p>
            {props.description}
          </p>
        </div>
        <ul className = "projectTechList">
          <li>{props.tech}</li>
          <li>{props.tech}</li>
          <li>{props.tech}</li>
        </ul>
        <div className = "projectLinks">
          <a href="">
            <svg>
              <path></path>
            </svg>
          </a>
          <a href="">
            <svg>
              <path></path>
            </svg>
          </a>
        </div>
        <div className="projectImage">
          <a href="">
            <div className = "imageWrapper">
              <img src = {testImage} alt="ProjectImage"/>
            </div>
          </a>
        </div>
      </div>
    )
}

export default Thumbnail;