import React from "react";
import "./home.css"

const Homepage = () => {
  return (
    <section className="container">
      <section className="stu-info">
        <h4 className="title">Student Information</h4>
      </section>
      <div className="timer">
        <span>
          Seçimin bitmesine kalan zaman
        </span>
      </div>
    </section>
  );
};

export default Homepage;
