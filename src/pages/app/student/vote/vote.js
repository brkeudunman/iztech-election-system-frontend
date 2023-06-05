import React, { useState } from "react";
import "./vote.css";
import peterParkerImage from "../../../../assets/peterparker.jpg";
import { Button, Row } from "antd";
import { Card } from "antd";
import Timer from "../../../../common/components/timer/timer";
import Container from "../../../../common/components/container/container";
import VoteCards from "./../../../../common/view/vote/vote-items";

import { useGetAllCandidates } from "../../../../hooks/candidate.hooks";
import { useGetVoter } from "../../../../hooks/voters.hooks";

const VotePage = ({ user }) => {
  const {
    data: voter,
    error: voterError,
    isLoading: isVoterLoading,
  } = useGetVoter(user?.id);
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
          justifyContent:"space-between",
          gap: "16px",
          width: "100%",
        }}
      >
        <div>
        <div className="heading">
          <p>Computer Engineering Department Representative Selection</p>
        </div>

        <VoteCards data={candidates} />
        </div>
       
        <Timer election={voter?.election} />
      </span>
    </Container>
  );
};

export default VotePage;
