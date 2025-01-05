import React from "react";
import "./book_now.css";
import Header from "../header";
import Footer from "../footer";
const BookNow = () => {
  return (
    <div>
		<Header/>
			<div className="meetOurFounder">
				<div className="headingInfo bookNow">
					<h3>BOOK NOW</h3>
					<br/>
					<p>For an easy & quick laundry experience. Please provide details below. <br/> Our customer care executive will get in touch.</p>
				</div>
			</div>
			<div className="container">
			<div className="formDataIn">
				<div className="formInfoNewRow">
					<h3>Choose area and service</h3>
					<div className="row">
						<div className="col-sm-6">
							<select className="form-control">
								<option>Choose Area</option>
								<option>Noida Sector 136</option>
								<option>Noida Sector 150</option>
								<option>Noida Electronics City</option>
							</select>
						</div>
						<div className="col-sm-6">
							<select className="form-control">
								<option>Choose a Service</option>
								<option>Dry Cleaning</option>
								<option>Wash and Dry</option>
								<option>Wash and Press</option>
								<option>Premium/Individual Wash</option>
								<option>WP60</option>
								<option>WP125</option>
								<option>WP200</option>
							</select>
						</div>
					</div>
				</div>
				<div className="formInfoNewRow">
					<h3>Choose a schedule</h3>
					<div className="row">
						<div className="col-sm-6">
							<label>Pickup Date*</label>
							<input type="date" className="form-control"/>
						</div>
						<div className="col-sm-6">
						    <label>Pickup Time*</label>
							<select className="form-control">
								<option>8 - 11</option>
								<option>11 -2</option>
								<option>2 - 5</option>
								<option>5 - 8</option>
							</select>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-sm-6">
							<label>Dropoff Date*
							</label>
							<input type="date" className="form-control"/>
						</div>
						<div className="col-sm-6">
						    <label>Dropoff Time*</label>
							<select className="form-control">
								<option>8 - 11</option>
								<option>11 -2</option>
								<option>2 - 5</option>
								<option>5 - 8</option>
							</select>
						</div>
					</div>
				</div>
				<div className="formInfoNewRow">
					<h3>About you</h3>
					<div className="row">
						<div className="col-sm-6">
							<label>Name*</label>
							<input type="text" className="form-control"/>
						</div>
						<div className="col-sm-6">
							<label>Email*</label>
							<input type="email" className="form-control"/>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-sm-6">
							<label>Phone*</label>
							<input type="number" className="form-control"/>
						</div>
						<div className="col-sm-6">
							<label>Address*</label>
							<input type="text" className="form-control"/>
						</div>
					</div>
				</div>
				<div className="formInfoNewRow text-left"><button className="btn btn-success">Submit</button></div>
			</div>
			</div>
		<Footer/>
    </div>
  );
};

export default BookNow;
