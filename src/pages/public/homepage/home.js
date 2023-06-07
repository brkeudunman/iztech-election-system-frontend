import React from "react";
import { Col, Typography, Row } from "antd";

const { Title } = Typography;

const Home = () => {
  return (
    <div>
      <Row justify={"center"}>
        <Col span={8}>
          <Title level={2}>Welcome to IZTECH Election System</Title>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
