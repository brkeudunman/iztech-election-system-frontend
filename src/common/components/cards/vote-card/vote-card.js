import { Avatar, Button, Card, Row } from "antd";
import Meta from "antd/es/card/Meta";
import "./vote-card.css";
import React from "react";

const VoteCard = ({ stuInfo }) => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
        backgroundColor: "azure",
      }}
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
        title={stuInfo.name + " " + stuInfo.surname}
        description={
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Row>
              <strong>Description: </strong> {stuInfo.description}
            </Row>
            <Row style={{ display: "flex", flexWrap: "nowrap" }}>
              <strong>Email: </strong> {stuInfo.email}
            </Row>

            <Row
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <Button
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
