import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from "axios";  // Import axios
import "./contact_get.css";

const ContactGet = () => {
  const [data, setData] = useState([]);
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear authentication token
    window.location.href = "/"; // Redirect to login
  };

  useEffect(() => {
    // Fetch data using axios
    axios
      .get('https://dev.moneylaundry.wenidi.com/api/contactUs/getContactUs')
      .then(response => setData(response.data.data[0])) // Store the data in state
      .catch(error => console.error('Error fetching data:', error)); // Handle errors
  }, []);

  return (
    <div className="dashboardOuter">
      <div className="dashboardHeader">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logoData">
              <img src="./images/logoInfo.png" alt="Logo" />
            </div>
            <div className="d-flex orderList"><NavLink className="loginData" to="/dashboard">Order List</NavLink> <NavLink className="loginData" to="/contact_list">Contact List</NavLink> <button onClick={handleLogout}>Logout</button></div>
          </div>
        </div>
      </div>
      <div className="welcomeDashboard">
        <div className="container">
          <h2>Contact List</h2>
          <p>Welcome to the Contact List!</p>
          <div className="tableDataOrderInfo">
            <table>
              <thead>
                <tr>
                  <th>Contact name</th>
                  <th>Contact email</th>
                  <th>Contact phone</th>
                  <th>Contact message</th>
                </tr>
              </thead>
              <tbody>
                {data.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.contact_name}</td>
                    <td>{contact.contact_email}</td>
                    <td>{contact.contact_phone}</td>
                    <td>{contact.contact_message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactGet;
