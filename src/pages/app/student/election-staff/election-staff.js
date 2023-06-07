import React from "react";
import { useGetAllCandidates } from "../../../../hooks/candidate.hooks";
import Container from "../../../../common/components/container/container";
import { Spin, Table } from "antd";
import { useGetElection } from "../../../../hooks/election.hooks";
import Title from "antd/es/typography/Title";
import { useGetPersonnels } from "../../../../hooks/personnel.hooks";

const ElectionStaff = () => {
  const { data: personnels } = useGetPersonnels();

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
    
    
  ];

  return (
    <Container>
        {
            
        }
      <div style={{ width: "100%" }}>
      <Title level={4}>Election Staff</Title>
          <hr></hr>
          <br></br>
        <Table dataSource={personnels?.content} columns={columns} />
      </div>
    </Container>
  );
};

export default ElectionStaff;
