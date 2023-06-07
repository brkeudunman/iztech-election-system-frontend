import React, { useState } from "react";
import "./candidateship-card.css";
import aragornImg from "../../../../assets/aragorn.jpg";
import {
  Button,
  Card,
  Col,
  Descriptions,
  Form,
  Image,
  Row,
  Spin,
  message,
  notification,
} from "antd";
import FileUploadButton from "../../upload/fileUpload";
import { useAddCandidate } from "../../../../hooks/candidate.hooks";
import { useForm } from "antd/es/form/Form";
const config = {
  apiUrl: "http://localhost:8080",
};

const CandidateshipCard = ({ voter, election }) => {
  const onSuccess = () => {
    notification.success({
      message: "Success!",
      description: "The application is successfully sent!",
    });
  };
  const { mutate: addCandidate } = useAddCandidate(onSuccess);
  const [fileId, setFileId] = useState();
  const [form] = useForm();
  const props = {
    maxCount: "1",
    name: "file",
    action: `${config.apiUrl}/file`,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        setFileId(info.file.response.id);
        message.success(`File uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`File upload failed.`);
      }
    },
  };

  const onFinish = () => {
    if (voter) {
      const candidate = {
        firstName: voter.name,
        email: voter.email,
        lastName: voter.surname,
        userRole: voter.userRole,
        electionId: voter.election.id,
        candidateRole: "DEPARTMENT_CANDIDATE",
        coverLetterId: fileId,
      };
      addCandidate(candidate);
    }
  };

  return (
    <Card>
      {" "}
      <Form form={form} onFinish={onFinish}>
        <Spin spinning={!voter}>
          <Row align={"middle"} justify={"center"}>
            <Col>
              <Image src={aragornImg} alt="Aragorn" />

              <div style={{ marginTop: "24px" }}>
                <Descriptions bordered column={2}>
                  <Descriptions.Item label="Name">
                    {voter?.name}
                  </Descriptions.Item>
                  <Descriptions.Item label="Surname">
                    {voter?.surname}
                  </Descriptions.Item>
                  <Descriptions.Item label="Email">
                    {voter?.email}
                  </Descriptions.Item>

                  <Descriptions.Item label="Description">
                    {voter?.description}
                  </Descriptions.Item>
                </Descriptions>
              </div>
              <Form.Item style={{ marginTop: "24px" }}>
                <FileUploadButton props={props} />
              </Form.Item>
              <Form.Item>
                <div>
                  <Button type="primary" disabled={!fileId} htmlType="submit">
                    Apply for candidacy for{" "}
                    {election && election.organization.name}
                  </Button>
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Spin>
      </Form>
    </Card>
  );
};

export default CandidateshipCard;
