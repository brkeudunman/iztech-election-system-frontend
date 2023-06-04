import React from "react";
import VoteCard from "../../components/cards/vote-card/vote-card";
import "./vote-items.css"

const VoteCards = ({ data }) => {
  return (
    <main className="items">
      {data.map((stuInfo) => (
        <VoteCard stuInfo={stuInfo} />
      ))}
    </main>
  );
};

export default VoteCards;
