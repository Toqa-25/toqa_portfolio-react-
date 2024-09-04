import {React , useState} from 'react'
import { Link , NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './../Main/Main.css'
import './Nav.css'

// <FontAwesomeIcon icon="fa-solid fa-bars" />    
// {"header flex-column" + showHeader ? "show-header" : ''}

const Nav = ({showHeader , }) => {
    // const [showHeader , setShowHeader] = useState(false);
    const showHeaderFun = () => {
        setShowHeader(!showHeader)
    }   
  return (
        <div className="nav">   
                <div className="flex-column  bar" onClick={showHeaderFun}>
                    <span className="bar-item"></span>     
                    <span className="bar-item"></span>     
                    <span className="bar-item"></span>     
                </div>  
                <div className={"header flex-column " + (showHeader && " show-header")} >                      
                    <div className="logo">
                        <Link to="/"><span className="special-font">t</span>oqa</Link>               
                    </div>
                    <ul className={"header-list flex-column" }>
                        <li className="header-list-item special-color">
                            <NavLink to="/projects" className="special-color"> <FontAwesomeIcon icon="fa-solid fa-folder-open" className="icon"/> <span> Projects </span> </NavLink>
                        </li>
                        <li class="header-list-item ">
                            <NavLink to="/about"> <FontAwesomeIcon icon="fa-solid fa-user " className="icon" /> <span> about me </span>  </NavLink>
                        </li>
                        <li class="header-list-item ">
                            <NavLink to="/services"> <FontAwesomeIcon icon="fa-solid fa-code" className="icon" /> <span> services </span> </NavLink>
                        </li>
                        <li class="header-list-item ">
                            <NavLink to="/contact"> <FontAwesomeIcon icon="fa-solid fa-comments" className="icon" /> <span> contact me </span>  </NavLink>
                        </li>
                
                    </ul>
                </div>
        </div>
  )
}
export default Nav

// <div className=" close" onClick={hideHeaderFun} >
// <span className="close-item"></span>     
// <span className="close-item"></span>       
// </div>

// const hideHeaderFun = () => {
//     setShowHeader(false)
// }