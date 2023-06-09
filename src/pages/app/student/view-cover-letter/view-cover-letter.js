import React, { useState } from "react";
import Container from "../../../../common/components/container/container";
import { useGetAllCandidates } from "../../../../hooks/candidate.hooks";
import { useGetElection } from "../../../../hooks/election.hooks";
import { Button, Image, Popconfirm, Spin, Table, message } from "antd";
import Title from "antd/es/typography/Title";
import { useUpdateApplication } from "./../../../../hooks/application.hooks";
import { useGetVoter } from "../../../../hooks/voters.hooks";
import Unauthorized from "../unauthorized/unauthorized";
import { getFile } from "../../../../api/file/file.api";
import { useEffect } from "react";
import { useDownloadFile } from "../../../../hooks/file.hooks";

const ConfirmCell = ({
  refetch,
  candidateId,
  approvement,
  buttonTitle,
  danger,
}) => {
  const { mutate: updateCandidate } = useUpdateApplication(() => {
    refetch();
  }, candidateId);

  const confirm = () => {
    updateCandidate({
      status: approvement,
    });
    message.success("The candidate's application has updated.");
  };

  return (
    <Popconfirm
      icon={null}
      description="Are you sure ?"
      onConfirm={confirm}
      okText="Submit"
      cancelText="Cancel"
    >
      <Button danger={danger}>{buttonTitle}</Button>
    </Popconfirm>
  );
};

const Election = ({ electionId }) => {
  const { data: election, isLoading } = useGetElection(electionId);

  return <Spin spinning={isLoading}>{election?.organization?.name}</Spin>;
};

const CoverLetterCell = ({ id }) => {
  const [visible, setVisible] = useState(false);
  const [scaleStep, setScaleStep] = useState(0.5);
  const [fileData, setFileData] = useState(null); // State to store the file data

  const { mutate: downloadImage, isError } = useDownloadFile();

  useEffect(() => {
    downloadImage(id, {
      onSuccess: (response) => {
        let blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        let bufferObject = window.URL.createObjectURL(blob);
        setFileData(bufferObject);
      },
    });
  }, []);
  
  return (
    <>
      <br />
      <Button type="primary" onClick={() => setVisible(true)}>
        Show Cover Letter
      </Button>
      {fileData !== null &&
        fileData.length > 0 && ( // Check if fileData is not null and has a length
          <Image
            style={{ display: "none" }}
            preview={{
              visible,
              scaleStep,
              src: fileData,
              onVisibleChange: (value) => {
                setVisible(value);
              },
            }}
          />
        )}
    </>
  );
};

const ViewCoverLetter = ({ user }) => {
  const { error } = useGetVoter(user.id);
  const { data: candidates, refetch, isRefetching } = useGetAllCandidates();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Election",
      dataIndex: "election",
      key: "election",
      render: (election) => <Election electionId={election.id} />,
    },
    {
      title: "Status",
      dataIndex: "application",
      key: "application",
      render: (application) => <div>{application.status}</div>,
    },
    {
      title: "Cover Letter",
      dataIndex: "coverLetter",
      render: (coverLetter) => <CoverLetterCell id={coverLetter?.id} />,
    },
    {
      title: "Application",
      dataIndex: "application",
      render: (application) => (
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <ConfirmCell
            approvement="APPROVED"
            buttonTitle={"Confirm"}
            candidateId={application?.id}
            refetch={refetch}
          />
          <ConfirmCell
            approvement="REJECTED"
            danger={true}
            buttonTitle={"Reject"}
            candidateId={application?.id}
            refetch={refetch}
          />
        </div>
      ),
    },
  ];

  return error ? (
    <Container>
      <div style={{ width: "100%" }}>
        <Title level={4}>View Cover Letters</Title>
        <hr></hr>
        <br></br>
        <Spin spinning={isRefetching}>
          <Table dataSource={candidates?.content} columns={columns} />
        </Spin>
      </div>
    </Container>
  ) : (
    <Unauthorized />
  );
};

export default ViewCoverLetter;
