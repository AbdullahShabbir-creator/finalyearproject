import React, { useState } from "react";
import "./LoginAD.css"; // Import custom styles

const Login = () => {
  // Directly using separate state variables for email and password
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true); // State to control visibility of login form

  // Handle email input change
  const handleEmailChange = (e) => {
    setLoginEmail(e.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: loginEmail, // Use the loginEmail state
      password: loginPassword, // Use the loginPassword state
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const result = await response.json();
      console.log("Login successful:", result);

      // Store the token in localStorage
      localStorage.setItem("authToken", result.token);

      // Optionally redirect user to dashboard or another protected route
      alert("Login successful!");
      setIsLoggedIn(true); // Set the logged-in state to true

    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed, please try again.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("You have been logged out!");
  };

  // Close the login form
  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className={`login-container ${isLoggedIn ? "logged-in" : ""}`}>
      {isFormVisible && (
        <div className="login-form-container">
          {!isLoggedIn ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="loginEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="loginEmail"
                  name="loginEmail"
                  className="form-input"
                  value={loginEmail} // Directly using loginEmail state
                  onChange={handleEmailChange} // Handle email change
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="loginPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  name="loginPassword"
                  className="form-input"
                  value={loginPassword} // Directly using loginPassword state
                  onChange={handlePasswordChange} // Handle password change
                  required
                  placeholder="Enter your password"
                />
              </div>

              <button type="submit" className="btn btn-submit">
                Login
              </button>
            </form>
          ) : (
            <button className="btn btn-logout" onClick={handleLogout}>
              Logout
            </button>
          )}

          {/* Close Button to hide the Login form */}
          <button className="btn-close" type="button" onClick={handleCloseForm}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
