import { Layout, Menu, theme } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  LogoutOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useLogOutUserMe } from "../../../hooks/auth.hooks";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    onclick,
  };
}

const AppNavbar = () => {
  const logout = useLogOutUserMe(() => navigate("/"));
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    getItem("Home", "/app", <HomeOutlined />),
    getItem("View Results", "/results", <PieChartOutlined />),
    getItem("Option 2", "3", <DesktopOutlined />),
    getItem("Team", "4", <TeamOutlined />),
    getItem("Files", "5", <FileOutlined />),
    getItem(
      <div onClick={() => logout()}>Log Out</div>,
      "6",
      <LogoutOutlined />
    ),
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
      />
    </Sider>
  );
};

export default AppNavbar;
