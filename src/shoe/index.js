import React from "react";
import "./shoe.css";
import Header from "../header";
import Footer from "../footer";
const Shoe = () => {
  return (
    <div>
		<Header/>
        <div className="cleaningOuter shoe">
            <div className="container">
                <div className="dataBoxInfo">
                    <h3>SHOE SERVICE</h3>
                    <p>From cleaning and polishing to repairs and full restorations, we bring your shoes back to life with expert care. Preserve their style, comfort, and durability with our specialized services.</p>
                    <div><span className="washingLiner"></span></div>
                </div>
                <div class="perfectInfo">
                  <p>Soles may carry you, but only clean shoes leave a lasting impression." 
                 <br/> –  Winston Churchill</p>
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

export default Shoe;
