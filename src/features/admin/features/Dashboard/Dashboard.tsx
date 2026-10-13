import TopBar from "../../shared/TopBar";
import TopContent from "./components/TopContent";
import RevenueGraph from "./components/RevenueGraph";
import Alert from "./components/Alert";
import RecentJobRequestAlert from "./components/RecentJobRequestAlert";
import RecentBookings from "./components/RecentBookings";
import { useState, useEffect } from "react";
import { getAnalyticsData, type AnalyticsDataType } from "../analytics/api/Api";
import { AdminConfigApi } from "../../../../storage/AdminConfig";
function Dashboard() {
  const adminConfigApi = AdminConfigApi();
  const { filterDateList } = adminConfigApi;
  const [isFetchRequstSent, setIsFetchRequstSent] = useState<boolean>(false);
  const [isFirstRequstSent, setIsFirstRequstSent] = useState<boolean>(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsDataType>({
    _id: "",
    dateMonthYearDate: "",
    liveVistors: 0,
    newUsers: 0,
    pageViewed: 0,
    bouncedBackUsers: 0,
    returningUsers: 0,
    deviceType: {
      desktop: 0,
      mobile: 0,
      tablet: 0,
      other: 0,
      _id: "",
    },
    platformVisitedFrom: {
      facebook: 0,
      linkedIn: 0,
      youtub: 0,
      tiktok: 0,
      behance: 0,
      instagram: 0,
      twitter: 0,
      google: 0,
      pintrest: 0,
      other: 0,
      _id: "",
    },
    __v: 0,
  });
  function fetchAnalyticsData() {
    if (isFetchRequstSent || filterDateList.length === 0) return;
    console.log("requst sent");
    setIsFetchRequstSent(true);
    getAnalyticsData({ dateFilterList: filterDateList })
      .then((data) => {
        console.log(data);
        setAnalyticsData(data.data);
        setIsFirstRequstSent(true);
        setIsFetchRequstSent(false);
      })
      .catch((error) => {
        console.warn(`${error}`);
        setIsFirstRequstSent(true);
        setIsFetchRequstSent(false);
      });
  }
  //
  useEffect(() => {
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
