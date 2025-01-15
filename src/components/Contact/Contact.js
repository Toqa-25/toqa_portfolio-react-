import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
 

  return (
    <div className="contact">
    <ul class="contact-list">
                        <li className="contact-list-item">
                            <Link to="https://github.com/Toqa-25" className="special-color">
                                <FontAwesomeIcon icon="fa-brands fa-github" className="contact-icon github" />
                            </Link>
                        </li>
                        <li className="contact-list-item">
                            <Link to="linkedin.com/in/toqa-abd-elsalam-656352184" className="special-color">
                                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="contact-icon linkedin"/>
                            </Link>
                        </li>
                        <li className="contact-list-item">
                            <Link to="https://wa.me/message/44IOYD72ZMI4G1" className="special-color">
                            <FontAwesomeIcon icon="fa-brands fa-whatsapp" className="contact-icon whatsapp"/>
                            </Link>
                        </li>
                       
                    </ul>
    </div>
  )
}

export default Contact
