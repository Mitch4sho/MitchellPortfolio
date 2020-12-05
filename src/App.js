import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from "./Components/AboutMe/About";
import Contact from "./Components/ContactInformation/Contact";
import Project from "./Components/ProjectExperience/Project";
import Work from "./Components/WorkExperience/Work"; 

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
                <a href="#" className="resumeButton">Resume</a>
              </div>
            </div>
          </nav>
        </header>
        </div>
      </Router>
  );
}

export default App;
