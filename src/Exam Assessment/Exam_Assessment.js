import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import "./ExamAssessment.css";

const ExamAssessment = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [pdfLink, setPdfLink] = useState(null);
  const [loading, setLoading] = useState(false);

  // Check if the user is authenticated
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  // Handle class selection
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  // Handle file selection (for authenticated users)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedClass || !pdfFile) {
      setErrorMessage('Please select a class and upload a PDF file.');
      return;
    }
  
    // Clear the previous pdfLink before uploading
    setPdfLink(null);  // Reset the previous PDF link

    const formData = new FormData();
    formData.append('className', selectedClass);  // Ensure this is the class selected
    formData.append('pdfFile', pdfFile);  // Ensure this is the correct field for the file
  
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/exams/upload-pdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.data.fileUrl) {
        setPdfLink(response.data.fileUrl);  // Update the link with the new file URL
        alert('File uploaded successfully!');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setErrorMessage('Error uploading PDF.');
    } finally {
      setLoading(false);
    }
  };

  // Memoized fetchPdf using useCallback
  const fetchPdf = useCallback(async () => {
    if (!selectedClass) return;
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/exams/get-pdf/${selectedClass}`);
      if (response.data.fileUrl) {
        setPdfLink(response.data.fileUrl); // Update the pdfLink state with the new URL
      } else {
        setPdfLink(null); // No file found for this class
      }
    } catch (error) {
      console.error('Error fetching PDF:', error);
      setPdfLink(null); // Reset the link if there's an error
    } finally {
      setLoading(false);
    }
  }, [selectedClass]);  // Add selectedClass as a dependency for fetching the correct file

  useEffect(() => {
    if (selectedClass) {
      fetchPdf(); // Fetch PDF for the selected class
    }
  }, [selectedClass, fetchPdf]);  // Fetch PDF whenever the class selection changes

  return (
    <div className="exam-assessment">
      <h1 className='text-success'>Result</h1>

      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

      <div>
        <label htmlFor="class" className='text-primary'>Select Class (Pre to 10):</label>
        <select
          id="class"
          value={selectedClass}
          onChange={handleClassChange}
          required
        >
          <option value="">Select Class</option>
          <option value="Pre">Pre</option>
          <option value="1">Class 1</option>
          <option value="2">Class 2</option>
          <option value="3">Class 3</option>
          <option value="4">Class 4</option>
          <option value="5">Class 5</option>
          <option value="6">Class 6</option>
          <option value="7">Class 7</option>
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
        </select>
      </div>

      {/* For Admin: File Upload (only visible if authenticated) */}
      {isAuthenticated && (
        <div>
          <div>
            <label htmlFor="pdf" className='text-primary'>Upload Exam Result (PDF):</label>
            <input
              type="file"
              id="pdf"
              accept="application/pdf"
              onChange={handleFileChange}
            />
          </div>

          <button type="submit" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Uploading...' : 'Upload PDF'}
          </button>
        </div>
      )}

      {/* For Users: PDF Download (available to all users for a selected class) */}
      {!isAuthenticated && selectedClass && (
        <div>
          <h3>Download PDF for Class {selectedClass}</h3>
          {loading ? (
            <p>Loading...</p>
          ) : pdfLink ? (
            <a href={pdfLink} download={`exam_result_${selectedClass}.pdf`}>
              Download PDF
            </a>
          ) : (
            <p>No available result for this class. Wait for Result...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ExamAssessment;
