import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import {Reviews} from 'Reviews.json'

const About = () => {
  return (
      <div className="container about">
        <h2 className="capitalize page-header">About me </h2>
        <div className="about-info">
          <p className=" capitalize desc coder-desc ">
            passionate frontend web developer with 3 years of experience creating user friendly websites
            <Link className="arrow-icon icon" to="./projects">
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />             
            </Link>
          </p>
        </div>
        <div className="clients-reviews">
        {Reviews.map((item , index) => {
          return (
              <img src={ require(`./../../images/reviews/${item.projectImg}`)} alt="" className="review-img" />
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

export default About
