import React from 'react';
import './header.css';
const Header = () => {
  return (
    <header className='header-top'>
      <div className="header-top-inr hidden-xs">
			<div className="container">
				<ul className="list-inline pull-left">
					<li><a href="mailto:support@moneylaundry.com">support@moneylaundry.com</a></li>
					<li>Helpline: <a href="tel:044 4745 3535">044 4745 3535</a> (8.30AM - 6PM)</li>
				</ul>
				<span className="pull-right">Laundry for all</span>
			</div>
		</div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="/">
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
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
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
                  <a className="nav-link" href="#">About</a>
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
                <li className="nav-item">
                  <a className="nav-link btn-style" href="#">Book Now</a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </header>
  );
};

export default Header;
