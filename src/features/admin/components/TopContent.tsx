import calenderIcon from "/images/icons/CalendarDots_icon.png";
import mentorshipIcon from "/images/icons/Student_icon.png";
import jobInquiresIcon from "/images/icons/Briefcase_Icon.png";
import totalUsersIcon from "/images/icons/UsersLight_icon.png";
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
          <img className="w-10 h-10" src={calenderIcon}></img>
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
          <img className="w-10 h-10" src={mentorshipIcon}></img>
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
          <img className="w-10 h-10" src={jobInquiresIcon}></img>
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
          <img className="w-10 h-10" src={totalUsersIcon}></img>
        </span>
        <span>
          <h5 className="font-inter font-semibold min28pxMax30 -mt-5">20</h5>
        </span>
      </div>
    </div>
  );
}
export default TopContent;
