import React from "react";
import "./how_we_work.css";
import Header from "../header";
import Footer from "../footer";
const HowWeWork = () => {
  return (
    <div>
		<Header/>
		<div className="meetOurFounder">
			<div className="headingInfoworks">
				<h3>HOW IT WORKS?</h3>
			</div>
			<div className="outerSectionIonfoData">
		        <img src="./images/howItWork.jpg" alt="How it work"/>
		    </div>	
		</div>
		<Footer/>
    </div>
  );
};

export default HowWeWork;
