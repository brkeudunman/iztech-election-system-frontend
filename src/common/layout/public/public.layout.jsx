import React from "react";
import { Layout } from "antd";
import PublicNavbar from "../../components/navbar/public.navbar";

const PublicLayout = ({ children }) => {
  return (
    <Layout style={{
      height:"100vh"
    }}>
      <PublicNavbar/>
      {children}
    </Layout>
  );
};

export default PublicLayout;
