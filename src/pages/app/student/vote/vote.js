import React, { useState } from "react";
import "./vote.css";
import { Button, Col, Row, Statistic } from "antd";

import Timer from "../../../../common/components/timer/timer";
import Container from "../../../../common/components/container/container";
import VoteCards from "./../../../../common/view/vote/vote-items";

import { useGetAllCandidates } from "../../../../hooks/candidate.hooks";

const VotePage = () => {
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
            <p>Department Representative Selection</p>
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
            <Timer />
          </Col>
        </Row>
      </span>
    </Container>
  );
};

export default VotePage;
