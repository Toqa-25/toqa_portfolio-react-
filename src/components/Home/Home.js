import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css'
import { Link } from 'react-router-dom'
import SkillsShow from '../SkillsShow/SkillsShow'



const Home = () => {
  return (
    <div className="container  home ">
      <div className="home-content ">
          <div className="animated words">
            <span className="responsive word capitalize"> responsive </span>
            <span className="heigh-quilty word capitalize"> high quilty </span>
            <span className="html word uppercase"> html</span>
            <span className="css word uppercase">css </span>
            <span className="js word uppercase"> js </span>
            <span className="scss word uppercase"> scss </span>
            <span className="react word capitalize"> react </span>
          </div>
        <div className="home-info">
          <h1 className="special-color capitalize sec-special-font" > hi, </h1> 
          <h2 className=" capitalize sec-special-font">i'm
          <span className="special-color coder-name  "> toqa, </span>  
          </h2>
          <p className=" capitalize desc coder-desc ">
              a passionate Frontend Developer with 3 years of experience turning ideas into responsive, user-friendly web interfaces. I specialize in converting designs into clean, efficient code using HTML, CSS, JavaScript, and Bootstrap. Let's build something amazing together
              <Link className="arrow-icon icon" to="./projects">
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="icon" />             
              </Link>
          </p>
          </div>
          
          <SkillsShow />
        </div>
    </div>
  )
}

export default Home
