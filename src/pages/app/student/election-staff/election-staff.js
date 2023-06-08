import React from "react";
import Container from "../../../../common/components/container/container";
import {Table } from "antd";
import Title from "antd/es/typography/Title";
import { useGetPersonnels } from "../../../../hooks/personnel.hooks";
import { stringManipulator } from "../../../../util/manipulate-string";

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
    {
      title: "Personnel Role",
      dataIndex: "personnelRole",
      key: "personnelRole",
      render: (personnelRole) => (
        <span>
          {stringManipulator(personnelRole)}
        </span>
      ),
    },
    {
      title: "User Role",
      dataIndex: "userRole",
      key: "userRole",
      render: (userRole) => (
        <span>
          {stringManipulator(userRole)}
        </span>
      )
    },
  ];

  return (
    <Container>
      {}
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
