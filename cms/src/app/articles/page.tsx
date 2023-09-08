import {
  Button,
  Col,
  Input,
  Pagination,
  Row,
  Select,
  Space,
  DatePicker,
  Upload,
  UploadProps,
} from "antd";
import { message } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { FilterOutlined, InboxOutlined, SyncOutlined } from "@ant-design/icons";
import {
  HorizontalCard1,
  HorizontalCard2,
} from "src/Components/Cards/NewsCard";
import { useDisclosure } from "src/hooks";
import { useNavigate } from "react-router";
const { RangePicker } = DatePicker;
const { Search } = Input;
const Articles = () => {
  const { TextArea } = Input;

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

  const { isOpen, toggle } = useDisclosure();
  const navigate = useNavigate();
  const handleAddArticle = () => {
    navigate("/articles/add");
  };

  return (
    <div className="flex w-full p-3 h-fit gap-4 ">
      <div className="w-[30%] flex flex-col gap-4 ">
        <div className="flex  flex-col  h-fit p-4 rounded-lg shadow-lg  ">
          <span className="text-header font-header">NBA Instant article</span>

          <div className="flex flex-col gap-3  h-full ">
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

            <TextArea placeholder="news under 140 character" rows={5} />
            <Button style={{ height: "2.7rem" }}>create</Button>
          </div>
        </div>
        <div className="flex flex-col shadow-lg rounded-lg p-4 gap-3">
          <Row justify="space-between" align="middle">
            <span className="text-header font-header"> Popular news </span>
            <Space>
              <Select
                placeholder="select time"
                style={{ width: 120 }}
                options={[
                  { value: "this week", label: "this week" },
                  { value: "this month", label: "this month" },
                  { value: "3 months", label: "3 months" },
                  { value: "6 months", label: "6 months" },
                  { value: "1 year", label: "1 year" },
                ]}
              />
              <Button icon={<SyncOutlined />} title="refresh"></Button>
            </Space>
          </Row>

          <Space size="small" direction="vertical">
            <HorizontalCard2 />
            <HorizontalCard2 />
            <HorizontalCard2 />
            <HorizontalCard2 />
            <HorizontalCard2 />
            <HorizontalCard2 />
            <HorizontalCard2 />
            <HorizontalCard2 />
          </Space>
        </div>
      </div>
      <div className="w-[70%]  flex flex-col gap-5  shadow-lg p-4 rounded-lg">
        <Row justify="space-between">
          <>
            <span className="text-header font-header">All news</span>
            <Space>
              <Button onClick={handleAddArticle}> Add an Article </Button>
              <Button icon={<FilterOutlined />} onClick={toggle} />

              <Button icon={<SyncOutlined />} />
            </Space>
          </>
        </Row>
        {isOpen && (
          <Space wrap size="large">
            <RangePicker className="w-fit" size={"large"} />
            <Select
              size="large"
              placeholder="select category"
              style={{ width: 120 }}
              options={[
                { value: "politics", label: "politics" },
                { value: "international", label: "international" },
                { value: "national", label: "national" },
                { value: "sports", label: "sports" },
                { value: "papr", label: "papr" },
              ]}
            />
            <Select
              size="large"
              placeholder="select author"
              style={{ width: 120 }}
              options={[
                { value: "Aarthij", label: "Aarthij" },
                { value: "hari bahadur", label: "hari bahadur" },
                { value: "maan", label: "maan" },
                { value: "roshan", label: "roshan" },
                { value: "Nba", label: "Nba" },
              ]}
            />
            <Search size="large" placeholder="search for news" />
          </Space>
        )}
        <Col className="flex flex-col gap-2">
          <HorizontalCard1 />
          <HorizontalCard1 /> <HorizontalCard1 />
          <HorizontalCard1 /> <HorizontalCard1 />
          <HorizontalCard1 /> <HorizontalCard1 />
          <HorizontalCard1 />
        </Col>
        <div className="flex justify-center">
          <Pagination
            defaultCurrent={1}
            total={50}
            className="  justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Articles;
