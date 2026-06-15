import Top from "./Top";
import LeftNevBar from "./LeftNevBar";
function AccessStudentPage() {
  return (
    <div className="w-full h-screen max-h-screen  p-10  ">
      <div className="w-full h-full max-h-full flex flex-col ">
        {/**Top */}
        <Top />
        {/**content */}
        <div className="w-full h-full min-h-fit  max-h-full flex mt-10 ">
          {/**left navigation panel */}
          <div className=" min-w-45 w-full max-w-80.75 h-full border-r border-gray-500">
            <div className="w-full h-full max-w-68.5 pt-5">
              <LeftNevBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccessStudentPage;
