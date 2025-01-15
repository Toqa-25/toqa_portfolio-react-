import {React , useState , useEffect} from 'react';
import { Link , NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../Main/Main.css';
import './Nav.css';
import Contact from '../Contact/Contact';
import Folder from './../../images/sections/folder-2.svg';
import Wuser from './../../images/sections/women.svg';
import service from './../../images/sections/code.svg';
import User from './../../images/sections/lady.svg';
import user from './../../images/sections/girl.svg';

// <FontAwesomeIcon icon="fa-solid fa-folder-open" className="icon"/>
// <FontAwesomeIcon icon="fa-solid fa-user " className="icon" /> 
// <FontAwesomeIcon icon="fa-solid fa-code" className="icon" />


const Nav = () => {
    const [showHeader , setShowHeader] = useState(false);
    const showHeaderFun = () => {
        setShowHeader(!showHeader)
    }   
    const hideHeaderFun = () => {
        setShowHeader(false)
        console.log("hide")
    }  
  
   
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
                            <NavLink to="/projects" className="special-color"> 
                                <img src={Folder} alt="" />                             
                                 <span className="sec-name"> Projects </span> 
                            </NavLink>
                                 </li>
                        <li className="header-list-item  user" onClick={hideHeaderFun}>
                            <NavLink to="/about" >                              
                                 <img src={Wuser} alt="" />                             
                                <span className="sec-name"> about me </span>  
                            </NavLink>
                        </li> 
                        <li className="header-list-item " onClick={hideHeaderFun}>
                            <NavLink to="/services"> 
                                <img src={service} alt="" />  
                                <span className="sec-name"> services </span> 
                            </NavLink>
                        </li>           
                    </ul>
                    <Contact />
                    </div>
                    <button className="btn contact-btn capitalize" onClick={showHeaderFun}> contact me </button>
        </div>
  )
}
export default Nav



