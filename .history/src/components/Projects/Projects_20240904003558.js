import {React , useState } from 'react';
import projectsData from './projects.json' ;
import { Link,  Outlet , useParams} from 'react-router-dom';
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Projects = () => {
   const param = useParams()
    let paramName = param.id
    let selectedProjects = projectsData[paramName]
    const [hideList , setHideList] = useState(true)
    const hideListFun = () => {
      setHideList(!hideList)
      console.log(hideList)
    }
    
      console.log(projectsData[paramName])
      console.log(selectedProjects)
  return (
    <div className="container projects flex-column">
      <h2 className="capitalize projects-header page-header">our projects </h2>
      <div className="projects-list" >
        <div className="capitalize projects-list-header" onClick={hideListFun}> 
          projects 
          <FontAwesomeIcon icon="fa-solid fa-caret-down " className="drop-icon"/>
        </div>
        <ul className={"projects-list-items " + (hideList && "hide")} >    
          <li  className="capitalize projects-list-item"> <Link to="/projects">All</Link> </li>
          <li  className="capitalize projects-list-item"> <Link to="/SCSS_Projects">SCSS</Link> </li> 
          <li  className="capitalize projects-list-item"> <Link to="/Figma_Projects">Figma</Link> </li>
          <li  className="capitalize projects-list-item"> <Link to="/Games">Games</Link> </li> 
          <li  className="capitalize projects-list-item"> <Link to="/Tools">Tools</Link></li>
          <li  className="capitalize projects-list-item"> <Link to="/React_Projects">React</Link> </li>
        </ul>
      </div>
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
