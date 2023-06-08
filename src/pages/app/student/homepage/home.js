import React, { useEffect } from "react";
import "./home.css";
import Timer from "../../../../common/components/timer/timer.js";
import Container from "../../../../common/components/container/container";

import { useGetVoter } from "./../../../../hooks/voters.hooks";
import { useGetCandidate } from "../../../../hooks/candidate.hooks";
import { Col, Row } from "antd";
import { useGetPersonnel } from "../../../../hooks/personnel.hooks";

const Homepage = ({ user }) => {
  const {
    data: voter,
    error: voterError,
    isLoading: isVoterLoading,
  } = useGetVoter(user.id);

  const {
    data: personnel,
    error: personnelError,
    isLoading: isPersonnelLoading,
  } = useGetPersonnel(user?.id);

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
            <img src={"https://www.hatayvatan.com/wp-content/uploads/2017/04/1446864_620x410.jpg"} alt="" />
            <div className="info-text">
              <p id="student-name">
                <strong>{user.name + " " + user.surname}</strong>
              </p>

              <span>
                <strong>Email:</strong>{" "}
                <p className="text-info">{voter?.email}</p>
              </span>
              <br />
              <span>
                <strong>Department:</strong>{" "}
                <p className="text-info">
                  {voter?.election?.organization?.name}
                </p>
              </span>

              <p
                style={{
                  fontSize: "14px",
                }}
                className="text-info"
              >
                {personnel?.personnelRole}
              </p>
              <p
                style={{
                  fontSize: "14px",
                }}
                className="text-info"
              >
                {personnel?.userRole}
              </p>
              <br />
              <p className="text-info">{personnel?.email}</p>
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
