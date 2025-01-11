import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear authentication token
    window.location.href = "/"; // Redirect to login
  };

  return (
    <div className="dashboardOuter">
      <div className="dashboardHeader">
        <div className="container">
           <div className="d-flex align-items-center justify-content-between">
             <div className="logoData"> <img src="./images/logoInfo.png" alt="Logo"/></div>
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
                     <tr>
                        <th>Sr No.</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Pick up date</th>
                        <th>Pick up time</th>
                        <th>Special Instruction</th>
                     </tr>
                     <tr>
                        <td>1</td>
                        <td>Satyam Dubey</td>
                        <td>satyamdubey9450@gmail.com</td>
                        <td>Noida</td>
                        <td>8976567898768</td>
                        <td>12/12/2025</td>
                        <td>10AM</td>
                        <td>Hi nice services</td>
                     </tr>
                  </table>
              </div>
            </div>
         </div>
    </div>
  );
};

export default Dashboard;
