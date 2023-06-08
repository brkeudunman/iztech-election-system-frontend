import React from "react";
import { useGetPersonnel } from "./../../../../hooks/personnel.hooks";
import Container from "../../../../common/components/container/container";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  notification,
} from "antd";
import Title from "antd/es/typography/Title";
import { useAddElectionDate } from "../../../../hooks/election-date.hooks";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Unauthorized from "../unauthorized/unauthorized";
dayjs.extend(customParseFormat);

const Calendar = ({ user }) => {
  const { data: personnel } = useGetPersonnel(user?.id);

  const onSuccess = () => {
    notification.success({
      message: "Success!",
      description: "Election date has been successfully sent",
    });
  };

  const onFinish = (values) => {
    const endDate = dayjs(values.endDate).format("YYYY-MM-DDTHH:mm:ss");
    const startDate = dayjs(values.startDate).format("YYYY-MM-DDTHH:mm:ss");

    mutate({
      endDate: endDate,
      startDate: startDate,
      round: values.round,
    });
  };

  const { mutate, isLoading, isSuccess } = useAddElectionDate(onSuccess);

  return personnel && personnel.personnelRole === "RECTOR" ? (
    <Container>
      <Row
        style={{
          width: "100%",
        }}
      >
        <Row
          style={{
            width: "100%",
          }}
        >
          <Col span={24}>
            <Title level={4}>Set The Election Calendar</Title>
            <hr />
            <br />
            <Form onFinish={onFinish}>
              <Form.Item
                rules={[
                  {
                    required: "true",
                  },
                ]}
                label="Start Date"
                name={"startDate"}
              >
                <DatePicker
                  format="DD-MM-YYYY HH:mm:ss"
                  showTime={{
                    defaultValue: dayjs("00:00:00", "HH:mm:ss"),
                  }}
                />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: "true",
                  },
                ]}
                label="End Date"
                name={"endDate"}
              >
                <DatePicker
                  format="DD-MM-YYYY HH:mm:ss"
                  showTime={{
                    defaultValue: dayjs("00:00:00", "HH:mm:ss"),
                  }}
                />
              </Form.Item>
              <Form.Item
                name={"round"}
                rules={[
                  {
                    required: "true",
                  },
                ]}
                label="Round Number"
              >
                <InputNumber max={3} min={1} />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit">Submit</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Row>
    </Container>
  ) : (
    <Unauthorized />
  );
};

export default Calendar;
