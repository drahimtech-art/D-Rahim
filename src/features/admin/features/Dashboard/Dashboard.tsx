import TopBar from "../../shared/TopBar";
import TopContent from "./components/TopContent";
import RevenueGraph from "./components/RevenueGraph";
import Alert from "./components/Alert";
import RecentJobRequestAlert from "./components/RecentJobRequestAlert";
import RecentBookings from "./components/RecentBookings";
function Dashboard() {
  return (
    <article className="w-full h-full flex flex-col gap-7 ">
      {/**top bar */}
      <TopBar
        heading={"Welcome back, Victory! 👋"}
        subHeading={" Here’s what’s happening today."}
      />
      {/**Top Content */}
      <TopContent />
      {/**revenueGraph & alert section */}
      <article className="w-full h-[310px] flex gap-5">
        <RevenueGraph />
        <Alert />
      </article>
      {/**end content */}
      <div className="grid grid-cols-2 w-full h-68.5 gap-6.75">
        <RecentJobRequestAlert />
        <RecentBookings />
      </div>
    </article>
  );
}
export default Dashboard;
