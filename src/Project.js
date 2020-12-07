import React from "react"
import { Thumbnail } from "./Thumbnail";
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail 
        link="/pigGame"
        image="https://www.thesprucecrafts.com/thmb/nbBxZ_-PixClFEYBFzKhSIpihXk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/red-and-blue-dice-646062378-5a8a376e8e1b6e00361382e3.jpg"
        title="Pig Game"
        category="Web Game"
      />
      <Thumbnail 
        link=""
        image=""
        title="Project 2"
        category=""
      />
      <Thumbnail 
        link=""
        image=""
        title="Project 3"
        category=""
      />
    </div>
  )
}
 
export default Projects;