import React from 'react'
import { useParams } from 'react-router-dom'

const Test = () => {
  const param = useParams()
  const s[selectedP]
  console.log(param)
  console.log(param.id)
  return (
    <div>
    Test
    <div className="Projects-items test">
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

export default Test