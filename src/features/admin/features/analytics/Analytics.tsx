import TopBar from "../../shared/TopBar";
import AnalyticsInsight from "./components/AnalyticsInsight";
import GraphAndTrafficLocation from "./components/GraphAndTrafficLocation";
import Devices from "./components/Devices";
import { useState } from "react";
import type { AnalyticsDataType } from "./api/Api";
function Analytics(): React.ReactElement {
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

  return (
    <article className="w-full h-full  ">
      {/**Top bar*/}
      <TopBar
        heading={"Website Analytics"}
        subHeading={"See All website Analytics"}
      />
      <AnalyticsInsight
        setAnalyticsData={setAnalyticsData}
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
