import './App.css';
import {React , useState} from 'react'
import {Routes , BrowserRouter, HashRouter, Route , Link} from 'react-router-dom'
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




function App() {
  return (
        <div className="App">
          <BrowserRouter basename="/toqa_portfolio-react-" >
            <Nav />
                <Routes>
                  <Route path ="/"  element={<Home  />}> </Route>
                  <Route path =":id" element={<Projects />}> </Route>         
                  <Route path ="/about" element={<About />}> </Route> 
                  <Route path ="/services" element={<Services />}> </Route>                     
                </Routes>
            </BrowserRouter>
        </div>
      );
    }

    export default App;
    library.add(fab, fas, far)
    
