import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Navbar = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignupClick = () => setIsSignupVisible(true);
  const handleCloseSignupClick = () => setIsSignupVisible(false);

  const handleChange = (e) => {
    /* handle change logic */
  };

  const handleLoginClick = () => {
    setIsLoginVisible(true);
    setIsSignupVisible(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check for empty input fields
    if (isSignupVisible) {
      if (
        !usernameRef.current.value ||
        !emailRef.current.value ||
        !passwordRef.current.value
      ) {
        alert("Please fill in all fields.");
        return;
      }
    } else {
      const loginEmail = document.getElementById("loginEmail").value;
      const loginPassword = document.getElementById("loginPassword").value;

      if (!loginEmail || !loginPassword) {
        alert("Please fill in all fields.");
        return;
      }
    }

    const data = isSignupVisible
      ? {
          username: usernameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }
      : {
          loginEmail: document.getElementById("loginEmail").value,
          loginPassword: document.getElementById("loginPassword").value,
        };

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
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
      console.log("Success:", result);
      alert(isSignupVisible ? "Signup successful!" : "Login successful!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white font-weight-bold">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2BbZrHjvXQJ3FWOeXkYDCLNhsEW668dVmQ&s"
              alt="logo"
              style={{ height: "45px", marginRight: "2px" }}
            />
            <h6 className="mb-0">
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
              <Link className="nav-link text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                to="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </Link>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <Link
                    className="dropdown-item text-dark"
                    to="/VisionMissionGoals"
                  >
                    Vision And Mission
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark"
                    to="/LeadingwithInnovation"
                  >
                    Leading with Innovation
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                to="#"
                id="academicsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Academics
              </Link>
              <ul className="dropdown-menu" aria-labelledby="academicsDropdown">
                <li>
                  <Link className="dropdown-item" to="/CurriculumOverview">
                    Curriculum Overview
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Examinations and Assessments
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Special Programs
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                to="#"
                id="admissionsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admissions
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="admissionsDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    Admission Process
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/AdmissionForm">
                    Application Forms
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Fees and Scholarships
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                to="#"
                id="studentLifeDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Student Life
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="studentLifeDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/Facilities">
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#learning">
                    Student Events
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#high-school">
                    High School
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#faqs">
                    FAQs
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                to="#"
                id="newsEventsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                News And Events
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="newsEventsDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="#enrollment">
                    School News
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#learning">
                    Events Calendar
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/ContactUs">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-primary"
                onClick={handleSignupClick}
              >
                Account
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {isSignupVisible && (
        <FormContainer className="mt-2 ">
          <form id="signupForm" onSubmit={handleSubmit}>
            <Title>Signup Form</Title>
            <FormGroup>
              <StyledLabel htmlFor="username">Username:</StyledLabel>
              <StyledInput
                type="text"
                id="username"
                ref={usernameRef}
                required
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <StyledLabel htmlFor="email">Email:</StyledLabel>
              <StyledInput
                type="email"
                id="email"
                ref={emailRef}
                required
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <StyledLabel htmlFor="password">Password:</StyledLabel>
              <StyledInput
                type="password"
                id="password"
                ref={passwordRef}
                required
                onChange={handleChange}
              />
            </FormGroup>
            <StyledButton type="submit">Submit</StyledButton>
            <StyledButton type="button" onClick={handleCloseSignupClick}>
              Close
            </StyledButton>
            <p>
              Already have an account?{" "}
              <Link to="#" onClick={handleLoginClick}>
                Login here
              </Link>
            </p>
          </form>
        </FormContainer>
      )}

      {isLoginVisible && (
        <FormContainer className="mt-2">
          <form id="loginForm" onSubmit={handleSubmit}>
            <Title>Login Form</Title>
            <FormGroup>
              <StyledLabel htmlFor="loginEmail">Email:</StyledLabel>
              <StyledInput type="text" id="loginEmail" required />
            </FormGroup>
            <FormGroup>
              <StyledLabel htmlFor="loginPassword">Password:</StyledLabel>
              <StyledInput type="password" id="loginPassword" required />
            </FormGroup>
            <StyledButton type="submit">Login</StyledButton>
            <StyledButton
              type="button"
              onClick={() => {
                setIsSignupVisible(true);
                setIsLoginVisible(false);
              }}
            >
              Back to Signup
            </StyledButton>
          </form>
        </FormContainer>
      )}
    </>
  );
};

export default Navbar;
