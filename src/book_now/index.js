import React, { useState } from "react";
import "./book_now.css";
import Header from "../header";
import Footer from "../footer";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    pickupDate: "",
    pickupTime: "",
    instruction: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation (basic)
    if (!formData.name || !formData.email || !formData.address || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    // API call
    try {
      const response = await fetch("https://dev.moneylaundry.wenidi.com/api/book_now/booknow_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Order created successfully. We will contact you shortly!");
        setFormData({
          name: "",
          email: "",
          address: "",
          phone: "",
          pickupDate: "",
          pickupTime: "",
          instruction: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error: Unable to submit data. Please try again later.");
    }
  };

  return (
    <div>
      <Header />
      <div className="placeOurderInfoOuter">
        <div className="topContentInfo">
          <div className="logoCenter">
            <img src="./images/whiteLogo.png" alt="Washing machine" />
          </div>
          <span className="linerInfo"></span>
          <h2>JUST A REMINDER...</h2>
          <h3>ITEMS</h3>
          <p>
            <span>.</span> No need to list your items, just place them in a bag clearly labelled with your name and
            drop off at your building reception or we can come collect it.
          </p>
          <p>
            <span>.</span> Our expert team checks them after collection and sends you an email including prices.
          </p>
          <h3>PRICES</h3>
          <p>
            <span>.</span> The minimum order value is 650/- INR. If you place an order for less than 650/- it will be
            rounded up.
          </p>
          <p>
            <span>.</span> View our full PRICE LIST to find out how much your order will be.
          </p>
          <h3>WANT TO GET HOLD OF US?</h3>
          <p>
            <span>.</span> If you have any questions at all, you can contact us at +91 92666 12700 or
            contactus@themoneylaundry.in
          </p>
        </div>
        <span className="washingLinerBottom mt-5 mb-5"></span>
        <br />
        <div className="container">
          <form onSubmit={handleSubmit} className="formDataInnerInfo mb-4">
            <div className="innerCardInfo">
              <div className="rowInput">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  required
                />
              </div>
              <div className="rowInput">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  required
                />
              </div>
              <div className="rowInput">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address*"
                  required
                />
              </div>
              <div className="rowInput">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone no*"
                  required
                />
              </div>
            </div>
            <br />
            <div className="mt-5 mb-5 noteData">
              <p>
                Note: <br /> If you do not select a specific pickup time and date, we will schedule your pickup at our
                standard time after confirming the details with you. Rest assured, our team will reach out to ensure the
                timing is convenient for you.
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="rowInput">
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    placeholder="Pick up date*"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="rowInput">
                  <input
                    type="time"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    placeholder="Pick up time*"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="innerCardInfo mt-5 nrwTxt">
              <h4>Special Instruction</h4>
              <div className="rowInput">
                <textarea
                  name="instruction"
                  value={formData.instruction}
                  onChange={handleChange}
                  placeholder="Any repairs and alterations needed/ Stain details/ Damage Informations? Eg. Shorten Grey Reiss trouser by 3 Cm"
                ></textarea>
              </div>
            </div>
            <div className="submit">
              <button type="submit" className="btnIngo">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookNow;
