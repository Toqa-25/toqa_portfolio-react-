import {React , useState , useEffect} from 'react'

// https://github.com/Toqa-25/project-json/blob/main/projects.json

const Projects = () => {
  useEffect(() => {
    fetch("https://github.com/Toqa-25/project-json/blob/main/projects.json").
    then(res => res.json)
    .th
  })
  return (
    <div className="container">
      Projects
    </div>
  )
}

export default Projects
