import { Layout, Menu } from "antd";
import {
  BookOutlined,
  CalendarOutlined,
  CheckOutlined,
  HomeOutlined,
  PaperClipOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;
const { Item: MenuItem } = Menu;

function getItem(label, key, icon, val) {
  return {
    label,
    key,
    icon,
    disabled: val ? true : undefined,
  };
}

const AppNavbar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    getItem("Home", "app", <HomeOutlined />),
    getItem("Vote", "app/vote", <CheckOutlined />),
    getItem("Candidateship", "app/candidateship", <PaperClipOutlined />),
    getItem("Results", "app/results", <PieChartOutlined />, true),
    getItem("Calendar", "app/calendar", <CalendarOutlined />, true),
    getItem("Candidates", "app/candidates", <TeamOutlined />),
    getItem("User Guide", "app/user-guide", <BookOutlined />, true),
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
        onClick={(e) => {
          navigate(e.key);
        }}
      >
        {items.map(
          (item) =>
            !items.disabled && (
              <MenuItem
                key={item.key}
                icon={item.icon}
                disabled={item.disabled}
              >
                {item.label}
              </MenuItem>
            )
        )}
      </Menu>
    </Sider>
  );
};

export default AppNavbar;
