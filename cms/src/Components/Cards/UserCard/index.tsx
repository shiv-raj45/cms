import { MoreOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import React from "react";

const UserCard = () => {
  return (
    <div className="flex w-full justify-between  border-b-gray-400 bg-white">
      <div className="flex gap-3">
        <Avatar />
        <div className="flex flex-col">
          <span className="text-md font-bold"> Ram Maharjan </span>
          <span className="text-muted text-xs "> ram@gmail.com.np </span>
        </div>
      </div>
      <Button icon={<MoreOutlined />} />
    </div>
  );
};

export default UserCard;
