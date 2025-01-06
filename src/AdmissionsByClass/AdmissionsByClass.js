import "./AdmissionsByClass.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router

const AdmissionsByClass = () => {
  const [groupedAdmissions, setGroupedAdmissions] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
   
    const token = localStorage.getItem("token");
    if (!token) {
      
      navigate("/login");
      return;
    }

    // Fetch grouped admissions if token is present
    const fetchAdmissions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admissions/grouped", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setGroupedAdmissions(response.data.groupedAdmissions);
      } catch (error) {
        console.error("Error fetching grouped admissions:", error);
        setError("Failed to load admissions data.");
      }
    };

    fetchAdmissions();
  }, [navigate]);

  if (error) {
    return <p className="class-admission-error-message">{error}</p>;
  }

  return (
    <div className="class-admission-container">
      <h2 className="class-admission-title">Admissions by Class</h2>
      {groupedAdmissions.length === 0 ? (
        <p className="class-admission-loading">Loading...</p>
      ) : (
        groupedAdmissions.map((group) => (
          <div key={group._id} className="class-admission-table-container">
            <h3 className="class-admission-header">Class: {group._id}</h3>
            <table className="class-admission-table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Contact</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {group.students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.age}</td>
                    <td>{student.gender}</td>
                    <td>{student.contactNumber}</td>
                    <td>{student.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
};

export default AdmissionsByClass;
