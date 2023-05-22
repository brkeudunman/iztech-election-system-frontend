import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import React from "react";

const BasicDropdown = ({ title, titleColor, items }) => {
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <span
            style={{
              color: titleColor ? titleColor : "white",
            }}
          >
            {title}
          </span>
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default BasicDropdown;
