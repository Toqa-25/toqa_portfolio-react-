import React from 'react';
import './../Main/Main.css';
import './Services.css';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import wordpressIcon from './../../images/icons/wordpress.svg';
import figmaIcon from './../../images/icons/figma.svg';
import responsiveIcon from './../../images/icons/responsive (1).svg';
import reactIcon from './../../images/icons/react.svg';
import Reviews from '../Review/Reviews';

const Services = () => {
  return (
    <div className="container services flex-column">
      <h2 className="page-header" > Services </h2>
      <div className="services-content flex-column">
        <h1 className="services-header special-color capitalize"> what can i do ? </h1>
        <ul className="services-items flex-column">
          <li className="service-item">
            <div className="service-icon">
              <img src={wordpressIcon} alt="" className="icon-img" />
            </div>
            <div className="service-info">
              <p className="desc capitalize">
                convert wordpress websites into HTML, CSS, and JS responsive pages
                <Link className="service-link" to="https://toqa-25.github.io/Dr.Dan/">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right"  className="icon"/>  
                </Link>
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon">
              <img src={figmaIcon} alt="" className="icon-img" />
            </div>
            <div className="service-info">
              <p className="desc capitalize">
                convert figma designs into HTML, CSS, SCSS, and JS responsive websites
                <Link className="service-link" to="/figma">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right"  className="icon"/>  
                </Link>
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon">
              <img src={responsiveIcon} alt="" className="icon-img" />
            </div>
            <div className="service-info">
              <p className="desc capitalize">
                develope HTML, CSS, JS, SCSS, Bootstrap templete , websites, Games, single pages, and Tools
                <Link className="service-link" to="/projects">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right"  className="icon"/>  
                </Link>
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon">
              <img src={reactIcon} alt="" className="icon-img" />
            </div>
            <div className="service-info">
              <p className="desc capitalize">
                create react apps, and websites.<br/>
                this is my first website into react, but it will not be the last,
                it's fully responsive for all devices.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <Reviews />
    </div>
  )
}

export default Services
