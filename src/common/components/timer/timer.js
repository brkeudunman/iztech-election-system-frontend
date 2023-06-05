import React, { useEffect, useState } from "react";
import "./timer.css";
import { getTimeDifference } from "../../../util/get-time-difference";
const Timer = ({ election }) => {
  const [timeDiff, setTimeDiff] = useState({});

  useEffect(() => {
    const startDate = new Date(election?.startDate);
    const endDate = new Date(election?.endDate);
    setTimeDiff(getTimeDifference(startDate, endDate));
  }, [election]);
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
