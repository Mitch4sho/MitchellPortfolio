import React, { useEffect } from "react"
import './App.css';
import AboutMe from "./About/About";
import Contact from "./Contact/Contact";
import Project from "./Projects/Project"; 
import Aos from "aos";
import "aos/dist/aos.css";

// to make Nav bar disappear and reappear 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
} 

function App(){
  useEffect(()=>{
    Aos.init({ once: true });
  });

  return (
    <div>
      <div className="App">
        <header id = "navbar">
          <nav className = "navigation">
            <div className = "logo" data-aos = "fade-right" data-aos-delay="0">Mitchell Oliver</div>
            <div className = "navigationSub">
              <ol>
                <li data-aos = "fade-up" data-aos-delay="100"><a href ="#aboutMe" className="item">About</a></li>
                <li data-aos = "fade-up" data-aos-delay="200"><a href ="#work" className="item">Work</a></li>
                <li data-aos = "fade-up" data-aos-delay="300"><a href ="#contact" className="item">Contact</a></li>
              </ol>
              <div>
                <a href ="" className="resumeButton" data-aos = "fade-up" data-aos-delay="1400">Resume</a>
              </div>
            </div>
          </nav>
        </header>
        </div>


        <div id = "content">
            <main>
              <section className = "hero"> 
                <h1 className = "intro" data-aos = "fade-right" data-aos-delay="600">Hello, my name is</h1>
                <h2 className = "bigHeading" data-aos = "fade-right" data-aos-delay="900">Mitchell Oliver</h2>
                <h3 className = "bigHeading" data-aos = "fade-right" data-aos-delay="1000">I Make Things for the internet</h3>
                <p data-aos = "fade-up" data-aos-delay="1200">
                I'm a web developer based in Riverside, CA centered in building
                websites, applications, and everything else in between
                </p>
                <a href ="mailto:MitchellOliver1991@gmail.com" className = "emailLink" data-aos = "fade-up" data-aos-delay="1400">Get in touch</a>
              </section>
            </main>
            <section className = "aboutMe" id = "aboutMe">
              <AboutMe />
            </section>
            <section className = "projects" id = "work">
              <Project />
            </section>
            <section className = "contact" id = "contact">
              <Contact />
            </section>
        </div>
      </div>
  );
}

export default App;
