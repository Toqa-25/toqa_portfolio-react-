import {React , useState , useEffect} from 'react'
import projectsData from './projects.json' ;

import axios from 'axios'

// https://github.com/Toqa-25/project-json/blob/main/projects.json

const Projects = () => {

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then(data=> console.log(data))
 

console.log(projectsData)
  return (
    <div className="container">
      Projects
    </div>
  )
}

export default Projects
