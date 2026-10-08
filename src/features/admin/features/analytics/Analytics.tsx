import TopBar from "../../shared/TopBar";
import AnalyticsInsight from "./components/AnalyticsInsight";
import GraphAndTrafficLocation from "./components/GraphAndTrafficLocation";
import Devices from "./components/Devices";
function Analytics(): React.ReactElement {
  return (
    <article className="w-full h-full  ">
      {/**Top bar*/}
      <TopBar
        heading={"Website Analytics"}
        subHeading={"See All website Analytics"}
      />
      <AnalyticsInsight />
      <GraphAndTrafficLocation />
      <Devices />
    </article>
  );
}
export default Analytics;
