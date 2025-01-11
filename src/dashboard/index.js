import React from "react";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear authentication token
    window.location.href = "/"; // Redirect to login
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
