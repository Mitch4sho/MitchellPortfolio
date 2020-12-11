import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import AboutMe from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Work from "./Work"; 

function App(){
  return (
    <Router>
      <div className="App">

        {/* Paths for Links */}
        <Route exact path = "/" components = {AboutMe} />
        <Route path = "/contact" components = {Contact}/>
        <Route path = "/projects" components = {Project}/>
        <Route path = " /work" components = {Work}/>

        <header>
          <nav className = "navigation">
            <div><Link className = "logo">Mitchell Oliver</Link></div>
            <div className = "navigationSub">
              <ol>
                <li><Link to ="/" className="item">About</Link></li>
                <li><Link to ="/contact" className="item">Experience</Link></li>
                <li><Link to ="/projects" className="item">Work</Link></li>
                <li><Link to ="/work" className="item">Contact</Link></li>
              </ol>
              <div>
                <Link to ="" className="resumeButton">Resume</Link>
              </div>
            </div>
          </nav>
        </header>
        </div>
        <div id = "content">
          <main>
            <section className = "hero"> 
              <h1 className = "intro">Hello, my name is</h1>
              <h2 className = "bigHeading">Mitchell Oliver</h2>
              <h3 className = "bigHeading">I Make Things for the internet</h3>
              <p>
              I'm a web developer based in Riverside, CA centered in building
              websites, applications, and everything else in between
              </p>
              <a href ="mailto:MitchellOliver1991@gmail.com" className = "emailLink">Get in touch</a>
            </section>
          </main>
          <section>
            
          </section>
        </div>
      </Router>
  );
}

export default App;
