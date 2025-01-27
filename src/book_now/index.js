import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./book_now.css";
import Header from "../header";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookNow = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    pickupDate: "",
    pickupTime: "",
    instruction: "",
    id: null
  });

  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [time, setTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [startDate, setStartDate] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));

  };
  const handleCheckboxChange = (e) => {
    setIsTermsAccepted(e.target.checked);
    if (e.target.checked) {
      setErrorMessage(""); 
    }
  };
  const validateForm = () => {
    const newErrors = {};
  
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only alphabets and max 50 characters";
    }
  
    // Email validation
    if (!validateEmail(formData.email.trim())) {
      newErrors.email = "Email is required";
    } else if (formData.email.length > 30) {
      newErrors.email = "Email should not exceed 50 characters";
    } else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
  
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{1,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number should contain only numbers and max 12 digits";
    }
  
    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleKeyDown = (event) => {
    if (/[0-9,]/.test(event.key)) {
      event.preventDefault();  // Prevents numbers from being typed
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = async () => {
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError("Please enter a valid email.");
    } else {
      setEmailError(""); 
    }

    try {
      const response = await fetch(`https://themoneylaundry.in/api/book_now/checkCustomerEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
        body: JSON.stringify({ email: formData.email }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log("name", data.customer.name);
        if (data) {
          setFormData((prev) => ({
            ...prev,
            id: data.customer.id || null,
            name: data.customer.name || "",
            address: data.customer.address || "",
            phone: data.customer.phone || "",
          }));
        }
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleTimeChange = (e) => {
    let value = e.target.value;

    value = value.replace(/[^0-9:APMapm\s]/g, "");

    if (value.length === 2 && !value.includes(":")) {
      value = value + ":";
    }

    // if (value.length >= 5 && !value.includes("AM") && !value.includes("PM")) {
    //   value = value + " AM"; 
    // }

    const amPmMatch = value.match(/\b(AM|PM)\b/i);
    if (amPmMatch) {
      const rest = value.replace(/\b(AM|PM)\b/i, "").trim(); 
      value = `${rest} ${amPmMatch[0].toUpperCase()}`.trim(); 
    }

    if (value.length > 10) {
      value = value.substring(0, 10);
    }


    setTime(value);

    setFormData((prevState) => ({
      ...prevState,
      pickupTime: value, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    if (!isTermsAccepted) {
      setErrorMessage("You must accept the terms and conditions to proceed.");
      return;
    }
    // Validation (basic)
    // if (!formData.name || !formData.email || !formData.address || !formData.phone) {
    //   alert("Please fill in all required fields.");
    //   return;
    // }

    // API call
    try {
      const response = await fetch("https://themoneylaundry.in/api/book_now/booknow_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/success");
        // alert("Order created successfully. We will contact you shortly!");
        setFormData({
          name: "",
          email: "",
          address: "",
          phone: "",
          pickupDate: "",
          pickupTime: "",
          instruction: "",
          id: null
        });
        setErrors({});
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
          <p>
          Note: You may use Email to book your Order.
          </p>
        </div>
        
        <div className="container">
          <form onSubmit={handleSubmit} className="formDataInnerInfo mb-4">
            <div className="innerCardInfo">
              <div className="rowInput">
              <div className="rowInput">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  maxLength={30}
                  onBlur={handleBlur}
                  required
                />
                {emailError && <p className="error" style={{ color: "red" }}>{emailError}</p>}
                 {errors.name && <span className="errorMessage"  style={{ color: "red" }}>{errors.email}</span>}
              </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  maxLength={50}
                  onKeyDown={handleKeyDown}
                  required
                />
                 {errors.name && <span className="errorMessage"  style={{ color: "red" }}>{errors.name}</span>}
              </div>
              <div className="rowInputAddress">
                <textarea 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address*"
                  required></textarea>
                {/* <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address*"
                  required
                /> */}
                 {errors.address && <span className="errorMessage"  style={{ color: "red" }}>{errors.address}</span>}
              </div>
              <div className="rowInput">
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone no*"
                  onInput={(e) => {
                    e.target.value = e.target.value.slice(0, 10); // Prevent users from entering more than 14 characters
                  }}
                  required
                />
                {errors.phone && <span className="errorMessage"  style={{ color: "red" }}>{errors.phone}</span>}
              </div>
            </div>
            <div className="mt-3 mb-3 noteData">
              <p>
                Note: <br /> If you do not select a specific pickup time and date, we will schedule your pickup at our
                standard time after confirming the details with you. Rest assured, our team will reach out to ensure the
                timing is convenient for you.
              </p>
            </div>
            <div className="row" style={{ justifyContent: "center"}}>
              <div className="col-sm-4">
              <div className="rowInput">
                  <label style={{ color: "white" }}>Pickup Date</label>
                  <DatePicker
                    selected={startDate} // Ensure startDate is initially null or undefined
                    onChange={(date) => {
                      setStartDate(date);
                      setFormData((prev) => ({
                        ...prev,
                        pickupDate: date ? date.toLocaleDateString("en-CA") : "", // Handle null selection
                      }));
                    }}
                    minDate={new Date()} // Prevent selecting past dates
                    dateFormat="MMMM d, yyyy" // Customize the date format
                    className="custom-datepicker" // Optional custom class for styling
                    placeholderText="Select a date" // Placeholder text
                  />
                  {errors.pickupDate && (
                    <span className="errorMessage" style={{ color: "red" }}>
                      {errors.pickupDate}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="rowInput">
                <label style={{ color:"white" }}>Pickup Time</label>
                  <input
                    type="text"
                    name="pickupTime"
                    value={time}
                    onChange={handleTimeChange}
                    placeholder="Pick up time*"
                  />
                  {errors.pickupTime && <span className="errorMessage"  style={{ color: "red" }}>{errors.pickupTime}</span>}
                </div>
              </div>
            </div>
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
              <div className="termsData mb-4">
                <label>
                  <input
                    type="checkbox"
                    checked={isTermsAccepted}
                    onChange={handleCheckboxChange}
                  />{" "}
                  I have read and accept the{" "}
                  <NavLink style={{ display: "inline" }} aria-current="page" to="/terms">
                    terms and conditions
                  </NavLink>.
                </label>
              </div>
              {errorMessage && (
        <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>
          {errorMessage}
        </p>
      )}
            </div>
           
            <div className="submit">
              <button type="submit" className="btnIngo" >
                Submit
              </button>
            </div>
          </form>
        </div>
        <span className="washingLinerBottom mt-3 mb-3"></span>
        <div className="topContentInfo">
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
            <span>.</span> View our full  <u><NavLink  className="nav-link" to="/our_pricing">Price List </NavLink> </u> to find out how much your order will be.
          </p>
          <h3>WANT TO GET HOLD OF US?</h3>
          <p>
            <span>.</span> If you have any questions at all, you can contact us at +91 92666 12700 or
            contactus@themoneylaundry.in
          </p>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookNow;
