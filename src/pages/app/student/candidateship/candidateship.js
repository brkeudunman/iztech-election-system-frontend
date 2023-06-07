import React from "react";
import Container from "../../../../common/components/container/container";
import Timer from "../../../../common/components/timer/timer";
import CandidateshipCard from "../../../../common/components/cards/candidateship/candidateship-card";

import { Col, Statistic, Row, Spin } from "antd";
import { useGetVoter } from "../../../../hooks/voters.hooks";

const { Countdown } = Statistic;

const CandidateshipPage = ({ user }) => {
  const {
    data: voter,
    error: voterError,
    isLoading: isVoterLoading,
  } = useGetVoter(user.id);
  const endDate = new Date(voter?.election?.endDate);

  const deadline = endDate + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

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
            <Countdown format="DD:HH:mm:ss" title="The Time Left Until the End of The Election" value={deadline} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CandidateshipPage;
