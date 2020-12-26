import React, { useEffect } from "react"
import "./Contact.css"
import Aos from "aos";
import "aos/dist/aos.css";
 
function Contacts(props) {
   useEffect(()=>{
    Aos.init({ });
  });

  return (
    <div>
      <h1 className = "title" data-aos = "fade-up" data-aos-delay="100">Contact Me</h1>
      <p data-aos = "fade-up" data-aos-delay="200">
        I am currently looking for any new opportunities. Feel free to message me for any inquires! I will get back to you as soon as possible.
      </p>
      <a className = "emailLink" href="mailto:MitchellOliver1991@gmail.com" data-aos = "fade-up" data-aos-delay="400">Email Me</a>
    </div>
  )
}
 
export default Contacts;