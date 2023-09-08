import { MoreOutlined, SyncOutlined } from "@ant-design/icons";
import { Avatar, Button, Space, Tag } from "antd";
import React from "react";

const RecentTags = () => {
  return (
    <div className=" bg-white flex flex-col w-full justify-between shadow-md p-4 rounded-md gap-4 ">
      <div className="flex justify-between items-center w-full ">
        <span className="text-header font-header ">Tags </span>

        <Space wrap>
          <Button icon={<SyncOutlined />} title="refresh"></Button>
        </Space>
      </div>

      <div className="flex flex-wrap gap-2 [&>*]:flex-1 [&>*]:cursor-pointer ">
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> envient </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag>LKNCKnskczckn </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> environ </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
        <Tag> environment </Tag>
        <Tag>zcjz</Tag>
      </div>
      <Button>see all</Button>
    </div>
  );
};

export default RecentTags;
