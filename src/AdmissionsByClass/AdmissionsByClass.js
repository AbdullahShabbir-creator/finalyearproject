import "./AdmissionsByClass.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router

const AdmissionsByClass = () => {
    const [groupedAdmissions, setGroupedAdmissions] = useState([]);
    const [filteredAdmissions, setFilteredAdmissions] = useState([]);
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState(""); // State for email search
    const [classQuery, setClassQuery] = useState(""); // State for class search
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        const fetchAdmissions = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/admissions/grouped", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(response.data);
                setGroupedAdmissions(response.data.groupedAdmissions);
                setFilteredAdmissions(response.data.groupedAdmissions); // Initially show all data
            } catch (error) {
                console.error("Error fetching grouped admissions:", error);
                setError("Failed to load admissions data.");
            }
        };

        fetchAdmissions();
    }, [navigate]);

    const handleSearch = () => {
        // Filter by both email and class
        const filteredData = groupedAdmissions.map(group => ({
            ...group,
            students: group.students.filter(student =>
                student.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
                group._id.toLowerCase().includes(classQuery.toLowerCase())
            ),
        }));

        setFilteredAdmissions(filteredData);
    };

    // Use useEffect to trigger search whenever searchQuery or classQuery changes
    useEffect(() => {
        handleSearch();
    }, [searchQuery, classQuery]);

    if (error) {
        return <p className="class-admission-error-message">{error}</p>;
    }

    return (
        <div className="class-admission-container m-3">
            <h2 className="class-admission-title text-center my-4">Admissions Data by Class</h2>

            <div className="row justify-content-center mb-4">
                {/* Email Search Input */}
                <div className="col-md-4">
                    <div className="mb-3">
                        <label htmlFor="Email" className="text-danger">Enter Email:</label>
                        <input
                            type="text"
                            className="form-control col-md-5"
                            placeholder="Search by email"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

              
                <div className="col-md-4">
                    <div className="mb-3">
                    <label htmlFor="Email" className="text-danger">Enter Class:</label>
                        <input
                            type="text"
                            className="form-control col-md-6"
                            placeholder="Search by class"
                            value={classQuery}
                            onChange={(e) => setClassQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {filteredAdmissions.length === 0 ? (
                <p className="class-admission-loading">Loading...</p>
            ) : (
                filteredAdmissions.map((group) => (
                    <div key={group._id} className="class-admission-table-container">
                        <h3 className="class-admission-header text-center text-primary">Class: {group._id}</h3>
                        <table className="class-admission-table table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>MIS ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Date of Birth</th>
                                    <th>Guardian Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Previous School</th>
                                    <th>Emergency Contact</th>
                                    <th>Emergency Contact Number</th>
                                    <th>Obtained Marks</th>
                                    <th>Total Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {group.students.map((student, index) => (
                                    <tr key={student._id}>
                                        <td>{index + 1}</td>
                                        <td>{student.misId}</td>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.age}</td>
                                        <td>{student.gender}</td>
                                        <td>{new Date(student.dob).toLocaleDateString()}</td>
                                        <td>{student.guardianName}</td>
                                        <td>{student.contactNumber}</td>
                                        <td>{student.email}</td>
                                        <td>{student.previousSchool}</td>
                                        <td>{student.emergencyContact}</td>
                                        <td>{student.emergencyContactNumber}</td>
                                        <td>{student.ObtainedMarks}</td>
                                        <td>{student.TotalMarks}</td>
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
