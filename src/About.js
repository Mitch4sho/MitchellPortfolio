import React from "react"
import "./About.css";
import profilePic from "./Assets/jpgImages/profileLarge.jpg";

function AboutMe(props) {
  return (
    <div>
      <h2 className = "aboutMeHeading">About Me</h2>
      <div className = "inner">
        <div className = "aboutMeSection">
          <div>
            <p>Hi! My name is Mitchell, I'm a developer based in Riverside, CA.</p>
            <p>
            I love to create products that live on the web. Whether 
            that would be websites or apps, my goals is to always build to perfection 
            and provide a awesome experience.
            </p>
            <p>
              After learning about the power of code, I went on a journey to find
              like minded peers which brought me to a group in Riverside called <a href = "https://www.iesd.com/" target ="_blank">IESD</a>. 
              I joined a open source development team at Mozilla, specifically a 
              team working on a localization application <a href = "https://pontoon.mozilla.org/" target = "_blank" >Pontoon</a> working mainly on the frontend of the application.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          <ul className = "skillsList">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
            <li>Docker</li>
          </ul>
        </div> 
        <div className = "styledPic">
          <div className = "wrapper">
            <div className = "imgWrapper">
                  <img src = { profilePic} alt = "Mitchell Profile Picture"/>
            </div>
          </div>
        </div>        
      </div>
    </div>
  )
}
 
export default AboutMe;