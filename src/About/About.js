import React, { useEffect } from "react"
import "./About.css";
import ProfilePic from "../Assets/jpgImages/profileLarge.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


function AboutMe(props) {
  useEffect(()=>{
    Aos.init({ });
  });

  return (
    <div>
      <h2 className = "aboutMeHeading" data-aos = "fade-up" data-aos-delay="0">About Me</h2>
      <div className = "inner">
        <div className = "aboutMeSection" data-aos = "fade-up" data-aos-delay="100">
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
            <li data-aos = "fade-up" data-aos-delay="300">JavaScript (ES6+)</li>
            <li data-aos = "fade-up" data-aos-delay="400">React</li>
            <li data-aos = "fade-up" data-aos-delay="500">HTML</li>
            <li data-aos = "fade-up" data-aos-delay="600">CSS</li>
            <li data-aos = "fade-up" data-aos-delay="700">Git</li>
            <li data-aos = "fade-up" data-aos-delay="800">Docker</li>
          </ul>
        </div> 
        <div className = "styledPic" data-aos = "fade-up" data-aos-delay="200">
          <div className = "wrapper">
            <div className = "imgWrapper">
                  <img className = "profilePicture" src = {ProfilePic} alt = "Mitchell Profile Picture"/>
            </div>
          </div>
        </div>        
      </div>
    </div>
  )
}
 
export default AboutMe;