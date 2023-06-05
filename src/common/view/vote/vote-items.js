import React from "react";
import VoteCard from "../../components/cards/vote-card/vote-card";
import "./vote-items.css";

const VoteCards = ({ data }) => {
  return (
    data && (
      <main className="items">
        {data.content.map((stuInfo) => (
          <VoteCard stuInfo={stuInfo} />
        ))}
      </main>
    )
  );
};

export default VoteCards;
