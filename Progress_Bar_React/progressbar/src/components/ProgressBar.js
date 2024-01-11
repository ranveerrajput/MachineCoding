import React from "react";
import "../App.css";
const ProgressBar = ({ progress = 10 }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ transform: `translateX(${progress - 100}%)` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
