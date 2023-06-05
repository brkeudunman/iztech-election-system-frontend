import React from "react";
import "./candidateship-card.css";
import peterParkerImage from "../../../../assets/peterparker.jpg";

const CandidateshipCard = ({ onApply }) => {
  return (
    <div className="main">
      <div className="content">
        <img src={peterParkerImage} alt="Peter Parker" />
        <p>Peter Parker</p>
        <p>Computer Engineering</p>
        <p>3rd Class</p>
      </div>

      <div className="bottom-part">
        <button onClick={onApply}>Apply for candidacy for XXXX</button>
      </div>
    </div>
  );
};

export default CandidateshipCard;
