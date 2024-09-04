import {React , useState , useEffect } from 'react';
import projectsData from './projects.json' ;
import { NavLink, Outlet } from 'react-router-dom';
import './Projects.css'

// {
//   "projectName": "travel website" ,
//   "projectAttr": "travel-website"  ,
//   "projectDesc": "travel website is website build with HTML, CSS, JS, and SASS. It is consist of 5 pages in responsive design for all screens. in this design we used AOS liberary to make it more dynamic and more attractive." ,
//   "projectURL": "https://toqa-25.github.io/travel-website/",
//   "projectImg": "travel-website.png"
// }

// https://github.com/Toqa-25/project-json/blob/main/projects.json

const Projects = () => {
  console.log("projectsData")
  console.log(projectsData)
  return (
    <div className="container projects">
      <div className="projects-btns">
        <NavLink to="Games" className="projects-btn btn"> Games </NavLink>
        <NavLink to="figma" className="projects-btn btn"> figma </NavLink>
      </div>
      <Outlet />
      <div className="Projects-items">
          {projectsData.map((item) => {
            return (
              <div className="project-item">
                <h5 className="capitalize">{item.projectName}</h5>
                <img src={require('./../../images/portfolio/')} alt="" className="project-img" />
                 
               
              </div>


            )
          })}
      </div>
    </div>
  )
}

export default Projects
