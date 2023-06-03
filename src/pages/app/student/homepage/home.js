import React from "react";
import "./home.css";
import studentpic from "../../../../assets/aragorn.jpg";

const Homepage = () => {
  

  return (
    <section className="container">
      <section className="stu-info">
        <h4 className="title">Student Information</h4>

        <div className="info-profile">
          <img src={studentpic} alt="" />
          <div className="info-text">
            <p id="student-name">
              <strong>
                {window.localStorage.getItem("name") +
                  " " +
                  window.localStorage.getItem("surname")}
              </strong>
            </p>
            <p className="text-info">Computer Engineering</p>
            <p className="text-info">3. Year Student</p>
          </div>
        </div>

        <div className="election-info">
          <h4 className="title">Election Information</h4>
          <p>Vote Status: Null</p>
          <p>
            Candidateship Application: The user has not been applied for
            candidateship
          </p>
        </div>
      </section>
      <div className="timer">
        <p>The Time Left Until the End of The Election</p>
        <p>XX Days XX Hours XX Minutes XX Seconds</p>
      </div>
    </section>
  );
};

export default Homepage;
