import React from "react";
import "./book_now.css";
import Header from "../header";
import Footer from "../footer";
const BookNow = () => {
  return (
    <div>
		<Header/>
		<div className="bannerInfoData">
			<div className="logoInfoDataNew">
				<img src="./images/logoInfo.png" alt="logo banner"/>
			</div>
		</div>
		<div className="mightInfoData">
			<div className="container">
				<div className="innerDataCard">
					<p>sds ABLE TO WASH YOUR MONEY, BUT WE SURE CAN WASH YOUR CLOTHES LIKE ITS MONEY.</p>
					<div className="moneyGIf">
						<img src="./images/money.gif" alt="money"/>
					</div>
					<span className="linerData"></span>
					<div className="bookInfo">
					   <a href=""> <img src="./images/bookInfo.png" alt="logo banner"/></a>
					</div>
				</div>
			</div>
		</div>
		<div className="howItWork">
		    <img src="./images/howItWork.jpg" alt="How it work"/>
		</div>
		<Footer/>
    </div>
  );
};

export default BookNow;
