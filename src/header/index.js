import React from 'react';
import './header.css';
const Header = () => {
  return (
    <header className='header-top'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">
              <img src="./images/logo.png" alt="logo"/>
            </a>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto action-buttons">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item  dropdown">
                  <a className="nav-link" href="#">Our Services <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></a>
                  <ul className="dropdown-menu">
                    <li><a aria-current="page" className="dropdown-item" href="/services">Laundry</a></li>
                    <li><a className="dropdown-item" href="/seo-digital-marketing/">Steam Press</a></li>
                    <li><a className="dropdown-item" href="/website-&amp;-applications">Dry Cleaning</a></li>
                    <li><a className="dropdown-item" href="/our-skillsets">Pre and Post Spotting</a></li>
                    <li><a className="dropdown-item" href="/our-skillsets">Collar and Cuff Cleaning</a></li>
                    <li><a className="dropdown-item" href="/our-skillsets">Alterations and Repairs
                    </a></li>
                    <li><a className="dropdown-item" href="/our-skillsets">Shoe Cleaning and Repair</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">What do we do</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">How We Work</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Our story</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Price</a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </header>
  );
};

export default Header;
