import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Menu, Row } from "antd";
import { BarChartOutlined, LoginOutlined, TeamOutlined } from "@ant-design/icons";
import logo from "../../../assets/iyte_logo_eng.png";

const PublicNavbar = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Login",
      key: "login",
      icon: <LoginOutlined />,
    },
    {
      label: "Candidates",
      key: "candidates",
      icon: <TeamOutlined />,
    },
    {
      label: "Result",
      key: "results",
      icon: <BarChartOutlined />,
      disabled:true,
    },
  ];

  const [current, setCurrent] = useState(window.location.pathname);

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#303841",
          padding: "12px",
          display: "flex",
          alignItems: "center",
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
          <img width={50} src={logo} alt="" />
          <h4 style={{ color: "white" }}> Izmir Institute of Technology</h4>
        </Link>

        <Row gutter={[8, 12]}>
          <Col span={24}>
            <Menu
              style={{
                borderRadius:"6px"
              }}
              disabledOverflow={true}
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PublicNavbar;
