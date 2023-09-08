import { Button, Dropdown, Image, Menu, MenuProps, Tag } from "antd";
import React, { ReactNode } from "react";
import { images } from "src/constants";
import { Link } from "react-router-dom";
import {
  BookOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  MoreOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const HorizontalCard1 = () => {
  const items: MenuProps["items"] = [
    {
      key: "delete",
      icon: <DeleteOutlined />,

      danger: true,
      label: "Delete",
    },
    {
      key: "edit",
      icon: <EditOutlined />,
      label: "Edit",
    },
  ];

  return (
    <div className="flex gap-8 w-full bg-gray-100 p-4 rounded-xl ">
      <div className="flex w-[30%]  h-[7rem]  rounded-xl overflow-hidden ">
        <Image
          src={images.newsImages.news1}
          className="object-cover"
          width="100%"
          height="100%"
        />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between  w-full ">
          <Link to="article">
            <span className="text-xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis
            </span>
          </Link>

          <Dropdown menu={{ items }} className="cursor-pointer">
            <Button
              icon={<MoreOutlined onClick={(e) => e.preventDefault()} />}
            ></Button>
          </Dropdown>
        </div>

        <div className="flex justify-between mt-2 ">
          <Link to="/category">
            <Tag className="w-fit" color="black">
              environment
            </Tag>
          </Link>

          <div className="flex gap-6 text-gray-600 ">
            <IconText icon={<EyeOutlined />} text="1.7k views" />
            <IconText icon={<BookOutlined />} text="1 bookmarked" />
            <IconText icon={<ShareAltOutlined />} text="19 shares" />
            <IconText icon={<ClockCircleOutlined />} text=" 3 hours ago" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard1;

interface ITextIcon {
  icon: ReactNode;
  text: string;
}

const IconText = ({ icon, text }: ITextIcon) => {
  return (
    <div className="flex gap-2  items-center ">
      {icon} <span> {text} </span>
    </div>
  );
};
