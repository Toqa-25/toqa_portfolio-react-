import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Reviews from './reviews.json'



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
          <p class="jop-description ">I start my  journey of learning from <a href="https://elzero.org" class="special-them-color capitalize" target="_blank" rel="noopener noreferrer">elzero academy</a>, and  I continue  in it because I'm passionate about what i do </p>
        </div>
        <div className="clients-reviews">
          {Reviews.map((item , index) => {
            return (
              <div className="review-img" key={index} >
                  <img src={ require(`./../../images/reviews/${item.reviewImg}`)} alt="" className="" />                       
              </div >
                )
              })}
        </div>
      </div>
    
  )
}

export default About
