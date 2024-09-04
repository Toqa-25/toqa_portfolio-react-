import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css'
import { Link } from 'react-router-dom'

// <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
const Home = () => {
  return (
    <div className="container  home flex-column">
      <div className="home-content">
        <div className="home-info">
          <h1 className="special-color capitalize sec-special-font" > hi, </h1> 
          <h2 className=" capitalize sec-special-font">i'm
          <span className="special-color coder-name  "> toqa, </span>  
          </h2>
          <p className=" capitalize desc coder-desc ">
              passionate frontend web developer with 3 years of experience creating user friendly websites
              <Link className="arrow-icon icon" to="./projects">
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />             
              </Link>
          </p>
          <div className="skills">
            <span className="skill html" data-text="html">html</span>
            <span className="skill css" data-text="css">css</span>
            <span className="skill js" data-text="js">js</span>
            <span className="skill scss" data-text="scss">scss</span>
            <span className="skill react" data-text="react">react</span>
          </div>
        </div>
        <span className="responsive"></span>
        <br/>
        <span className="heigh-quilty" data-text="high quilty">high quilty</span>
    </div>
    </div>
  )
}

export default Home
