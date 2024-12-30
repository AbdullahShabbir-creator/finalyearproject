import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const StyledNavLink = styled(Link)`
  color: #000; // Default text color
  text-decoration: none; // Remove underline by default
  font-family: "fangsong", sans-serif; // Apply font family
  transition: all 0.4s ease; 

  &:hover {
    // color:rgb(0, 128, 248); // Change text color on hover
    text-decoration: none; // Underline the text on hover
    transform: scale(1.05); // Slightly enlarge the link on hover
    // Subtle background effect
  }
`;


const Navbar = () => {
  const isLoggedIn = localStorage.getItem('token') !== null; 
  const navigate = useNavigate();
  
const handleLogout = () => {
  localStorage.removeItem('token');
  alert("Logout Succesfull ")
  navigate('/login');
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
                  <StyledNavLink  className="dropdown-item" to="/ExamAssessment">
                   Result
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
                  <StyledNavLink  className="dropdown-item" to="/Fees">
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
                    School Gallery
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
            {isLoggedIn ? (
          <li className="nav-item">
            <StyledNavLink className="nav-link text-dark" onClick={handleLogout}>
              Logout
            </StyledNavLink>
          </li>
        ) : (
          <li className="nav-item">
            <StyledNavLink className="nav-link text-dark" to="/login">
              Admin
            </StyledNavLink>
          </li>
        )}
           
          </ul>
        </div>
      </nav>   
    </>
  );
};

export default Navbar;
