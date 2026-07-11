import ConnectionsCard from "./ConnectionsCard";
function ConectionsList() {
  return (
    <div className="mt-4.5">
      {/***total connectsCount */}
      <span>
        <h5 className="font-semibold font-sans min18pxMax20px">
          12 Connections
        </h5>
      </span>
      {/**connectionsList */}
      <div className="mt-5.25 flex flex-col ga-2.5 border border-[#11AC76] rounded-2xl pl-1.5 pr-1.5 pt-4 pb-4">
        {/**connections card */}
        <ConnectionsCard />
        <ConnectionsCard />
        <ConnectionsCard />
        <ConnectionsCard />
        <ConnectionsCard />
        <ConnectionsCard />
      </div>
    </div>
  );
}
export default ConectionsList;
