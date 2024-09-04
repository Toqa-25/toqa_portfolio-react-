import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import projectsData from './../../../draftTest.json' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Test = () => {
  const param = useParams()
   let paramName = param.id
   let projectsName = projectsData[paramName]

  const [selectedProjects , setSelectedProjects ] = useState()
  console.log(projectsData[paramName])
  console.log(typeof(projectsName))
  console.log(projectsName)
 
  projectsName.forEach((item) => {
    console.log(item.projectName)
  })
  return (
    <div className="container">
      Test
      <button><Link></button>
      <div className="Projects-items mains">
      {projectsName.map((item) => {
        return (
          <div className="flex-column project-item">
            <img src={ require(`./../../../images/portfolio/${item.projectImg}`)} alt="" className="project-img" />
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

export default Test