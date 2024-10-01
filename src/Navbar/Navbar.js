import React from 'react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isSignupVisible, setIsSignupVisible] = useState(false)
    const handleSignupClick = () => {
        setIsSignupVisible(true)
    }
    const handleCloseSignupClick = () => {
        setIsSignupVisible(false)
    }
    const nameRef = useRef(null);
    const fatherNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneNumberRef = useRef(null);

   
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const fatherName = fatherNameRef.current.value;
        const email = emailRef.current.value;
        const phoneNumber = phoneNumberRef.current.value;
        console.log('Form Data:', { name, fatherName, email, phoneNumber });
        alert("Submitted Successfully");
        setIsSignupVisible(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white font-weight-bold">
                <div className="container text-white">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2BbZrHjvXQJ3FWOeXkYDCLNhsEW668dVmQ&s" alt="logo" style={{ height: '45px', marginRight: '2px' }} />
                        <h6 className="mb-0">Asif Public High <br /> School Islamabad</h6>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse text-dark" id="navbarNav">
                    <ul className="navbar-nav p-3 ms-auto" style={{fontFamily: 'fangsong'}}>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                        </li>
                         <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-dark" to="" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About Us
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                                <li><Link className="dropdown-item text-dark" to="/VisionMissionGoals">Vission And Mission</Link></li>
                                <li><Link className="dropdown-item text-dark" to="/LeadingwithInnovation">Leading with Innovation</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-dark" to="#blogs" id="blogsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Academics
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="blogsDropdown">
                                <li><Link className="dropdown-item" to="/Curriculum Overview">Curriculum Overview</Link></li>
                                <li><Link className="dropdown-item" to="/">Examinations and Assessments</Link></li>
                                <li><Link className="dropdown-item" to="/">Special Programs</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-dark" to="#facilities" id="facilitiesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Admissions
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="facilitiesDropdown">
                                <li><Link className="dropdown-item" to="/">Admission Process</Link></li>
                                <li><Link className="dropdown-item" to="/">Application Forms</Link></li>
                                <li><Link className="dropdown-item" to="/"> Fees and Scholarships</Link></li>
                                <li><Link className="dropdown-item" to="/">FAQ</Link></li>
                            </ul>
                        </li> 
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-dark" to="#admissions" id="admissionsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Student Life
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="admissionsDropdown">
                                <li><Link className="dropdown-item" to="#enrollment">Activites</Link></li>
                                <li><Link className="dropdown-item" to="#learning">Student Events</Link></li>
                                <li><Link className="dropdown-item" to="#high-school">High School</Link></li>
                                <li><Link className="dropdown-item" to="#faqs">FAQs</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-dark" to="#admissions" id="admissionsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              News And Events 
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="admissionsDropdown">
                                <li><Link className="dropdown-item" to="#enrollment">School News</Link></li>
                                <li><Link className="dropdown-item" to="#learning">Events Calendar</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-primary" onClick={handleSignupClick}>Account</button>
                        </li>
                    </ul>
                </div>
                <div>
                    {isSignupVisible && (
                        <div id="signupFormContainer" className="form-container">
                            <form id="signupForm" className="form" onSubmit={handleSubmit}>
                                <h2>Signup Form</h2>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    ref={nameRef}
                                    required
                                    style={{ border: '3px solid dark', outline: 'none' }}
                                />

                                <label htmlFor="fatherName">Father's Name:</label>
                                <input
                                    type="text"
                                    id="fatherName"
                                    ref={fatherNameRef}
                                    required
                                    style={{ border: '3px solid dark', outline: 'none', }}
                                />

                                <label htmlFor="email">Email:</label>
                                 <input
                                    type="email"
                                    id="email"
                                    ref={emailRef}
                                    required
                                    style={{ border: '3px solid dark', outline: 'none' }}
                                />

                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    ref={phoneNumberRef}
                                    required
                                    style={{ border: '3px solid dark', outline: 'none' }}
                                />

                                <button
                                    className='border border-2 border-dark bg-warning'
                                    type="submit"
                                >
                                    Submit
                                </button>
                                <button
                                    className='border border-2 border-dark bg-warning'
                                    type="button"
                                    onClick={handleCloseSignupClick}
                                >
                                    Close
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </nav>
        </>

    );
};

export default Navbar;
