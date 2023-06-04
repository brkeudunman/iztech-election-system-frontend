import React, { useEffect, useState } from "react";
import "./home.css";
import studentpic from "../../../../assets/aragorn.jpg";
import Timer from "../../../../common/components/timer/timer.js";
import Container from "../../../../common/components/container/container";
import { useGetVote } from "../../../../hooks/vote.hooks";
import { useGetApplication } from "../../../../hooks/application.hooks";
import { useGetElection } from "../../../../hooks/election.hooks";
import { useGetVoter } from "./../../../../hooks/voters.hooks";
import { getTimeDifference } from "./../../../../util/get-time-difference";

const Homepage = () => {
  const user = {
    id: window.localStorage.getItem("id"),
    name: window.localStorage.getItem("name"),
    surname: window.localStorage.getItem("surname"),
  };

  const {
    data: vote,
    error: voteError,
    isLoading: isVoteLoading,
  } = useGetVote(user?.id);

  const {
    data: application,
    error: applicationError,
    isLoading: isApplicationLoading,
  } = useGetApplication(user?.id);

  const {
    data: voter,
    error: voterError,
    isLoading: isVoterLoading,
  } = useGetVoter(user?.id);

  const [timeDiff, setTimeDiff] = useState({});

  useEffect(() => {
    if (!isVoteLoading && !voterError) {
      const startDate = new Date(voter.election.startDate);
      const endDate = new Date(voter.election.endDate);
      setTimeDiff(getTimeDifference(startDate, endDate));
    }
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
          <h4 className="title">Student Information</h4>
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
            {(!isVoteLoading ?? voteError.status === 404) && (
              <p>Vote Status: None</p>
            )}
            {(!isApplicationLoading ?? applicationError.status === 404) && (
              <p>
                Candidateship Application: The user has not been applied for
                candidateship
              </p>
            )}
          </div>
        </section>

        <Timer timeDiff={timeDiff} />
      </div>
    </Container>
  );
};

export default Homepage;
