import React from "react";

import { Layout } from "antd";

import AppNavbar from "../../components/navbar/app.navbar";
import AppHeader from "../../components/navbar/app.header";

const AppLayout = ({ children }) => {
  return (
    <Layout style={{
      minHeight:"100vh"
    }}>
      <AppHeader />
      <Layout>
        <AppNavbar />
        <span
          style={{
            display:"flex",
            width:"100%",
          }}
        >{children}</span>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
