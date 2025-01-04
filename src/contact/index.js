import React from "react";
import "./contact.css";
import Header from "../header";
import Footer from "../footer";
const Contact = () => {
  return (
    <div>
		<Header/>
		<div className="meetOurFounder">
			<div className="headingInfo">
				<h3>Get In Touch With The Best <br/>Laundry Service In India</h3>
			</div>
		</div>
		<article className="cnct_right-wrapper">
                <ul className="contactul">
                    <li>
                        <span className="contacticon contact-email"></span>
                        <div className="contact_cntnt">
                            <span className="cntctinrhdng"><i class="fa fa-envelope" aria-hidden="true"></i> WRITE TO US</span>
                            <span className="cntctinrinfo info-links">sales@moneyloundry.com</span>
                        </div>
                    </li>
                    <li>
                        <span className="contacticon contact-mobile"></span>
                        <div className="contact_cntnt">
                            <span className="cntctinrhdng"><i class="fa fa-phone-square" aria-hidden="true"></i>
							TALK TO AN EXPERT</span>
                            <span className="cntctinrinfo">
                                +91 9205080768                            </span>
                        </div>
                    </li>
                    <li>
                        <span className="contacticon contact-address"></span>
                        <div className="contact_cntnt">
                            <span className="cntctinrhdng"><i class="fa fa-map-marker" aria-hidden="true"></i>
 							REACH US AT</span>
                            <span className="hdng_cityname">Noida Office</span>
                            <span className="cntctinrinfo">A-48, Sector 58, <br/> Noida -201301</span>
                        </div>
                    </li>
                </ul>
                {/* <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.2669189677526!2d77.12624677181033!3d28.741446613113276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013d2231f9e5%3A0x9876ec508504301a!2sGinger+Webs+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1414564989364" width="100%" height="450" frameborder="0"></iframe>
                </div> */}
            </article>
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
		<Footer/>
    </div>
  );
};

export default Contact;
