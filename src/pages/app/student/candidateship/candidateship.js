import React from "react";
import Container from "../../../../common/components/container/container";
import Timer from "../../../../common/components/timer/timer";
import CandidateshipCard from "../../../../common/components/cards/candidateship/candidateship-card";
import { useAddApplication } from "../../../../hooks/application.hooks";
import { Spin, notification } from "antd";
import { useGetVoter } from "../../../../hooks/voters.hooks";

const CandidateshipPage = ({ user }) => {
  const {
    data: voter,
    error: voterError,
    isLoading: isVoterLoading,
  } = useGetVoter(user.id);

  console.log(user.id);

  const {
    mutate: applyCandidateship,
    error,
    isLoading,
  } = useAddApplication(() => {
    notification.success({
      message: "Success!",
    });
  });

  const onApply = () => {
    applyCandidateship(user.id);
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "",
          justifyContent: "space-between",
        }}
      >
        <Spin spinning={isLoading}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CandidateshipCard onApply={onApply} />
          </div>
        </Spin>
        <Timer election={voter?.election} />
      </div>
    </Container>
  );
};

export default CandidateshipPage;
