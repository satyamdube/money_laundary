import React from "react";
import "./steamIron.css";
import Header from "../header";
import Footer from "../footer";
const StreamIron = () => {
  return (
    <div>
		<Header/>
        <div className="cleaningOuter streamInfo">
            <div className="container">
                <div className="dataBoxInfo">
                    <h3>STEAM IRON</h3>
                    <p>Every garment is expertly steamed, leaving it impeccably crease-free and Every garment is delivered hung, ready to wear. </p>
                    <div><span className="washingLiner"></span></div>
                </div>
                <div class="perfectInfo">
                  <p>"Perfectly ironed clothes are the silent heralds of dignity and elegance."<br/> — Oscar Wilde</p>
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

export default StreamIron;
