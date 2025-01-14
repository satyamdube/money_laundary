import React, { useState } from "react";
import "./contact.css";
import Header from "../header";
import Footer from "../footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleKeyDown = (event) => {
    if (/[0-9]/.test(event.key)) {
      event.preventDefault();  
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (!validateEmail(formData.email.trim())) return "Email is required.";
    if (!formData.name.trim()) return "Name is required.";
    if (!formData.phone.trim()) return "Phone number is required.";
    if (!formData.message.trim()) return "Message is required.";
    return null; 
  };

  const handleBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError("Please enter a valid email.");
    } else {
      setEmailError(""); 
    }
  };

  const handleSubmit = async () => {
    const errorMessage = validateForm();
    if (errorMessage) {
      setStatusMessage(errorMessage);
      setIsSuccess(false);
      return;
    }

    try {
      const response = await fetch("https://dev.moneylaundry.wenidi.com/api/contactUs/registerContacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Your message has been sent successfully!");
        setIsSuccess(true); 
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setStatusMessage("Failed to send your message. Please try again.");
        setIsSuccess(false); 
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please check your internet connection and try again.");
      setIsSuccess(false); 
    }
  };

  return (
    <div>
      <Header />
      <div className="meetOurFounder">
        <div className="headingInfo get">
          <h3>GET IN TOUCH</h3>
        </div>
      </div>
      <div className="container">
        <div className="formDataNew">
        <div className="inputInfoDataForm">
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              maxLength="50"
              onBlur={handleBlur}
            />
            {emailError && <p className="error" style={{ color: "red" }}>{emailError}</p>}
          </div>
          <div className="inputInfoDataForm">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              maxLength="50"
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="inputInfoDataForm">
            <input
              type="number"
              name="phone"
              placeholder="PHONE NUMBER"
              value={formData.phone}
              onChange={handleChange}
              maxLength="10"
              onInput={(e) => {
                e.target.value = e.target.value.slice(0, 10); // Prevent users from entering more than 14 characters
              }}
            />
          </div>
          
          <div className="inputInfoDataForm">
            <textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="inputInfoDataForm">
            <button type="button" onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
          <div className="statusMessage" style={{ color: isSuccess ? 'green' : 'red' }}>
            <p>{statusMessage}</p>
          </div>
          <div className="inputInfoDataForm">
            <p>contactus@themoneylaundry.in</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
