import TopBar from "../../shared/TopBar";
import TopContent from "./components/TopContent";
import RevenueGraph from "./components/RevenueGraph";
import Alert from "./components/Alert";
import RecentJobRequestAlert from "./components/RecentJobRequestAlert";
import RecentBookings from "./components/RecentBookings";
import { useState, useEffect } from "react";
import { getAnalyticsData } from "../analytics/api/Api";
import { AdminConfigApi } from "../../../../storage/AdminConfig";
function Dashboard() {
  const adminConfigApi = AdminConfigApi();
  const { filterDateList, analyticsData, setAnalyticsData } = adminConfigApi;
  const [isFetchRequstSent, setIsFetchRequstSent] = useState<boolean>(false);
  const [isFirstRequstSent, setIsFirstRequstSent] = useState<boolean>(false);
  function fetchAnalyticsData() {
    if (isFetchRequstSent || filterDateList.length === 0) return;
    setIsFetchRequstSent(true);
    getAnalyticsData({ dateFilterList: filterDateList })
      .then((data) => {
        setAnalyticsData(data.data);
        if (!isFirstRequstSent) {
          setIsFirstRequstSent(true);
        }
        setIsFetchRequstSent(false);
      })
      .catch((error) => {
        console.warn(`${error}`);
        if (!isFirstRequstSent) {
          setIsFirstRequstSent(true);
        }
        setIsFetchRequstSent(false);
      });
  }
  //
  useEffect(() => {
    if (analyticsData.liveVistors !== 0) {
      setIsFirstRequstSent(true);
      return;
    }
    fetchAnalyticsData();
  }, []);
  return (
    <article className="w-full h-full flex flex-col gap-7 ">
      {/**top bar */}
      <TopBar
        heading={"Welcome back, Victory! 👋"}
        subHeading={" Here’s what’s happening today."}
        isFirstRequstSent={isFirstRequstSent}
        fetchAnalyticsData={fetchAnalyticsData}
      />
      {/**Top Content */}
      <TopContent
        liveVistors={analyticsData.liveVistors}
        newUsers={analyticsData.newUsers}
        pageViewed={analyticsData.pageViewed}
        bouncedBackUsers={analyticsData.bouncedBackUsers}
        returningUsers={analyticsData.returningUsers}
      />
      {/**revenueGraph & alert section */}
      <article className="w-full h-[310px] flex gap-5">
        <RevenueGraph />
        <Alert />
      </article>
      {/**end content */}
      <div className="grid grid-cols-2 w-full h-68.5 gap-6.75">
        <RecentJobRequestAlert />
        <RecentBookings />
      </div>
    </article>
  );
}
export default Dashboard;
