import React, { useState } from "react";
import axios from "axios";
import "./Admissionform.css"; // Link to external CSS

const AdmissionForm = () => {
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
    ObtainedMarks: "",
    TotalMarks: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [misId, setMisId] = useState("");
  const [admissionDetails, setAdmissionDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Validate inputs
    let validationError = "";
    if (type === "number" && isNaN(Number(value))) {
      validationError = "This field must be a number.";
    }
    if (name === "contactNumber" && value.length !== 11) {
      validationError = "Contact number must be exactly 11 digits.";
    }
    if (name === "emergencyContact" && value.length !== 11) {
      validationError = "Emergency contact must be exactly 11 digits.";
    }

    // Update formData and errors state
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validationError });
  };

  // Function to restrict non-numeric characters
  const handleKeyPress = (e) => {
    const charCode = e.keyCode || e.which;
    if ((charCode < 48 || charCode > 57) && charCode !== 8) {
      e.preventDefault(); // Prevent non-numeric input
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(errors).some((err) => err !== "")) {
      setErrorMessage("Please fix the errors before submitting.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/admission", formData);
      setSuccessMessage(`Form submitted successfully! Your MIS ID is: ${response.data.admission.misId}`);
      alert(`Your MIS ID is: ${response.data.admission.misId}`);
      setErrorMessage(""); // Clear any previous error
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      setErrorMessage("There was an error submitting the form. Please try again.");
      setSuccessMessage(""); // Clear any previous success message
    }
  };

  const handleTrackAdmission = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/admission/${misId}`);
      setAdmissionDetails(response.data.admission);
      setErrorMessage("");

      if (response.data.admission.status === "inProgress") {
        alert("Wait for the merit list, your admission is in process.");
        setSuccessMessage("Your admission is in process. Wait for the merit list.");
      } else if (response.data.admission.status === "accepted") {
        alert("Congratulations! Your admission has been accepted.");
        setSuccessMessage("Your admission has been accepted. Congratulations!");
      }
    } catch (error) {
      setAdmissionDetails(null);
      setErrorMessage("No admission found for this MIS ID.");
      alert("No admission found for this MIS ID.");
    }
  };

  return (
    <>
      <div className="formapp">
        <div className="admission-form-container">
          <div className="track-admission-section mb-5">
            <h2 className="text-center text-Primary mb-5">Track and Apply for Admission</h2>
            <h5 className="track-admission-header">Want to Track Your Admission?</h5>
            <p className="m-0 text-danger">To track your admission status, you must fill out the Admission Form first.</p>
            <input
              type="text"
              placeholder="Enter MIS ID to track"
              value={misId}
              onChange={(e) => setMisId(e.target.value)}
              className="track-input col-5"
            />
            <button className="btn-track m-2" onClick={handleTrackAdmission}>
              Track Admission
            </button>

            {admissionDetails && (
              <div className="admission-details">
                <h4>Admission Details</h4>
                <p>First Name: {admissionDetails.firstName}</p>
                <p>Last Name: {admissionDetails.lastName}</p>
                <p>Class Applied For: {admissionDetails.classAppliedFor}</p>
                <p>Email: {admissionDetails.email}</p>
              </div>
            )}
          </div>

          <h2 className="form-title text-center">Admission Form</h2>
          <form className="admission-form" style={{ marginLeft: "60px" }} onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
            <select name="classAppliedFor" onChange={handleChange} required>
              <option value="">Select Class</option>
              <option value="Pre">Pre</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              onKeyUp={handleChange}
              required
            />
            <select name="gender" onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="date" name="dob" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
            <input type="text" name="city" placeholder="City" onChange={handleChange} required />
            <input type="text" name="state" placeholder="State" onChange={handleChange} required />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              inputMode="numeric"
              pattern="[0-9]*"
              required
            />
            <input
              type="text"
              name="guardianName"
              placeholder="Guardian's Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              inputMode="numeric"
              pattern="[0-9]*"
              required
            />
            {errors.contactNumber && <p className="error-message">{errors.contactNumber}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input type="text" name="previousSchool" placeholder="Previous School" onChange={handleChange} required />
            <input type="text" name="Name of Relation" placeholder="Name of Relation " onChange={handleChange} required />
            <input
              type="number"
              name="emergencyContact"
              placeholder="Emergency Contact"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              inputMode="numeric"
              pattern="[0-9]*"
              required
            />
            {errors.emergencyContact && <p className="error-message">{errors.emergencyContact}</p>}
            <input type="number" name="ObtainedMarks" placeholder="Obtained Marks" onChange={handleChange} />
            <input type="number" name="TotalMarks" placeholder="Total Marks" onChange={handleChange} />
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="submit-btn col-3" style={{ marginLeft: "280px" }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdmissionForm;
