function Head() {
  return (
    <div className="w-full flex flex-col gap-5">
      {/*head text*/}
      <span className="block">
        <h5 className="font-medium font-sans min20Max24px">Community</h5>
      </span>
      {/**feed group and connections naviagtion */}
      <div className="flex gap-12">
        <span className="w-fit border-b border-[#11AC76] text-[#11AC76]">
          <h5 className="text-[20px] font-normal font-sans">Feed</h5>
        </span>
        <span className="">
          <h5 className="text-[20px] font-normal font-sans">Groups</h5>
        </span>
        <span className="">
          <h5 className="text-[20px] font-normal font-sans">Connections</h5>
        </span>
      </div>
    </div>
  );
}
export default Head;
