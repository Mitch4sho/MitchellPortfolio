import React from "react";
import { Link } from "react-router-dom";
import  "./Projects.css";
import testImage from "../Assets/jpgImages/profileSmall.jpg";

// this section will pull data form json file 

 export function Thumbnail(props) {
    return(
    <div>
        <div className = "projectData">
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
              <a href="" target = "_blank">
              </a>
              <a href="" target = "_blank">
              </a>
            </div>
          </div>
          <div className="projectImage">
            <img src={testImage} alt="Mitchell"/>
          </div>
        </div>
    </div>
    )
}

export default Thumbnail;