import React, { useState } from "react";

const VideoComponent = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleButtonClick = () => {
    const video = document.getElementById("myVideo");
    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <div className="position-relative">
      <video autoPlay muted loop id="myVideo" style={videoStyle}>
        <source
          src="https://www.shutterstock.com/shutterstock/videos/1108241941/preview/stock-footage-children-near-the-school-playing-soccer-kids-a-school-education-kid-dream-concept-a-group-of.webm.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>

      <div className="position-fixed bottom-0 w-100 bg-dark text-light p-3">
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
          phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
          maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore
          latine molestiae, ad mutat oblique delicatissimi pro.
        </p>
        <button className="btn btn-dark" onClick={handleButtonClick}>
          {isPaused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  );
};

const videoStyle = {
  position: "fixed",
  right: 0,
  bottom: 0,
  minWidth: "100%",
  minHeight: "100%",
};

export default VideoComponent;
