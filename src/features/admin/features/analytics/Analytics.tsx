import TopBar from "../../shared/TopBar";
import AnalyticsInsight from "./components/AnalyticsInsight";
import GraphContent from "./components/GraphContent";
import TraficLocation from "./components/TrafficLoaction";
import Devices from "./components/Devices";
import { AdminConfigApi } from "../../../../storage/AdminConfig";
function Analytics(): React.ReactElement {
  const adminConfigApi = AdminConfigApi();
  const { analyticsData, analyticsDataList, filterDateList } = adminConfigApi;

  return (
    <article className="w-full h-full  ">
      {/**Top bar*/}
      <TopBar
        heading={"Website Analytics"}
        subHeading={"See All website Analytics"}
      />
      <AnalyticsInsight
        liveVistors={analyticsData.liveVistors}
        newUsers={analyticsData.newUsers}
        pageViewed={analyticsData.pageViewed}
        bouncedBackUsers={analyticsData.bouncedBackUsers}
        returningUsers={analyticsData.returningUsers}
      />
      <div className="flex mt-[20px] w-full gap-2">
        <div className="w-[60%] h-fit">
          <GraphContent
            filterDateList={filterDateList}
            analyticsDataList={analyticsDataList}
          />
          <Devices
            desktop={analyticsData.deviceType.desktop}
            mobile={analyticsData.deviceType.mobile}
            tablet={analyticsData.deviceType.tablet}
            other={analyticsData.deviceType.other}
          />
        </div>
        <TraficLocation
          facebook={analyticsData.platformVisitedFrom.facebook}
          linkedIn={analyticsData.platformVisitedFrom.linkedIn}
          youtub={analyticsData.platformVisitedFrom.youtub}
          tiktok={analyticsData.platformVisitedFrom.tiktok}
          behance={analyticsData.platformVisitedFrom.behance}
          instagram={analyticsData.platformVisitedFrom.instagram}
          twitter={analyticsData.platformVisitedFrom.twitter}
          google={analyticsData.platformVisitedFrom.google}
          pintrest={analyticsData.platformVisitedFrom.pintrest}
          other={analyticsData.platformVisitedFrom.other}
        />
      </div>
    </article>
  );
}
export default Analytics;
