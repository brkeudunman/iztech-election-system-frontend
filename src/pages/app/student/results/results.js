import { Col, Row, Table } from "antd";
import React from "react";
import Container from "../../../../common/components/container/container";
import Title from "antd/es/typography/Title";
import { useGetElectionResult } from "../../../../hooks/election-result.hook";

const Results = () => {
  const { data, isLoading } = useGetElectionResult();
  console.log(data?.content);
  const columns = [
    {
      title: "Name",
      key: "firstName",
      render: (element) => <div>{element.candidate?.name}</div>,
    },
    {
      title: "Surname",
      key: "lastName",
      render: (element) => <div>{element.candidate?.surname}</div>,
    },
    {
      title: "Email",
      key: "email",
      render: (element) => <div>{element.candidate.email}</div>,
    },
    {
      title: "Vote Count",
      key: "voteCount",
      render: (element) => <div>{element.voteCount}</div>,
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
          <Table dataSource={data?.content} columns={columns}></Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Results;
