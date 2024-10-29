import React, { useState } from "react";
import { Link } from "react-router-dom";

const Admissionforms = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    guardianName: "",
    guardianPhone: "",
    correspondenceAddress: "",
    permanentAddress: "",
    email: "",
    mobile: "",
    dateOfBirth: "",
    placeOfBirth: {
      city: "",
      country: "",
      postalCode: "",
    },
    nationality: "",
    age: "",
    classAppliedFor: "",
    oldSchool: "",
    oldGrade: "",
    father: {
      name: "",
      nic: "",
      address: "",
      occupation: "",
      employer: "",
      phone: "",
    },
    mother: {
      name: "",
      nic: "",
      address: "",
      occupation: "",
      employer: "",
      phone: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNestedChange = (e, parentKey) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [parentKey]: {
        ...formData[parentKey],
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="m-5 text-center">
        <h2>Join Us For Better Future</h2>
        <Link to="/Admissionform">
          <img
            src="https://www.fillhq.com/wp-content/smush-webp/2023/02/Online-Registration-Form-Efficient-Way-For-Data-Collection-1-1536x864.png.webp"
            alt="Online Registration Form"
            style={{
              width: "100%",
              maxWidth: "800px",
              height: "auto",
              borderRadius: "20px",
              margin: "0 auto",
              display: "block",
            }}
          />
        </Link>
      </div>

      <form className="admission-form " onSubmit={handleSubmit}>
        <h2 className="text-center">Admission Form</h2>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Middle Name:</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
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
          />
        </div>
        <div className="form-group">
          <label>Father’s/Guardian’s Name:</label>
          <input
            type="text"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Father’s/Guardian’s Phone No:</label>
          <input
            type="text"
            name="guardianPhone"
            value={formData.guardianPhone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address for Correspondence:</label>
          <textarea
            name="correspondenceAddress"
            value={formData.correspondenceAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Permanent Address:</label>
          <textarea
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Phone No:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Place of Birth (City):</label>
          <input
            type="text"
            name="city"
            value={formData.placeOfBirth.city}
            onChange={(e) => handleNestedChange(e, "placeOfBirth")}
            required
          />
          <label>Postal/Zip Code:</label>
          <input
            type="text"
            name="postalCode"
            value={formData.placeOfBirth.postalCode}
            onChange={(e) => handleNestedChange(e, "placeOfBirth")}
          />
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.placeOfBirth.country}
            onChange={(e) => handleNestedChange(e, "placeOfBirth")}
            required
          />
        </div>
        <div className="form-group">
          <label>Nationality:</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
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
          />
        </div>
        <div className="form-group">
          <label>Previous School:</label>
          <input
            type="text"
            name="oldSchool"
            value={formData.oldSchool}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Previous Grade:</label>
          <input
            type="text"
            name="oldGrade"
            value={formData.oldGrade}
            onChange={handleChange}
            required
          />
        </div>
        <h3>Father's Details</h3>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.father.name}
            onChange={(e) => handleNestedChange(e, "father")}
            required
          />
          <label>N.I.C. No:</label>
          <input
            type="text"
            name="nic"
            value={formData.father.nic}
            onChange={(e) => handleNestedChange(e, "father")}
          />
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.father.address}
            onChange={(e) => handleNestedChange(e, "father")}
          />
          <label>Occupation:</label>
          <input
            type="text"
            name="occupation"
            value={formData.father.occupation}
            onChange={(e) => handleNestedChange(e, "father")}
          />
          <label>Employer:</label>
          <input
            type="text"
            name="employer"
            value={formData.father.employer}
            onChange={(e) => handleNestedChange(e, "father")}
          />
          <label>Telephone:</label>
          <input
            type="text"
            name="phone"
            value={formData.father.phone}
            onChange={(e) => handleNestedChange(e, "father")}
          />
        </div>
        <h3>Mother's Details</h3>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.mother.name}
            onChange={(e) => handleNestedChange(e, "mother")}
            required
          />
          <label>N.I.C. No:</label>
          <input
            type="text"
            name="nic"
            value={formData.mother.nic}
            onChange={(e) => handleNestedChange(e, "mother")}
          />
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.mother.address}
            onChange={(e) => handleNestedChange(e, "mother")}
          />
          <label>Occupation:</label>
          <input
            type="text"
            name="occupation"
            value={formData.mother.occupation}
            onChange={(e) => handleNestedChange(e, "mother")}
          />
          <label>Employer:</label>
          <input
            type="text"
            name="employer"
            value={formData.mother.employer}
            onChange={(e) => handleNestedChange(e, "mother")}
          />
          <label>Telephone:</label>
          <input
            type="text"
            name="phone"
            value={formData.mother.phone}
            onChange={(e) => handleNestedChange(e, "mother")}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </>
  );
};

export default Admissionforms;
