import { Col, Form, Input, Row, notification } from "antd";
import React from "react";
import "./login.css";
import { useLogin } from "../../../hooks/auth.hooks";
import LoginFormView from "../../../common/view/login/login-form-view";

const Login = () => {
  const onSuccess = () => {
    notification.success({
      message: "Success!",
      description: "You have successfully logged in!",
    });
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
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="form-title">Log In</div>
          <LoginFormView />
          {
            // Burası common/view/login klasörünün altında login form viewda yazıldı.
            //
            // @talha değişikliklerin ant design'a uyuyor kanka bir yere kadar doğru yapmışsın ancak doğrussuna bakmak için
            // dediğim klasöre gidip login-form-view.jsxin altına bakabilirsin.
          }

          {/*
            ------------ Buradaki kodu silmiyorum şimdilik, yaptığın değişikliklerle karşılaştırabilirsin @talha
              <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your e-mail!",
              },
            ]}
          >
            <Input placeholder="example@gmail.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
          >
            <Input.Password placeholder="example123" />
          </Form.Item>

          <Form.Item>
            <button className="login-button" type="submit">
              Submit
            </button>
          </Form.Item> 
            */}
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
