import React from "react";
import "./cleaning.css";
import Header from "../header";
import Footer from "../footer";
const Cleaning = () => {
  return (
    <div>
		<Header/>
		<div className="cleaningOuter">
            <div className="container">
                <div className="dataBoxInfo">
                    <h3>CLEANING</h3>
                    <p>Our cleaning process uses fabric-specific, eco-friendly <br/>chemicals tailored to the unique thread count and <br/>material of each garment. Whether it’s delicate silks, fine <br/>wools, or everyday wear, we ensure impeccable <br/>cleanliness while preserving the integrity and longevity <br/>of your clothes.</p>
                    <div><span className="cleaningLiner"></span></div>
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

export default Cleaning;
