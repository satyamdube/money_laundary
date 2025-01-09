import React from "react";
import { NavLink } from 'react-router-dom';
import "./header.css";
const Header = () => {
  return (
    <header className="header-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="d-flex align-items-center justify-content-between w-100">
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
               <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" to="/about">ABOUT US</NavLink>
              </li>
              <li className="nav-item  dropdown">
               <NavLink  className="nav-link" to="/our_services">
                  OUR SERVICES{" "}
                  <span>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink 
                      aria-current="page"
                      className="dropdown-item"
                      to="/cleaning"
                    >
                      CLEANING
                    </NavLink >
                  </li>
                  <li>
                    <NavLink  className="dropdown-item" to="/steam_iron">
                       STEAM IRON
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      className="dropdown-item"
                      to="/alterations"
                    >
                      ALTERATIONS AND REPAIRS
                    </NavLink> 
                  </li>
                  <li>
                  <NavLink  className="dropdown-item" to="/spotting">
                     PRE AND POST SPOTTING
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  className="dropdown-item" to="/shoe">
                        SHOE SERVICE
                     </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" to="/how_we_work">
                  HOW WE WORK
                  </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" to="/our_pricing">
                  OUR PRICING
                </NavLink >
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" to="/contact">
                  CONTACT US
                </NavLink >
              </li>
            </ul>
          </div>
          <div className="ml-auto bookNow pe-3">
             <NavLink  to="/book_now"><img src="./images/bookNow.png" alt="Book Now"/></NavLink >
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
