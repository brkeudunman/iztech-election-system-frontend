import React, { useEffect } from "react";
import "./home.css";
import studentpic from "../../../../assets/aragorn.jpg";
import Timer from "../../../../common/components/timer/timer.js";
import Container from "../../../../common/components/container/container";

import { useGetVoter } from "./../../../../hooks/voters.hooks";
import { useGetCandidate } from "../../../../hooks/candidate.hooks";
import { Col, Row } from "antd";

const Homepage = ({ user }) => {
  const {
    data: voter,
    error: voterError,
    isLoading: isVoterLoading,
  } = useGetVoter(user.id);

  const {
    data: candidate,
    error: candidateError,
    isLoading: isCandidateLoading,
    refetch: refetchCandidate,
  } = useGetCandidate(voter?.id);

  useEffect(() => {
    refetchCandidate();
  }, [isVoterLoading]);

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
        <section className="stu-info">
          <h2 className="title2">Welcome, {user.name + " " + user.surname}</h2>
          <h4 className="title">User Information</h4>
          <div className="info-profile">
            <img src={studentpic} alt="" />
            <div className="info-text">
              <p id="student-name">
                <strong>{user.name + " " + user.surname}</strong>
              </p>
              <p className="text-info">{voter?.email}</p>
              <p className="text-info">{voter?.description}</p>
            </div>
          </div>

          <div className="election-info">
            {!isCandidateLoading && !candidateError && (
              <>
                <h4 className="title">Election Information</h4>
                <p>
                  Application Status:{" "}
                  <strong>
                    {candidateError
                      ? "None"
                      : candidate.application.status === "NEW"
                      ? "Pending"
                      : candidate.application.status}
                  </strong>
                </p>
              </>
            )}
          </div>
        </section>
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
      </div>
    </Container>
  );
};

export default Homepage;
