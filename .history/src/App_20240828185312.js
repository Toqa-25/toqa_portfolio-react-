import './App.css';
import {React , useState} from 'react'
import {Routes , Route , Link} from 'react-router-dom'
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
import Games from './components/Projects/SpecialProjects/Games';
import FigmaProjects from './components/Projects/SpecialProjects/FigmaProjects';

// <Home />
function App() {
  return (
        <div className="App">
          <Nav />
          <Routes>
            <Route path ="/" element={<Home  />}> </Route>
            <Route path ="/projects" element={<Projects />}>
              <Route path ="FigmaProjects" element={<FigmaProjects />}> </Route>
              <Route path ="/Games" element={<Games />}> </Route>
             </Route>
            <Route path ="/about" element={<About />}> </Route>
            <Route path ="/services" element={<Services />}> </Route>
            <Route path ="/contact" element={<Contact />}> </Route>       
          </Routes>
          <button className="capitalize contact-btn btn"><Link to="/contact">contact me</Link></button>
        </div>
      );
    }

export default App;
library.add(fab, fas, far)

// <div className="contact-btn btn">
// </div>