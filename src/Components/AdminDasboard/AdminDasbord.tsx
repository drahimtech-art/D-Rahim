import LeftNevBar from "./LeftNevBar";
import Dashboard from "./Navigation/Dashboard";
function AdminDasboard() {
  return (
    <div className=" p-10 w-full h-full bg-[#f8ffff] ">
      <div className="flex gap-10 h-fit w-full">
        {/**sideber left*/}
        <LeftNevBar />
        {/**center content*/}
        <Dashboard />
      </div>
    </div>
  );
}
export default AdminDasboard;
