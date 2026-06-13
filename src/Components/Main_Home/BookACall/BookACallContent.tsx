import Logo1 from "/images/logo1.png";
function BookACallContent() {
  return (
    <div className="min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5  min-[1000px]:mt-20 mt-10 flex flex-col min-[1000px]:flex-row min-[1000px]:gap-10 gap-5 justify-around">
      <div className="flex flex-col min-[1000px]:mr-auto min-[1000px]:w-[32%]">
        <div className="flex flex-col gap-2 min-[1000px]:mt-6">
          <div className="flex justify-center min-[1000px]:pr-20">
            <span className="w-35 h-35 rounded-full ">
              <img className="w-full h-full rounded-full" src={Logo1}></img>
            </span>
          </div>
          <h5 className="font-inter font-semibold text-[20px] text-gray-500">
            Hello from D'rahim Tech Innovation👋!
          </h5>
          <h5 className="font-inter font-semibold text-[24px]">Let’s Meet!</h5>
        </div>
        <div className="flex flex-col mt-2 gap-5">
          <span className="pl-3 flex gap-2 items-center">
            <i className="fa fa-clock text-[1.4rem] text-[#5e5d5d] "></i>
            <h5 className="font-inter  text-[20px] text-[#5e5d5d]">48 mins</h5>
          </span>
          <span className=" flex gap-2 items-center">
            <i className="fa fa-video -mt-5 text-[1.4rem] text-[#5e5d5d]"></i>
            <h5 className="font-inter  text-[20px] text-[#5e5d5d]">
              Web conferencing details provided upon confirmation
            </h5>
          </span>
          <span className="flex flex-col gap-12">
            <h5 className="font-inter font-medium text-[20px] text-[#5e5d5d]">
              Please, pick the time that works best for you.
            </h5>
            <h5 className="font-inter font-medium text-[20px] text-[#5e5d5d]">
              Let’s make the conversation Count!
            </h5>
          </span>
        </div>
      </div>
      {/**calender */}
      <div className="flex flex-col  min-[1000px]:w-[50%] min-[1000px]:mr-auto">
        <span>
          <h5 className="font-inter font-bold text-[24px]">
            Select a Date & Time
          </h5>
        </span>
        <div className="min-[1000px]:mt-10 mt-5 w-full min-[1000px]:h-137.5 h-100 bg-gray-300 rounded-2xl"></div>
      </div>
      {/**time */}
      <div className="min-[1000px]:mt-16  min-[1000px]:w-[20%] flex flex-col">
        <span>
          <h5 className="font-inter  text-[24px]">Tuesday, September 9</h5>
        </span>
        <div className="mt-12.5 flex flex-col gap-2.5">
          <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
            <h5 className="font-inter  text-[24px]">07:00 am</h5>
          </span>
          <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
            <h5 className="font-inter  text-[24px]">07:30 am</h5>
          </span>
          <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
            <h5 className="font-inter  text-[24px]">08:00 am</h5>
          </span>
          <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
            <h5 className="font-inter  text-[24px]">08:30 am</h5>
          </span>
          <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
            <h5 className="font-inter  text-[24px]">09:00 am</h5>
          </span>
          <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
            <h5 className="font-inter  text-[24px]">09:40 am</h5>
          </span>
          <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
            <h5 className="font-inter  text-[24px]">11:00 am</h5>
          </span>
          <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
            <h5 className="font-inter  text-[24px]">02:00 pm</h5>
          </span>
          <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
            <h5 className="font-inter  text-[24px]">08:00 pm</h5>
          </span>
          <span className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400">
            <h5 className="font-inter  text-[24px]">08:30 pm</h5>
          </span>
        </div>
      </div>
    </div>
  );
}
export default BookACallContent;
