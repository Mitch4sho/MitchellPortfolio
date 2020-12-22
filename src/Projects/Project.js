import React from "react"
import { Thumbnail } from "./Thumbnail";
import  "./Projects.css";
import projectsData from "../projects.json"

function Projects(props) {
    
    const firstFeature = projectsData.find(project => project.id === 1);
    const secondFeature = projectsData.find(project => project.id === 2);
    const thirdFeature = projectsData.find(project => project.id === 3);



  return (
<>
    <h2 className = "projectHeading">Projects</h2>
    <div className = "projectOne">
          <Thumbnail 
          title = {firstFeature.title}
          description = {firstFeature.description}
          tech = {firstFeature.tech1}
          tech = {firstFeature.tech2}
          tech = {firstFeature.tech3}
          img = {firstFeature.image}
          />
    </div>
    <div className = "projectTwo">
          <Thumbnail 
          title = {firstFeature.title}
          description = {firstFeature.description}
          tech = {firstFeature.tech1}
          tech = {firstFeature.tech2}
          tech = {firstFeature.tech3}
          img = {firstFeature.image}
          />
    </div>
    <div className = "projectThree">
          <Thumbnail 
          title = {firstFeature.title}
          description = {firstFeature.description}
          tech = {firstFeature.tech1}
          tech = {firstFeature.tech2}
          tech = {firstFeature.tech3}
          img = {firstFeature.image}
          />
    </div>
</>  
       
  )
}
 
export default Projects; 