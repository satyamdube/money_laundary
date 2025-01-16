import React from "react";
import "./about.css";
import Header from "../header";
import Footer from "../footer";
const About = () => {
  return (
    <div>
		<Header/>
		<div className="meetOurFounder">
			<div className="headingInfo">
				<h3>MEET THE FOUNDERS</h3>
			</div>
			<div className="pd-l">
				<div className="infoDataMeet">
					<div className="meetOwnerInfo">
						<div className="jaiSainInfo">
							<p><b>Jai Saini,</b></p>
							<p>Co-Founder/Ceo</p>
							<p>Jai Saini Went for his MBA to London and began his career in finance. During his time in the UK, Jai experienced the seamless laundry services typical in Western countries. Upon returning to India, he was struck by the stark contrast—customers here often face unclear pricing, misleading service distinctions, and frustratingly long delivery times.Determined to elevate the industry, Jai co-founded The Money Laundry to bring Western-standard efficiency and transparency to Indian laundry services. Under his leadership, the company guarantees fast turnarounds, often delivering within 24-36 hours, while maintaining clear and honest communication with every customer.</p>
						</div>
						<div className="jaiSainInfoImg">
							<img src="./images/owner.png" alt="Owner"/>
						</div>
						<div className="ashisInfo">
							<p><b>Ashish Chaubey,</b></p>
							<p>Co-Founder/Ceo</p>
							<p>Ashish Chaubey brings extensive expertise from the pharmaceutical industry, where he specialised in chemical safety and innovation. Disturbed by the use of harmful chemicals in traditional laundry services, Ashish began researching safer, more effective cleaning solutions from around the globe.
                             At The Money Laundry, Ashish oversees the use of advanced, eco-friendly chemicals and technologies, ensuring that every garment is cleaned safely and effectively. His dedication to quality and sustainability underpins the company’s mission to offer superior, health-conscious services.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center bor"><p>Together, Jai and Ashish are committed to redefining fabric care in India, providing a transparent, efficient, and <br/>
			world-class service experience.</p></div>
		</div>
		<Footer/>
    </div>
  );
};

export default About;
