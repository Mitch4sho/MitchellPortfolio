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
            <div className = "hero"> 
              <h3>Hello, my name is</h3>
              <h1 className = "name">Mitchell Oliver</h1>
              <h1>Make Things for the internet</h1>
              <h1>
              I'm a web developer based in Riverside, CA centered in building
              websites, applications, and everything else in between
              </h1>
            </div>
          </main>
        </div>
      </Router>
  );
}

export default App;
