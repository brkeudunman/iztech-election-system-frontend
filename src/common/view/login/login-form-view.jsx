import { Button, Form, Input } from "antd";
import React from "react";

const LoginFormView = () => {
  return (
    <>
      <Form.Item
        label="Email"
        name="email"
        validateTrigger={onsubmit}
        rules={[
          {
            required: true,
            message: "Please enter your email!",
          },
          {
            type:"email",
            message: "The format of the input should be email."
            
          }
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </>
  );
};

export default LoginFormView;
