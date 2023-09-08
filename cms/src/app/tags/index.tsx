import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, FloatButton, Form, Input, Modal } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useDisclosure } from "src/hooks";

const Tags = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const tags = [
    {
      name: "international",
      id: "tags",
    },
    {
      name: "international",
      id: "tags",
    },
    {
      name: "international",
      id: "tags",
    },
    {
      name: "international",
      id: "tags",
    },
    {
      name: "international",
      id: "tags",
    },
    {
      name: "international",
      id: "tags",
    },
    {
      name: "international",
      id: "tags",
    },
    {
      name: "international",
      id: "tags",
    },
    {
      name: "international",
      id: "tags",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center items-center ">
      <Modal
        centered
        open={isOpen}
        onCancel={onClose}
        title={<span className="text-header font-header">Create new Tag</span>}
      >
        <Form layout="vertical">
          <Form.Item label="Tag name">
            <Input size="large" placeholder="coding" />
          </Form.Item>
        </Form>
      </Modal>

      <div className="flex flex-col w-full items-center ">
        <span className="text-header font-header  my-5 ">Tags</span>

        <div className="max-h-[30rem] justify-between shadow-lg  w-[30%] overflow-auto ">
          {tags.map((tag) => {
            return (
              <div className="flex p-4  border-b rounded-lg w-full justify-between ">
                <span> {tag.name} </span>

                <ButtonGroup>
                  <Button icon={<EditOutlined />} onClick={onOpen} />
                  <Button danger icon={<DeleteOutlined />} />
                </ButtonGroup>
              </div>
            );
          })}
        </div>
      </div>

      <FloatButton icon={<PlusOutlined />} type="primary" onClick={onOpen} />
    </div>
  );
};

export default Tags;
