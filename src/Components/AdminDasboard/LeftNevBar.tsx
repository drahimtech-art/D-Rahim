import { useRef, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LogoImg from "/images/logo.png";
type NavigationControl = {
  toDashboard: () => void;
  toBooking: () => void;
  toMentorship: () => void;
  toJobinquires: () => void;
  toContent: () => void;
  toSettings: () => void;
  logout: () => void;
};
function LeftNevBar(props: NavigationControl) {
  const [searchParems, setSearchParems] = useSearchParams();
  const dashboardRef = useRef<HTMLButtonElement | null>(null);
  const bookingsRef = useRef<HTMLButtonElement | null>(null);
  const mentorshipRef = useRef<HTMLButtonElement | null>(null);
  const jobInquiresRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLButtonElement | null>(null);
  const settingsRef = useRef<HTMLButtonElement | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  function toDashboard() {
    if (
      !dashboardRef.current ||
      !bookingsRef.current ||
      !mentorshipRef.current ||
      !jobInquiresRef.current ||
      !contentRef.current ||
      !settingsRef.current
    )
      return;
    //remove
    dashboardRef.current.classList.remove("text-[#757575]");
    bookingsRef.current.classList.remove("bg-primary-green");
    bookingsRef.current.classList.remove("text-white");
    bookingsRef.current.classList.add("text-[#757575]");
    mentorshipRef.current.classList.remove("bg-primary-green");
    mentorshipRef.current.classList.remove("text-white");
    mentorshipRef.current.classList.add("text-[#757575]");
    jobInquiresRef.current.classList.remove("bg-primary-green");
    jobInquiresRef.current.classList.remove("text-white");
    jobInquiresRef.current.classList.add("text-[#757575]");
    contentRef.current.classList.remove("bg-primary-green");
    contentRef.current.classList.remove("text-white");
    contentRef.current.classList.add("text-[#757575]");
    settingsRef.current.classList.remove("bg-primary-green");
    settingsRef.current.classList.remove("text-white");
    settingsRef.current.classList.add("text-[#757575]");
    //add
    dashboardRef.current.classList.add("bg-primary-green");
    dashboardRef.current.classList.add("text-white");
    //func call
    props.toDashboard();
    setSearchParems({ page: "overview" });
  }
  function toBooking() {
    if (
      !dashboardRef.current ||
      !bookingsRef.current ||
      !mentorshipRef.current ||
      !jobInquiresRef.current ||
      !contentRef.current ||
      !settingsRef.current
    )
      return;
    //remove
    bookingsRef.current.classList.remove("text-[#757575]");
    dashboardRef.current.classList.remove("bg-primary-green");
    dashboardRef.current.classList.remove("text-white");
    dashboardRef.current.classList.add("text-[#757575]");
    mentorshipRef.current.classList.remove("bg-primary-green");
    mentorshipRef.current.classList.remove("text-white");
    mentorshipRef.current.classList.add("text-[#757575]");
    jobInquiresRef.current.classList.remove("bg-primary-green");
    jobInquiresRef.current.classList.remove("text-white");
    jobInquiresRef.current.classList.add("text-[#757575]");
    contentRef.current.classList.remove("bg-primary-green");
    contentRef.current.classList.remove("text-white");
    contentRef.current.classList.add("text-[#757575]");
    settingsRef.current.classList.remove("bg-primary-green");
    settingsRef.current.classList.remove("text-white");
    settingsRef.current.classList.add("text-[#757575]");
    //add
    bookingsRef.current.classList.add("bg-primary-green");
    bookingsRef.current.classList.add("text-white");
    //func call
    props.toBooking();
    setSearchParems({ page: "booking" });
  }
  function toMentorship() {
    if (
      !dashboardRef.current ||
      !bookingsRef.current ||
      !mentorshipRef.current ||
      !jobInquiresRef.current ||
      !contentRef.current ||
      !settingsRef.current
    )
      return;
    //remove
    mentorshipRef.current.classList.remove("text-[#757575]");
    dashboardRef.current.classList.remove("bg-primary-green");
    dashboardRef.current.classList.remove("text-white");
    dashboardRef.current.classList.add("text-[#757575]");
    bookingsRef.current.classList.remove("bg-primary-green");
    bookingsRef.current.classList.remove("text-white");
    bookingsRef.current.classList.add("text-[#757575]");
    jobInquiresRef.current.classList.remove("bg-primary-green");
    jobInquiresRef.current.classList.remove("text-white");
    jobInquiresRef.current.classList.add("text-[#757575]");
    contentRef.current.classList.remove("bg-primary-green");
    contentRef.current.classList.remove("text-white");
    contentRef.current.classList.add("text-[#757575]");
    settingsRef.current.classList.remove("bg-primary-green");
    settingsRef.current.classList.remove("text-white");
    settingsRef.current.classList.add("text-[#757575]");
    //add
    mentorshipRef.current.classList.add("bg-primary-green");
    mentorshipRef.current.classList.add("text-white");
    //func call
    props.toMentorship();
    setSearchParems({ page: "mentorship" });
  }
  function toJobinquires() {
    if (
      !dashboardRef.current ||
      !bookingsRef.current ||
      !mentorshipRef.current ||
      !jobInquiresRef.current ||
      !contentRef.current ||
      !settingsRef.current
    )
      return;
    jobInquiresRef.current.classList.remove("text-[#757575]");
    dashboardRef.current.classList.remove("bg-primary-green");
    dashboardRef.current.classList.remove("text-white");
    dashboardRef.current.classList.add("text-[#757575]");
    bookingsRef.current.classList.remove("bg-primary-green");
    bookingsRef.current.classList.remove("text-white");
    bookingsRef.current.classList.add("text-[#757575]");
    mentorshipRef.current.classList.remove("bg-primary-green");
    mentorshipRef.current.classList.remove("text-white");
    mentorshipRef.current.classList.add("text-[#757575]");
    contentRef.current.classList.remove("bg-primary-green");
    contentRef.current.classList.remove("text-white");
    contentRef.current.classList.add("text-[#757575]");
    settingsRef.current.classList.remove("bg-primary-green");
    settingsRef.current.classList.remove("text-white");
    settingsRef.current.classList.add("text-[#757575]");
    //add
    jobInquiresRef.current.classList.add("bg-primary-green");
    jobInquiresRef.current.classList.add("text-white");
    //func call
    props.toJobinquires();
    setSearchParems({ page: "jobinquires" });
  }
  function toContent() {
    if (
      !dashboardRef.current ||
      !bookingsRef.current ||
      !mentorshipRef.current ||
      !jobInquiresRef.current ||
      !contentRef.current ||
      !settingsRef.current
    )
      return;
    contentRef.current.classList.remove("text-[#757575]");
    dashboardRef.current.classList.remove("bg-primary-green");
    dashboardRef.current.classList.remove("text-white");
    dashboardRef.current.classList.add("text-[#757575]");
    bookingsRef.current.classList.remove("bg-primary-green");
    bookingsRef.current.classList.remove("text-white");
    bookingsRef.current.classList.add("text-[#757575]");
    mentorshipRef.current.classList.remove("bg-primary-green");
    mentorshipRef.current.classList.remove("text-white");
    mentorshipRef.current.classList.add("text-[#757575]");
    jobInquiresRef.current.classList.remove("bg-primary-green");
    jobInquiresRef.current.classList.remove("text-white");
    jobInquiresRef.current.classList.add("text-[#757575]");
    settingsRef.current.classList.remove("bg-primary-green");
    settingsRef.current.classList.remove("text-white");
    settingsRef.current.classList.add("text-[#757575]");
    //add
    contentRef.current.classList.add("bg-primary-green");
    contentRef.current.classList.add("text-white");
    //func call
    props.toContent();
    setSearchParems({ page: "content" });
    console.log("1");
  }
  function toSettings() {
    if (
      !dashboardRef.current ||
      !bookingsRef.current ||
      !mentorshipRef.current ||
      !jobInquiresRef.current ||
      !contentRef.current ||
      !settingsRef.current
    )
      return;
    settingsRef.current.classList.remove("text-[#757575]");
    dashboardRef.current.classList.remove("bg-primary-green");
    dashboardRef.current.classList.remove("text-white");
    dashboardRef.current.classList.add("text-[#757575]");
    bookingsRef.current.classList.remove("bg-primary-green");
    bookingsRef.current.classList.remove("text-white");
    bookingsRef.current.classList.add("text-[#757575]");
    mentorshipRef.current.classList.remove("bg-primary-green");
    mentorshipRef.current.classList.remove("text-white");
    mentorshipRef.current.classList.add("text-[#757575]");
    contentRef.current.classList.remove("bg-primary-green");
    contentRef.current.classList.remove("text-white");
    contentRef.current.classList.add("text-[#757575]");
    jobInquiresRef.current.classList.remove("bg-primary-green");
    jobInquiresRef.current.classList.remove("text-white");
    jobInquiresRef.current.classList.add("text-[#757575]");
    //add
    settingsRef.current.classList.add("bg-primary-green");
    settingsRef.current.classList.add("text-white");
    //func call
    props.toSettings();
    setSearchParems({ page: "settings" });
  }
  //save history on refresh and navigate to quary page
  useEffect(() => {
    const parems = searchParems.get("page");
    if (!parems) return;
    if (!isMounted) return;
    switch (parems) {
      case "overview":
        toDashboard();
        break;
      case "bookings":
        toBooking();
        break;
      case "mentorship":
        toMentorship();
        break;
      case "jobinquires":
        toJobinquires();
        break;
      case "content":
        toContent();
        break;
      case "settings":
        toSettings();
        break;
      default:
        break;
    }
  }, [searchParems, isMounted]);
  //mount the history controll
  useEffect(() => {
    (() => {
      setIsMounted(true);
    })();
  }, []);
  return (
    <div className="w-[25%]  min-w-73.5 flex flex-col bg-[#FFFFFF] p-10 rounded-[10px] ">
      <div className="flex gap-2 items-center">
        <span className="w-8 h-12.5">
          <img className="w-full h-full" src={LogoImg}></img>
        </span>
        <span>
          <h5 className="font-semibold font-inter min18pxMax20px">D’RAHIM</h5>
          <h5 className="font-semibold font-inter text-[9.04px] -mt-0.5">
            TECH INNOVATION
          </h5>
        </span>
      </div>
      {/**navber */}
      <div className="mt-10 flex flex-col gap-4">
        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5 bg-primary-green text-white rounded-xl transition-all pointer"
          ref={dashboardRef}
          onClick={toDashboard}
        >
          <i className="fa fa-home font-light text-[24px]"></i>
          <h5 className="font-inter font-medium text-[18px]">Dashboard</h5>
        </button>
        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl transition-all pointer"
          ref={bookingsRef}
          onClick={toBooking}
        >
          <i className="fas fa-calendar-alt font-light text-[24px]"></i>
          <h5 className="font-inter font-normal text-[18px]">Bookings</h5>
        </button>
        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl transition-all pointer"
          ref={mentorshipRef}
          onClick={toMentorship}
        >
          <i className="fas fa-user-graduate  text-[24px]"></i>
          <h5 className="font-inter font-normal text-[18px]">Mentorship</h5>
        </button>
        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl transition-all pointer"
          ref={jobInquiresRef}
          onClick={toJobinquires}
        >
          <i className="fas fa-briefcase  text-[24px]"></i>
          <h5 className="font-inter font-normal text-[18px]">Job inquires</h5>
        </button>
        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl transition-all pointer"
          ref={contentRef}
          onClick={toContent}
        >
          <i className="fas fa-cube  text-[24px]"></i>
          <h5 className="font-inter font-normal text-[18px]">Content</h5>
        </button>
        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl transition-all pointer"
          ref={settingsRef}
          onClick={toSettings}
        >
          <i className="fas fa-sliders  text-[24px] rotate-90"></i>
          <h5 className="font-inter font-normal text-[18px]">Settings</h5>
        </button>
      </div>
      <div className="mt-22.5">
        <button className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#C0392B] rounded-xl ">
          <i className="fas fa-right-from-bracket font-extralight  text-[24px]"></i>
          <h5 className="font-inter font-normal text-[18px]">Logout</h5>
        </button>
      </div>
    </div>
  );
}
export default LeftNevBar;
