import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, message } from "antd";
import React, { useState } from "react";

const FileUploadButton = ({ props }) => {
  return (
    <>
      <div>Cover Letter</div>
      <Upload accept="image/png, image/jpeg" {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </>
  );
};

export default FileUploadButton;
