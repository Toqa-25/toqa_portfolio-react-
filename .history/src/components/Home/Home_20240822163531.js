import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css'

const Home = () => {
  return (
    <div className="container  home">
      <div className="home-content">
      <div className="home-info">
        <h1 className="special-color capitalize sec-special-font" > hi, </h1> 
        <h2 className=" capitalize sec-special-font">i'm
        <span className="special-color coder-name  "> toqa, </span>  
        </h2>
        <p className=" capitalize desc coder-desc ">
            passionate frontend web developer with 3 years of experience creating user friendly websites
            <Link className="arrow-icon icon" to="p">
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </Link>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Home
