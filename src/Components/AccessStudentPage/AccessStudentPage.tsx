import Top from "./Top";
import LeftNevBar from "./LeftNevBar";
import Dashboard from "./Dashboard/Dashboard";
function AccessStudentPage() {
  return (
    <div className="w-full min-w-300 h-screen  max-h-screen overflow-hidden  p-10  ">
      <div className="w-full h-full max-h-full flex flex-col ">
        {/**Top */}
        <Top />
        {/**content */}
        <div className="w-full max-w-full flex min-h-0 max-h-full gap-10 mt-10 ">
          {/**left navigation panel */}
          <div className=" min-w-45 w-full max-w-80.75 h-full shrink-0 border-r border-gray-500 overflow-hidden">
            <div className="w-full h-full max-w-68.5 pt-5">
              <LeftNevBar />
            </div>
          </div>
          {/**main content */}
          <div className="w-full  h-full ">
            <div className="w-full h-full overflow-y-auto">
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccessStudentPage;
