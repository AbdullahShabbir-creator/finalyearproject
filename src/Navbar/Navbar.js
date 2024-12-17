import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components
const FormContainer = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 94px 182px rgba(0, 0, 0, 0.5);
  width: 90%;
  max-width: 400px;
  align-items: center;
  margin-left: 18px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  margin: 9px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
const StyledNavLink = styled(Link)`
  color: #000; // Default text color
  text-decoration: none; // Remove underline by default
  font-family: "fangsong", sans-serif; // Apply font family
  transition: all 0.3s ease; // Smooth transition for hover effects

  &:hover {
    // color:rgb(18, 134, 243); // Change text color on hover
    text-decoration: none; // Underline the text on hover
    transform: scale(1.05); // Slightly enlarge the link on hover
    // Subtle background effect
 
  }
`;
// Navbar component
const Navbar = () => {
  // const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state
  
  
  // State for form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    loginEmail: "",
    loginPassword: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };


  // // const handleCloseSignupClick = () => setIsSignupVisible(false);
  // const handleSignupClick = () => {
  //   setIsSignupVisible(true);
  //   setIsLoginVisible(false);
  // };
  
  const handleLoginClick = () => {
    setIsLoginVisible(true);
    
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!formData.loginEmail || !formData.loginPassword) {
      alert("Please fill in all fields.");
      return;
    }
  
    const data = {
      email: formData.loginEmail,
      password: formData.loginPassword,
    };
  
    const url = "http://localhost:5000/api/login";
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }
  
      const result = await response.json();
      console.log("result", result);
  
      alert("Login successful!");
      setFormData({ loginEmail: "", loginPassword: "" });
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false); 
    alert("You have logged out.");
  };
  
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light font-weight-bold">
        <div className="container">
         <Link  className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2BbZrHjvXQJ3FWOeXkYDCLNhsEW668dVmQ&s"
              alt="logo"
              style={{
                height: "45px",
                marginRight: "2px",
                mixBlendMode: "multiply",
                backgroundColor: "white",
              }}
            />
            <h6 className="mb-0 font-weight-bold">
              Asif Public High <br /> School Islamabad
            </h6>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse text-dark" id="navbarNav">
        <ul
            className="navbar-nav p-3 ms-auto"
            style={{ fontFamily: "fangsong" }}
          >
            <li className="nav-item">
            <StyledNavLink className="nav-link text-dark" to="/">
                Home
              </StyledNavLink>            </li>
            <li className="nav-item dropdown">
              <StyledNavLink 
                className="nav-link dropdown-toggle text-dark"
                to="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </StyledNavLink>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <StyledNavLink 
                    className="dropdown-item text-dark"
                    to="/VisionMissionGoals"
                  >
                    Vision And Mission
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink 
                    className="dropdown-item text-dark"
                    to="/LeadingwithInnovation"
                  >
                    Leading with Innovation
                  </StyledNavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <StyledNavLink 
                className="nav-link dropdown-toggle text-dark"
                to="#"
                id="academicsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Academics
              </StyledNavLink>
              <ul className="dropdown-menu" aria-labelledby="academicsDropdown">
                <li>
                  <StyledNavLink  className="dropdown-item" to="/EducationCards">
                    Curriculum Overview
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink  className="dropdown-item" to="/">
                    Examinations and Assessments
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink  className="dropdown-item" to="/">
                    Special Programs
                  </StyledNavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <StyledNavLink 
                className="nav-link dropdown-toggle text-dark"
                to="#"
                id="admissionsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admissions
              </StyledNavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="admissionsDropdown"
              >
                <li>
                  <StyledNavLink  className="dropdown-item" to="/Admissionprocedure">
                    Admission Process
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink  className="dropdown-item" to="/AdmissionForm">
                    Application Forms
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink  className="dropdown-item" to="/">
                    Fees and Scholarships
                  </StyledNavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <StyledNavLink 
                className="nav-link dropdown-toggle text-dark"
                to="#"
                id="studentLifeDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Student Life
              </StyledNavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="studentLifeDropdown"
              >
                <li>
                  <StyledNavLink  className="dropdown-item" to="/Facilities">
                    Facilities
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink  className="dropdown-item" to="/Studentevents">
                    Student Events
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink  className="dropdown-item" to="#high-school">
                    High School
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink  className="dropdown-item" to="/Faqs">
                    FAQs
                  </StyledNavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <StyledNavLink 
                className="nav-link dropdown-toggle text-dark"
                to="#"
                id="newsEventsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                News And Events
              </StyledNavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="newsEventsDropdown"
              >
                <li>
                  <StyledNavLink  className="dropdown-item" to="/Schoolnews">
                    School News
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink  className="dropdown-item" to="/StudentCalender">
                    Events Calendar
                  </StyledNavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <StyledNavLink  className="nav-link text-dark" to="/ContactUs">
                Contact
              </StyledNavLink>
            </li>
            <li className="nav-item">
            {isLoggedIn ? (
            <button
              className="btn btn-outline-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="btn btn-outline-primary"
              onClick={handleLoginClick}
            >
              Login
            </button>
          )}
            </li>


          </ul>
        </div>
      </nav>

     
      {/* {isSignupVisible && (
        <FormContainer className="mt-2">
          <form id="signupForm" onSubmit={handleSubmit}>
            <Title>Signup Form</Title>
            <FormGroup>
              <StyledLabel htmlFor="username">Username:</StyledLabel>
              <StyledInput
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <StyledLabel htmlFor="email">Email:</StyledLabel>
              <StyledInput
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <StyledLabel htmlFor="password">Password:</StyledLabel>
              <StyledInput
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <StyledButton type="submit">Submit</StyledButton>
            <StyledButton type="button" onClick={handleCloseSignupClick}>
              Close
            </StyledButton>
            <p>
              Already have an account?{" "}
              <StyledNavLink  to="#" onClick={handleLoginClick}>
                Login here
              </StyledNavLink>
            </p>
          </form>
        </FormContainer>
      )} */}

      {isLoginVisible && (
        <FormContainer className="mt-2">
          <form id="loginForm" onSubmit={handleSubmit}>
            <Title>Login Form</Title>
            <FormGroup>
              <StyledLabel htmlFor="loginEmail">Email:</StyledLabel>
              <StyledInput
                type="text"
                id="loginEmail"
                value={formData.loginEmail}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <StyledLabel htmlFor="loginPassword">Password:</StyledLabel>
              <StyledInput
                type="password"
                id="loginPassword"
                value={formData.loginPassword}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <StyledButton type="submit">Login</StyledButton>
            <StyledButton type="button"  onClick={() => {setIsLoginVisible(false)}}>
              Close
            </StyledButton>
          </form>
        </FormContainer>
      )}
    </>
  );
};

export default Navbar;
