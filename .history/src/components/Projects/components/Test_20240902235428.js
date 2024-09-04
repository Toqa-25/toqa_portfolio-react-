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
 
  {projectsName.forEach((item) => {
    console.log{item.projectName}
  })}
  return (
    <div className="container">
      Test
      {projectsName.forEach((item) => {
        return (
          <h3>{item.projectName}</h3>
        )
      })}
      
    </div>
  )
}

export default Test