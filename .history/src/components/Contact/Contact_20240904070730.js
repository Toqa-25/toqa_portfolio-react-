import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
  
  // <li class="contact-list-item">
  //     <a href="#">

  //         <FontAwesomeIcon icon="fa-brand fa-whatsapp" />
  //         <span class="contact-item-text capitalize">+201288859104</span>
  //     </a>
  // </li>
  // <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
  // <FontAwesomeIcon icon="fa-brand fa-github" />
  return (
    <div className="contact-items">
    <ul class="contact-list">
                        <li class="contact-list-item">
                            <Link to="https://github.com/Toqa-25">
                                <FontAwesomeIcon icon="fa-brand fa-github" />
                                <span class="contact-item-text capitalize">github</span>
                            </a>
                        </li>
                        <li class="contact-list-item">
                            <a href="linkedin.com/in/toqa-abd-elsalam-656352184">
                                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                                <span class="contact-item-text capitalize">linkedIn</span>
                            </a>
                        </li>
                       
                    </ul>
    </div>
  )
}

export default Contact
