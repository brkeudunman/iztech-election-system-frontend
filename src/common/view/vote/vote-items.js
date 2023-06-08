import React from "react";
import VoteCard from "../../components/cards/vote-card/vote-card";
import "./vote-items.css";
import { useGetVoter } from "../../../hooks/voters.hooks";

const VoteCards = ({ candidates }) => {
  const { data: voter } = useGetVoter(window.localStorage.getItem("id"));

  return (
    candidates && (
      <main className="items">
        {voter &&
          candidates.content.map(
            (stuInfo) =>
              stuInfo.application?.status === "APPROVED" && (
                <VoteCard
                  voter={voter}
                  election={voter.election}
                  candidate={stuInfo}
                />
              )
          )}
      </main>
    )
  );
};

export default VoteCards;
