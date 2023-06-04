import React, { useEffect, useState } from "react";
import { getTimeDifference } from "./../../../../util/get-time-difference";
import Container from "../../../../common/components/container/container";
import Timer from "../../../../common/components/timer/timer";
import CandidateshipCard from "../../../../common/components/cards/candidateship/candidateship-card";

const CandidateshipPage = () => {
  const [timeDiff, setTimeDiff] = useState({});
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CandidateshipCard />
        </div>

        <Timer timeDiff={timeDiff} />
      </div>
    </Container>
  );
};

export default CandidateshipPage;
