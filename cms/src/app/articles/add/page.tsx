import {
  CloudUploadOutlined,
  DownOutlined,
  EyeOutlined,
  InboxOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Input,
  Modal,
  Radio,
  Select,
  Space,
  Tabs,
  Tag,
  UploadProps,
} from "antd";
import { message } from "antd";

import "suneditor/dist/css/suneditor.min.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Dragger from "antd/es/upload/Dragger";
import { useDisclosure } from "src/hooks";
import { dummyTags } from "src/app/data/tags";
import { useState } from "react";

const AddArticle = () => {
  const {
    isOpen: isTagModalOpen,
    onClose: onTAgModalClose,
    onOpen: onTagModalOpen,
    toggle: toggleTagModal,
  } = useDisclosure();

  const plugins = ClassicEditor.builtinPlugins.map(
    (plugin) => plugin.pluginName
  );
  console.log("all plugins", plugins);
  const {} = DatePicker;

  const props: UploadProps = {
    style: { height: "30rem" },
    multiple: true,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((el) => el !== tag);
      }

      return [...prev, tag];
    });
  };

  return (
    <div>
      <Modal
        centered
        open={isTagModalOpen}
        className="w-[40rem]"
        width="50%"
        onCancel={onTAgModalClose}
      >
        <div className="flex flex-col mt-7 gap-3">
          <div className="border p-2 w-full  flex items-center">
            <Input
              width="100%"
              className="border-none focus:shadow-none w-full"
            />

            <Button className="border-none" icon={<SearchOutlined />}></Button>
          </div>

          <div className="flex flex-wrap gap-1  [&>*]:cursor-pointer justify-center ">
            {[...dummyTags, ...dummyTags, ...dummyTags, ...dummyTags].map(
              (tag) => {
                const isSelected = selectedTags.find((el) => el === tag);

                return (
                  <Radio
                    className="border p-2 flex items-center break-keep"
                    checked={!!isSelected}
                    onChange={() => handleTagSelect(tag)}
                  >
                    {tag}
                  </Radio>

                  // <Tag
                  //   className={`w-full `}
                  //   style={{
                  //     background: isSelected ? "black" : "white",
                  //     color: !isSelected ? "black" : "white",
                  //   }}
                  //   onClick={() => handleTagSelect(tag)}
                  // >
                  //   {tag}
                  // </Tag>
                );
              }
            )}
          </div>
        </div>
      </Modal>

      <div className="w-full flex gap-3  items-center">
        <Input size="large" placeholder="title" />

        <Select
          size="large"
          placeholder="select category"
          style={{ fontSize: ".7rem" }}
          suffixIcon={<DownOutlined className="text-sm" />}
        />
        <Button size="large" icon={<EyeOutlined />}>
          preview
        </Button>
        <Button size="large" icon={<CloudUploadOutlined />} type="dashed">
          publish
        </Button>
      </div>

      <div className="flex  w-full gap-3 mt-6 ">
        <div className="w-[70%] h-full flex flex-col gap-4 ">
          <div>
            <span className="header"> content</span>
            <CKEditor
              editor={ClassicEditor}
              config={{
                toolbar: {
                  shouldNotGroupWhenFull: true,
                },
                ckfinder: {
                  options: {
                    chooseFiles: true,
                  },
                },
                simpleUpload: {
                  uploadUrl: "https://localhost:3000/upload/",
                },
              }}
              data="<p>Hello from CKEditor&nbsp;5!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
          <div className="w-full">
            <span className="header">Select Tags</span>
            <Space className="flex flex-wrap [&>*]:cursor-pointer border border-dashed p-4 rounded-lg ">
              {dummyTags.map((tag) => {
                const isSelected = selectedTags.find((el) => el === tag);

                return (
                  <Radio
                    className="border p-1 flex items-center"
                    checked={!!isSelected}
                    onClick={() => handleTagSelect(tag)}
                  >
                    {tag}
                  </Radio>
                );
              })}

              <Button
                icon={<PlusCircleOutlined />}
                className="rounded-full flex justify-center items-center"
                onClick={onTagModalOpen}
              />
            </Space>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[30%] ">
          <div className="config_container w-full mt-8">
            <span className="header_sm"> Healine speciality </span>
            <Select
              size="large"
              placeholder="headline"
              options={[
                {
                  label: "featured",
                  value: "featured",
                },

                {
                  label: "breaking",
                  value: "breaking",
                },
                {
                  label: "editor's pick",
                  value: "editor's pick",
                },
                {
                  label: "trending",
                  value: "trending",
                },
              ]}
            />
          </div>

          <div className="config_container">
            <span className="header_sm"> writer </span>

            <Tabs
              className="w-full"
              items={[
                {
                  label: "writer",
                  key: "writer",
                  children: (
                    <Select
                      className="w-full"
                      size="large"
                      placeholder="headline"
                      options={[
                        {
                          label: "featured",
                          value: "featured",
                        },

                        {
                          label: "breaking",
                          value: "breaking",
                        },
                        {
                          label: "editor's pick",
                          value: "editor's pick",
                        },
                        {
                          label: "trending",
                          value: "trending",
                        },
                      ]}
                    />
                  ),
                },
                {
                  label: "guest",
                  key: "guest",
                  children: (
                    <Input size="large" placeholder="enter guestb name" />
                  ),
                },
              ]}
            />
          </div>
          <div className="config_container">
            <span className="header_sm">Schedule For</span>
            <DatePicker showTime size="large" />
          </div>

          <div className="config_container">
            <span className="header_sm"> Media </span>
            <div className="flex flex-col gap-2">
              <Input size="large" placeholder="video link" />

              <Dragger {...props} style={{ height: "25rem" }}>
                <div className="h-[17rem] flex items-center justify-center ">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                </div>
              </Dragger>

              <Input size="large" placeholder="image caption" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddArticle;
