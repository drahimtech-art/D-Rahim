function HeadContent() {
  return (
    <div className="w-full ">
      <span>
        <h5 className="font-medium font-sans min18pxMax20px">My Classes</h5>
      </span>
      <div className="flex items-center mt-7.5 mb-7.5 pr-20">
        {/**fliter content */}
        <div className="flex gap-12.5 items-center">
          {/**content */}
          <span className="font-sans font-medium min18pxMax20px pointer border-b border-[#11AC76] text-[#11AC76]">
            <h5>All Classes</h5>
          </span>
          {/**content */}
          <span className="font-sans font-medium min18pxMax20px pointer">
            <h5>Active</h5>
          </span>
          {/**content */}
          <span className="font-sans font-medium min18pxMax20px pointer">
            <h5>Completed</h5>
          </span>
        </div>
        {/**search bar */}
        <div className="ml-auto">
          <span className=" w-73.25 h-9.5 flex  items-center border border-gray-500 p-1 pl-3.25 pr-3.5 rounded-[30px]">
            <i className="fa fa-search text-2xl"></i>
            <input
              className="w-full h-full pl-2"
              placeholder="Search..."
            ></input>
          </span>
        </div>
      </div>
    </div>
  );
}
export default HeadContent;
