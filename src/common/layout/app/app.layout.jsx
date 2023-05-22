import React from "react";

import { Layout } from "antd";

import AppNavbar from "../../components/navbar/app.navbar";
import AppHeader from "../../components/navbar/app.header";

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppNavbar />
        {children}
      </Layout>

     
    </Layout>
  );
};

export default AppLayout;
