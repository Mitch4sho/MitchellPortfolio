import React from "react"
import { Thumbnail } from "./Thumbnail";
 
function Projects(props) {
  return (
    <div>
    <h2 className = "projects">Projects</h2>
      <div>
            <Thumbnail 
              link="/pigGame"
              image=""
              title="Project 1"
              category=""
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
    </div>
  )
}
 
export default Projects;