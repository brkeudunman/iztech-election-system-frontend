import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
  Spin,
  notification,
} from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import { useGetAllElections } from "../../../hooks/election.hooks";
import { useAddVoter } from "./../../../hooks/voters.hooks";

const AddVoter = () => {
  const { mutate } = useAddVoter(() => {
    notification.success({
      message: "Success!",
      description: "Successfully added!",
    });
  });
  const onFinish = (values) => mutate(values);
  const [options, setOptions] = useState([]);
  const { data, isLoading } = useGetAllElections();
  const [form] = Form.useForm();

  const onChange = (value) => {
    form.setFieldValue("electionId", value);
  };

  useEffect(() => {
    if (!isLoading) {
      setOptions(
        data.content.map((element) => ({
          value: element.id,
          label: element.organization.name,
        }))
      );
    }
  }, [isLoading]);

  return (
    <Row
      style={{
        height: "100%",
      }}
      justify={"center"}
      align={"middle"}
    >
      <Col span={12}>
        <Row
         justify={"center"}
        >
          <Title level={2}>Welcome, Register for Vote!</Title>
        </Row>

        <Card bordered>
          <Form labelCol={4} wrapperCol={9} form={form} validateTrigger={onFinish} onFinish={onFinish}>
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
              <Input />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,

                  message: "The Department must be entered",
                },
              ]}
              name={"electionId"}
              label="Department"
            >
              <Spin spinning={isLoading ?? options.length === 0}>
                <Select
                  showSearch
                  onChange={onChange}
                  placeholder="Select a department"
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
              initialValue={false}
              valuePropName="checked"
              name={"emailVisible"}
              label={"Visibility of Email"}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Checkbox />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default AddVoter;
