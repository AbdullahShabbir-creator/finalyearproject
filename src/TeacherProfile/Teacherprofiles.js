import React, { useState, useEffect } from 'react';
import './Teacherprofile.css'; // Import the CSS file for styling and animation

const TeacherProfiles = () => {
  const [teachers, setTeachers] = useState([]); // Start with an empty array
  const [isEditing, setIsEditing] = useState(false); // Track whether we're editing or adding
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    subject: '',
    bio: '',
    image: '',
    contact: ''
  });

  const [editingIndex, setEditingIndex] = useState(null); // Track which teacher is being edited

  const token = localStorage.getItem('token'); // Check if a token exists in local storage
  const isAuthenticated = !!token; // User is authenticated if the token exists

  // Load teachers from localStorage when the component mounts
  useEffect(() => {
    const savedTeachers = JSON.parse(localStorage.getItem('teachers'));
    if (savedTeachers) {
      setTeachers(savedTeachers);
    }
  }, []);

  // Save teachers to localStorage whenever the teachers state changes
  useEffect(() => {
    if (teachers.length > 0) {
      localStorage.setItem('teachers', JSON.stringify(teachers));
    }
  }, [teachers]);

  // Handle adding a new teacher profile
  const handleAddProfile = (e) => {
    e.preventDefault();
    if (!newTeacher.name || !newTeacher.subject || !newTeacher.bio || !newTeacher.image || !newTeacher.contact) {
      alert("Please fill in all fields.");
      return;
    }

    // Add new teacher to the list
    setTeachers([...teachers, newTeacher]);

    // Reset form and exit editing mode
    setNewTeacher({ name: '', subject: '', bio: '', image: '', contact: '' });
    setIsEditing(false);
    setEditingIndex(null);
  };

  // Handle editing a profile
  const handleEditProfile = (index) => {
    // Set the form with the current profile data for editing
    setNewTeacher({ ...teachers[index] });
    setIsEditing(true);
    setEditingIndex(index); // Set the index of the profile being edited
  };

  // Handle submitting the edited profile
  const handleSubmitEdit = (e) => {
    e.preventDefault();

    // Update the teachers array with the edited profile
    const updatedTeachers = [...teachers];
    updatedTeachers[editingIndex] = newTeacher; // Replace the edited profile

    // Update the state with the new array
    setTeachers(updatedTeachers);

    // Reset form and exit editing mode
    setNewTeacher({ name: '', subject: '', bio: '', image: '', contact: '' });
    setIsEditing(false);
    setEditingIndex(null);
  };

  // Handle deleting a profile
  const handleDeleteProfile = (index) => {
    const updatedTeachers = teachers.filter((_, idx) => idx !== index);
    setTeachers(updatedTeachers);
  };

  return (
    <div className="teacher-profiles">
      <h1>Our Teachers</h1>

      <div className="profiles">
        {teachers.map((teacher, index) => (
          <div className="teacher-profile" key={index}>
            <img
              src={teacher.image}
              alt={teacher.name}
              className="teacher-image"
            />
            <div className="teacher-info">
              <h2>{teacher.name}</h2>
              <p><strong>Subject:</strong> {teacher.subject}</p>
              <p><strong>Bio:</strong> {teacher.bio}</p>
              <p><strong>Contact:</strong> {teacher.contact}</p>

              {isAuthenticated && !isEditing && (
                <div className="teacher-actions">
                  <button onClick={() => handleEditProfile(index)} className="edit-button m-1">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteProfile(index)} className="delete-button m-1">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Teacher Form */}
      {isAuthenticated && (isEditing || editingIndex === null) && (
        <div className="teacher-form">
          <h2>{isEditing ? 'Edit Teacher' : 'Add New Teacher'}</h2>
          <form onSubmit={isEditing ? handleSubmitEdit : handleAddProfile}>
            <input
              type="text"
              placeholder="Name"
              value={newTeacher.name}
              onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Subject"
              value={newTeacher.subject}
              onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
            />
            <input
              type="text"
              placeholder="Bio"
              value={newTeacher.bio}
              onChange={(e) => setNewTeacher({ ...newTeacher, bio: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newTeacher.image}
              onChange={(e) => setNewTeacher({ ...newTeacher, image: e.target.value })}
            />
            <input
              type="text"
              placeholder="Contact"
              value={newTeacher.contact}
              onChange={(e) => setNewTeacher({ ...newTeacher, contact: e.target.value })}
            />
            <button type="submit" className='m-1'>{isEditing ? 'Update Profile' : 'Add Profile'}</button>
            {isEditing && (
              <button type="button" onClick={() => { setIsEditing(false); setEditingIndex(null); }}>
                Cancel
              </button>
            )}
          </form>
        </div>
      )}

     
    </div>
  );
};

export default TeacherProfiles;
