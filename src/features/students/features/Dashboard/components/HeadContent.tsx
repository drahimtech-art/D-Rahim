import { StudentsAppData } from "../../../../../storage/StudentsApi";
function HeadContent() {
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const { userInfo } = userDetails;
  return (
    <div className="w-full ">
      {/**head welcome text */}
      <div className="w-full h-fit flex flex-col gap-2.5">
        <h5 className="font-sans font-semibold min22Max26px ">
          Welcome back, {userInfo.firstName}👋
        </h5>
        <h5 className="font-normal font-[sans text-[16px]">
          Here’s what’s happening with your learning journey.
        </h5>
      </div>
      {/**class activitys, scores and overall Progress bar  */}
      <div className="w-full h-full grid grid-cols-4 mt-7.5 gap-6.75">
        {/**content */}
        <span className="rounded-2xl p-10 h-26.25 border border-[#9AA1A2] flex justify-start items-center">
          <span className="flex flex-col gap-2.5">
            <h5 className="font-semibold font-sans min28pxMax30 ">3</h5>
            <h5 className="text-[16px] font-normal font-sans">
              Active Classes
            </h5>
          </span>
        </span>
        {/**content */}
        <span className="rounded-2xl p-10 h-26.25 border border-[#9AA1A2] flex justify-start items-center">
          <span className="flex flex-col gap-2.5">
            <h5 className="font-semibold font-sans min28pxMax30 ">2</h5>
            <h5 className="text-[16px] font-normal font-sans">
              Upcoming Classes
            </h5>
          </span>
        </span>
        {/**content */}
        <span className="rounded-2xl p-10 h-26.25 border border-[#9AA1A2] flex justify-start items-center">
          <span className="flex flex-col gap-2.5">
            <h5 className="font-semibold font-sans min28pxMax30 ">5</h5>
            <h5 className="text-[16px] font-normal font-sans">
              Completed Classes
            </h5>
          </span>
        </span>
        {/**content */}
        <span className="rounded-2xl p-10 h-26.25 border border-[#9AA1A2] flex justify-start items-center">
          <span className="flex flex-col gap-2.5">
            <h5 className="font-semibold font-sans min28pxMax30 ">75%</h5>
            <h5 className="text-[16px] font-normal font-sans">
              Overall Progress
            </h5>
          </span>
        </span>
        {/**content */}
      </div>
    </div>
  );
}
export default HeadContent;
