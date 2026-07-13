function CommentsComponets() {
  return (
    <div className="w-full max-h-fit overflow-y-auto">
      {/**head comments count and filter bar */}
      <div className="pt-2.5 pb-2.5 flex ">
        {/**comments text */}
        <span className="flex gap-2 items-center">
          <h5 className="font-sans font-normal text-[16px]">Comments</h5>
          {/**comments count */}
          <span className="w-9 h-5.5 bg-[#11AC76] pl-1 pr-1 pt-0.5 pb-0.5 rounded-[14px] text-gray-200 flex justify-center items-center">
            <h5 className="font-sans font-normal text-[16px]">32</h5>
          </span>
        </span>
      </div>
    </div>
  );
}
export default CommentsComponets;
