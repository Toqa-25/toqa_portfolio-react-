import {React , useState , useEffect} from 'react'

import axios from 'axios'

// https://github.com/Toqa-25/project-json/blob/main/projects.json

const Projects = () => {
  // useEffect(() => {
  //   fetch("https://github.com/Toqa-25/project-json/blob/main/projects.json")
  //   .then(res => res.json)
  //   .then(data=> console.log(data))
  // }, [])
  fetch("https://github.com/Toqa-25/project-json/blob/main/projects.json")
  .then(res => res)
  .then(data=> console.log(data))
  return (
    <div className="container">
      Projects
    </div>
  )
}

export default Projects
