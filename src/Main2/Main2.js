import React from "react";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card33 from "./card33.png";
import card4 from "./card4.png";
export default function Main2() {
  return (
    <div className=" Main2 d-flex justify-content-around  mt-5">
      <div className=" main2">
        <a href="/">
          <img src={card1} className="w-75" alt="" />
        </a>
        <h4 className=" mt-2">Our Team </h4>
      </div>
      <div className=" main2">
        <a href="/">
          <img src={card2} className="w-75" alt="" />
        </a>
        <h4 className=" mt-2">Kids Enrollment</h4>
      </div>
      <div className=" main2">
        <a href="/">
          <img
            className="main2-img3"
            src={card33}
            alt=""
            style={{ width: "70%" }}
          />
        </a>
        <h4 className="mt-2">Alumni Club </h4>
      </div>
      <div className=" main2">
        <a href="/">
          <img src={card4} className="w-75" alt="" />
        </a>
        <h4 className="mt-2">Best Amenities </h4>
      </div>
    </div>
  );
}
