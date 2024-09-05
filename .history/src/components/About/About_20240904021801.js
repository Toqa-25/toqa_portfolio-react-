import React from 'react'

const About = () => {
  return (
    <div className="nav">   
    <div className="flex-column  bar" onClick={showHeaderFun}>
        <FontAwesomeIcon icon="fa-solid fa-xmark " className={showHeader && " show-xmark"} />   
    </div>  
    <div className={"header flex-column " + (showHeader && " show-header")} >                      
        <div className="logo" onClick={hideHeaderFun}>
            <Link to="/"><span className="special-font special-color">t</span>oqa</Link>               
        </div>
        <ul className={"header-list flex-column" }>
            <li className="header-list-item special-color" onClick={hideHeaderFun}>
                <NavLink to="/projects" className="special-color"> <FontAwesomeIcon icon="fa-solid fa-folder-open" className="icon"/> <span> Projects </span> </NavLink>
            </li>
            <li className="header-list-item " onClick={hideHeaderFun}>
                <NavLink to="/about" > <FontAwesomeIcon icon="fa-solid fa-user " className="icon" /> <span> about me </span>  </NavLink>
            </li>
            <li className="header-list-item " onClick={hideHeaderFun}>
                <NavLink to="/services"> <FontAwesomeIcon icon="fa-solid fa-code" className="icon" /> <span> services </span> </NavLink>
            </li>
            <li className="header-list-item " onClick={hideHeaderFun} >
                <NavLink to="/contact"> <FontAwesomeIcon icon="fa-solid fa-comments" className="icon" /> <span> contact me </span>  </NavLink>
            </li>
    
        </ul>
    </div>
</div>
  )
}

export default About