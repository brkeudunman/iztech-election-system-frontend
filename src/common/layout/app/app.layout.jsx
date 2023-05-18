import React from "react";

import { Layout } from "antd";
import AppNavbar from "../../components/navbar/app.navbar";

const AppLayout = ({ children }) => {

  return (
    <Layout>
      <AppNavbar />
      {children}
    </Layout>
  );
};

export default AppLayout;
