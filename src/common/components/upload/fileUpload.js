import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, message } from "antd";
import React, { useState } from "react";
import { sendFile } from "./../../../api/file/file.api";

const FileUploadButton = ({ props }) => {
  return (
    <>
      <div>Cover Letter</div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </>
  );
};

export default FileUploadButton;
