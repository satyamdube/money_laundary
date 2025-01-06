import React, { useState } from "react";
import "./book_now.css";
import Header from "../header";
import Footer from "../footer";

const BookNow = () => {
  const [formData, setFormData] = useState({
    area: "",
    service: "",
    pickupDate: "",
    pickupTime: "",
    dropoffDate: "",
    dropoffTime: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
	e.preventDefault(); // Prevent the form from reloading the page
	try {
	  const response = await fetch("https://reqres.in/api/users", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(formData),
	  });
    console.log(formData, "satyam");
	  if (response.ok) {
		// Alert success message
		alert("Your data has been submitted successfully. We will contact you as soon as possible.");
		
		// Reset the form data
		setFormData({
		  area: "",
		  service: "",
		  pickupDate: "",
		  pickupTime: "",
		  dropoffDate: "",
		  dropoffTime: "",
		  name: "",
		  email: "",
		  phone: "",
		  address: "",
		});
	  } else {
		// Alert failure message
		alert("Failed to submit the form. Please try again.");
	  }
	} catch (error) {
	  console.error("Error submitting form:", error);
	  alert("An error occurred. Please try again later.");
	}
  };  

  return (
    <div>
      <Header />
      <div className="meetOurFounder">
        <div className="headingInfo bookNow">
          <h3>BOOK NOW</h3>
          <br />
          <p>
            For an easy & quick laundry experience. Please provide details
            below. <br /> Our customer care executive will get in touch.
          </p>
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="formDataIn">
            <div className="formInfoNewRow">
              <h3>Choose area and service</h3>
              <div className="row">
                <div className="col-sm-6">
                  <select
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="form-control"
                    required
                  >
                    <option value="">Choose Area</option>
                    <option value="Noida Sector 136">Noida Sector 136</option>
                    <option value="Noida Sector 150">Noida Sector 150</option>
                    <option value="Noida Electronics City">
                      Noida Electronics City
                    </option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-control"
                    required
                  >
                    <option value="">Choose a Service</option>
                    <option value="Dry Cleaning">Dry Cleaning</option>
                    <option value="Wash and Dry">Wash and Dry</option>
                    <option value="Wash and Press">Wash and Press</option>
                    <option value="Premium/Individual Wash">
                      Premium/Individual Wash
                    </option>
                    <option value="WP60">WP60</option>
                    <option value="WP125">WP125</option>
                    <option value="WP200">WP200</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="formInfoNewRow">
              <h3>Choose a schedule</h3>
              <div className="row">
                <div className="col-sm-6">
                  <label>Pickup Date*</label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label>Pickup Time*</label>
                  <select
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    className="form-control"
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="8 - 11">8 - 11</option>
                    <option value="11 - 2">11 - 2</option>
                    <option value="2 - 5">2 - 5</option>
                    <option value="5 - 8">5 - 8</option>
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-6">
                  <label>Dropoff Date*</label>
                  <input
                    type="date"
                    name="dropoffDate"
                    value={formData.dropoffDate}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label>Dropoff Time*</label>
                  <select
                    name="dropoffTime"
                    value={formData.dropoffTime}
                    onChange={handleChange}
                    className="form-control"
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="8 - 11">8 - 11</option>
                    <option value="11 - 2">11 - 2</option>
                    <option value="2 - 5">2 - 5</option>
                    <option value="5 - 8">5 - 8</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="formInfoNewRow">
              <h3>About you</h3>
              <div className="row">
                <div className="col-sm-6">
                  <label>Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label>Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-6">
                  <label>Phone*</label>
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label>Address*</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="formInfoNewRow text-left">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default BookNow;
