import {React , useState , useEffect } from 'react';
import projectsData from './projects.json' ;
import { NavLink, Outlet } from 'react-router-dom';

// import axios from 'axios'

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
    </div>
  )
}

export default Projects
