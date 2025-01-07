import React from "react";

export default function Care() {
  return (
    <div className="container my-5">
      <h3 className="text-center mb-3 text-success">
        "AT Asif Public School, WE CARE ABOUT"
      </h3>
      <div className="row text-center">
        <div className="col-12 col-md-4 mb-4 d-flex">
          <div className="card text-dark flex-fill">
            <img
              src="https://treehouse.edu.pk/wp-content/uploads/2022/03/WhatsApp-Image-2022-02-25-at-3.58.19-PM.jpeg"
              alt="Diversity"
              className="card-img-top img-fluid p-3 rounded"
            />
            <div className="card-body">
              <h3 className="card-title text-primary">DIVERSITY</h3>
              <p className="card-text text-muted">
                Preschoolers have to learn that they belong and develop a better
                sense of their being. Being exposed to similar and diverse peers
                helps their mental growth. Diversity benefits a young mind, as
                they understand differences between themselves and others.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4 d-flex">
          <div className="card text-dark flex-fill">
            <img
              src="https://treehouse.edu.pk/wp-content/uploads/2022/03/WhatsApp-Image-2022-02-25-at-3.58.18-PM.jpeg"
              alt="The School Rules"
              className="card-img-top img-fluid p-3 rounded"
              
            />
            <div className="card-body">
              <h3 className="card-title mb-3 mt-1 text-primary">
                THE SCHOOL RULES
              </h3>
              <p className="card-text text-muted">
                We believe that rules and structure are important for the
                overall growth of a child. Be punctual, report to school and
                class on time. Strive to be present every school day, respect
                each other at all times, and keep the campus neat and clean.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4 d-flex">
          <div className="card text-dark flex-fill">
            <img
              src="https://treehouse.edu.pk/wp-content/uploads/2022/03/WhatsApp-Image-2022-02-25-at-3.58.15-PM-2.jpeg"
              alt="Safety"
              className="card-img-top img-fluid p-3 rounded"
            />
            <div className="card-body">
              <h3 className="card-title text-primary">SAFETY</h3>
              <p className="card-text text-muted">
                Safety and security of our children is of the utmost importance
                to our staff. Our security team is dedicated to looking after
                the needs of our school. The school has also deployed the
                emergency response system as instructed by local security
                agencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
