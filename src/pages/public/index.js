import { Route, Routes } from "react-router-dom";
import Home from "./homepage/home";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, } = Layout;

const PublicRoutes = () => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          
        />
      </Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Layout>
  );
};
export default PublicRoutes;
