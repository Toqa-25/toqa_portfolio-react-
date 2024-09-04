import {React , useState } from 'react';
import projectsData from './projects.json' ;
import { Link,  Outlet , useParams} from 'react-router-dom';
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Projects = () => {
   const param = useParams()
    let paramName = param.id
    let selectedProjects = projectsData[paramName]
    const [showList , setShowList] = useState(false)
    const showListFun = () 
    
      console.log(projectsData[paramName])
      console.log(selectedProjects)
  return (
    <div className="container projects flex-column">
      <h2 className="capitalize projects-header page-header">our projects </h2>
      <div className="projects-list" >
        <div className="projects">projects <FontAwesomeIcon icon="fa-solid fa-caret-down drop-icon" /></div>
        <ul className="projects-list-items">    
          <li  className="capitalize projects-list-item"> <Link to="/projects">All</Link> </li>
          <li  className="capitalize projects-list-item"> <Link to="/Figma">Figma</Link> </li>
          <li  className="capitalize projects-list-item"> <Link to="/Tools">Tools</Link></li>
          <li  className="capitalize projects-list-item"> <Link to="/React">React</Link> </li>
          <li  className="capitalize projects-list-item"> <Link to="/SCSS">SCSS</Link> </li> 
        </ul>
      </div>
      <select>
        <option value="one">one</option>
        <option value="two">two</option>
      </select>
      <div className="Projects-items mains">
      {selectedProjects.map((item) => {
        return (
          <div className="flex-column project-item">
            <img src={ require(`./../../images/portfolio/${item.projectImg}`)} alt="" className="project-img" />
            <h4 className="capitalize project-name">
              {item.projectName} 
              <Link className="arrow-icon icon project-link" to={item.projectURL}>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />             
              </Link>
            </h4>          
          </div>
            )
          })}
      </div>
    </div>
  )
}

export default Projects
