import TopBar from "../../shared/TopBar";

function Analytics(): React.ReactElement {
  return (
    <article className="w-full h-full  ">
      {/**Top bar*/}
      <TopBar
        heading={"Website Analytics"}
        subHeading={"See All website Analytics"}
      />
    </article>
  );
}
export default Analytics;
