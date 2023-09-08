import {
  AppstoreOutlined,
  BellOutlined,
  DashboardOutlined,
  FileOutlined,
  NotificationOutlined,
  PictureOutlined,
  SearchOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Form,
  Image,
  Input,
  Layout,
  Menu,
  MenuProps,
} from "antd";
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { images } from "src/constants";

interface IProps {
  children: ReactNode;
}
export const PrimaryLayout = ({ children }: IProps) => {
  const { Sider, Content, Header } = Layout;
  const { pathname } = useLocation();
  const generateLink = (link: string, label: string) => {
    return <Link to={link}> {label} </Link>;
  };

  const menu: MenuProps["items"] = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: generateLink("dashbaord", "dashboard"),
    },
    {
      key: "articles",
      icon: <FileOutlined />,
      dashed: true,
      label: generateLink("articles", "articles"),
    },
    {
      key: "categories",
      icon: <DashboardOutlined />,
      label: generateLink("categories", "categories"),
    },

    {
      key: "tags",
      icon: <DashboardOutlined />,
      label: generateLink("tags", "tags"),
    },
    {
      key: "users",
      icon: <UserOutlined />,
      label: generateLink("users", "users"),
    },
    {
      key: "ads",
      icon: <DashboardOutlined />,
      label: generateLink("ads", "ads"),
      children: [
        {
          key: "advertisee",
          icon: <UserSwitchOutlined />,
          label: generateLink("advertisee", "advertisee"),
        },

        {
          key: "All Ads",
          icon: <PictureOutlined />,
          label: generateLink("ads", "ads"),
        },
        {
          key: "Ad placement",
          icon: <PictureOutlined />,
          label: generateLink("ads_placement", "ad placement"),
        },
      ],
    },
  ];
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Layout hasSider className="min-h-[100vh]  bg-white">
      <Sider
        onMouseOver={() =>
          isCollapsed ? setIsCollapsed(true) : setIsCollapsed(false)
        }
        collapsed={isCollapsed}
        theme="light"
        width="17rem"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0,
        }}
      >
        <div className="">
          <div className="my-7  flex justify-center ">
            <Link to="/">
              <Image
                src={images.logos.brandLogoLg}
                className="m-auto"
                preview={false}
              />
            </Link>
          </div>
          <div className="h-full  flex-col justify-between ">
            <Menu
              mode="inline"
              key={pathname}
              items={menu}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 1 }}
            />

            <Card className=" mt-auto absolute bottom-14 w-full ">
              <div className="flex mt-auto gap-3 items-center m-auto">
                <Avatar />
                <span className="text-lg font-bold ">Roshan</span>
              </div>
            </Card>
          </div>
        </div>
      </Sider>

      <Layout className="p-5 bg-white">
        <Header className="bg-white gap-6 my-3  sticky top-0 z-50 flex justify-between items-center p-2 shadow-md rounded-lg ">
          <Form className="w-full">
            <Input
              size="large"
              autoFocus
              placeholder="Search"
              className=" border-none focus:shadow-none w-full "
              prefix={<SearchOutlined />}
            />
          </Form>

          <div className="flex gap-3">
            <Button icon={<BellOutlined />} />
            <Button icon={<AppstoreOutlined />} />
          </div>
        </Header>
        <Content className=""> {children} </Content>
      </Layout>
    </Layout>
  );
};
