import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import projectsData from './../../../draftTest.json' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Test = () => {
  const param = useParams()
  const [selectedProjects , setSelectedProjects ] = useState()
  console.log(projectsData)
  console.log(Object.keys(projectsData))
  console.log( "selected projects", projectsData[param.id])
  console.log(param)
  console.log(param.id)
   setSelectedProjects(projectsData[param.id])
   let projects = 
  return (
    <div>
    Test
      { console.log("tst" , selectedProjects)}
      <div className="Projects-items mains">
      {selectedProjects.map((item) => {
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