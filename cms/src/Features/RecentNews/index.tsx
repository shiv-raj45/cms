import { LinkOutlined, SyncOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import { HorizontalCard1 } from "src/Components/Cards/NewsCard";
("src/Components/Cards/NewsCard");

const RecentNews = () => {
  return (
    <div className="mt-3 shadow-lg p-5 rounded-lg flex flex-col gap-6  bg-white">
      <div className="flex justify-between items-center ">
        <span className="text-header font-header ">Recent News </span>

        <Space wrap>
          <Button icon={<SyncOutlined />} title="refresh"></Button>
          <Button>See all</Button>
        </Space>
      </div>
      <div className="flex flex-col gap-3">
        <HorizontalCard1 />
        <HorizontalCard1 />
        <HorizontalCard1 />
        <HorizontalCard1 />
        <HorizontalCard1 />
        <HorizontalCard1 />
      </div>
    </div>
  );
};

export default RecentNews;
