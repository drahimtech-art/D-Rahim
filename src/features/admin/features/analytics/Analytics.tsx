import TopBar from "../../shared/TopBar";
import AnalyticsInsight from "./components/AnalyticsInsight";
import GraphAndTrafficLocation from "./components/GraphAndTrafficLocation";
import Devices from "./components/Devices";
import { AdminConfigApi } from "../../../../storage/AdminConfig";
function Analytics(): React.ReactElement {
  const adminConfigApi = AdminConfigApi();
  const { analyticsData } = adminConfigApi;

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
      <GraphAndTrafficLocation
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
      <Devices
        desktop={analyticsData.deviceType.desktop}
        mobile={analyticsData.deviceType.mobile}
        tablet={analyticsData.deviceType.tablet}
        other={analyticsData.deviceType.other}
      />
    </article>
  );
}
export default Analytics;
