import React from "react";
import "./alterations.css";
import Header from "../header";
import Footer from "../footer";
const Alterations = () => {
  return (
    <div>
		<Header/>
		<div className="cleaningOuter alter">
            <div className="container">
                <div className="dataBoxInfo">
                    <h3>ALTERATIONS AND REPAIRS</h3>
                    <p>We tailor your garments to perfection, ensuring they fit your needs and style seamlessly. From precise alterations to invisible repairs, our experts ensure your clothes feel as good as new while matching your unique preferences.</p>
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

export default Alterations;
