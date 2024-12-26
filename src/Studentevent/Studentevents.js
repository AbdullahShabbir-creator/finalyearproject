import React, { useState, useEffect } from "react";

const Studentevents = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
  });
  const [editEvent, setEditEvent] = useState(null); // For editing event
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set login status based on token presence
    fetchEvents(); // Fetch events on load
  }, []);

  // Fetch events from the API
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/events", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setEvents(data);
      } else {
        setError(data.error || "Failed to fetch events");
      }
    } catch (err) {
      setLoading(false);
      setError("Failed to fetch events");
    }
  };

  // Handle adding an event
  const handleAddEvent = async () => {
    if (!isLoggedIn) return;

    const token = localStorage.getItem("token");
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        fetchEvents(); // Re-fetch events after adding
        setNewEvent({ name: "", date: "", location: "", description: "" }); // Clear form
      } else {
        setError(data.error || "Failed to add event");
      }
    } catch (err) {
      setLoading(false);
      setError("Failed to add event");
    }
  };

  // Handle deleting an event
  const handleDeleteEvent = async (id) => {
    if (!isLoggedIn) return;

    const token = localStorage.getItem("token");
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        fetchEvents(); // Re-fetch events after deletion
      } else {
        setError(data.error || "Failed to delete event");
      }
    } catch (err) {
      setLoading(false);
      setError("Failed to delete event");
    }
  };

  // Handle updating an event
  const handleUpdateEvent = async () => {
    if (!isLoggedIn || !editEvent) return;

    const token = localStorage.getItem("token");
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/events/${editEvent._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editEvent),
        }
      );

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        fetchEvents(); // Re-fetch events after updating
        setEditEvent(null); // Clear edit state
      } else {
        setError(data.error || "Failed to update event");
      }
    } catch (err) {
      setLoading(false);
      setError("Failed to update event");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center text-success">Upcoming Events</h3>

      {loading && <p>Loading events...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="row g-4 justify-content-center">
        {/* Render events */}
        {events.map((event) => (
          <div key={event._id} className="col-12 col-sm-6 col-md-4 d-flex mt-4">
            <div className="card shadow-lg text-center w-100 d-flex flex-column justify-content-between">
              <div className="card-header text-white">{event.name}</div>
              <div className="card-body">
                <h5 className="card-subtitle mb-3 text-muted">{event.date}</h5>
                <p className="card-text">{event.location}</p>
                <p className="card-text">{event.description}</p>
                {isLoggedIn && (
                  <>
                    <button
                      className="btn btn-success m-2"
                      onClick={() => setEditEvent(event)}
                      disabled={loading}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger m-2"
                      onClick={() => handleDeleteEvent(event._id)}
                      disabled={loading}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

   
      {isLoggedIn && (
        <div className="mt-5">
          <h4 className="m-2">{editEvent ? "Edit Event" : "Add New Event"}</h4>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              value={editEvent ? editEvent.name : newEvent.name}
              onChange={(e) =>
                editEvent
                  ? setEditEvent({ ...editEvent, name: e.target.value })
                  : setNewEvent({ ...newEvent, name: e.target.value })
              }
              className="form-control mb-3"
            />
            <input
              type="date"
              value={editEvent ? editEvent.date : newEvent.date}
              onChange={(e) =>
                editEvent
                  ? setEditEvent({ ...editEvent, date: e.target.value })
                  : setNewEvent({ ...newEvent, date: e.target.value })
              }
              className="form-control mb-3"
            />
            <input
              type="text"
              placeholder="Location"
              value={editEvent ? editEvent.location : newEvent.location}
              onChange={(e) =>
                editEvent
                  ? setEditEvent({ ...editEvent, location: e.target.value })
                  : setNewEvent({ ...newEvent, location: e.target.value })
              }
              className="form-control mb-3"
            />
            <textarea
              placeholder="Description"
              value={editEvent ? editEvent.description : newEvent.description}
              onChange={(e) =>
                editEvent
                  ? setEditEvent({ ...editEvent, description: e.target.value })
                  : setNewEvent({ ...newEvent, description: e.target.value })
              }
              className="form-control mb-3"
            ></textarea>
          </div>
          <button
            className="btn btn-primary "
            onClick={editEvent ? handleUpdateEvent : handleAddEvent}
            disabled={loading}
          >
            {loading
              ? editEvent
                ? "Updating..."
                : "Adding..."
              : editEvent
              ? "Update Event"
              : "Add Event"}
          </button>
          {editEvent && (
            <button
              className="btn btn-secondary ms-2"
              onClick={() => setEditEvent(null)}
              disabled={loading}
            >
              Cancel
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Studentevents;
