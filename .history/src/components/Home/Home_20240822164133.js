import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css'
import { Link } from 'react-router-dom'

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
            <Link className="arrow-icon icon" to="./projects">
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </Link>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Home
