import { Button, Card, Row, notification } from "antd";
import Meta from "antd/es/card/Meta";
import "./vote-card.css";
import React from "react";
import { useAddVote } from "../../../../hooks/vote.hooks";

const VoteCard = ({ election, candidate }) => {

  const { mutate } = useAddVote(() => {
    notification.success({
      message: "Success!",
      description: "Successfully voted!",
    });
  });

  const onVote = () => {
    mutate({
      electionId: election?.id,
      candidate: candidate?.id,
    });
  };

  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      bordered
      cover={
        <img
          width={40}
          height={240}
          alt="example"
          src="https://picsum.photos/200/300"
        />
      }
    >
      <Meta
        title={candidate.name + " " + candidate.surname}
        description={
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Row>
              <strong>Description: </strong> {candidate.description}
            </Row>
            <Row style={{ display: "flex", flexWrap: "nowrap" }}>
              <strong>Email: </strong> {candidate.email}
            </Row>

            <Row
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <Button
                onClick={onVote}
                style={{
                  width: "100%",
                }}
              >
                Vote!
              </Button>
            </Row>
          </div>
        }
      />
    </Card>
  );
};

export default VoteCard;
