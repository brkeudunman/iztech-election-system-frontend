import React from "react";

import { Spin, Table } from "antd";
import { useGetElection } from "../../../hooks/election.hooks";
import { useGetAllCandidates } from "../../../hooks/candidate.hooks";
import Container from "../../../common/components/container/container";

const Election = ({ electionId }) => {
  const { data: election, isLoading } = useGetElection(electionId);

  return <Spin spinning={isLoading}>{election?.organization.name}</Spin>;
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
      title: "Status",
      dataIndex: "application",
      key: "application",
      render: (application) => <div>{application.status}</div>,
    },
  ];

  return (
    <Container>
      <div style={{ width: "100%" }}>
        <Table dataSource={candidates?.content} columns={columns} />
      </div>
    </Container>
  );
};

export default Candidates;
