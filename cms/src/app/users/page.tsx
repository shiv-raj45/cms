import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Switch,
  Table,
  Button,
  Popconfirm,
  FloatButton,
  Modal,
  Avatar,
  Space,
  Input,
  Select,
  Form,
} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { ColumnsType } from "antd/es/table";
import { useRef } from "react";
import { useDisclosure } from "src/hooks";

interface UserDataType {
  username: string;
  email: string;
  role: string;
  active: boolean;
  key: string;
}

const Users = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isRoleMOdalOpen,
    onClose: onRoleModalClose,
    onOpen: onRoleModalOpen,
  } = useDisclosure();

  const columns: ColumnsType<UserDataType> = [
    {
      title: "username",
      dataIndex: "username",
      key: "username",
      render: (value: string) => {
        return (
          <Space>
            <Avatar size="large" icon={<UserOutlined />} />
            <span> {value} </span>
          </Space>
        );
      },
    },
    {
      title: "email",
      dataIndex: "email",

      key: "email",
    },
    {
      title: "role",
      key: "role",
      dataIndex: "role",
    },

    {
      title: "active",
      key: "active",
      render: (value: boolean) => {
        return <Switch />;
      },
    },
    {
      title: "Actions",
      key: "Actions",
      render: (value: boolean) => {
        return (
          <ButtonGroup>
            <Button icon={<EditOutlined />} onClick={onOpen} />
            <Popconfirm
              title="Delete user"
              description="Are you want to delelte user?"
              icon={<DeleteOutlined style={{ color: "red" }} />}
            >
              <Button icon={<DeleteOutlined />} danger />
            </Popconfirm>
          </ButtonGroup>
        );
      },
    },
  ];

  const data: UserDataType[] = [
    {
      active: true,
      email: "me@me.com",
      role: "editor",
      username: "ROshan",
      key: "1",
    },

    {
      active: true,
      email: "me@me.com",
      role: "editor",
      username: "ROshan",
      key: "1",
    },
    {
      active: true,
      email: "me@me.com",
      role: "editor",
      username: "ROshan",
      key: "1",
    },
    {
      active: true,
      email: "me@me.com",
      role: "editor",

      username: "ROshan",
      key: "1",
    },
    {
      active: true,
      email: "me@me.com",
      role: "editor",
      username: "ROshan",
      key: "1",
    },
    {
      active: true,
      email: "me@me.com",
      role: "editor",
      username: "ROshan",
      key: "1",
    },
  ];
  const roleRef = useRef<HTMLDivElement | null>(null);

  const roles = [
    {
      name: "editor",
      id: "34y834",
    },
    {
      name: "editor",
      id: "34y834",
    },
    {
      name: "editor",
      id: "34y834",
    },
    {
      name: "editor",
      id: "34y834",
    },
    {
      name: "editor",
      id: "34y834",
    },
    {
      name: "editor",
      id: "34y834",
    },
    {
      name: "editor",
      id: "34y834",
    },
    {
      name: "editor",
      id: "34y834",
    },
    {
      name: "editor",
      id: "34y834",
    },
    {
      name: "editor",
      id: "34y834",
    },
    {
      name: "editor",
      id: "34y834",
    },
    {
      name: "editor",
      id: "34y834",
    },
    {
      name: "editor",
      id: "34y834",
    },
  ];

  return (
    <div>
      <Modal
        centered
        open={isRoleMOdalOpen}
        onCancel={onRoleModalClose}
        title={
          <span className="text-header font-header"> Create New Role </span>
        }
      >
        <Form layout="vertical">
          <Form.Item label="Role">
            <Input placeholder="editor" />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        centered
        title={
          <span className="text-header font-header"> Create New user </span>
        }
        open={isOpen}
        onCancel={onClose}
      >
        <div className="flex flex-col">
          <Form layout="vertical">
            <Form.Item label="usrname" required>
              <Input size="large" placeholder="username" />
            </Form.Item>

            <Form.Item label="email" required>
              <Input size="large" type="email" placeholder="email" />
            </Form.Item>
            <Form.Item label="password" required>
              <Input.Password size="large" placeholder="password" />
            </Form.Item>
            <Form.Item label="confirm password">
              <Input.Password
                size="large"
                type="password"
                placeholder="confirm password"
              />
            </Form.Item>
            <Form.Item label="role" required>
              <Select
                size="large"
                placeholder="role"
                className="w-full"
                options={[
                  {
                    label: "editor",
                    value: "editor",
                  },
                  {
                    label: "staff",
                    value: "staff",
                  },
                  {
                    label: "user",
                    value: "user",
                  },
                  {
                    label: "admin",
                    value: "admin",
                  },
                ]}
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <div className="flex gap-4">
        <div
          className="flex flex-col gap-3  w-[30%] h-fit relative shadow-lg p-4 rounded-lg"
          ref={roleRef}
        >
          <span className="text-header font-header"> Roles </span>
          <div className="flex flex-col gap-2 max-h-[25rem] overflow-auto">
            {roles.map((el) => {
              return (
                <div className="p-4 border-b  rounded-lg w-full  flex justify-between ">
                  <span> {el.name} </span>

                  <ButtonGroup>
                    <Button icon={<EditOutlined />} onClick={onRoleModalOpen} />
                    <Popconfirm
                      icon={<DeleteOutlined style={{ color: "red" }} />}
                      title="are your sure you want to Delete"
                    >
                      <Button danger icon={<DeleteOutlined />} />
                    </Popconfirm>
                  </ButtonGroup>
                </div>
              );
            })}
          </div>

          <Button
            size="large"
            icon={<PlusOutlined />}
            className="absolute bottom-4 right-4 rounded-full p-4 justify-center flex items-center z-50 bg-black  "
            type="primary"
            onClick={onRoleModalOpen}
          />
        </div>

        <div className="w-full shadow-lg p-4 rounded-lg  ">
          <span className="text-header font-header"> users </span>

          <Table
            columns={columns}
            dataSource={data}
            pagination={{ position: ["bottomCenter"] }}
            rowSelection={{}}
          />

          <FloatButton
            icon={<PlusOutlined />}
            type="primary"
            onClick={onOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
