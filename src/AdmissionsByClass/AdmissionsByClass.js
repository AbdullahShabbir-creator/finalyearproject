import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdmissionsByClass.css"
import "jspdf-autotable";
import { jsPDF } from "jspdf";
const AdmissionsByClass = () => {
    const [groupedAdmissions, setGroupedAdmissions] = useState([]);
    const [filteredAdmissions, setFilteredAdmissions] = useState([]);
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState(""); // State for email search
    const [classQuery, setClassQuery] = useState(""); // State for class search
    const [percentageFilters, setPercentageFilters] = useState({}); // State for percentage filter per class
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
                setFilteredAdmissions(response.data.groupedAdmissions);
            } catch (error) {
                setError("Failed to load admissions data.");
            }
        };

        fetchAdmissions();
    }, [navigate]);

    useEffect(() => {
        const filteredData = groupedAdmissions.map((group) => ({
            ...group,
            students: group.students.filter((student) => {
                const percentage = (student.ObtainedMarks / student.TotalMarks) * 100;
                const percentageFilter = percentageFilters[group._id];
                return (
                    student.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
                    group._id.toLowerCase().includes(classQuery.toLowerCase()) &&
                    (!percentageFilter || percentage >= percentageFilter)
                );
            }),
        }));
        setFilteredAdmissions(filteredData);
    }, [searchQuery, classQuery, percentageFilters, groupedAdmissions]);
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
    const handlePercentageChange = (classId, value) => {
        setPercentageFilters({
            ...percentageFilters,
            [classId]: value ? parseFloat(value) : undefined,
        });
    };
 

    const generatePDF = (group) => {
        const doc = new jsPDF();
        
        // Set the title (h2 size) and center it on the page
        doc.setFontSize(18); // Larger font size for the title (like h2)
        const title = "Asif Public High School";  // School name as the title
        const titleWidth = doc.getTextWidth(title);
        const titleX = (doc.internal.pageSize.width - titleWidth) / 2; // Center horizontally
        doc.setFont('helvetica', 'bold');
        doc.text(title, titleX, 20); // Title at the top of the page
        
        // Add a space after the title
        let y = 30;
        
        // Instructions section
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(14); // Smaller font size for the instructions heading
        doc.text("Instructions", 10, y); // Instructions heading
        y += 10; // Space after the heading
        
        // Set font size for instructions content (smaller than the heading)
        doc.setFontSize(12); // Small font for instructions
    
        // Instructions/Additional Information
        const instructions = [
            "If you are in the merit list, please come to the school with your original documents for verification.",
            "This must be done within 10 days from the date of this notification. Ensure all documents are complete.",
            "Please bring any required documents, including ID proofs and marksheets."
        ];
    
        // Loop through the instructions and add them to the PDF with small space between lines
        instructions.forEach((line, index) => {
            doc.text(line, 10, y + (index * 8)); // Adjusted spacing to 10 for small gap
        });
    
        // Update y to start the table after the instructions
        y += instructions.length * 8 + 15; // Adding space for instructions and some extra space before the table
        
        // Table Headers
        const headers = [
            "ID", 
            "Name", 
            "Guardian Name", 
            "Class Applied For", 
            "Obtained Marks", 
            "Total Marks", 
            "Percentage"
        ];
        
        // Using autoTable to generate the table
        doc.autoTable({
            startY: y,
            head: [headers],
            body: group.students.map((student) => [
                student.misId, // ID
                `${student.firstName} ${student.lastName}`, // Name
                student.guardianName, // Guardian Name
                group._id, // Class Applied For (class name from group)
                student.ObtainedMarks, // Obtained Marks
                student.TotalMarks, // Total Marks
                ((student.ObtainedMarks / student.TotalMarks) * 100).toFixed(2) + "%", // Percentage
            ]),
            margin: { top: 0 },
            theme: 'striped',
            headStyles: {
                fillColor: [41, 128, 185], // Header background color (blue)
                textColor: [255, 255, 255], // White text for header
                fontStyle: 'bold', // Bold font for header
            },
            bodyStyles: {
                fontSize: 10, // Smaller font for table body
            }
        });
    
        // Add a motivational message at the end
        doc.setFontSize(12);
        y += group.students.length * 10 + 30; // Adjust y based on table length
        doc.text("Good luck and congratulations!", 10, y);
    
        // Save the PDF
        doc.save(`Admissions_${group._id}.pdf`);
    };
    
    
         

    if (error) {
        return <p className="class-admission-error-message">{error}</p>;
    }

    return (
        <div className="class-admission-container m-3">
            <h2 className="class-admission-title text-center my-4">Admissions Data by Class</h2>

            <div className="row justify-content-center mb-4">
              
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

                        {/* Percentage Filter Input */}
                        <div className="mb-3">
                            <label htmlFor="Percentage" className="text-danger">Filter by Percentage:</label>
                            <input
                                type="number"
                                className="form-control col-md-2"
                                placeholder="Enter percentage"
                                onChange={(e) => handlePercentageChange(group._id, e.target.value)}
                            />
                        </div>

                        <h3 className="class-admission-header text-center text-primary">Class: {group._id}</h3>
                        <button
                            className="btn btn-primary mb-3"
                            onClick={() => generatePDF(group)} // Generate PDF button
                        >
                            Generate PDF for Class {group._id}
                        </button>
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
                                    <th>Percentage</th>
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
                                        <td>{((student.ObtainedMarks / student.TotalMarks) * 100).toFixed(2)}%</td>
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
