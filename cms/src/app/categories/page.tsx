import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  FloatButton,
  Input,
  Modal,
  Popconfirm,
  Radio,
  Select,
  Space,
  Switch,
  Table,
  Tag,
} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { ColumnsType } from "antd/es/table";
import { useDisclosure } from "src/hooks";
import { useState } from "react";
const Categories = () => {
  interface DataType {
    key?: string;
    name: string;
    slug: string;
    active: boolean;
  }
  const { isOpen, onClose, onOpen } = useDisclosure();

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "slug",
      dataIndex: "slug",
      key: "slug",
    },
    {
      title: "active",
      dataIndex: "active",
      key: "active",
      render: (value: boolean) => <Switch checked={value} />,
    },
    {
      title: "action",
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

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      slug: "categoryyyyyyyyyy1",
      active: true,
    },
    {
      key: "1",
      name: "John Brown",
      slug: "categoryyyyyyyyyy1",
      active: true,
    },
    {
      name: "John Brown",
      slug: "categoryyyyyyyyyy1",
      active: true,
    },
    {
      key: "1",
      name: "John Brown",
      slug: "categoryyyyyyyyyy1",
      active: true,
    },
    {
      key: "1",
      name: "John Brown",
      slug: "categoryyyyyyyyyy1",
      active: false,
    },
    {
      key: "1",
      name: "John Brown",
      slug: "categoryyyyyyyyyy1",
      active: true,
    },
    {
      key: "1",
      name: "John Brown",
      slug: "categoryyyyyyyyyy1",
      active: true,
    },
    {
      key: "1",
      name: "John Brown",
      slug: "categoryyyyyyyyyy1",
      active: true,
    },
    {
      key: "1",
      name: "John Brown",
      slug: "categoryyyyyyyyyy1",
      active: true,
    },
    {
      key: "1",
      name: "John Brown",
      slug: "categoryyyyyyyyyy1",
      active: true,
    },
  ];
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div>
      <Modal
        open={isOpen}
        centered
        title="create new category "
        onCancel={onClose}
      >
        <div className="flex flex-col gap-3">
          <div>
            <label>Category name</label>
            <Input size="large" />
          </div>
          <div>
            <label> parent category </label>
            <Select
              size="large"
              options={[
                {
                  label: "inyernational",
                  value: "international",
                },

                {
                  label: "inyernational",
                  value: "international",
                },
                {
                  label: "inyernational",
                  value: "international",
                },
                {
                  label: "inyernational",
                  value: "international",
                },
              ]}
              className="w-full"
            />
          </div>
        </div>
      </Modal>

      <FloatButton icon={<PlusOutlined />} type="primary" onClick={onOpen} />

      <Table
        showHeader
        rowSelection={rowSelection}
        columns={columns}
        pagination={{ position: ["bottomCenter"] }}
        dataSource={data}
      />
    </div>
  );
};

export default Categories;
