import React, { useEffect, useState } from "react";
import Unauthorized from "./../unauthorized/unauthorized";
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
  message,
  notification,
} from "antd";
import { useGetPersonnel } from "../../../../hooks/personnel.hooks";
import Title from "antd/es/typography/Title";
import { useForm } from "antd/es/form/Form";
import { sendAnnoucementMail, sendApplicationStatus, sendCandidatesMail } from "../../../../api/mail/mail";

const SendMail = ({ user }) => {
  const { isLoading, error } = useGetPersonnel(user?.id);
  const [form] = useForm();

  const onFinish = (values) => {
    if (values.announcementType === "election") {
      sendAnnoucementMail(values.subject, values.receiver);
      
    }
    else if (values.announcementType === "applications"){
      sendApplicationStatus(values.subject,values.receiver)
    }
    else if (values.announcementType === "candidates"){
      sendCandidatesMail(values.subject,values.receiver)
    }
    message.loading("Announcement is sending please wait.")
  };
  return !error ? (
    <Container>
      <Row style={{ width: "100%" }}>
        <Col span={24}>
          <Title level={4}>Send Announcements Via Mail</Title>
          <hr />
          <Row justify={"start"}>
            <Col span={16}>
              <Spin style={{ width: "100%" }} spinning={isLoading}>
                <Card>
                  <Form form={form} onFinish={onFinish}>
                    <Form.Item
                      rules={[
                        {
                          type: "string",
                          required: true,
                          message: "Subject must be a string.",
                        },
                      ]}
                      label="Subject"
                      name={"subject"}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      rules={[
                        {
                          type: "email",
                          required: true,
                          message: "Receiver must be a email.",
                        },
                      ]}
                      label="Receiver"
                      name={"receiver"}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Announcement type must be entered email.",
                        },
                      ]}
                      label="Announcement Type"
                      name={"announcementType"}
                    >
                      <Select>
                        <Select.Option value="election">
                          Send Election Announcement
                        </Select.Option>
                        <Select.Option value="applications">
                          Send Applications Announcement
                        </Select.Option>
                        <Select.Option value="candidates">
                          Send Candidates Announcement
                        </Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item>
                      <Button htmlType="submit">Send Announcement</Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Spin>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  ) : (
    <Unauthorized />
  );
};

export default SendMail;
