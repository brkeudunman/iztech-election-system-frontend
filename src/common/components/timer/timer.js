import React from "react";
import "./timer.css"
const Timer = ({ timeDiff }) => {
  return (
    <div className="timer">
      <h4>The Time Left Until the End of The Election</h4>
      <p>
        {timeDiff.days} Days {timeDiff.hours} Hours {timeDiff.minutes} Minutes{" "}
      </p>
    </div>
  );
};

export default Timer;
