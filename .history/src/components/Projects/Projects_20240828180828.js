import {React , useState , useEffect} from 'react';
import projectsData from './projects.json' ;

// import axios from 'axios'

// https://github.com/Toqa-25/project-json/blob/main/projects.json

const Projects = () => {
  console.log("projectsData")
  console.log(projectsData)
  return (
    <div className="container projects">
      <div className="projects-btns">
      <NavLink className="projects-btn btn">js</NavLink>
      <button className="projects-btn btn">js</button>
      </div>

      Projects
    </div>
  )
}

export default Projects
