import './App.css';
import {React , useState} from 'react'
import {Routes , BrowserRouter, Route , Link} from 'react-router-dom'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Nav from './components/Nav/Nav';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Games from './components/Projects/components/Games
import FigmaProjects from './components/Projects/components/FigmaProjects
import Tools from './components/Projects/components/Tools
import D from './components/Projects/components/FigmaProjects
import FigmaProjects from './components/Projects/components/FigmaProjects

// <Home />
// <BrowserRouter>
// </BrowserRouter>
function App() {
  return (
        <div className="App">
          <Nav />
          <Routes>
            <Route path ="/" element={<Home  />}> </Route>
            <Route path ="/projects" element={<Projects />} >
              <Route path ="figma" element={<FigmaProjects />} /> 
              <Route path ="Games" element={<Games />}> </Route>
              <Route path ="Tools" element={<Tools />}> </Route>
              <Route path ="ReactProjects" element={<ReactProjects />}> </Route>
              <Route path ="ScssProjects" element={<ScssProjects />}> </Route>
            </Route>
            <Route path ="/about" element={<About />}> </Route>
            <Route path ="/services" element={<Services />}> </Route>
            <Route path ="/contact" element={<Contact />}> </Route>       
          </Routes>
          </div>
      );
    }

    export default App;
    library.add(fab, fas, far)
    
    // <button className="capitalize contact-btn btn"><Link to="/contact">contact me</Link></button>
// <div className="contact-btn btn">
// </div>