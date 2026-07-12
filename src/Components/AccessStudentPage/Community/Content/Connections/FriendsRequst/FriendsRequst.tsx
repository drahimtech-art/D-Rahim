import ConnectionCard from "./ConnectionCard";
function FriendsRequst() {
  return (
    <div className="w-full h-full max-h-fit min-w-[320px]   bg-[#FFFFFF] overflow-y-auto">
      <span>
        <h5 className="font-medium font-sans min20Max24px">Friend Request</h5>
      </span>
      {/**content */}
      <div className="flex flex-col gap-2.5">
        <div className="mt-5 rounded-2xl border-[1.5px] border-[#11AC76] p-2.5">
          <span className="mt-3.75 block pb-2 border-b border-[#11AC76] font-sans font-medium min18pxMax20px">
            <h5>Accept requests to grow network</h5>
          </span>
          {/**body */}
          <div className="mt-2.5 flex flex-col gap-3">
            {/**card */}
            <ConnectionCard />
            <ConnectionCard />
            <ConnectionCard />
            <ConnectionCard />
          </div>
          {/*see more*/}
          <button className="flex justify-center items-center w-full h-fit pt-1.25 pb-3.25 pointer">
            <h5 className="font-medium font-sans text-[16px] text-gray-500">
              See more{" "}
            </h5>
          </button>
        </div>
      </div>
    </div>
  );
}
export default FriendsRequst;
