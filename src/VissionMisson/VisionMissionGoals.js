import React from "react";
import './VisionMissionGoals.css';  // Make sure to import the CSS file

const VisionMissionGoals = () => {
  return (
    <div className="container my-5">
      <h3 className="text-center mb-4 vision-title">Vision, Mission & Goals</h3>
      <div className="row">
        {/* Vision Card */}
        <div className="col-md-4 mb-4">
          <div className="card vision-card text-center h-100">
            <img
              src="https://xls.xim.edu.in/wp-content/uploads/2020/05/vision.jpg"
              className="card-img-top rounded-circle mx-auto mt-3 vision-image"
              alt="Vision"
              style={{ width: "120px", height: "120px" }}
            />
            <div className="card-body">
              <h2 className="card-title ">Vision</h2>
              <p className="card-text">
                To cultivate an environment where every student can thrive and
                reach their fullest potential in a future driven by technology.
              </p>
              <a href="/" className="btn btn-primary explore-btn">
                Explore More
              </a>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="col-md-4 mb-4">
          <div className="card mission-card text-center h-100">
            <img
              src="https://cocinonline.org/wp-content/uploads/2021/05/Company-Mission-Statement-1.jpg"
              className="card-img-top rounded-circle mx-auto mt-3 mission-image"
              alt="Mission"
              style={{ width: "120px", height: "120px" }}
            />
            <div className="card-body">
              <h2 className="card-title ">Mission</h2>
              <p className="card-text">
                To provide comprehensive education that fosters curiosity and
                critical thinking, preparing students for modern challenges.
              </p>
              <a href="/" className="btn btn-primary explore-btn">
                Explore More
              </a>
            </div>
          </div>
        </div>

        {/* Goals Card */}
        <div className="col-md-4 mb-4">
          <div className="card goals-card text-center h-100">
            <img
              src="https://www.intouch-marketing.com/hs-fs/hubfs/Goal.jpg?width=900&name=Goal.jpg"
              className="card-img-top rounded-circle mx-auto mt-3 goals-image"
              alt="Goals"
              style={{ width: "120px", height: "120px" }}
            />
            <div className="card-body">
              <h2 className="card-title">Goals</h2>
              <p className="card-text">
                Enhance engagement through innovative learning, integrate
                technology into the curriculum, and foster lifelong learning.
              </p>
              <a href="/" className="btn btn-primary explore-btn">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionGoals;
