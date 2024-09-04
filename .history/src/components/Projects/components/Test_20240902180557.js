import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import projectsData from './../../../draftTest.json' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Test = () => {
  const param = useParams()
  const [selectedProjects , setSelectedProjects ] = useState()
  console.log(Object.keys(projectsData))
  console.log(projectsData[param.id])
  console.log(param)
  console.log(param.id)
  return (
    <div>
    Test
    
    </div>
  )
}

export default Test