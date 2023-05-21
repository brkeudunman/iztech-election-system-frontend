import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { LoginOutlined, HomeOutlined } from "@ant-design/icons";
const { Header } = Layout;

const PublicNavbar = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Log In",
      key: "login",
      icon: <LoginOutlined />,
    },
    {
      label: "Home",
      key: "home",
      icon: <HomeOutlined />,
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
       
        }}
      >
        <div className="demo-logo" />
        <Menu
          mode="horizontal"
          onClick={onClick}
          items={items}
          selectedKeys={[current]}
        />
      </Header>
    </>
  );
};

export default PublicNavbar;
