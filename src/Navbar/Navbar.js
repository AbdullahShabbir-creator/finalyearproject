import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isSignupVisible, setIsSignupVisible] = useState(false);
    const [isLoginVisible, setIsLoginVisible] = useState(false);

    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSignupClick = () => setIsSignupVisible(true);
    const handleCloseSignupClick = () => setIsSignupVisible(false);

    const handleChange = (e) => {

    };
    const handleLoginClick = () => {
        setIsLoginVisible(true);
        setIsSignupVisible(false)
    };
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Check for empty input fields
        if (isSignupVisible) {
            if (!usernameRef.current.value ||  
                !emailRef.current.value || 
                !passwordRef.current.value) {
                alert("Please fill in all fields.");
                return;
            }
        } else {
            const loginEmail = document.getElementById('loginEmail').value;
            const loginPassword = document.getElementById('loginPassword').value;

            if (!loginEmail || !loginPassword) {
                alert("Please fill in all fields.");
                return;
            }
        }

        const data = isSignupVisible ? {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        } : {
            loginEmail: document.getElementById('loginEmail').value,
            loginPassword: document.getElementById('loginPassword').value,
        };

        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Something went wrong');
            }

            const result = await response.json();
            console.log('Success:', result);
            alert(isSignupVisible ? "Signup successful!" : "Login successful!");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white font-weight-bold">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2BbZrHjvXQJ3FWOeXkYDCLNhsEW668dVmQ&s" alt="logo" style={{ height: '45px', marginRight: '2px' }} />
                        <h6 className="mb-0">Asif Public High <br /> School Islamabad</h6>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse text-dark" id="navbarNav">

                    <ul className="navbar-nav p-3 ms-auto" style={{ fontFamily: 'fangsong' }}>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-dark" to="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About Us
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                                <li><Link className="dropdown-item text-dark" to="/VisionMissionGoals">Vision And Mission</Link></li>
                                <li><Link className="dropdown-item text-dark" to="/LeadingwithInnovation">Leading with Innovation</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-dark" to="#" id="academicsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Academics
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="academicsDropdown">
                                <li><Link className="dropdown-item" to="/CurriculumOverview">Curriculum Overview</Link></li>
                                <li><Link className="dropdown-item" to="/">Examinations and Assessments</Link></li>
                                <li><Link className="dropdown-item" to="/">Special Programs</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-dark" to="#" id="admissionsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admissions
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="admissionsDropdown">
                                <li><Link className="dropdown-item" to="/">Admission Process</Link></li>
                                <li><Link className="dropdown-item" to="/AdmissionForm">Application Forms</Link></li>
                                <li><Link className="dropdown-item" to="/">Fees and Scholarships</Link></li>
                                <li><Link className="dropdown-item" to="/">FAQ</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-dark" to="#" id="studentLifeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Student Life
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="studentLifeDropdown">
                                <li><Link className="dropdown-item" to="/Facilities">Facilities</Link></li>
                                <li><Link className="dropdown-item" to="#learning">Student Events</Link></li>
                                <li><Link className="dropdown-item" to="#high-school">High School</Link></li>
                                <li><Link className="dropdown-item" to="#faqs">FAQs</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-dark" to="#" id="newsEventsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                News And Events
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="newsEventsDropdown">
                                <li><Link className="dropdown-item" to="#enrollment">School News</Link></li>
                                <li><Link className="dropdown-item" to="#learning">Events Calendar</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-primary" onClick={handleSignupClick}>Account</button>
                        </li>
                    </ul>
                </div>
            </nav>

            {isSignupVisible && (
                <div id="signupFormContainer" className="form-container">
                    <form id="signupForm" className="form" onSubmit={handleSubmit}>
                        <h2>Signup Form</h2>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            ref={usernameRef}
                            required
                            onChange={handleChange}
                            style={{ border: '3px solid dark', outline: 'none' }}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            ref={emailRef}
                            required
                            onChange={handleChange}
                            style={{ border: '3px solid dark', outline: 'none' }}
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            ref={passwordRef}
                            required
                            onChange={handleChange}
                            style={{ border: '3px solid dark', outline: 'none' }}
                        />
                        <button
                            className='border border-2 border-dark bg-primary'
                            type="submit"
                        >
                            Submit
                        </button>
                        <button
                            className='border border-2 border-dark bg-primary fs-3'
                            type="button"
                            onClick={handleCloseSignupClick}
                        >
                            Close
                        </button>
                        <p>
                            Already have an account?{' '}
                            <Link to="#"onClick={handleLoginClick}>
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
            )}

             {isLoginVisible && (
                <div id="loginFormContainer" className="form-container">
                    <form id="loginForm" className="form" onSubmit={handleSubmit}>
                        <h2>Login Form</h2>
                        <label htmlFor="loginEmail">Email:</label>
                        <input
                            type="text"
                            id="loginEmail"
                            name="loginEmail"
                            required
                            style={{ border: '3px solid dark', outline: 'none' }}
                        />
                        <label htmlFor="loginPassword">Password:</label>
                        <input
                            type="password"
                            id="loginPassword"
                            name="loginPassword"
                            required
                            style={{ border: '3px solid dark', outline: 'none' }}
                        />
                        <button
                            className='border border-2 border-dark bg-primary'
                            type="submit"
                        >
                            Login
                        </button>
                        <button
                            className='border border-2 border-dark bg-primary fs-3'
                            type="button"
                            onClick={() => { setIsSignupVisible(true); setIsLoginVisible(false); }}
                        >
                            Back to Signup
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Navbar;