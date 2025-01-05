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
                <div className="dataBoxInfo">
                    <h3>PRE AND POST SPOTTING</h3>
                    <p>We go beyond cleaning with meticulous pre and post-spotting care, treating every stain based on its type and fabric. Our expertise ensures flawless results while preserving the integrity of your garments</p>
                    <div><span className="washingLiner"></span></div>
                </div>
            </div>
        </div>
		{/* <div className="customScenting">
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
			</div> */}
		<Footer/>
    </div>
  );
};

export default Spotting;
