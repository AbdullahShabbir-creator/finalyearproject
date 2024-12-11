// import React, { useState } from 'react';
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

const events = [
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
    return (
        <div className="container mt-4">
            <h4 className="text-center mb-4">School Events Calendar</h4>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
}

export default SchoolCalendar;
