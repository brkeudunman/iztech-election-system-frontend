import React, { useEffect, useState } from "react";
import "./home.css";
import studentpic from "../../../../assets/aragorn.jpg";
import Timer from "../../../../common/components/timer/timer.js";
import Container from "../../../../common/components/container/container";
import { useGetVote } from "../../../../hooks/vote.hooks";
import { useGetApplication } from "../../../../hooks/application.hooks";
import { useGetVoter } from "./../../../../hooks/voters.hooks";

const Homepage = ({ user }) => {
  const {
    data: voter,
    error: voterError,
    isLoading: isVoterLoading,
  } = useGetVoter(user.id);

  const {
    data: vote,
    error: voteError,
    isLoading: isVoteLoading,
  } = useGetVote(user.id);

  const {
    data: application,
    error: applicationError,
    isLoading: isApplicationLoading,
  } = useGetApplication(user.id);

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
              <p className="text-info">Computer Engineering</p>
              <p className="text-info">3. Year Student</p>
            </div>
          </div>

          <div className="election-info">
            <h4 className="title">Election Information</h4>
            {!isVoteLoading && (
              <p>Vote Status: {voteError ? "None" : vote.status}</p>
            )}
            {!isApplicationLoading && (
              <p>
                Application Status:{" "}
                {applicationError ? "None" : application.status}
              </p>
            )}
          </div>
        </section>

        <Timer election={voter?.election} />
      </div>
    </Container>
  );
};

export default Homepage;
