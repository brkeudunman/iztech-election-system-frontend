import React, { useState } from "react";
import "./vote.css";
import { Button, Col, Row, Statistic } from "antd";

import Timer from "../../../../common/components/timer/timer";
import Container from "../../../../common/components/container/container";
import VoteCards from "./../../../../common/view/vote/vote-items";

import { useGetAllCandidates } from "../../../../hooks/candidate.hooks";
import { useGetVoter } from "../../../../hooks/voters.hooks";
const { Countdown } = Statistic;

const VotePage = ({ user }) => {
  const {
    data: voter,
    error: voterError,
    isLoading: isVoterLoading,
  } = useGetVoter(user?.id);
  const endDate = new Date(voter?.election?.endDate);

  const deadline = endDate + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

  const {
    data: candidates,
    error: candidatesError,
    isLoading: isCandidatesLoading,
  } = useGetAllCandidates();

  return (
    <Container>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "16px",
          width: "100%",
        }}
      >
        <div>
          <div className="heading">
            <p>Computer Engineering Department Representative Selection</p>
          </div>

          <VoteCards candidates={candidates} />
        </div>

        <Row
          style={{
            marginTop: "12px",
          }}
          justify={"end"}
        >
          <Col>
            <Countdown
              format="DD:HH:mm:ss"
              title="The Time Left Until the End of The Election"
              value={deadline}
            />
          </Col>
        </Row>
      </span>
    </Container>
  );
};

export default VotePage;
