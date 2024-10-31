import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Admissionform.css"
const Admissionforms = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    classAppliedFor: "",
    age: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    guardianName: "",
    contactNumber: "",
    email: "",
    previousSchool: "",
    emergencyContact: "",
    emergencyContactNumber: "",
    medicalInfo: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Form Data Submitted:", formData); // Debugging line
  
    try {
      const response = await fetch("http://localhost:5000/api/admissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convert form data to JSON
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit admission form");
      }
  
      const result = await response.json();
      console.log("Form submitted successfully:", result);
      alert("Data Submitted ")
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="m-5 text-center">
        <h2>Join Us For Better Future</h2>
        <Link to="/Admissionprocedure">
          Click to Check Admission Procedure!
        </Link>
      </div>

      <form className="admission-form" onSubmit={handleSubmit}>
        <h2 className="text-center">Admission Form</h2>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="short-input"
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="short-input"
          />
        </div>
        <div className="form-group">
          <label>Class Applied For:</label>
          <input
            type="text"
            name="classAppliedFor"
            value={formData.classAppliedFor}
            onChange={handleChange}
            required
            className="short-input"
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="short-input"
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="short-input"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="short-input"
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="short-input"
            placeholder="Street Address"
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="short-input"
            placeholder="City"
          />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="short-input"
            placeholder="State"
          />
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
            className="short-input"
            placeholder="Zip Code"
          />
        </div>
        <div className="form-group">
          <label>Parent/Guardian Name:</label>
          <input
            type="text"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
            required
            className="short-input"
          />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="short-input"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="short-input"
          />
        </div>
        <div className="form-group">
          <label>Previous School Name:</label>
          <input
            type="text"
            name="previousSchool"
            value={formData.previousSchool}
            onChange={handleChange}
            required
            className="short-input"
          />
        </div>
        <div className="form-group">
          <label>Emergency Contact Name:</label>
          <input
            type="text"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            required
            className="short-input"
          />
        </div>
        <div className="form-group">
          <label>Emergency Contact Number:</label>
          <input
            type="tel"
            name="emergencyContactNumber"
            value={formData.emergencyContactNumber}
            onChange={handleChange}
            required
            className="short-input"
          />
        </div>
        <div className="form-group">
          <label>Medical Conditions/Allergies:</label>
          <textarea
            name="medicalInfo"
            value={formData.medicalInfo}
            onChange={handleChange}
            className="short-input"
            placeholder="Any known medical conditions or allergies"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Additional Notes:</label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            className="short-input"
            placeholder="Additional information"
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </>
  );
};

export default Admissionforms;
