import React from "react";
import "./Facilities.css"; // Import the custom CSS file for styling

function Facilities() {
  return (
    <div className="facilities-container my-5">
      <h2 className="facilities-heading mb-4 text-center">
        “The Asif Public School offers classes with ideal child-to-teacher
        ratio”
      </h2>
      <div className="facilities-row row align-items-center">
        <div className="facilities-image col-md-6">
          <img
            src="https://treehouse.edu.pk/wp-content/uploads/2022/03/WhatsApp-Image-2022-02-25-at-3.58.16-PM-1-1024x768.jpeg"
            alt="Facilities"
            className="img-fluid border border-primary rounded facilities-img"
          />
        </div>
        <div className="facilities-text col-md-6">
          <h2 className="facilities-subheading mb-4 text-center text-success">
            Our Facilities
          </h2>
          <ul className="facilities-list list-unstyled">
            <li className="facilities-item mb-2">
              🎓 Educated and experienced teachers familiar with the best
              practices in childhood education.
            </li>
            <li className="facilities-item mb-2">
              👩‍🏫 Experienced, knowledgeable, and approachable administrators,
              coordinators, and higher management.
            </li>
            <li className="facilities-item mb-2">
              🔒 A secure, state-of-the-art facility with trained security
              staff.
            </li>
            <li className="facilities-item mb-2">💻 A fully equipped computer laboratory.</li>
            <li className="facilities-item mb-2">
              🧠 Centers for motor development, reading excellence, and role
              playing.
            </li>
            <li className="facilities-item mb-2">
              🔬 Equipment for science experiments and S.T.E.M. (Science,
              Technology, Engineering, and Mathematics) practicals.
            </li>
            <li className="facilities-item mb-2">🤖 Robotics for elementary students.</li>
            <li className="facilities-item mb-2">
              🏃‍♂️ Highly trained physical education instructor.
            </li>
            <li className="facilities-item mb-2">
              🏞️ Specialized and age-appropriate indoor and outdoor play areas.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
