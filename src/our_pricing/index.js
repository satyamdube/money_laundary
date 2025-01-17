import React from "react";
import { NavLink } from 'react-router-dom';
import "./our_pricing.css";
import Header from "../header";
import Footer from "../footer";
const OurPricing = () => {
  return (
    <div>
		<Header/>
		  <div className="pricingBannerInfo">
			 <div className="priceBnrN">
				<div className="container">
					<div className="pricingBnr">
						<h2>OUR <br/> PRICING</h2>
						<p>SAVE 25% ON YOUR FIRST ORDER WITH CODE TML25X</p>
						<div className="browswPrices">
							<a href="#offer">Browse our prices</a>
							<div className="downArrow"><img src="./images/downArrow.png"/></div>
						</div>
					</div>
			  </div>
			  </div>
			  <div className="pricedataManin">
				 <div className="container">
					<div className="offerInfo">
						<h3>Offers</h3>
						<div className="cardPriceInfo">
							<div className="cardDataNew">
								<div className="leftCardNew">
									<table>
										<tr><td className="bgData">7%</td><td>749  INR</td></tr>
									</table>
								</div>
								<div className="leftCardNew">
									<table>
										<tr><td colSpan={"2"}>2 Suits Deal (trouser or skirt + jacket)<p>(Usual Price 799 INR)</p></td></tr>
									</table>
								</div>
							</div>
							<div className="cardDataNew">
								<div className="leftCardNew">
									<table>
										<tr><td className="bgData">13%</td><td>699 INR</td></tr>
									</table>
								</div>
								<div className="leftCardNew">
									<table>
										<tr><td colSpan={"2"}>10 Shirts Deal (men's, hanging)<p>(Usual Price 790 INR)</p></td></tr>
									</table>
								</div>
							</div>
							<div className="cardDataNew">
								<div className="leftCardNew">
									<table>
										<tr><td className="bgData">13%</td><td>349 INR</td></tr>
									</table>
								</div>
								<div className="leftCardNew">
									<table>
										<tr><td colSpan={"2"}>5 Shirts Deal (men's, hanging)<p>(Usual Price 395 INR)</p></td></tr>
									</table>
								</div>
							</div>
							<div className="cardDataNew">
								<div className="leftCardNew">
									<table>
										<tr><td className="bgData">13%</td><td>699 INR</td></tr>
									</table>
								</div>
								<div className="leftCardNew">
									<table>
										<tr><td colSpan={"2"}>10 Blouse Deal (Women's hanging)<p>(Usual Price 790 INR)</p></td></tr>
									</table>
								</div>
							</div>
							<div className="cntdatanew">
								<p>OUR MINIMUM ORDER IS 650 INR. YOU CAN PLACE AN ORDER FOR LESS THAN THIS AMOUNT, BUT IT WILL BE ROUNDED UP TO THE MINIMUM RATE</p>
								<p>OF 650 INR</p>
								<p>If your garment is not listed below, please contact our customer service team for more information.</p>
							</div>
							<div className="IndivusualInfo" id="offer">
								<h3>INDIVIDUAL GARMENTS</h3>
								<p>( COST PER PIECE )</p>
								<table>
									<tr>
										<td>Items</td>
										<td>CLEANING AND STEAM PRESS</td>
									</tr>
									<tr>
										<td>Shirt</td>
										<td>79 INR</td>
									</tr>
									<tr>
										<td>White Shirt</td>
										<td>99 INR</td>
									</tr>
									<tr>
										<td>T-Shirt/Undershirt/Pajama/Half Pants</td>
										<td>49 INR</td>
									</tr>
									<tr>
										<td>Jeans/Trousers/Pants</td>
										<td>99 INR</td>
									</tr>
									<tr>
										<td>Suite 2 piece*</td>
										<td>399 INR</td>
									</tr>
									<tr>
										<td>Suite 3 piece*</td>
										<td>549 INR</td>
									</tr>
									<tr>
										<td>WaistCoat*</td>
										<td>249 INR</td>
									</tr>
									<tr>
										<td>Dinner Jacket</td>
										<td>449 INR</td>
									</tr>
									<tr>
										<td>Dinner Suite(2 pc)</td>
										<td>599 INR</td>
									</tr>
									<tr>
										<td>Safari Set</td>
										<td>349 INR</td>
									</tr>
									<tr>
										<td>Leather Jacket*</td>
										<td>549 INR</td>
									</tr>
									<tr>
										<td>Gilet</td>
										<td>399 INR</td>
									</tr>
									<tr>
										<td>Puffer jacket</td>
										<td>349 INR</td>
									</tr>
									<tr>
										<td>Jacket</td>
										<td>299 INR</td>
									</tr>
									<tr>
										<td>Jumper</td>
										<td>249 INR</td>
									</tr>
									<tr>
										<td>Short coat</td>
										<td>449 INR</td>
									</tr>
									<tr>
										<td>Long Coat</td>
										<td>649 INR</td>
									</tr>
									<tr>
										<td>Kurta Pajama</td>
										<td>199 INR</td>
									</tr>
									<tr>
										<td>Tie</td>
										<td>99 INR</td>
									</tr>
									<tr>
										<td>Sweatshirts/Sweatpants/Hoodie</td>
										<td>199 INR</td>
									</tr>
									<tr>
										<td>Design Blouse/Choli</td>
										<td>199 INR</td>
									</tr>
									<tr>
										<td>Saree/Ghagra, Sherwani Plain</td>
										<td>499 INR</td>
									</tr>
									<tr>
										<td>Saree Design, Silk Saree Design </td>
										<td>699 INR</td>
									</tr>
									<tr>
										<td>Ghagra Design, Sherwani Design</td>
										<td>699 INR</td>
									</tr>
									<tr>
										<td>Dress(plain)</td>
										<td>399 INR</td>
									</tr>
									<tr>
										<td>Dress Design</td>
										<td>549 INR</td>
									</tr>
									<tr>
										<td>Designer Gown/Designer Lehenga</td>
										<td>699 INR</td>
									</tr>
									<tr>
										<td>Jumpsuit</td>
										<td>399 INR</td>
									</tr>
									<tr>
										<td>Bikini/Swimming costumes</td>
										<td>99 INR</td>
									</tr>
									<tr>
										<td>Salwar, Skirt, Legging</td>
										<td>79 INR</td>
									</tr>
									<tr>
										<td>Kurti, Top, Kameez</td>
										<td>99 INR</td>
									</tr>
									<tr>
										<td>Designer Dupatta, Scarf, Shawl</td>
										<td>449 INR</td>
									</tr>
									<tr>
										<td>Dupatta, Scarf, Shawl</td>
										<td>249 INR</td>
									</tr>
									<tr>
										<td>Patiala Blouse/Choli Plain</td>
										<td>79 INR</td>
									</tr>
								</table>
							</div>
							<div className="IndivusualInfo">
								<h3>OFFERS</h3>
								<p>( CLEANING AND STEAM PRESS )</p>
								<table>
									<tr>
										<td>2 Suits Deal(trouser + skirt + jacket)</td>
										<td>749 INR</td>
									</tr>
									<tr>
										<td>10 Shirts Deal (men's hanging)</td>
										<td>699 INR</td>
									</tr>
									<tr>
										<td>5 Shirts Deal (men's hanging)</td>
										<td>349 INR</td>
									</tr>
									<tr>
										<td>10 Blouses Deal (hanging)</td>
										<td>699 INR</td>
									</tr>
									<tr>
										<td>5 Blouses Deal (hanging)</td>
										<td>349 INR</td>
									</tr>
									<tr>
										<td>5 Design Blouses Deal (hanging)</td>
										<td>699 INR</td>
									</tr>
								</table>
							</div>
							<div className="IndivusualInfo">
								<h3>SHOE SERVICE</h3>
								<br/><br/>
								<table>
									<tr>
										<td>Sneakers</td>
										<td>299 INR</td>
									</tr>
									<tr>
										<td>Sneaker Designer</td>
										<td>449 INR</td>
									</tr>
									<tr>
										<td>Leather Shoes</td>
										<td>449 INR</td>
									</tr>
									
								</table>
							</div>
						</div>
					</div>
					<div className="bookNowInfo"> <NavLink  to="/book_now"><img alt="Book Now" src="./images/bookNow.png"/></NavLink></div>
					<div className="tearmsCondition">
						<h4>Terms & Conditions:-</h4>
						<p>-Minimum Order Value: -A minimum order of 650 INR is required for all services. </p>
						<p>-White Garment Surcharge: -An additional charge of 20 INR per white garment applies for specialized care and treatment.</p>
						<p> -GST Applicable: -All listed prices are exclusive of 18% GST, which will be added to the final bill.</p>
					</div>
				 </div>
			  </div>
		  </div>
		<Footer/>
    </div>
  );
};

export default OurPricing;
