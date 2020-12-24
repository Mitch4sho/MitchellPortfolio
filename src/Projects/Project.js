import React from "react"
import { Thumbnail } from "./Thumbnail";
import  "./Projects.css";
import projectsData from "../projects.json"
// the images are manually imported will need to come up with solution that goes off the json file image
import firstFeaturePhoto from "../Assets/jpgImages/PontoonPhoto.png"
import secondFeaturePhoto from "../Assets/jpgImages/MovieDBPhoto.png"
import thirdFeaturePhoto from "../Assets/jpgImages/BudgetAppPhoto.png"

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
          techOne = {firstFeature.techOne}
          techTwo = {firstFeature.techTwo}
          techThree = {firstFeature.techThree}
          demo = {firstFeature.demoUrl}
          code = {firstFeature.codeUrl}
          img = {firstFeaturePhoto}
          />
    </div>
    <div className = "projectTwo">
          <Thumbnail 
          title = {secondFeature.title}
          description = {secondFeature.description}
          techOne = {secondFeature.techOne}
          techTwo = {secondFeature.techTwo}
          techThree = {secondFeature.techThree}
          demo = {secondFeature.demoUrl}
          code = {secondFeature.codeUrl}
          img = {secondFeaturePhoto}
          />
    </div>
    <div className = "projectThree">
          <Thumbnail 
          title = {thirdFeature.title}
          description = {thirdFeature.description}
          techOne = {thirdFeature.techOne}
          techTwo = {thirdFeature.techTwo}
          techThree = {thirdFeature.techThree}
          demo = {thirdFeature.demoUrl}
          code = {thirdFeature.codeUrl}
          img = {thirdFeaturePhoto}
          />
    </div>
</>  
       
  )
}
 
export default Projects; 