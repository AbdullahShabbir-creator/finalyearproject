import React, { useState } from 'react';
import axios from 'axios';
import './scholarshipform.css'; // External CSS file for styling

const ScholarshipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    Misid: '',
    className: '',
    Grade: '',
    email: '',
    phoneNumber: '',
    scholarshipType: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');


    const formDataWithStringMisid = { ...formData, Misid: String(formData.Misid) };

    try {
      // Send the form data to the backend
      const response = await axios.post('http://localhost:5000/api/scholarship/submit', formDataWithStringMisid);
      setSuccess(response.data.message);
      alert(" ScholarShip Form Succesfully Submitted")  // Success message
    } catch (err) {
      // Handle error (e.g., student Misid not found)
      setError(err.response ? err.response.data.message : 'Something went wrong.');
    }
  };

  return (
    <div className="unique-scholarship-form-container">
      <h2 className="unique-form-title">Scholarship Application Form</h2>
      
    
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form onSubmit={handleSubmit} className="unique-scholarship-form">
        <div className="unique-form-group">
          <label htmlFor="Misid">Mis ID</label>
          <input
            type="text"  
            id="Misid"
            name="Misid"
            value={formData.Misid}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="unique-form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="unique-form-group">
          <label htmlFor="className">Class</label>
          <input
            type="text"
            id="className"
            name="className"
            value={formData.className}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="unique-form-group">
          <label htmlFor="Grade">Grade</label>
          <input
            type="number"
            id="Grade"
            name="Grade"
            value={formData.Grade}
            onChange={handleChange}
            required
            className="form-input"
            min="0"
          />
        </div>

        <div className="unique-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="unique-form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            
            placeholder="Enter 10-digit phone number"
            className="form-input"
          />
        </div>

        <div className="unique-form-group">
          <label htmlFor="scholarshipType">Scholarship Type</label>
          <select
            id="scholarshipType"
            name="scholarshipType"
            value={formData.scholarshipType}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="">Select Type</option>
            <option value="orphan">Orphan</option>
            <option value="topper">Topper</option>
            <option value="siblings">Siblings</option>
          </select>
        </div>

        <button type="submit" className="unique-submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ScholarshipForm;
