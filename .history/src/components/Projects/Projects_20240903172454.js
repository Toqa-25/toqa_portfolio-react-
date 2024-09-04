import {React } from 'react';
import projectsData from './projects.json' ;
import { Link,  Outlet , useParams} from 'react-router-dom';
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Projects = () => {
   const param = useParams()
    let paramName = param.id
    let projectsName = projectsData[paramName]
    
      console.log(projectsData[paramName])
      console.log(projectsName)
  return (
    <div className="container projects flex-column">
      <h2 className="capitalize projects-header page-header">our projects </h2>
      <div className="projects-btns" >
        <div className="projects">projects</div>
        <ul className="projects-sections">
          <li value="projects" className="capitalize" > Projects </li>
          <li value="Figma" className="capitalize"> Figma </li>
          <li value="Tools" className="capitalize"> Tools</li>
          <li value="ReactProjects" className="capitalize"> React </li>
          <li value="SCSS" className="capitalize"> SCSS </li> 
        </ul>
      </div>
      <Outlet />
      <div className="Projects-items mains">
      {projectsData.map((item) => {
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
