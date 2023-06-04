import { Button, Card, Row } from "antd";
import Meta from "antd/es/card/Meta";
import "./vote-card.css"
import React from "react";

const VoteCard = ({ stuInfo }) => {
  return (
    <div className="vote-card">
      <Card
        hoverable
        style={{ width: 240, backgroundColor: "azure" }}
        cover={<img src={stuInfo.image} alt={stuInfo.name} />}
      >
        <Meta title={stuInfo.name} description="Computer Engineer, 3rd Class" />
        {
          // Todo description
        }
      </Card>

      <Row>
        <Button
          style={{
            width: "240px",
            backgroundColor: "white",
          }}
        >
          Vote!
        </Button>
      </Row>
    </div>
  );
};

export default VoteCard;
