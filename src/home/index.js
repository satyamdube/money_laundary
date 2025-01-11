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
				<img src="./images/logo3DNew.png" alt="logo banner"/>
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
		<Footer/>
    </div>
  );
};

export default Home;
