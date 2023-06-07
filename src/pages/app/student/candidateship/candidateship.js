import React from "react";
import Container from "../../../../common/components/container/container";
import Timer from "../../../../common/components/timer/timer";
import CandidateshipCard from "../../../../common/components/cards/candidateship/candidateship-card";

import { Col, Row, Spin } from "antd";
import { useGetVoter } from "../../../../hooks/voters.hooks";


const CandidateshipPage = ({ user }) => {
  const {
    data: voter,
    error: voterError,
    isLoading: isVoterLoading,
  } = useGetVoter(user.id);

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
        <Spin spinning={isVoterLoading}>
          <Row justify={"center"} align={"middle"}>
            <Col xxl={12}>
              <CandidateshipCard voter={voter} election={voter?.election} />
            </Col>
          </Row>
        </Spin>
        <Row style={{
          marginTop:"12px"
        }} justify={"end"}>
          <Col>
          <Timer/>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CandidateshipPage;
