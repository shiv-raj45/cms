import { Button, theme } from "antd";
import InfoCard from "./Components/InfoCard";
import { RecentNews, RecentTags, RecentUsers } from "./Features";
import { useAppToken } from "./hooks";
import { PrimaryLayout } from "./Layout";
function App() {
  const { t } = useAppToken();

  return (
    <div className="flex gap-6">
      <div className="w-full">
        <div className="flex flex-7 w-full justify-between  gap-[2rem] ">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
        <RecentNews />
      </div>
      <div className="flex flex-col flex-3 w-[35%] gap-4 ">
        <RecentUsers />
        <RecentTags />
      </div>
    </div>
  );
}

export default App;
