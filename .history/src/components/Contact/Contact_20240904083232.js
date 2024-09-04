import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  
  // <li class="contact-list-item">

  //         <FontAwesomeIcon icon="fa-brand fa-whatsapp" />
  //         <span class="contact-item-text capitalize">+201288859104</span>
  // </li>
  // <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
  // <FontAwesomeIcon icon="fa-brand fa-github" />
  return (
    <div className="contact">
    <ul class="contact-list">
                        <li className="contact-list-item">
                            <Link to="https://github.com/Toqa-25" className="special-color">
                                <FontAwesomeIcon icon="fa-brands fa-github" className="contact-icon" />
                                <span class="contact-item-text capitalize">github</span>
                            </Link>
                        </li>
                        <li className="contact-list-item">
                            <Link to="linkedin.com/in/toqa-abd-elsalam-656352184" className="special-color">
                                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="contact-icon"/>
                            </Link>
                        </li>
                       
                    </ul>
    </div>
  )
}

export default Contact
