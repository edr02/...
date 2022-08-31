import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./TextInput.css";

function TextInput() {
  return (
    <div className="text-input">
      <Antd.Input
        bordered
        suffix=""
        size="middle"
        maxLength={40}
        defaultValue=""
        status="default"
        disabled={false}
        showCount={false}
        placeholder="Please fill your search"
        prefix={<AntDesignIcons.SearchOutlined />}
      />
    </div>
  );
}

export default TextInput;
