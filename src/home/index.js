import React from "react";
import { NavLink } from 'react-router-dom';
import "./home.css";
import Header from "../header";
import Footer from "../footer";
const Home = () => {
  return (
    <div>
		<Header/>
		<div className="bannerInfoData">
			<div className="logoInfoDataNew">
				<img src="./images/logo3D_new.png" alt="logo banner"/>
			</div>
		</div>
		<div className="mightInfoData">
			<div className="container">
				<div className="innerDataCard">
					<p>WE MIGHT NOT BE ABLE TO WASH YOUR MONEY, BUT WE SURE CAN WASH YOUR CLOTHES LIKE ITS MONEY.</p>
					<div className="moneyGIf">
						<img src="./images/money_two.gif" alt="money"/>
					</div>
					<span className="linerData"></span>
					<div className="bookInfo">
            <NavLink  to="/book_now"> <img src="./images/bookInfo.png" alt="logo banner"/></NavLink>
					</div>
				</div>
			</div>
		</div>
		<div className="howItWork">
		<div className="headingInfo">
				<h3>HOW IT WORKS ?</h3>
			</div>
		    <img src="./images/howItWork.jpg" alt="How it work"/>
		</div>
		<div className="howItWork"></div>
		    <div className="meetOurFounder">
		       <div className="bannerDataI">
					<div className="headingInfo bg-none">
						<h3>MEET THE FOUNDERS</h3>
					</div>
					<div className="pd-l">
						<div className="infoDataMeet bg-none">
							<div className="meetOwnerInfo">
								<div className="jaiSainInfo">
									<p><b>Jai Saini,</b></p>
									<p>Co-Founder/Ceo</p>
									<p>Jai Saini Went for his MBA to London and began his career in finance. During his time in the UK, Jai experienced the seamless laundry services typical in Western countries. Upon returning to India, he was struck by the stark contrast—customers here often face unclear pricing, misleading service distinctions, and frustratingly long delivery times.Determined to elevate the industry, Jai co-founded The Money Laundry to bring Western-standard efficiency and transparency to Indian laundry services. Under his leadership, the company guarantees fast turnarounds, often delivering within 24-36 hours, while maintaining clear and honest communication with every customer.</p>
								</div>
								<div className="jaiSainInfoImg">
									<img src="./images/seperate/bgNew.png" alt="Owner"/>
								</div>
								<div className="ashisInfo">
									<p><b>Ashish Chaubey,</b></p>
									<p>Co-Founder/Coo</p>
									<p>Ashish Chaubey brings extensive expertise from the pharmaceutical industry, where he specialised in chemical safety and innovation. Disturbed by the use of harmful chemicals in traditional laundry services, Ashish began researching safer, more effective cleaning solutions from around the globe.
									At The Money Laundry, Ashish oversees the use of advanced, eco-friendly chemicals and technologies, ensuring that every garment is cleaned safely and effectively. His dedication to quality and sustainability underpins the company’s mission to offer superior, health-conscious services.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			<div className="text-center bor"><p>Together, Jai and Ashish are committed to redefining fabric care in India, providing a transparent, efficient, and <br/>
			world-class service experience.</p></div>
		</div>
		<div className="headingInfo">
				<h3>WHY US?</h3>
				<div className="indivialCleaning">
					<h4>INDIVIDUAL CLEANING</h4>
					<span className="linerInfo"></span>
					<p> we prioritise hygiene. Each order is <br/> Processed individually, ensuring your <br/> clothes never mix with others.</p>
					<div><span className="washingLiner"></span></div>
					<img src="./images/washing.gif" alt="Washing machine"/>
					<div><span className="washingLinerBottom"></span></div>
				</div>
			</div>
			<div className="uvSter">
				<div className="centerMax">
					<div className="indivialCleaning uv">
						<h4>UV Sterilization</h4>
						<span className="linerInfo" style={{width:"234px"}}></span>
						<p>After Being processed your clothes go <br/>through a UV light Sanitisation room, this <br/>process kills all the bacteria without the use <br/>of harmful chemicals.</p>
						<img src="./images/uv.png" alt="Washing machine"/>
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
							<h2>PICK <br/>YOUR SCENT</h2>
							<p>"Good Smell is powerful. It speaks <br/>directly to our emotions, memories,<br/> and imagination."<br/> — Aristotle</p>
						</div>
						<div></div>
					</div>
					<span className="linerInfo" style={{width:"234px"}}></span>
				</div>
			</div>
		<Footer/>
    </div>
  );
};

export default Home;
