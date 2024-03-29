import { Button, Form, Input } from "antd";
import React from "react";

const LoginFormView = () => {
  return (
    <>
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: "Please enter your e-mail!",
          },
          {
            type:"email",
            message: "The input should be in email format",
          }
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
          Login
        </button>
      </Form.Item>
    </>
  );
};

export default LoginFormView;
