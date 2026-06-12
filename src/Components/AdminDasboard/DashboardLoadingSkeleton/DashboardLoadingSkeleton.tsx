function DashboardLoadingSkeleton() {
  return (
    <div className="w-full h-full flex flex-col gap-7 ">
      {/**top bar */}
      <div className="w-full flex p-2.5 pl-4 pr-4 bg-[#FFFFFF] h-25 items-center rounded-[10px]">
        <span className=" min22Max26px  items-center mr-auto">
          <h5 className="font-inter font-semibold text-[26px] ">Dashboard</h5>
        </span>
        {/**search bar */}
        <div className="flex gap-8 items-center">
          <span className=" w-92.75 h-9.5 flex  items-center border border-gray-500 p-1 pl-3.25 pr-3.5 rounded-[30px]">
            <i className="fa fa-search text-2xl"></i>
            <input
              className="w-full h-full pl-2"
              placeholder="Search..."
            ></input>
          </span>
          <span className="h-full flex">
            <span className="ml-5 mr-5 flex justify-center items-center ">
              <i className="fa fa-bell text-2xl text-gray-500"></i>
            </span>
            <span className=" mr-5  flex items-center gap-1">
              <i className="fa fa-user-circle text-2xl text-gray-500 "></i>
              <h5 className="font-inter text-[20px] font-normal ">Admin</h5>
              <i className="fa fa-angle-down text-2xl text-gray-500 "></i>
            </span>
          </span>
        </div>
      </div>
      {/**Top Content */}
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
      {/**booking & selas chat */}
      <div className="w-full grid grid-cols-2 h-75.75 gap-6.75">
        <div className="w-full h-full pl-5 flex flex-col pr-5 p-3.5 bg-[#FFFFFF] rounded-[20px]">
          <div className="pt-3.5 pb-3.5 flex items-center">
            <span className="mr-auto">
              <h5 className="font-inet font-medium min18pxMax20px">Bookings</h5>
            </span>
            <span className="w-fit h-7.5 flex gap-1.5 items-center pl-2 pr-2 pt-1.5 pb-1.5 border border-gray-500 rounded-[30px]">
              <h5>Weekly</h5>
              <i className="fa fa-angle-down text-gray-500"></i>
            </span>
          </div>
          {/** */}
          <div className="mt-4.5 w-full h-full bg-gray-500"></div>
        </div>
        {/**content */}
        <div className="w-full h-full pl-5 pr-5 p-3.5 flex flex-col bg-[#FFFFFF] rounded-[20px]">
          <div className="pt-3.5 pb-3.5  flex items-center">
            <span className="mr-auto">
              <h5 className="font-inet font-medium min18pxMax20px">Sales</h5>
            </span>
            <span className="w-fit h-7.5 flex gap-1.5 items-center pl-2 pr-2 pt-1.5 pb-1.5 border border-gray-500 rounded-[30px]">
              <h5>Weekly</h5>
              <i className="fa fa-angle-down text-gray-500"></i>
            </span>
          </div>
          {/** */}
          <div className="mt-4.5 w-full h-full bg-gray-500"></div>
        </div>
      </div>
      {/**end content */}
      <div className="flex w-full h-68.5 gap-6.75">
        {/**reacent activity */}
        <div className="w-full h-full pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[20px] overflow-hidden">
          <span>
            <h5 className="font-inter font-medium min18pxMax20px">
              Recent Activities
            </h5>
          </span>
          <div className="mt-3.75 flex flex-col h-49.5 overflow-y-auto scroll-container">
            {/**content */}
            <div className="border-b border-gray-500 flex pb-2 pt-2">
              <span className="mr-2 text-gray-500 mt-1">
                <i className="fas fa-user-graduate  text-[24px]"></i>
              </span>
              <span className="flex flex-col gap-2.5 mr-auto ">
                <h5 className="font-inter font-medium text-[16px]">
                  Premium Plan Subscription
                </h5>
                <h5 className="font-inter font-normal text-[14px] -mt-1">
                  Samuel Olamide paid for premium plan
                </h5>
              </span>
              <span className="flex justify-center items-center w-fit min-h-full">
                <h5 className="font-inter font-light text-[14px]">
                  8 mins ago
                </h5>
              </span>
            </div>
            {/**content */}
            <div className="border-b border-gray-500 flex pb-2 pt-2">
              <span className="mr-2 text-gray-500 mt-1">
                <i className="fas fa-calendar-alt  text-[24px]"></i>
              </span>
              <span className="flex flex-col gap-2.5 mr-auto ">
                <h5 className="font-inter font-medium text-[16px]">
                  Consultation Call Booking
                </h5>
                <h5 className="font-inter font-normal text-[14px] -mt-1">
                  Habib Abdulsalam booked a consultation call
                </h5>
              </span>
              <span className="flex justify-center items-center w-fit min-h-full">
                <h5 className="font-inter font-light text-[14px]">
                  33 mins ago
                </h5>
              </span>
            </div>
            {/**content */}
            <div className="border-b border-gray-500 flex pb-2 pt-2">
              <span className="mr-2 text-gray-500 mt-1">
                <i className="fas fa-briefcase  text-[24px]"></i>
              </span>
              <span className="flex flex-col gap-2.5 mr-auto ">
                <h5 className="font-inter font-medium text-[16px]">
                  Job Request Proposal
                </h5>
                <h5 className="font-inter font-normal text-[14px] -mt-1">
                  BitCorp Tech submitted a job request
                </h5>
              </span>
              <span className="flex justify-center items-center w-fit min-h-full">
                <h5 className="font-inter font-light text-[14px]">
                  1 hour ago
                </h5>
              </span>
            </div>
            {/**content */}
            <div className="border-b border-gray-500 flex pb-2 pt-2 ">
              <span className="mr-2 text-gray-500 mt-1">
                <i className="fas fa-user-graduate  text-[24px]"></i>
              </span>
              <span className="flex flex-col gap-2.5 mr-auto ">
                <h5 className="font-inter font-medium text-[16px]">
                  Premium Plan Subscription
                </h5>
                <h5 className="font-inter font-normal text-[14px] -mt-1">
                  Samuel Olamide paid for premium plan
                </h5>
              </span>
              <span className="flex justify-center items-center w-fit min-h-full">
                <h5 className="font-inter font-light text-[14px]">
                  8 mins ago
                </h5>
              </span>
            </div>
          </div>
        </div>
        {/**alerts */}
        <div className="w-[70%] h-full  pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[20px]">
          <span>
            <h5 className="font-inter font-medium min18pxMax20px">Alerts</h5>
          </span>
          <div className="mt-3.75 flex flex-col h-49.5 overflow-y-auto scroll-container">
            {/**content */}
            <div className="border-b border-gray-500 flex pb-2 pt-2">
              <span className="mr-2 w-10 h-10 rounded-2xl bg-[#FFF9E5] text-[#D4AF37] flex justify-center items-center ">
                <i className="fas fa-exclamation-circle  text-[20px]"></i>
              </span>
              <span className="flex flex-col gap-2.5 mr-auto ">
                <h5 className="font-inter font-medium text-[16px]">
                  Payments Pending
                </h5>
                <h5 className="font-inter font-normal text-[14px] -mt-1">
                  2 mentorship payments pending
                </h5>
              </span>
              <span className="flex justify-center items-center w-fit min-h-full">
                <h5 className="font-inter font-light text-[14px] pointer border-b ">
                  View
                </h5>
              </span>
            </div>
            {/**content */}
            <div className="border-b border-gray-500 flex pb-2 pt-2">
              <span className="mr-2 w-10 h-10 rounded-2xl bg-[#FFEDE3] text-[#ED722F] flex justify-center items-center ">
                <i className="fas fa-question-circle  text-[20px]"></i>
              </span>
              <span className="flex flex-col gap-2.5 mr-auto ">
                <h5 className="font-inter font-medium text-[16px]">
                  Job Inquiries
                </h5>
                <h5 className="font-inter font-normal text-[14px] -mt-1">
                  1 new job request
                </h5>
              </span>
              <span className="flex justify-center items-center w-fit min-h-full">
                <h5 className="font-inter font-light text-[14px] pointer border-b ">
                  View
                </h5>
              </span>
            </div>
            {/**content */}
            <div className="border-b border-gray-500 flex pb-2 pt-2">
              <span className="mr-2 w-10 h-10 rounded-2xl bg-[#FFF9E5] text-[#D4AF37] flex justify-center items-center ">
                <i className="fas fa-exclamation-triangle  text-[20px]"></i>
              </span>
              <span className="flex flex-col gap-2.5 mr-auto ">
                <h5 className="font-inter font-medium text-[16px]">
                  Bookings Pending
                </h5>
                <h5 className="font-inter font-normal text-[14px] -mt-1">
                  4 bookings pending approval
                </h5>
              </span>
              <span className="flex justify-center items-center w-fit min-h-full">
                <h5 className="font-inter font-light text-[14px] pointer border-b ">
                  View
                </h5>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardLoadingSkeleton;
