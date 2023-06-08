import React from "react";
import { useGetAllCandidates } from "../../../../hooks/candidate.hooks";
import Container from "../../../../common/components/container/container";
import { Spin, Table } from "antd";
import { useGetElection } from "../../../../hooks/election.hooks";
import Title from "antd/es/typography/Title";

const Election = ({ electionId }) => {
  const { data: election, isLoading } = useGetElection(electionId);

  return <Spin spinning={isLoading}>{election?.organization?.name}</Spin>;
};

const Candidates = () => {
  const { data: candidates } = useGetAllCandidates();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    
    {
      title: "Election",
      dataIndex: "election",
      key: "election",
      render: (election) => <Election electionId={election.id} />,
    },
    {
      title:"Status",
      dataIndex: "application",
      key: "application",
      render: (application) => <div>{application.status}</div>
    }
  ];

  return (
    <Container>
      <div style={{ width: "100%" }}>
      <Title level={4}>Candidates</Title>
          <hr></hr>
          <br></br>
        <Table dataSource={candidates?.content} columns={columns} />
      </div>
    </Container>
  );
};

export default Candidates;
