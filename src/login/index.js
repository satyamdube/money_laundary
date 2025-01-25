import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://themoneylaundry.in/api/user/signIn",
        {
          username, // Username field
          password, // Password field
        }
      );
      console.log(response, "satyam")
      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.token); // Save token
        window.location.href = "/dashboard";// Redirect to dashboard
      } else {
        alert("Login failed: " + response.data.message);
      }
    } catch (error) {
      alert("Incorrect Login Credential");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginPageOuter">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
