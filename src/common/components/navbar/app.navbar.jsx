import { Layout, Menu } from "antd";
import {
  BookOutlined,
  CalendarOutlined,
  CheckOutlined,
  HomeOutlined,
  PaperClipOutlined,
  PieChartOutlined,
  TeamOutlined,
  InsertRowAboveOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetPersonnel } from "../../../hooks/personnel.hooks";
import { useGetVoter } from "./../../../hooks/voters.hooks";
import { useGetAllElections } from "../../../hooks/election.hooks";
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

const AppNavbar = ({ user }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { data: elections, isSuccess: isElections } = useGetAllElections();
  const { data: personnel, isSuccess: isPersonnelSuccess } = useGetPersonnel(
    user.id
  );
  const { data: student } = useGetVoter(user.id);

  const [startTime, setStartTime] = useState(null);
  const [isStarted, setIsStarted] = useState(false);

  const compareNowWithEndDate = () => {
    return (
      new Date(elections?.content[0]?.endDate).getTime() < new Date().getTime()
    );
  };

  useEffect(() => {
    if (elections) {
      setStartTime(new Date(elections?.content[0]?.startDate).getTime());
    }
  }, [elections]);

  useEffect(() => {
    if (startTime) {
      const currentTime = new Date().getTime();
      if (currentTime > startTime) {
        setIsStarted(true);
        console.log("Election has started");
      } else {
        setIsStarted(false);
        console.log("Election has not started yet");
      }
    }
  }, [startTime]);

  const items = [
    getItem("Home", "app", <HomeOutlined />),
    getItem(
      "Vote",
      "app/vote",
      <CheckOutlined />,
      !isStarted || !student || !compareNowWithEndDate //todo !'i sil 
    ),
    getItem(
      "Candidateship",
      "app/candidateship",
      <PaperClipOutlined />,
      isStarted || !student
    ),
    getItem(
      "Results",
      "app/results",
      <PieChartOutlined />,
      !compareNowWithEndDate
    ),
    getItem(
      "Calendar",
      "app/calendar",
      <CalendarOutlined />,
      !personnel && personnel?.personnelRole !== "RECTOR"
    ),
    getItem(
      "Staff List",
      "app/staff",
      <InsertRowAboveOutlined />,
      !personnel
    ),
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
