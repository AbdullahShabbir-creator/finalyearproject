import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
    'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

// Default events
const defaultEvents = [
    {
        title: "Math Exam",
        allDay: true,
        start: new Date(2024, 11, 20), // Dec 20, 2024
        end: new Date(2024, 11, 20),
    },
    {
        title: "Science Fair",
        start: new Date(2024, 11, 22, 10, 0), // Dec 22, 2024, 10 AM
        end: new Date(2024, 11, 22, 15, 0), // Dec 22, 2024, 3 PM
    },
    {
        title: "Winter Break",
        start: new Date(2024, 11, 24),
        end: new Date(2025, 0, 5), // Jan 5, 2025
    },
];

function SchoolCalendar() {
    // Load token from localStorage
    const token = localStorage.getItem('token');
    const [events, setEvents] = useState(defaultEvents);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false); // State to toggle the Add Event form
    const [newEvent, setNewEvent] = useState({
        title: '',
        start: '',
        end: '',
    });

    // Function to handle event selection (for editing or deleting)
    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
        setIsEditing(true);
    };

    // Function to handle adding a new event
    const handleAddEvent = (e) => {
        // Show the Add Event form
        setIsAdding(true);
    };

    // Handle changes in the form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({
            ...newEvent,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmitNewEvent = (e) => {
        e.preventDefault();

        const { title, start, end } = newEvent;

        if (title && start && end) {
            const newEventObj = {
                title,
                start: new Date(start),
                end: new Date(end),
            };
            setEvents([...events, newEventObj]);
            setIsAdding(false);
            setNewEvent({
                title: '',
                start: '',
                end: '',
            });
        } else {
            alert('Please fill in all fields!');
        }
    };

    // Function to handle event edit
    const handleEditEvent = () => {
        if (selectedEvent) {
            const newTitle = prompt("Edit event title:", selectedEvent.title);
            const newStart = prompt("Edit start date (YYYY-MM-DD):", format(selectedEvent.start, "yyyy-MM-dd"));
            const newEnd = prompt("Edit end date (YYYY-MM-DD):", format(selectedEvent.end, "yyyy-MM-dd"));

            if (newTitle && newStart && newEnd) {
                const updatedEvent = {
                    ...selectedEvent,
                    title: newTitle,
                    start: new Date(newStart),
                    end: new Date(newEnd),
                };
                const updatedEvents = events.map(event =>
                    event === selectedEvent ? updatedEvent : event
                );
                setEvents(updatedEvents);
            }
        }
        setIsEditing(false);
        setSelectedEvent(null);
    };

    // Function to handle event deletion
    const handleDeleteEvent = () => {
        if (selectedEvent) {
            const updatedEvents = events.filter(event => event !== selectedEvent);
            setEvents(updatedEvents);
        }
        setIsEditing(false);
        setSelectedEvent(null);
    };

    return (
        <div className="container mt-4">
            <h4 className="text-center mb-4">School Events Calendar</h4>
            
            {/* Add Event Button */}
            {token && !isAdding && (
                <button onClick={handleAddEvent} className="btn btn-success mb-3">
                    Add Event
                </button>
            )}

            {/* Add Event Form */}
            {isAdding && (
                <form onSubmit={handleSubmitNewEvent} className="mb-3">
                    <div className="form-group">
                        <label>Event Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={newEvent.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Start Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            name="start"
                            value={newEvent.start}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>End Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            name="end"
                            value={newEvent.end}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Save Event</button>
                    <button
                        type="button"
                        onClick={() => setIsAdding(false)}
                        className="btn btn-secondary ml-2"
                    >
                        Cancel
                    </button>
                </form>
            )}

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                selectable={token ? true : false} // Enable selection if token is present
                onSelectEvent={handleSelectEvent}
            />

            {/* Show edit and delete options if the user is logged in */}
            {token && isEditing && selectedEvent && (
                <div className="mt-3">
                    <button onClick={handleEditEvent} className="btn btn-primary mr-2">
                        Edit Event
                    </button>
                    <button onClick={handleDeleteEvent} className="btn btn-danger">
                        Delete Event
                    </button>
                </div>
            )}
        </div>
    );
}

export default SchoolCalendar;
