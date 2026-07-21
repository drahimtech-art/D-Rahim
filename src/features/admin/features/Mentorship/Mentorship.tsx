import TopBar from "../../TopBar";
import TopContent from "../../TopContent";
import MentorshipTable from "./MentorshipTable";
function Mentorship() {
  return (
    <div className="w-full h-full  ">
      <div className="w-full h-full flex flex-col gap-7">
        {/**Top bar*/}
        <TopBar heading={"Mentorship Enrollments"} subHeading={false} />
        {/**Top Content */}
        <TopContent />
      </div>
      <div className="mt-10 w-full h-full bg-[#FFFFFF] rounded-[20px]">
        {/**search bar */}
        <div className="w-full flex pt-7.5 pb-7.5 pl-2.5 pr-2.5 ">
          <span className=" w-92.75 h-9.5 flex  items-center border border-gray-500 p-1 pl-3.25 pr-3.5 rounded-[30px] mr-auto">
            <i className="fa fa-search text-2xl"></i>
            <input
              className="w-full h-full pl-2"
              placeholder="Search enrollments..."
            ></input>
          </span>
          {/** */}
          <div className="w-fit h-full flex items-center gap-5.5">
            <span className="flex w-37.5 gap-2 pl-2 pr-2 pt-1.5 pb-1.5 text-[#757575] justify-center items-center border border-gray-500 rounded-[30px]">
              <h5 className="font-inter font-normal text-[16px]">All Status</h5>
              <i className="fa fa-angle-down text-[18px] font-light"></i>
            </span>
            <span className="flex w-37.5 gap-2 pl-2 bg-primary-green pr-2 pt-1.5 pb-1.5 text-[#FFFFFF] justify-center items-center border border-gray-500 rounded-[30px]">
              <i className="fa fa-plus text-[18px] font-light"></i>
              <h5 className="font-inter font-normal text-[16px]">Add New</h5>
            </span>
          </div>
        </div>
        {/**content */}
        <div className="w-full h-full">
          {/**grid head template structure */}
          <div className="w-full h-15 border border-[#ebe8e8] bg-[#F5F5F5] grid grid-cols-[15%_30%_20%_10%_15%_10%]">
            <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
              <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
                Name
              </h5>
            </span>
            <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
              <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
                Email
              </h5>
            </span>
            <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
              <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
                Course
              </h5>
            </span>
            <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
              <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
                Date
              </h5>
            </span>
            <span className="pl-2.5 pr-2.5 border-r border-[#ebe8e8] flex justify-start items-center">
              <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
                Payment Status
              </h5>
            </span>
            <span className="pl-2.5 pr-2.5  flex justify-start items-center">
              <h5 className="font-inter font-normal text-[14px] text-[#A5A6A7]">
                Action
              </h5>
            </span>
          </div>
          {/**grid body content */}
          <MentorshipTable />
          {/**end body content control */}
          <div className="w-full h-18 pl-2.5 pr-2.5 flex items-center">
            <span className="p-2.5 mr-auto">
              <h5 className="font-inter font-normal text-[16px]">
                Showing 1 to 4 of 12 results
              </h5>
            </span>
            <span className="w-fit h-full flex items-center gap-3">
              <i className="fa fa-angle-left"></i>
              <span className="w-fit h-full flex items-center gap-1">
                <span className="w-7.5 h-7.5 flex justify-center items-center  border border-[#F5F5F5] rounded-xl">
                  <h5 className="font-inter font-normal text-[16px]">1</h5>
                </span>
                <span className="w-7.5 h-7.5 flex justify-center items-center   rounded-xl">
                  <h5 className="font-inter font-normal text-[16px]">2</h5>
                </span>
                <span className="w-7.5 h-7.5 flex justify-center items-center   rounded-xl">
                  <h5 className="font-inter font-normal text-[16px]">3</h5>
                </span>
              </span>
              <i className="fa fa-angle-right "></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mentorship;
