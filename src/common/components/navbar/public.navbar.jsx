import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const PublicNavbar = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Log In",
      key: "login",
    },
  ];

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <>
      <Header
        style={{
          display: "flex",
          justifyContent: "end",
          backgroundColor: "#0958d9",
        }}
      >
        <div className="demo-logo" />
        <Menu
          mode="horizontal"
          onClick={onClick}
          items={items}
          selectedKeys={[current]}
          defaultSelectedKeys={["2"]}
        />
      </Header>
    </>
  );
};

export default PublicNavbar;
