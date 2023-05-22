import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginOutlined, HomeOutlined } from "@ant-design/icons";
import logo from "../../../assets/iyte_logo.png";

const { Header } = Layout;

const PublicNavbar = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Log In",
      key: "login",
      icon: <LoginOutlined />,
    },
  ];

  const [current, setCurrent] = useState(window.location.pathname);

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <>
      <Header
        style={{
          backgroundColor: "#001d66",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link
          to={"/"}
          onClick={onClick}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="demo-logo"
        >
          <img width={50} src={logo}/>
        </Link>
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
