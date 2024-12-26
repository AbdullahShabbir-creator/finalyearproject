import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contactus() {
  const [hours, setHours] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem("token");
  const isAuthenticated = !!token;

  // Function to fetch hours from the backend
  const fetchWorkingHours = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/workinghours');
      if (!response.ok) {
        throw new Error('Failed to fetch working hours');
      }
      const data = await response.json();
      setHours(data); // Set the data to state
    } catch (error) {
      setError('Error fetching working hours');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWorkingHours(); // Fetch hours when the component mounts
  }, []);

  // Edit hour function
  const editHour = (id, newTime) => {
    axios.put(`/api/workinghours/${id}`, { time: newTime })
      .then(() => {
        setHours(hours.map(hour => hour._id === id ? { ...hour, time: newTime } : hour)); // Update state with new time
      })
      .catch((error) => {
        console.error('Error editing hour:', error);
      });
  };

  // Delete hour function
  const deleteHour = (id) => {
    axios.delete(`/api/workinghours/${id}`)
      .then(() => {
        setHours(hours.filter(hour => hour._id !== id)); // Update state to remove the deleted hour
      })
      .catch((error) => {
        console.error("Error deleting hour:", error);
      });
  };

  // Add hour function
  const addHour = () => {
    const day = prompt("Enter the day (e.g., Mon, Tue, etc.):");
    const time = prompt("Enter the time (e.g., 8:00am - 1:40pm):");

    if (day && time) {
      const newHour = { day, time };
      axios.post('http://localhost:5000/api/workinghours', newHour)
        .then((response) => {
          setHours([...hours, response.data]); // Add the new hour to the list
        })
        .catch((error) => {
          console.error('Error adding hour:', error);
        });
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">Contact Us!</h3>
      <div className="row mt-3 align-items-start">
        <div className="col-md-4 mb-4">
          <img
            src="https://treehouse.edu.pk/wp-content/uploads/2022/03/WhatsApp-Image-2022-02-25-at-3.58.13-PM.jpeg"
            alt="Contact Us"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-4 mb-4">
          <h3 className="text-primary">Welcome to Asifian Family</h3>
          <h5 className="text-success">+92-333-5223170</h5>
          <p>
            Educated and experienced teachers familiar with the best practices
            in childhood education. Experienced, knowledgeable, and approachable
            administrators, coordinators, and higher management.
          </p>
          <h4 className="mt-4">School Info:</h4>
          <p>J5VF+V2X, Ali Pur, Islamabad, Islamabad Capital Territory</p>
        </div>
        <div className="col-md-4">
          <h4 className="mt-4 text-success">Working Hours:</h4>
          {error && <p className="text-danger">{error}</p>}
          <ul className="list-group">
            {hours.length > 0 ? (
              hours.map((entry) => (
                <li key={entry._id} className="list-group-item d-flex justify-content-between align-items-center">
                  {entry.day}
                  <span>{entry.time}</span>
                  {isAuthenticated && (
                    <div>
                      <button
                        className="btn btn-sm btn-warning mx-2"
                        onClick={() =>
                          editHour(entry._id, prompt("Enter new time for " + entry.day))
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteHour(entry._id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </li>
              ))
            ) : (
              <li className="list-group-item">No working hours available</li>
            )}
          </ul>
          {isAuthenticated && (
            <button className="btn btn-sm btn-success mt-3" onClick={addHour}>
              Add Hour
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contactus;
