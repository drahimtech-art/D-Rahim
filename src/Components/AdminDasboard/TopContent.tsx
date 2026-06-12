function TopContent() {
  return (
    <div className="w-full h-fit grid grid-cols-4 gap-6.75">
      {/**content */}
      <div className="flex flex-col  w-full pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[14px]">
        <span>
          <h5 className="font-inter font-medium text-[16px] text-[#1C1C1E]">
            Total Bookings
          </h5>
        </span>
        <span className="flex w-full justify-end">
          <i className="fa fa-calendar-alt text-[30px] text-[#11AC76]"></i>
        </span>
        <span>
          <h5 className="font-inter font-semibold min28pxMax30 -mt-5">12</h5>
        </span>
      </div>
      {/**content */}
      <div className="flex flex-col  w-full pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[14px]">
        <span>
          <h5 className="font-inter font-medium text-[16px] text-[#1C1C1E]">
            Mentorship Sales
          </h5>
        </span>
        <span className="flex w-full justify-end">
          <i className="fa fa-user-graduate text-[30px] text-[#11AC76]"></i>
        </span>
        <span>
          <h5 className="font-inter font-semibold min28pxMax30 -mt-5">8</h5>
        </span>
      </div>
      {/**content */}
      <div className="flex flex-col  w-full pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[14px]">
        <span>
          <h5 className="font-inter font-medium text-[16px] text-[#1C1C1E]">
            Job Requests
          </h5>
        </span>
        <span className="flex w-full justify-end">
          <i className="fa fa-briefcase text-[30px] text-[#11AC76]"></i>
        </span>
        <span>
          <h5 className="font-inter font-semibold min28pxMax30 -mt-5">6</h5>
        </span>
      </div>
      {/**content */}
      <div className="flex flex-col  w-full pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[14px]">
        <span>
          <h5 className="font-inter font-medium text-[16px] text-[#1C1C1E]">
            Total Users
          </h5>
        </span>
        <span className="flex w-full justify-end">
          <i className="fa fa-user-friends text-[30px] text-[#11AC76]"></i>
        </span>
        <span>
          <h5 className="font-inter font-semibold min28pxMax30 -mt-5">20</h5>
        </span>
      </div>
    </div>
  );
}
export default TopContent;
