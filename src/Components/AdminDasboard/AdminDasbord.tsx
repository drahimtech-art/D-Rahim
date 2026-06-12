import LeftNevBar from "./LeftNevBar";
import Dashboard from "./Navigation/Dashboard/Dashboard";
import Bookings from "./Navigation/Booking/Bookings";
function AdminDasboard() {
  return (
    <div className=" p-10 max-w-full min-w-fit  h-full bg-[#f8ffff] ">
      <div className="flex gap-10 h-fit w-full">
        {/**sideber left*/}
        <LeftNevBar />
        {/**center content*/}
        <Bookings />
      </div>
    </div>
  );
}
export default AdminDasboard;
