import { Col, Row, Table } from "antd";
import React from "react";
import Container from "../../../../common/components/container/container";
import Title from "antd/es/typography/Title";

const Results = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Surname",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Vote Count",
      dataIndex: "voteCount",
      key: "voteCount",
      render: (voteCount) => <div>{voteCount}</div>,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.voteCount - b.voteCount,
    },
  ];

  return (
    <Container>
      <Row
        style={{
          width: "100%",
        }}
      >
        <Col span={24}>
          <Title level={4}>Result</Title>
          <hr></hr>
          <br></br>
          <Table columns={columns}></Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Results;
