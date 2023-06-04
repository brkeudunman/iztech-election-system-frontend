import React, { useEffect, useState } from "react";
import "./vote.css";
import peterParkerImage from "../../../../assets/peterparker.jpg";
import { Button, Row } from "antd";
import { Card } from "antd";
import Timer from "../../../../common/components/timer/timer";
import Container from "../../../../common/components/container/container";
import VoteCards from "./../../../../common/view/vote/vote-items";

const data = [
  {
    name: "Peter Parker",
    image: peterParkerImage,
  },
  {
    name: "Peter Parker",
    image: peterParkerImage,
  },
  {
    name: "Peter Parker",
    image: peterParkerImage,
  },
  {
    name: "Peter Parker",
    image: peterParkerImage,
  },
  {
    name: "Peter Parker",
    image: peterParkerImage,
  },
];

const VotePage = () => {
  const [timeDiff, setTimeDiff] = useState({});
  return (
    <Container>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
        }}
      >
        <div className="heading">
          <p>Computer Engineering Department Representative Selection</p>
        </div>

        <VoteCards data={data} />
        <Timer timeDiff={timeDiff} />
      </span>
    </Container>
  );
};

export default VotePage;
