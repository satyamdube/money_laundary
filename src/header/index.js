import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header className="header-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
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
            <ul className="navbar-nav action-buttons">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item  dropdown">
                <a className="nav-link" href="#">
                  OUR SERVICES{" "}
                  <span>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      aria-current="page"
                      className="dropdown-item"
                      href="/services"
                    >
                      Laundry
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/seo-digital-marketing/">
                      Steam Press
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/website-&amp;-applications"
                    >
                      Dry Cleaning
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/our-skillsets">
                      Pre and Post Spotting
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/our-skillsets">
                      Collar and Cuff Cleaning
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/our-skillsets">
                      Alterations and Repairs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/our-skillsets">
                      Shoe Cleaning and Repair
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOW WE WORK
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  OUR PRICING
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-auto bookNow">
             <a href=""><img src="./images/bookNow.png" alt="Book Now"/></a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
