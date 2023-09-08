import { Image, Typography } from "antd";
import { Link } from "react-router-dom";
import { images } from "src/constants";

const HorizontalCard2 = () => {
  const { Text } = Typography;

  return (
    <Link to="/">
      <div className="flex gap-4 border-b items-center py-2  ">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis{" "}
        </Text>

        <Image
          className="rounded-md"
          width="30%"
          src={images.newsImages.news1}
        />
      </div>
    </Link>
  );
};

export default HorizontalCard2;
