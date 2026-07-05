function RecommendGroups() {
  return (
    <div className="mt-5 rounded-2xl border-[1.5px] border-[#11AC76] p-2.5">
      <span className="mt-3.75 block pb-2 border-b border-[#11AC76]">
        <h5 className="line-clamp-1">People from your class you may know</h5>
      </span>
      {/**body */}
      <div className="mt-2.5 flex flex-col gap-3">
        {/**card */}
        <div className="flex items-center gap-3 pb-1 border-b border-gray-500">
          {/**profileImage */}
          <span className="w-12 h-12 mr-auto ml-1.5 rounded-full bg-gray-300"></span>
          {/**name and info */}
          <span className="mr-auto">
            <h5 className="font-medium text-[16px] line-clamp-1">
              UI/UX Bootcamp Group
            </h5>
          </span>
          {/**action button */}
          <button className="flex justify-center items-center pl-2.5 pr-2.5 pt-1.5 pb-1.5 mr-1.5 rounded-full bg-[#11AC76] pointer">
            <h5 className="text-gray-100 text-[14px]">Join</h5>
          </button>
        </div>
        {/**card */}
        <div className="flex items-center gap-3 pb-1 border-b border-gray-500">
          {/**profileImage */}
          <span className="w-12 h-12 mr-auto ml-1.5 rounded-full bg-gray-300"></span>
          {/**name and info */}
          <span className="mr-auto">
            <h5 className="font-medium text-[16px] line-clamp-1">
              UI/UX Bootcamp Group
            </h5>
          </span>
          {/**action button */}
          <button className="flex justify-center items-center pl-2.5 pr-2.5 pt-1.5 pb-1.5 mr-1.5 rounded-full bg-[#11AC76] pointer">
            <h5 className="text-gray-100 text-[14px]">Join</h5>
          </button>
        </div>
        {/**card */}
        <div className="flex items-center gap-3 pb-1 border-b border-gray-500">
          {/**profileImage */}
          <span className="w-12 h-12 mr-auto ml-1.5 rounded-full bg-gray-300"></span>
          {/**name and info */}
          <span className="mr-auto">
            <h5 className="font-medium text-[16px] line-clamp-1">
              UI/UX Bootcamp Group
            </h5>
          </span>
          {/**action button */}
          <button className="flex justify-center items-center pl-2.5 pr-2.5 pt-1.5 pb-1.5 mr-1.5 rounded-full bg-[#11AC76] pointer">
            <h5 className="text-gray-100 text-[14px]">Join</h5>
          </button>
        </div>
      </div>
    </div>
  );
}
export default RecommendGroups;
