import Logo1 from "/images/logo1.png";
import founderImg from "/images/27.png";
function BookACallContent() {
  return (
    <div className="sm:pl-10 sm:pr-10 pl-5 pr-5  mt-20 flex gap-10 justify-around">
      <div className="flex flex-col mr-auto w-[32%]">
        <span className="block w-27.25 h-27.25 ml-auto mr-30">
          <img className="w-full h-full" src={Logo1}></img>
        </span>
        <div className="flex flex-col gap-2 mt-6">
          <span className="w-35 h-35 rounded-full">
            <img className="w-full h-full rounded-full" src={founderImg}></img>
          </span>
          <h5 className="font-inter font-semibold text-[20px]">
            Jimoh Abdulrahim
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
      <div className="flex flex-col  w-[50%] mr-auto">
        <span>
          <h5 className="font-inter font-bold text-[24px]">
            Select a Date & Time
          </h5>
        </span>
        <div className="mt-10 w-full h-137.5 bg-gray-300 rounded-2xl"></div>
      </div>
      {/**time */}
      <div className="mt-16 w-[20%] flex flex-col">
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
