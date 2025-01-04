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
			<div className="outerSectionIonfoData">
					<div className="container">
					<div className="how-it-works">
						<div className="flex-row">
						<div className="col-xs-12 col-sm-6 col-md-4 flex-item">
							<div className="hw-item">
							<img
								src="./images/five.png"
								alt="Laundry Service In Maraimalai Nagar Urapakkam"
							/>
							<h3>Place Order &amp; Pick Up</h3>
							You can walk-in to any of our outlets, give us a call, visit
							our website/google search dry cleaners in Chennai or online
							laundry service near me to schedule a pickup.{" "}
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4 flex-item">
							<div className="hw-item">
							<img
								src="./images/four.png"
								alt="Clothes Washing In Chennai"
							/>
							<h3>Washing</h3>
							We at Tidy Laundry value your garments. After your garments
							are collected, they are washed in the latest state-of-the-art
							imported professional machines, designated to give superior
							wash with minimum friction.{" "}
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4 flex-item">
							<div className="hw-item">
							<img
								src="./images/nine.png"
								alt="Premium Care Laundry Service"
							/>
							<h3>Drying</h3>
							It is essential to dry garments at a low heat and with minimum
							tumble. We are equipped with high capacity steam tumble dryers
							which are the latest computerized dryers and, are programmable
							so that your clothes dry without overheating.{" "}
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4 flex-item">
							<div className="hw-item">
							<img
								src="./images/eight.png"
								alt="Steam Ironing Services In Chennai"
							/>
							<h3>Pressing</h3>
							This stage of laundry service operations at Tidy Laundry
							includes ironing clothes to smoothen out the intricacies. We
							are your online laundry service partner in Chennai.{" "}
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4 flex-item">
							<div className="hw-item">
							<img src="./images/seven.png" alt="Mother Touch Laundry" />
							<h3>Sorting &amp; Post Spotting</h3>
							Sorting and Post spotting is one of the most important
							processes after pressing. Your clothes are sorted according to
							the identification label which are then, inspected for any
							leftover dirt and pressing quality. We ensure that only clean
							garments are delivered back.{" "}
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4 flex-item">
							<div className="hw-item">
							<img
								src="./images/nine.png"
								alt="Fastest Laundry Service In Chennai"
							/>
							<h3>Bundling &amp; Delivery</h3>
							We are the best online laundry service provider. We
							cross-check the laundry note and thoroughly count and bundle
							your garments which are to be delivered on the scheduled day.{" "}
							</div>
						</div>
						</div>
					</div>
					</div>
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
