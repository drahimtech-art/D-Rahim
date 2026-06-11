import LeftNevBar from "./LeftNevBar";
import TopBar from "./TopBar";
import TopContent from "./TopContent";
function AdminDasboard() {
  return (
    <div className=" p-10 w-full h-full bg-[#f8fafa] ">
      <div className="flex gap-10 h-fit w-full">
        {/**sideber left*/}
        <LeftNevBar />
        {/**center content*/}
        <div className="w-full h-full flex flex-col gap-7 ">
          {/**top bar */}
          <TopBar />
          {/**Top Content */}
          <TopContent />
          {/**booking & selas chat */}
          <div className="w-full grid grid-cols-2 h-75.75 gap-6.75">
            <div className="w-full h-full pl-5 flex flex-col pr-5 p-3.5 bg-[#FFFFFF] rounded-[20px]">
              <div className="pt-3.5 pb-3.5 flex items-center">
                <span className="mr-auto">
                  <h5 className="font-inet font-medium min18pxMax20px">
                    Bookings
                  </h5>
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
                  <h5 className="font-inet font-medium min18pxMax20px">
                    Sales
                  </h5>
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
            <div className="w-full h-full pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[20px] overflow-hidden">
              <span>
                <h5 className="font-inter font-medium min18pxMax20px">
                  Recent Activities
                </h5>
              </span>
              <div className="mt-3.75 flex flex-col h-49.5 overflow-y-auto">
                {/**content */}
                <div className="border-b border-gray-500 flex pb-2">
                  <span className="mr-2 text-gray-500 mt-1">
                    <i className="fas fa-user-graduate  text-[24px]"></i>
                  </span>
                  <span className="flex flex-col gap-2.5 mr-auto">
                    <h5 className="font-inter font-medium text-[16px]">
                      Premium Plan Subscription
                    </h5>
                    <h5 className="font-inter font-normal text-[14px]">
                      Samuel Olamide paid for premium plan
                    </h5>
                  </span>
                  <span className="flex justify-center items-center w-fit min-h-full">
                    <h5 className="font-inter font-light text-[14px]">
                      8 mins ago
                    </h5>
                  </span>
                </div>
                {/**content */}
                <div className="border-b border-gray-500 flex pb-2">
                  <span className="mr-2 text-gray-500 mt-1">
                    <i className="fas fa-calendar-alt  text-[24px]"></i>
                  </span>
                  <span className="flex flex-col gap-2.5 mr-auto">
                    <h5 className="font-inter font-medium text-[16px]">
                      Consultation Call Booking
                    </h5>
                    <h5 className="font-inter font-normal text-[14px]">
                      Habib Abdulsalam booked a consultation call
                    </h5>
                  </span>
                  <span className="flex justify-center items-center w-fit min-h-full">
                    <h5 className="font-inter font-light text-[14px]">
                      33 mins ago
                    </h5>
                  </span>
                </div>
                {/**content */}
                <div className="border-b border-gray-500 flex pb-2">
                  <span className="mr-2 text-gray-500 mt-1">
                    <i className="fas fa-briefcase  text-[24px]"></i>
                  </span>
                  <span className="flex flex-col gap-2.5 mr-auto">
                    <h5 className="font-inter font-medium text-[16px]">
                      Job Request Proposal
                    </h5>
                    <h5 className="font-inter font-normal text-[14px]">
                      BitCorp Tech submitted a job request
                    </h5>
                  </span>
                  <span className="flex justify-center items-center w-fit min-h-full">
                    <h5 className="font-inter font-light text-[14px]">
                      1 hour ago
                    </h5>
                  </span>
                </div>
                {/**content */}
                <div className="border-b border-gray-500 flex pb-2">
                  <span className="mr-2 text-gray-500 mt-1">
                    <i className="fas fa-user-graduate  text-[24px]"></i>
                  </span>
                  <span className="flex flex-col gap-2.5 mr-auto">
                    <h5 className="font-inter font-medium text-[16px]">
                      Premium Plan Subscription
                    </h5>
                    <h5 className="font-inter font-normal text-[14px]">
                      Samuel Olamide paid for premium plan
                    </h5>
                  </span>
                  <span className="flex justify-center items-center w-fit min-h-full">
                    <h5 className="font-inter font-light text-[14px]">
                      8 mins ago
                    </h5>
                  </span>
                </div>
              </div>
            </div>
            {/**alerts */}
            <div className="w-[70%] h-full  pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[20px]">
              <span>
                <h5 className="font-inter font-medium min18pxMax20px">
                  Alerts
                </h5>
              </span>
              <div className="mt-3.75 flex flex-col h-49.5 overflow-y-auto">
                {/**content */}
                <div className="border-b border-gray-500 flex pb-2">
                  <span className="mr-2 w-10 h-10 rounded-2xl bg-[#FFF9E5] text-[#D4AF37] flex justify-center items-center ">
                    <i className="fas fa-question  text-[20px]"></i>
                  </span>
                  <span className="flex flex-col gap-2.5 mr-auto">
                    <h5 className="font-inter font-medium text-[16px]">
                      Payments Pending
                    </h5>
                    <h5 className="font-inter font-normal text-[14px]">
                      2 mentorship payments pending
                    </h5>
                  </span>
                  <span className="flex justify-center items-center w-fit min-h-full">
                    <h5 className="font-inter font-light text-[14px]">
                      8 mins ago
                    </h5>
                  </span>
                </div>
                {/**content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminDasboard;
