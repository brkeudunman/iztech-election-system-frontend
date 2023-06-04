import React, { useEffect, useState } from "react";
import "./candidateship.css";
import peterParkerImage from './peterparker.jpg';
import { getTimeDifference } from "./../../../../util/get-time-difference";

const CandidateshipPage = () => {
  const [timeDiff, setTimeDiff] = useState({});
  return (
    <content className="container">

      <div className='main'>
        <div className='content'>
          <img src={peterParkerImage} alt="Peter Parker" />
          <p>Peter Parker</p>
          <p>Computer Engineering</p>
          <p>3rd Class</p>
        </div>

        <div className='bottom-part'>
          <button>Apply for candidacy for XXXX</button>
        </div>
      </div>

      <div className="timer">
        <p> Remaining time: {timeDiff.days} Days {timeDiff.hours} Hours {timeDiff.minutes} Minutes </p>
      </div>

    </content>
  )
}

export default CandidateshipPage;
