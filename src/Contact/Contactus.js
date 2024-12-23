import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Contactus() {
  // Function to load hours from localStorage or use default values if none are found
  const loadHoursFromLocalStorage = () => {
    const savedHours = localStorage.getItem("hours");
    return savedHours ? JSON.parse(savedHours) : [
      { day: "Mon", time: "8:00am - 1:40pm" },
      { day: "Tue", time: "8:00am - 1:40pm" },
      { day: "Wed", time: "8:00am - 1:40pm" },
      { day: "Thu", time: "8:00am - 1:40pm" },
      { day: "Fri", time: "8:00am - 1:00pm" },
    ];
  };

  // Load the hours from localStorage when the component mounts
  const [hours, setHours] = useState(loadHoursFromLocalStorage());

  const token = localStorage.getItem("token");
  const isAuthenticated = !!token;

  // Save the updated hours to localStorage
  const saveHoursToLocalStorage = (updatedHours) => {
    localStorage.setItem("hours", JSON.stringify(updatedHours));
  };

  // Delete hour function
  const deleteHour = (index) => {
    const updatedHours = hours.filter((_, i) => i !== index);
    setHours(updatedHours); // Update state to re-render component
    saveHoursToLocalStorage(updatedHours); // Save updated hours to localStorage
  };

  // Edit hour function
  const editHour = (index, newTime) => {
    if (newTime) {
      const updatedHours = hours.map((entry, i) =>
        i === index ? { ...entry, time: newTime } : entry
      );
      setHours(updatedHours); // Update state to re-render component
      saveHoursToLocalStorage(updatedHours); // Save updated hours to localStorage
    }
  };

  // Add new hour function
  const addHour = () => {
    const day = prompt("Enter the day (e.g., Mon, Tue, etc.):");
    const time = prompt("Enter the time (e.g., 8:00am - 1:40pm):");
    
    if (day && time) {
      const newHour = { day, time };
      const updatedHours = [...hours, newHour];
      setHours(updatedHours); // Update state to re-render component
      saveHoursToLocalStorage(updatedHours); // Save updated hours to localStorage
    }
  };

  useEffect(() => {
    // Ensure hours are loaded from localStorage on initial render
    setHours(loadHoursFromLocalStorage());
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

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
          <Link to="tel:+923335223170" className="text-decoration-none">
            <h5 className="text-success">+92-333-5223170</h5>
          </Link>
          <p>
            Educated and experienced teachers familiar with the best practices
            in childhood education. Experienced, knowledgeable, and approachable
            administrators, coordinators, and higher management.
          </p>
          <h4 className="mt-4">School Info:</h4>
          <Link to="" className="text-decoration-none text-info">
            J5VF+V2X, Ali Pur, Islamabad, Islamabad Capital Territory
          </Link>
        </div>
        <div className="col-md-4">
          <h4 className="mt-4 text-success">Working Hours:</h4>
          <ul className="list-group">
            {hours.map((entry, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {entry.day}
                <span>{entry.time}</span>
                {isAuthenticated && (
                  <div>
                    <button
                      className="btn btn-sm btn-warning mx-2"
                      onClick={() =>
                        editHour(index, prompt("Enter new time for " + entry.day))
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteHour(index)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </li>
            ))}
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
