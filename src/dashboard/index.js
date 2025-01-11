import React, { useEffect, useState } from "react";
import axios from "axios";  // Import axios
import "./dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  console.log(data, "satyam");

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear authentication token
    window.location.href = "/"; // Redirect to login
  };

  useEffect(() => {
    // Fetch data using axios
    axios
      .get('https://dev.moneylaundry.wenidi.com/api/book_now/getOrders')
      .then(response => setData(response.data.data)) // Store the data in state
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
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
      <div className="welcomeDashboard">
        <div className="container">
          <h2>Dashboard</h2>
          <p>Welcome to the dashboard!</p>
          <div className="tableDataOrderInfo">
            <table>
              <thead>
                <tr>
                  <th>order_id</th>
                  <th>customer_id</th>
                  <th>customer_name</th>
                  <th>customer_email</th>
                  <th>customer_phone</th>
                  <th>customer_address</th>
                  <th>order_pickup_date</th>
                  <th>order_pickup_time</th>
                  <th>order_instruction</th>
                  <th>createddate</th>
                </tr>
              </thead>
              <tbody>
                {data.map((order, index) => (
                  <tr key={index}>
                    <td>{order.order_id}</td>
                    <td>{order.customer_id}</td>
                    <td>{order.customer_name}</td>
                    <td>{order.customer_email}</td>
                    <td>{order.customer_phone}</td>
                    <td>{order.customer_address}</td>
                    <td>{order.order_pickup_date}</td>
                    <td>{order.order_pickup_time}</td>
                    <td>{order.order_instruction}</td>
                    <td>{order.createddate}</td>
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

export default Dashboard;
