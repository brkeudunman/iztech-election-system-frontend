import React, { useEffect, useState } from "react";
import { useGetAllElections } from "../../../hooks/election.hooks";
import { Alert, Card, Space, Spin, Statistic } from "antd";
const { Countdown } = Statistic;

const Timer = () => {
  const [endTime, setEndTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const { data: elections } = useGetAllElections();

  useEffect(() => {
    if (elections) {
      setEndTime(new Date(elections?.content[0]?.endDate).getTime());
      setStartTime(new Date(elections?.content[0]?.startDate).getTime());
    }
  }, [elections]);

  let title;
  let countdownValue;

  if (endTime < Date.now()) {
    // Election has ended
    title = "Election has ended";
    countdownValue = 0;
  } else if (startTime > Date.now()) {
    // Election has not started yet
    title = `Election starts in`;
    countdownValue = startTime;
  } else {
    // Election is ongoing
    title = `Election will end in`;
    countdownValue = endTime;
  }

  return elections?.content.length !== 0 ? (
    <Countdown format="DD:HH:mm:ss" title={title} value={countdownValue} />
  ) : (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Alert message="The election should be set by RECTOR" type="warning" />
    </Space>
  );
};

export default Timer;
