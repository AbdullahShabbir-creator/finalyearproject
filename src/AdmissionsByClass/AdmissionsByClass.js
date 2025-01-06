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
    const [editStudent, setEditStudent] = useState(null); // Track the student to edit
    const [updatedData, setUpdatedData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        dob: "",
        guardianName: "",
        contactNumber: "",
        email: "",
        previousSchool: "",
        emergencyContact: "",
        emergencyContactNumber: "",
        ObtainedMarks: "",
        TotalMarks: ""
    });
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
                setGroupedAdmissions(response.data.groupedAdmissions);
                setFilteredAdmissions(response.data.groupedAdmissions); // Initially show all data
            } catch (error) {
                setError("Failed to load admissions data.");
            }
        };

        fetchAdmissions();
    }, [navigate]);


    useEffect(() => {
        const filteredData = groupedAdmissions.map(group => ({
            ...group,
            students: group.students.filter(student =>
                student.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
                group._id.toLowerCase().includes(classQuery.toLowerCase())
            ),
        }));
    
        setFilteredAdmissions(filteredData);
    }, [searchQuery, classQuery, groupedAdmissions]);
    

    const handleDelete = async (studentId) => {
        const token = localStorage.getItem("token");
        try {
            await axios.delete(`http://localhost:5000/api/admissions/${studentId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            // Remove the deleted student from the state
            const updatedAdmissions = filteredAdmissions.map(group => ({
                ...group,
                students: group.students.filter(student => student._id !== studentId),
            }));
            setFilteredAdmissions(updatedAdmissions);
    
            alert("Student deleted successfully");
        } catch (error) {
            alert("Failed to delete student.");
        }
    };
    
    const handleEditClick = (student) => {
        setEditStudent(student);
        setUpdatedData({
            firstName: student.firstName,
            lastName: student.lastName,
            age: student.age,
            gender: student.gender,

            dob: student.dob,
            guardianName: student.guardianName,
            contactNumber: student.contactNumber,
            email: student.email,
            previousSchool: student.previousSchool,
            emergencyContact: student.emergencyContact,
            emergencyContactNumber: student.emergencyContactNumber,
            ObtainedMarks: student.ObtainedMarks,
            TotalMarks: student.TotalMarks
        });
    };

    const handleUpdate = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.put(
                `http://localhost:5000/api/admissions/${editStudent._id}`,
                updatedData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
         console.log("response", response)
            // Update the student in the state with the updated data
            const updatedAdmissions = filteredAdmissions.map(group => ({
                ...group,
                students: group.students.map(student =>
                    student._id === editStudent._id ? { ...student, ...updatedData } : student
                ),
            }));

            setFilteredAdmissions(updatedAdmissions);
            setEditStudent(null); // Close the edit form
            alert("Student updated successfully");
        } catch (error) {
            alert("Failed to update student.");
        }
    };

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

                {/* Class Search Input */}
                <div className="col-md-4">
                    <div className="mb-3">
                        <label htmlFor="Class" className="text-danger">Enter Class:</label>
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
                                    <th>Actions</th>
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
                                        <td>
                                            <button onClick={() => handleEditClick(student)} className="btn btn-warning">
                                                Edit
                                            </button>
                                            <button onClick={() => handleDelete(student._id)} className="btn btn-danger ml-2">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))
            )}

{editStudent && (
                <div className="edit-form container mt-5">
                    <h2 className="text-center text-primary">Edit Student</h2>
                    
                    <div className="form-group">
                        <label className="text-danger">First Name</label>
                        <input
                            type="text"
                            className="col-3"
                            value={updatedData.firstName}
                            onChange={(e) => setUpdatedData({ ...updatedData, firstName: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-danger">Last Name</label>
                        <input
                            type="text"
                            className="col-3"
                            value={updatedData.lastName}
                            onChange={(e) => setUpdatedData({ ...updatedData, lastName: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input
                            type="number"
                            className="col-3"
                            value={updatedData.age}
                            onChange={(e) => setUpdatedData({ ...updatedData, age: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-danger">Gender</label>
                        <input
                            type="text"
                            className="col-3"
                            value={updatedData.gender}
                            onChange={(e) => setUpdatedData({ ...updatedData, gender: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-danger">Date of Birth</label>
                        <input
                            type="date"
                            className="col-3"
                            value={updatedData.dob}
                            onChange={(e) => setUpdatedData({ ...updatedData, dob: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-danger">Guardian Name</label>
                        <input
                            type="text"
                            className="col-3"
                            value={updatedData.guardianName}
                            onChange={(e) => setUpdatedData({ ...updatedData, guardianName: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-danger">Contact Number</label>
                        <input
                            type="text"
                            className="col-3"
                            value={updatedData.contactNumber}
                            onChange={(e) => setUpdatedData({ ...updatedData, contactNumber: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-danger">Email</label>
                        <input
                            type="email"
                            className="col-3"
                            value={updatedData.email}
                            onChange={(e) => setUpdatedData({ ...updatedData, email: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-danger">Previous School</label>
                        <input
                            type="text"
                            className="col-3"
                            value={updatedData.previousSchool}
                            onChange={(e) => setUpdatedData({ ...updatedData, previousSchool: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-danger">Emergency Contact</label>
                        <input
                            type="text"
                            className="col-3"
                            value={updatedData.emergencyContact}
                            onChange={(e) => setUpdatedData({ ...updatedData, emergencyContact: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-danger">Emergency Contact Number</label>
                        <input
                            type="text"
                            className="col-3"
                            value={updatedData.emergencyContactNumber}
                            onChange={(e) => setUpdatedData({ ...updatedData, emergencyContactNumber: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-danger">Obtained Marks</label>
                        <input
                            type="number"
                            className="col-3"
                            value={updatedData.ObtainedMarks}
                            onChange={(e) => setUpdatedData({ ...updatedData, ObtainedMarks: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-danger">Total Marks</label>
                        <input
                            type="number"
                            className="col-3"
                            value={updatedData.TotalMarks}
                            onChange={(e) => setUpdatedData({ ...updatedData, TotalMarks: e.target.value })}
                        />
                    </div>
                    <button onClick={handleUpdate} className="btn btn-primary">Update</button>
                </div>
            )}
        </div>
    );
};

export default AdmissionsByClass;
