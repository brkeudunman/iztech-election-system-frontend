import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/iyte_logo_eng.png";
import { notification } from "antd";
import { useLogOutUserMe } from "../../../hooks/auth.hooks";
import BasicDropdown from "../dropdown/dropdown";
import { LogoutOutlined } from "@ant-design/icons";

const AppHeader = () => {
  const navigate = useNavigate();
  const onLogoutSuccess = () => {
    navigate("/");
    notification.success({
      message: "Success!",
      description: "You have successfully logged out!",
    });
  };
  const logout = useLogOutUserMe(onLogoutSuccess);

  return (
    <div
      style={{
        backgroundColor: "#303841",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "4px 24px",
        color: "white",
      }}
    >
      <Link
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "white",
        }}
        to={"/app"}
        className="demo-logo"
      >
        <img width={50} src={logo} alt="logo" />
        Izmir Institute of Technology
      </Link>
      <div>Iztech Student Election System</div>
      <BasicDropdown
        title={"B. Yılmaz"}
        items={[
          {
            label: (
              <div
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                  gap: "6px",
                }}
                onClick={() => logout()}
              >
                <LogoutOutlined
                  style={{
                    color: "red",
                  }}
                />
                <span>Logout</span>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default AppHeader;
