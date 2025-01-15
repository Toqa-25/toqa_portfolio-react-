import {React , useState } from 'react';
import projectsData from './projects.json' ;
import { Link,  useParams} from 'react-router-dom';
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Projects = () => {
   const param = useParams()
    let paramName = param.id
    let selectedProjects = projectsData[paramName]
    console.log (projectsData)
    console.log (selectedProjects)
    const [hideList , setHideList] = useState(true)
    const hideShowListFun = () => {
      setHideList(!hideList)
      console.log(hideList)
    }
    const hideListFun = () => {
      setHideList(true)
      console.log("true.")
    }
   
  return (
    <div className="container projects flex-column">
      <h2 className="capitalize projects-header page-header">my projects </h2>
      <div className="projects-list" >
        <div className="capitalize projects-list-header " onClick={hideShowListFun}> 
          projects 
          <FontAwesomeIcon icon="fa-solid fa-caret-down " className="drop-icon"/>
        </div>
        <ul className={"projects-list-items " + (hideList && "hide")} >    
          <li  className="capitalize projects-list-item" onClick={hideListFun} > 
              <Link to="/projects">All</Link>
          </li>
          <li  className="capitalize projects-list-item" onClick={hideListFun} > 
              <Link to="/Figma_Projects">Figma</Link>
          </li>
          <li  className="capitalize projects-list-item" onClick={hideListFun} > 
              <Link to="/SCSS_Projects">SCSS</Link>
          </li>
          <li  className="capitalize projects-list-item" onClick={hideListFun} > 
              <Link to="/Games">Games</Link>
          </li>
          <li  className="capitalize projects-list-item" onClick={hideListFun} > 
              <Link to="/Tools">Tools</Link>
          </li>
        </ul>
      </div>
      <div className="projects-items flex-column">
      {selectedProjects.map((item , index) => {
        return (
          <div className={  "project-items" + ((index===0) || (index % 2 === 0) ? " cross-project" : " ")} key={index}>
            <div className="project-item-info">
              <img src={ require(`./../../images/portfolio/${item.projectImg}`)} alt="" className="project-img" />
              <h4 className="capitalize project-name">
                {item.projectName} 
                <Link className="arrow-icon icon project-link" to={item.projectURL}>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right"  className="icon"/>             
                </Link>
              </h4>          
            </div>
            <div className="project-item-desc">
              <p className=" desc "> {item.projectDesc} </p>
            </div>
          </div>
            )
          })}
      </div>
    </div>
  )
}

export default Projects
