import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Switch,
  Button,
  Popconfirm,
  Table,
  Modal,
  Form,
  Input,
  FloatButton,
} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { useDisclosure } from "src/hooks";

const Advertisee = () => {
  interface IAdvertiseeType {
    org_name: string;
    phone_number: string;
    total_ads: number;
    representative: string;
  }

  const { isOpen, onClose, onOpen } = useDisclosure();

  const columns: ColumnsType<IAdvertiseeType> = [
    {
      title: "Organization Name",
      dataIndex: "org_name",
      key: "org_name",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.org_name.localeCompare(b.org_name),
    },
    {
      title: "representative",
      dataIndex: "representative",
      key: "representative",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Total Ads",
      dataIndex: "total_ads",
      key: "total_ads",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",

      render: () => (
        <ButtonGroup>
          <Button icon={<EditOutlined />} onClick={onOpen} />
          <Popconfirm
            title="Delete the category"
            description="Are you sure to delete this category?"
            okText="Yes"
            cancelText="No"
            icon={<DeleteOutlined style={{ color: "red" }} />}
          >
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>{" "}
        </ButtonGroup>
      ),
    },
  ];

  const data: IAdvertiseeType[] = [
    {
      org_name: "Org 1",
      phone_number: "123-456-7890",
      total_ads: 5,
      representative: "John Doe",
    },
    {
      org_name: "Org 2",
      phone_number: "987-654-3210",
      total_ads: 10,
      representative: "Jane Smith",
    },
    {
      org_name: "Org 3",
      phone_number: "555-123-4567",
      total_ads: 8,
      representative: "Mike Johnson",
    },
    {
      org_name: "Org 4",
      phone_number: "888-999-0000",
      total_ads: 15,
      representative: "Sarah Wilson",
    },
    {
      org_name: "Org 5",
      phone_number: "777-888-9999",
      total_ads: 12,
      representative: "David Brown",
    },
    {
      org_name: "Org 6",
      phone_number: "111-222-3333",
      total_ads: 20,
      representative: "Emily Davis",
    },
    {
      org_name: "Org 7",
      phone_number: "444-555-6666",
      total_ads: 7,
      representative: "Chris Johnson",
    },
    {
      org_name: "Org 8",
      phone_number: "999-888-7777",
      total_ads: 9,
      representative: "Lisa Anderson",
    },
    {
      org_name: "Org 9",
      phone_number: "333-222-1111",
      total_ads: 14,
      representative: "Michael Wilson",
    },
    {
      org_name: "Org 10",
      phone_number: "777-666-5555",
      total_ads: 6,
      representative: "Sophia Taylor",
    },
    // Add more data entries as needed
  ];

  return (
    <div>
      <Modal
        open={isOpen}
        onCancel={onClose}
        centered
        title={
          <span className="text-header font-header">Add new Advertisee</span>
        }
      >
        <Form layout="vertical">
          <Form.Item label="org name" required>
            <Input placeholder="ncell" size="large" />
          </Form.Item>
          <Form.Item label="representative" required>
            <Input placeholder="John doe" size="large" />
          </Form.Item>
          <Form.Item label="Phone number" required>
            <Input placeholder="980664364736" size="large" />
          </Form.Item>
        </Form>
      </Modal>

      <Table
        showHeader
        rowSelection={{}}
        columns={columns}
        pagination={{ position: ["bottomCenter"] }}
        dataSource={data}
      />

      <FloatButton icon={<PlusOutlined />} type="primary" onClick={onOpen} />
    </div>
  );
};

export default Advertisee;
