import React from "react";
import { ProfileOutlined } from "@ant-design/icons";
const InfoCard = () => {
  return (
    <div className="shadow-card bg-white  flex flex-col p-3  w-full rounded-lg items-start justify-between  ">
      <ProfileOutlined className="text-[3.4rem] font-extralight " />
      <span className="text-sm text-gray-400 mt-2 "> News Published</span>
      <span className="text-[2rem] font-bold"> 56 </span>
    </div>
  );
};

export default InfoCard;
