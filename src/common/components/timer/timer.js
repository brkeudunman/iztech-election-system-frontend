import React, { useEffect, useState } from "react";
import { useGetAllElections } from "../../../hooks/election.hooks";
import { Spin, Statistic } from "antd";
const { Countdown } = Statistic;
const Timer = () => {
  const [endTime, setEndTime] = useState(null);
  const { data: elections } = useGetAllElections();

  useEffect(() => {
    if (elections) {
      setEndTime(new Date(elections.content[0].endDate).getTime());
    }
  }, [elections]);

  return (
    <Spin spinning={!elections}>
      <Countdown
        format="DD:HH:mm:ss"
        title="The Time Left Until the End of The Election"
        value={endTime}
      />
    </Spin>
  );
};

export default Timer;
