import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/iyte_logo_eng.png"

const AppHeader = () => {
  return (
    <div
      style={{
        backgroundColor: "#001d66",
        display: "flex",
        justifyContent: "center",
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
        <img width={50} src={logo} />
        Iztech Student Election System
      </Link>
    </div>
  );
};

export default AppHeader;
