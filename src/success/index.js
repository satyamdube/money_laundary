import React, { useState } from "react";
import "./success.css";
import Header from "../header";
import Footer from "../footer";


const SuccessPage = () => {
  

  return (
    <div>
        <Header />
        <div className="success-container">
      <h1>THANK YOU FOR YOUR ORDER, OUR TEAM WILL</h1><br />
      <h1>GET IN TOUCH SHORTLY.</h1>
      <span className="linerInform"></span>
      </div>
      <Footer />
    </div>
  );
    
};

export default SuccessPage;
