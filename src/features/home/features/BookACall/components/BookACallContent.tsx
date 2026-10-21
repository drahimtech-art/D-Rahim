import { useState } from "react";
import Logo1 from "/images/logo1.png";
import clockIcon from "/images/icons/Clock.png";
import videoCameraIcon from "/images/icons/VideoCamera.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calender.css";
import type { Value } from "react-calendar/dist/shared/types.js";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../../../shared/LoadingState/LoadingAnimation";
function BookACallContent() {
  const routeNavigator = useNavigate();
  const [shouldLoad, setShouldLoad] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();
  const minDate = new Date(currentYear, currentMonth, currentDay);
  function handleDateChage(e: Value) {
    setDate(e as Date);
  }
  function toCallPage(): void {
    routeNavigator("/schedule/call", { replace: false });
    setShouldLoad(true);
  }
  return (
    <>
      <div className="min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5  min-[1000px]:mt-20 mt-10 flex flex-col min-[1000px]:flex-row min-[1000px]:gap-10 gap-5 justify-around">
        <section className="flex flex-col min-[1000px]:mr-auto min-[1000px]:w-[32%]">
          <div className="flex flex-col gap-2 min-[1000px]:mt-6">
            <div className="flex justify-center min-[1000px]:pr-20">
              <span className="w-35 h-35 rounded-full ">
                <img className="w-full h-full rounded-full" src={Logo1}></img>
              </span>
            </div>
            <h5 className="font-inter font-semibold text-[20px] text-gray-500">
              Hello from D'rahim Tech Innovation👋!
            </h5>
            <h5 className="font-inter font-semibold text-[24px]">
              Let’s Meet!
            </h5>
          </div>
          <div className="flex flex-col mt-2 gap-5">
            <span className=" flex gap-2 items-center">
              <img
                className="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]"
                src={clockIcon}
              ></img>
              <h5 className="font-inter  text-[20px] text-[#5e5d5d]">
                48 mins
              </h5>
            </span>
            <span className=" flex gap-2 ">
              <img
                className="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]"
                src={videoCameraIcon}
              ></img>
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
        </section>
        {/**calender */}
        <section className="flex flex-col  min-[1000px]:w-[40%] min-[1000px]:mr-auto">
          <span>
            <h5 className="font-inter font-bold text-[24px]">
              Select a Date & Time
            </h5>
          </span>
          <div className="min-[1000px]:mt-10 mt-5 w-full min-[1000px]:h-137.5 h-fit ">
            <Calendar
              minDate={minDate}
              value={date}
              selectRange={false}
              onChange={handleDateChage}
            />
          </div>
        </section>
        {/**time */}
        <section className="min-[1000px]:mt-16  min-[1000px]:w-[20%] flex flex-col">
          <span>
            <h5 className="font-inter  text-[24px]">Tuesday, September 9</h5>
          </span>
          <div className="mt-12.5 flex flex-col gap-2.5">
            <span
              className="w-full h-16.75 p-2.5 flex justify-center border-2 items-center border-gray-400 pointer"
              onClick={toCallPage}
            >
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
        </section>
      </div>
      {shouldLoad && <LoadingAnimation shouldFadeOut={false} />}
    </>
  );
}
export default BookACallContent;
