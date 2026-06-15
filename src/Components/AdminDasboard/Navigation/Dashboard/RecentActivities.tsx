import calenderIcon from "/images/CalendarDotsLight_icon.png";
import mentorshipIcon from "/images/StudentLight_icon.png";
import jobInquiresIcon from "/images/BriefcaseLight_icon.png";
function RecentActivities() {
  return (
    <div className="w-full h-full pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[20px] overflow-hidden">
      <span>
        <h5 className="font-inter font-medium min18pxMax20px">
          Recent Activities
        </h5>
      </span>
      <div className="mt-3.75 flex flex-col h-49.5">
        {" "}
        {/**overflow-y-auto scroll-container */}
        {/**content */}
        <div className="border-b border-gray-500 flex pb-2 pt-2">
          <span className="mr-2 text-gray-500 mt-1">
            <img className="w-6 h-6" src={mentorshipIcon}></img>
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
            <h5 className="font-inter font-light text-[14px]">8 mins ago</h5>
          </span>
        </div>
        {/**content */}
        <div className="border-b border-gray-500 flex pb-2 pt-2">
          <span className="mr-2 text-gray-500 mt-1">
            <img className="w-6 h-6" src={calenderIcon}></img>
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
            <h5 className="font-inter font-light text-[14px]">33 mins ago</h5>
          </span>
        </div>
        {/**content */}
        <div className="border-b border-gray-500 flex pb-2 pt-2">
          <span className="mr-2 text-gray-500 mt-1">
            <img className="w-6 h-6" src={jobInquiresIcon}></img>
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
            <h5 className="font-inter font-light text-[14px]">1 hour ago</h5>
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
            <h5 className="font-inter font-light text-[14px]">8 mins ago</h5>
          </span>
        </div>
      </div>
    </div>
  );
}
export default RecentActivities;
