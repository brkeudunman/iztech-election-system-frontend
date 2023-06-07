import React from "react";
import Container from "../../../../common/components/container/container";
import { Button, Col, Form, Input, Row, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import Title from "antd/es/typography/Title";
import { useAddPersonnel } from "../../../../hooks/personnel.hooks";

const Secretary = () => {
  const { mutate } = useAddPersonnel(() =>
    notification.success({
      message: "Success",
      description: "Personnel Successfully added!",
    })
  );
  const onFinish = (values) => {
    const x = {
      userRole: "ADMIN",
      personnelRole: "DEPARTMENT_SECRETARY",
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
    };
    mutate(x);
  };
  const layout = {
    labelCol: {
      span: 3,
    },
  };
  return (
    <Container>
      <Row
        style={{
          width: "100%",
          textAlign: "center",
        }}
        justify={"center"}
      >
        <Col span={12}>
          <Title level={4}>Assign Department Secretary</Title>
          <hr></hr>
          <br></br>

          <Form {...layout} onFinish={onFinish}>
            <Form.Item
              rules={[
                {
                  required: true,
                  type: "string",
                  message: "The input is not valid",
                },
              ]}
              name={"firstName"}
              label="Name"
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  type: "string",
                  message: "The input is not valid",
                },
              ]}
              name={"lastName"}
              label="Surname"
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
              name={"email"}
              label="Email"
            >
              <Input />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,

                  message: "The password must be entered!",
                },
              ]}
              name={"password"}
              label="Password"
            >
              <Input.Password></Input.Password>
            </Form.Item>
            <Form.Item style={{ width: "100%" }}>
              <Button style={{ width: "50%" }} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Secretary;
