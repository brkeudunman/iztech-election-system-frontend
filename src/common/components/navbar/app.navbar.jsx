import { Layout, Menu } from "antd";
import {
  BookOutlined,
  CalendarOutlined,
  CheckOutlined,
  FileOutlined,
  HomeOutlined,
  PaperClipOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

function getItem(label, key, icon, onclick) {
  return {
    label,
    key,
    icon,
    onclick,
  };
}

const AppNavbar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    getItem("Home", "app", <HomeOutlined />),
    getItem("Vote", "vote", <CheckOutlined />),
    getItem("Candidateship", "candidateship", <PaperClipOutlined />),
    getItem("Results", "results", <PieChartOutlined />),
    getItem("Calendar", "calendar", <CalendarOutlined />),
    getItem("Candidates", "candidates", <TeamOutlined />),
    getItem("User Guide", "user-guide", <BookOutlined />),
  ];

  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        defaultSelectedKeys={[window.location.pathname]}
        mode="inline"
        items={items}
        onClick={(e) => {
          navigate(e.key);
        }}
      />
    </Sider>
  );
};

export default AppNavbar;
