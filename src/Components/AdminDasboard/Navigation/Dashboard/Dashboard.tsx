import TopBar from "../../TopBar";
import TopContent from "../../TopContent";
import RecentActivities from "./RecentActivities";
import Alert from "./Alert";
function Dashboard() {
  return (
    <div className="w-full h-full flex flex-col gap-7 ">
      {/**top bar */}
      <TopBar heading={"Good morning, Victory!"} subHeading={true} />
      {/**Top Content */}
      <TopContent />
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
        <RecentActivities />
        {/**alerts */}
        <Alert />
      </div>
    </div>
  );
}
export default Dashboard;
