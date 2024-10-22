import React from 'react';
import { Link } from 'react-router-dom';

function Contactus() {
  const hours = [
    { day: 'Mon', time: '8:00 - 8:40' },
    { day: 'Tue', time: '8:45 - 9:30' },
    { day: 'Wed', time: '8:00 - 8:40' },
    { day: 'Thu', time: '8:00 - 8:40' },
    { day: 'Fri', time: '8:45 - 9:30' },
  ];

  return (
      <div className="container mt-5">
        <h3 className='text-center'>Contact Us!</h3>
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
            Educated and experienced teachers familiar with the best practices in childhood education.
            Experienced, knowledgeable, and approachable administrators, coordinators, and higher management.
          </p>
          <h4 className="mt-4">School Info:</h4>
          <Link to="/" className="text-decoration-none text-info">
            J5VF+V2X, Ali Pur, Islamabad, Islamabad Capital Territory
          </Link>
        </div>
        <div className="col-md-4 " style={{bottom:"26px"}}>
          <h4 className="mt-4 text-success">Working Hours:</h4>
          <ul className="list-group">
            {hours.map((entry, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {entry.day}
                <span>{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
