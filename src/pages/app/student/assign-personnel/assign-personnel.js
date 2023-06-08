import React, { useEffect, useState } from "react";
import Container from "../../../../common/components/container/container";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Spin,
  notification,
} from "antd";
import { useForm } from "antd/es/form/Form";
import Title from "antd/es/typography/Title";
import {
  useAddPersonnel,
  useGetPersonnelTypes,
} from "../../../../hooks/personnel.hooks";

const AssignPersonelPage = () => {
  const [options, setOptions] = useState([]);
  const { data, isLoading } = useGetPersonnelTypes();
  const [form] = useForm();

  const { mutate } = useAddPersonnel(() => {
    notification.success({
      message: "Success",
      description: "Personnel Successfully added!",
    });
  });

  const onChange = (value) => {
    form.setFieldValue("personnelRole", value);
  };

  useEffect(() => {
    if (!isLoading) {
      setOptions(
        data.map((element) => ({
          value: element,
          label: element,
        }))
      );
    }
  }, [isLoading]);

  const onFinish = (values) => {
    const x = {
      userRole: "ADMIN",
      personnelRole: values.personnelRole,
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
    };
    mutate(x);
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
        <Col span={24}>
          <Title level={4}>Assign Personnel</Title>
          <hr></hr>
          <br></br>
          <Row justify={"center"}>
            <Col span={8}>
              <Card>
                <Form labelAlign="left" form={form} onFinish={onFinish}>
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
                    <Input />
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
                    label="Select A Personnel Type"
                    name={"personnelRole"}
                  >
                    <Spin spinning={isLoading ?? options.length === 0}>
                      <Select
                        showSearch
                        onChange={onChange}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        options={options}
                      />
                    </Spin>
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
                    <Input.Password />
                  </Form.Item>
                  <Form.Item style={{ width: "100%" }}>
                    <Button style={{ width: "50%" }} htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AssignPersonelPage;
