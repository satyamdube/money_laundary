import React from "react";
import "./spotting.css";
import Header from "../header";
import Footer from "../footer";
const Spotting = () => {
  return (
    <div>
		<Header/>
		<div className="cleaningOuter spotting">
            <div className="container">
                <div className="dataBoxInfoSpotting">
                    <h3>PRE AND POST SPOTTING</h3>
                    <p>We go beyond cleaning with meticulous pre and post-<br/>spotting care, treating every stain based on its type and <br/>fabric. Our expertise ensures flawless results while <br/>preserving the integrity of your garments</p>
                    <div><span className="washingLiner"></span></div>
                </div>
            </div>
        </div>
		<Footer/>
    </div>
  );
};

export default Spotting;
