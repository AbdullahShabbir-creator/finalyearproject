import React from "react";


const Studentevents = () => {
  return (
    <div className="container mt-5">
     <h3 className="text-center text-success">Event Coming Up </h3>
      <div className="row g-4 justify-content-center">
        {/* Card Component */}
        {[
          {
            title: "Iqbal Day",
            date: "9 Nov, 2024",
            description:
              "Celebrate the birth anniversary of Allama Iqbal, the poet of the East and a key inspiration for Pakistan's creation. Reflect on his philosophical thoughts and visionary ideas.",
            buttonClass: "btn-danger",
            buttonText: "Expire",
          },
          {
            title: "Quaid's Event",
            date: "Dec 25, 2024",
            description:
              "Celebrate the birth anniversary of Quaid-e-Azam Muhammad Ali Jinnah, the founder of Pakistan. Join us in honoring his legacy and vision for the nation.",
            buttonClass: "btn-success",
            buttonText: "Up Coming",
          },
          {
            title: "Kashmir Day",
            date: "January 5th, 2024",
            description:
              "Observed to highlight the right of self-determination for the people of Jammu and Kashmir as recognized by the United Nations.",
            buttonClass: "btn-success",
            buttonText: "Up Coming",
          },
          {
            title: "Birth Anniversary of Fatima Jinnah",
            date: "January 1st, 2024",
            description:
              'Celebrating the birth anniversary of Fatima Jinnah, also known as the "Mother of the Nation," for her role in Pakistan\'s independence.',
            buttonClass: "btn-success",
            buttonText: "Up Coming",
          },
          {
            title: "Kashmir Solidarity Day",
            date: "February 5th, 2024",
            description:
              "A public holiday in Pakistan to show support for the Kashmiri people in their struggle for self-determination. Events like seminars, human chains, and rallies are organized.",
            buttonClass: "btn-success",
            buttonText: "Up Coming",
          },
          {
            title: "International Mother Language Day",
            date: "February 21st, 2024",
            description:
              "Celebrated in Pakistan to promote awareness of linguistic and cultural diversity, emphasizing the importance of preserving local languages.",
            buttonClass: "btn-success",
            buttonText: "Up Coming",
          },
        ].map((event, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 d-flex mt-4">
            <div
              className="card shadow-lg text-center w-100 d-flex flex-column justify-content-between"
              style={{
                minHeight: "350px",
                maxWidth: "300px",
                margin: "auto",
              }}
            >
              <div
                className="card-header text-white"
                style={{
                  background: "linear-gradient(to right, #4CAF50, #00BCD4)",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                {event.title}
              </div>
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-subtitle mb-3 text-muted">{event.date}</h5>
                <p className="card-text text-center">{event.description}</p>
                <div className="d-flex justify-content-center mt-auto">
                  <button className={`btn ${event.buttonClass}`}>
                    {event.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studentevents;
