import { Col, Form, Input, Row, notification, Button } from "antd";
import React from "react";
import "./login.css";
import { useLogin } from "../../../hooks/auth.hooks";
import LoginFormView from "../../../common/view/login/login-form-view";
import Title from "antd/es/typography/Title";

const Login = () => {
  const onSuccess = () => {
    notification.success({
      message: "Success!",
      description: "You have successfully logged in!",
    });
    window.location.reload();
  };

  const { mutate: login } = useLogin(onSuccess);

  const onFinish = (values) => {
    login(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", { errorInfo });
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
          validateTrigger={onsubmit}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Title
            style={{
              textAlign: "center",
            }}
            level={4}
          >
            Iztech Election System
          </Title>
          <hr />
          <LoginFormView />
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
