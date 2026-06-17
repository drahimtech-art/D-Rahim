import { useRef, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LogoImg from "/images/logo.png";
import homeIcon from "/images/HouseSimple_icon.png";
import lightHomeIcon from "/images/HouseSimple.png";
import calenderIcon from "/images/CalendarDotsLight_icon.png";
import lightCalenderIcon from "/images/CalendarDots.png";
import mentorshipIcon from "/images/StudentLight_icon.png";
import lightMentorshipIcon from "/images/Student.png";
import jobInquiresIcon from "/images/BriefcaseLight_icon.png";
import lightJobInquiresIcon from "/images/Briefcase.png";
import contentIcon from "/images/PackageDark.png";
import lightContentIcon from "/images/Package.png";
import settingsIcon from "/images/Sliders_icon.png";
import lightSettingsIcon from "/images/Sliders.png";
type NavigationControl = {
  toDashboard: () => void;
  toBooking: () => void;
  toMentorship: () => void;
  toJobinquires: () => void;
  toContent: () => void;
  toSettings: () => void;
  logout: () => void;
  //
  Dashboard: boolean;
  Booking: boolean;
  Mentorship: boolean;
  Jobinquires: boolean;
  Content: boolean;
  Settings: boolean;
};
function LeftNevBar(props: NavigationControl) {
  const [searchParems, setSearchParems] = useSearchParams();
  const page = searchParems.get("page");
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
    if (page == "overview") return;
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
    if (page == "bookings") return;
    setSearchParems({ page: "bookings" });
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
    if (page == "mentorship") return;
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
    if (page == "jobinquires") return;
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
    if (page == "content") return;
    setSearchParems({ page: "content" });
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
    if (page == "settings") return;
    setSearchParems({ page: "settings" });
  }
  //save history on refresh and navigate to quary page
  useEffect(() => {
    if (!page) return;
    if (!isMounted) return;
    switch (page) {
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
  }, [page, isMounted]);
  //mount the history controll
  useEffect(() => {
    (() => {
      setIsMounted(true);
    })();
  }, []);
  return (
    <div className="w-full h-full flex flex-col bg-[#FFFFFF] p-10 rounded-[10px] ">
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
          {props.Dashboard ? (
            <img className=" w-6 h-6 " src={lightHomeIcon}></img>
          ) : (
            <img className=" w-6 h-6 " src={homeIcon}></img>
          )}
          <h5 className="font-inter font-medium text-[18px]">Dashboard</h5>
        </button>
        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl transition-all pointer"
          ref={bookingsRef}
          onClick={toBooking}
        >
          {props.Booking ? (
            <img className=" w-6 h-6 " src={lightCalenderIcon}></img>
          ) : (
            <img className=" w-6 h-6 " src={calenderIcon}></img>
          )}
          <h5 className="font-inter font-normal text-[18px]">Bookings</h5>
        </button>
        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl transition-all pointer"
          ref={mentorshipRef}
          onClick={toMentorship}
        >
          {props.Mentorship ? (
            <img className=" w-6 h-6 " src={lightMentorshipIcon}></img>
          ) : (
            <img className=" w-6 h-6 " src={mentorshipIcon}></img>
          )}
          <h5 className="font-inter font-normal text-[18px]">Mentorship</h5>
        </button>
        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl transition-all pointer"
          ref={jobInquiresRef}
          onClick={toJobinquires}
        >
          {props.Jobinquires ? (
            <img className=" w-6 h-6 " src={lightJobInquiresIcon}></img>
          ) : (
            <img className=" w-6 h-6 " src={jobInquiresIcon}></img>
          )}
          <h5 className="font-inter font-normal text-[18px]">Job inquires</h5>
        </button>
        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl transition-all pointer"
          ref={contentRef}
          onClick={toContent}
        >
          {props.Content ? (
            <img className=" w-6 h-6 " src={lightContentIcon}></img>
          ) : (
            <img className=" w-6 h-6 " src={contentIcon}></img>
          )}
          <h5 className="font-inter font-normal text-[18px]">Content</h5>
        </button>
        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl transition-all pointer"
          ref={settingsRef}
          onClick={toSettings}
        >
          {props.Settings ? (
            <img className=" w-6 h-6 " src={lightSettingsIcon}></img>
          ) : (
            <img className=" w-6 h-6 " src={settingsIcon}></img>
          )}
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
