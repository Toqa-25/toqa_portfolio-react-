import {React , useState , useEffect } from 'react';
import projectsData from './projects.json' ;
import projectsDataTest from './../../draftTest.json' ;
import { Link, NavLink, Outlet , useParams} from 'react-router-dom';
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Projects = () => {
 
  console.log(projectsDataTest)
  console.log(Object.keysprojectsDataTest.keys())
  console.log(projectsData)
  const[selectedProjects , setSelectedProjects] = useState()
  const param = useParams()
  const selectedProjectsFun =(e) => {
    console.log(e.target.value)
  }
  console.log("value")
  return (
    <div className="container projects flex-column">
      <h2 className="capitalize projects-header page-header">our projects </h2>
      <select className="projects-btns" onChange={selectedProjectsFun}>
        <option value="projects" className="capitalize" > Projects </option>
        <option value="FigmaProjects" className="capitalize"> Figma </option>
        <option value="Games" className="capitalize"> games</option>
        <option value="Tools" className="capitalize"> Tools</option>
        <option value="ReactProjects" className="capitalize"> React </option>
        <option value="ScssProjects" className="capitalize"> SCSS </option> 
      </select>
      <Outlet />
      <div className="Projects-items ">
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
