import { Col, Form, Row } from "antd";
import React from "react";
import LoginFormView from "../../../common/view/login/login-form-view";
import "./login.css";
import { useLogin } from "../../../hooks/auth.hooks";

const Login = () => {
  const { mutateAsync: login } = useLogin();
  const onFinish = (values) => {
    login(values);
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row className="login-page">
      <Col xs={22} sm={20} md={16} lg={10} xl={8} xxl={6} span={8}>
        <Form
          className="login-form"
          name="basic"
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="form-title">Log In</div>
          <LoginFormView />
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
