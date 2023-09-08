import { SyncOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import UserCard from "src/Components/Cards/UserCard";

const RecentUsers = () => {
  return (
    <div className="flex flex-col w-full shadow-md  bg-white p-3 rounded-lg gap-4 h-fit">
      <div className="flex justify-between">
        <span className="text-header font-header">Users</span>

        <Space wrap>
          <Button icon={<SyncOutlined />} title="refresh"></Button>
        </Space>
      </div>
      <div className="flex flex-col gap-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <Button> see all </Button>
    </div>
  );
};

export default RecentUsers;
