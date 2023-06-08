import React from "react";
import Container from "../../../../common/components/container/container";
import { Button, Col, Result, Row } from "antd";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div style={{ width: "100%" }}>
        <Row justify={"center"}>
          <Col>
            <Result
              status="403"
              title="403"
              subTitle="Sorry, you are not authorized to access this page."
              extra={
                <Button onClick={() => navigate("/app")} type="primary">
                  Back Home
                </Button>
              }
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Unauthorized;
