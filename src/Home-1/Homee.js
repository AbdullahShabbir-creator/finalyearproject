import React from "react";
 // Assuming you have a CSS file for styling

function Homee() {
  console.log("Home component rendered");
  return (
    <>
      <div className="Home mt-3">
        {/* Background video */}
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://v.ftcdn.net/00/80/48/20/700_F_80482012_BvyGhWO9pwneLw7KYM2npPX1xqnYXLbY_ST.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="Homedata">
        <h2 className="slide-fwd-center">Enjoy Learning Center</h2>
        <p style={{ fontSize: "13px" }}>
          Education in its general sense is a form of learning in the Knowledge,
          Skills, and Habit
        </p>
        <a href="/" className="btn btn-primary">
          Explore More
        </a>
      </div>
    </>
  );
}

export default Homee;
