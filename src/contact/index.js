import React from "react";
import "./contact.css";
import Header from "../header";
import Footer from "../footer";
const Contact = () => {
  return (
    <div>
		<Header/>
		<div className="meetOurFounder">
			<div className="headingInfo get">
				<h3>GET IN TOUCH</h3>
			</div>
		</div>
		<div className="container">
            <div className="formDataNew">
                <div className="inputInfoDataForm">
                    <input type="text" placeholder="NAME"/>
                </div>
                <div className="inputInfoDataForm">
                    <input type="text" placeholder="PHONE NUMBER"/>
                </div>
                <div className="inputInfoDataForm">
                    <input type="text" placeholder="EMAIL"/>
                </div>
                <div className="inputInfoDataForm">
                    <textarea placeholder="MESSAGE"></textarea>
                </div>
                <div className="inputInfoDataForm">
                    <button type="button">SUBMIT</button>
                </div>
                <div className="inputInfoDataForm"><p>contactus@themoneylaundry.in</p></div>
            </div>
        </div>
        {/* <div className="socialLink"><a href=""><img src="./images/social.png" alt="Washing machine"/></a></div> */}
		<Footer/>
    </div>
  );
};

export default Contact;
