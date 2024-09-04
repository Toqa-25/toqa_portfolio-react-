import {React , useState , useEffect} from 'react'
import projectsData from './projects.json'

import axios from 'axios'

// https://github.com/Toqa-25/project-json/blob/main/projects.json

const Projects = () => {

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(data=> console.log(data))
    .catch(err => console.log("error"))
    axios.get("https://github.com/Toqa-25/project-json/blob/main/projects.json")
    .then(data=> console.log(data))
    .catch(err => console.log("error"))
  })

  // fetch("https://github.com/Toqa-25/project-json/blob/main/projects.json")
  // .then(res => res)
  // .then(data=> console.log(data))
  axios.get("https://toqa-25.github.io/project-json/projects.json").then((res) => {
    let data = res.json()
    return data
}).then (results => {
    console.log (results)
})
  return (
    <div className="container">
      Projects
    </div>
  )
}

export default Projects
