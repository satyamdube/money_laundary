import React from "react";
import "./how_we_work.css";
import Header from "../header";
import Footer from "../footer";
const HowWeWork = () => {
  return (
    <div>
		<Header/>
		<div className="meetOurFounder">
			<div className="headingInfo">
				<h3>HOW WE WORK</h3>
			</div>
			<div className="customScenting">
				<div className="container">
					<h4>CUSTOM SCENTING</h4>
					<p>We Let you choose what you want your <br/> clothes to smell like.</p>
					<div><span className="washingLiner"></span></div>
					<div className="cntInfoCus">
						<div className="leftCbtText">
							<h2>PICK YOUR SCENT</h2>
							<p>"Good Smell is powerful. It speaks directly to our emotions, memories, and imagination."— Aristotle</p>
						</div>
						<div></div>
					</div>
					<span className="linerInfo" style={{width:"234px"}}></span>
				</div>
			</div>
		</div>
		<Footer/>
    </div>
  );
};

export default HowWeWork;
