import { useRef, useEffect, useState, type RefObject } from "react";
import { useSearchParams } from "react-router-dom";
import LogoImg from "/images/logo.png";
import homeIcon from "/images/icons/HouseSimple_icon.png";
import lightHomeIcon from "/images/icons/HouseSimple.png";
import calenderIcon from "/images/icons/CalendarDotsLight_icon.png";
import lightCalenderIcon from "/images/icons/CalendarDots.png";
import jobInquiresIcon from "/images/icons/BriefcaseLight_icon.png";
import lightJobInquiresIcon from "/images/icons/Briefcase.png";
import settingsIcon from "/images/icons/GearSix.png";
import lightSettingsIcon from "/images/icons/GearSix_light.png";
import analyticsIcon from "/images/icons/ChartBar.png";
import lightAnalyticsIcon from "/images/icons/ChartBar_light.png";
import paymentIcon from "/images/icons/CreditCard.png";
import lightPaymentIcon from "/images/icons/CreditCard_light.png";
import portfolioIcon from "/images/icons/SquaresFour.png";
import lightPortfolioIcon from "/images/icons/SquaresFour_light.png";
type NavigationControl = {
  toDashboard: () => void;
  toPortfolio: () => void;
  toBooking: () => void;
  toPayment: () => void;
  toJobinquires: () => void;
  toAnalytics: () => void;
  toSettings: () => void;
  logout: () => void;
  //
  Dashboard: boolean;
  Portfolio: boolean;
  Booking: boolean;
  Payment: boolean;
  Jobinquires: boolean;
  Analytics: boolean;
  Settings: boolean;
};
function LeftNevBar(props: NavigationControl) {
  const [searchParems, setSearchParems] = useSearchParams();
  const page = searchParems.get("page");
  const dashboardRef = useRef<HTMLButtonElement | null>(null);
  const portfolioRef = useRef<HTMLButtonElement | null>(null);
  const bookingsRef = useRef<HTMLButtonElement | null>(null);
  const paymentRef = useRef<HTMLButtonElement | null>(null);
  const jobInquiresRef = useRef<HTMLButtonElement | null>(null);
  const analyticsRef = useRef<HTMLButtonElement | null>(null);
  const settingsRef = useRef<HTMLButtonElement | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  function removeButtonActionColor(ref: RefObject<HTMLButtonElement | null>) {
    if (!ref.current) return;
    ref.current.classList.remove("text-white");
    ref.current.classList.remove("bg-button-light-green");
    ref.current.classList.add("text-[#757575]");
  }
  function addButtonActionColor(ref: RefObject<HTMLButtonElement | null>) {
    if (!ref.current) return;
    ref.current.classList.remove("text-[#757575]");
    ref.current.classList.add("bg-button-light-green");
    ref.current.classList.add("text-white");
  }
  function toDashboard() {
    if (
      !dashboardRef.current ||
      !portfolioRef.current ||
      !bookingsRef.current ||
      !paymentRef.current ||
      !jobInquiresRef.current ||
      !analyticsRef.current ||
      !settingsRef.current
    )
      return;
    //remove
    removeButtonActionColor(bookingsRef);
    removeButtonActionColor(portfolioRef);
    removeButtonActionColor(paymentRef);
    removeButtonActionColor(jobInquiresRef);
    removeButtonActionColor(analyticsRef);
    removeButtonActionColor(settingsRef);
    //add
    addButtonActionColor(dashboardRef);
    //func call
    props.toDashboard();
    if (page == "overview") return;
    setSearchParems({ page: "overview" });
  }
  function toPortfolio() {
    if (
      !dashboardRef.current ||
      !portfolioRef.current ||
      !bookingsRef.current ||
      !paymentRef.current ||
      !jobInquiresRef.current ||
      !analyticsRef.current ||
      !settingsRef.current
    )
      return;
    //remove
    removeButtonActionColor(dashboardRef);
    removeButtonActionColor(bookingsRef);
    removeButtonActionColor(paymentRef);
    removeButtonActionColor(jobInquiresRef);
    removeButtonActionColor(analyticsRef);
    removeButtonActionColor(settingsRef);
    //add
    addButtonActionColor(portfolioRef);
    //func call
    props.toPortfolio();
    if (page == "portfolio") return;
    setSearchParems({ page: "portfolio" });
  }
  function toBooking() {
    if (
      !dashboardRef.current ||
      !portfolioRef.current ||
      !bookingsRef.current ||
      !paymentRef.current ||
      !jobInquiresRef.current ||
      !analyticsRef.current ||
      !settingsRef.current
    )
      return;
    //remove
    removeButtonActionColor(dashboardRef);
    removeButtonActionColor(portfolioRef);
    removeButtonActionColor(paymentRef);
    removeButtonActionColor(jobInquiresRef);
    removeButtonActionColor(analyticsRef);
    removeButtonActionColor(settingsRef);
    //add
    addButtonActionColor(bookingsRef);
    //func call
    props.toBooking();
    if (page == "bookings") return;
    setSearchParems({ page: "bookings" });
  }
  function toPayment() {
    if (
      !dashboardRef.current ||
      !portfolioRef.current ||
      !bookingsRef.current ||
      !paymentRef.current ||
      !jobInquiresRef.current ||
      !analyticsRef.current ||
      !settingsRef.current
    )
      return;
    //remove
    removeButtonActionColor(dashboardRef);
    removeButtonActionColor(portfolioRef);
    removeButtonActionColor(bookingsRef);
    removeButtonActionColor(jobInquiresRef);
    removeButtonActionColor(analyticsRef);
    removeButtonActionColor(settingsRef);
    //add
    addButtonActionColor(paymentRef);
    //func call
    props.toPayment();
    if (page == "payment") return;
    setSearchParems({ page: "payment" });
  }
  function toJobinquires() {
    if (
      !dashboardRef.current ||
      !portfolioRef.current ||
      !bookingsRef.current ||
      !paymentRef.current ||
      !jobInquiresRef.current ||
      !analyticsRef.current ||
      !settingsRef.current
    )
      return;
    //remove
    removeButtonActionColor(dashboardRef);
    removeButtonActionColor(portfolioRef);
    removeButtonActionColor(paymentRef);
    removeButtonActionColor(bookingsRef);
    removeButtonActionColor(analyticsRef);
    removeButtonActionColor(settingsRef);
    //add
    addButtonActionColor(jobInquiresRef);
    //func call
    props.toJobinquires();
    if (page == "jobinquires") return;
    setSearchParems({ page: "jobinquires" });
  }
  function toAnalytics() {
    if (
      !dashboardRef.current ||
      !portfolioRef.current ||
      !bookingsRef.current ||
      !paymentRef.current ||
      !jobInquiresRef.current ||
      !analyticsRef.current ||
      !settingsRef.current
    )
      return;
    //remove
    removeButtonActionColor(dashboardRef);
    removeButtonActionColor(portfolioRef);
    removeButtonActionColor(paymentRef);
    removeButtonActionColor(jobInquiresRef);
    removeButtonActionColor(bookingsRef);
    removeButtonActionColor(settingsRef);
    //add
    addButtonActionColor(analyticsRef);
    //func call
    props.toAnalytics();
    if (page == "analytics") return;
    setSearchParems({ page: "analytics" });
  }
  function toSettings() {
    if (
      !dashboardRef.current ||
      !portfolioRef.current ||
      !bookingsRef.current ||
      !paymentRef.current ||
      !jobInquiresRef.current ||
      !analyticsRef.current ||
      !settingsRef.current
    )
      return;
    //remove
    removeButtonActionColor(dashboardRef);
    removeButtonActionColor(portfolioRef);
    removeButtonActionColor(paymentRef);
    removeButtonActionColor(jobInquiresRef);
    removeButtonActionColor(analyticsRef);
    removeButtonActionColor(bookingsRef);
    //add
    addButtonActionColor(settingsRef);
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
      case "portfolio":
        toPortfolio();
        break;
      case "bookings":
        toBooking();
        break;
      case "payment":
        toPayment();
        break;
      case "jobinquires":
        toJobinquires();
        break;
      case "analytics":
        toAnalytics();
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
    <nav className="w-full h-full flex flex-col bg-[#FFFFFF] p-10 rounded-[10px] ">
      <header className="flex gap-2 items-center">
        <span className="w-8 h-12.5">
          <img className="w-full h-full" src={LogoImg}></img>
        </span>
        <span>
          <h5 className="font-semibold font-inter min18pxMax20px">D’RAHIM</h5>
          <h5 className="font-semibold font-inter text-[9.04px] -mt-0.5">
            TECH INNOVATION
          </h5>
        </span>
      </header>
      {/**navber */}
      <div className="mt-10 flex flex-col gap-4">
        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5 bg-button-light-green text-white rounded-xl transition-all pointer"
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
          ref={portfolioRef}
          onClick={toPortfolio}
        >
          {props.Portfolio ? (
            <img className=" w-6 h-6 " src={lightPortfolioIcon}></img>
          ) : (
            <img className=" w-6 h-6 " src={portfolioIcon}></img>
          )}
          <h5 className="font-inter font-normal text-[18px]">Portfolio</h5>
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
          ref={paymentRef}
          onClick={toPayment}
        >
          {props.Payment ? (
            <img className=" w-6 h-6 " src={lightPaymentIcon}></img>
          ) : (
            <img className=" w-6 h-6 " src={paymentIcon}></img>
          )}
          <h5 className="font-inter font-normal text-[18px]">Payments</h5>
        </button>

        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl transition-all pointer"
          ref={analyticsRef}
          onClick={toAnalytics}
        >
          {props.Analytics ? (
            <img className=" w-6 h-6 " src={lightAnalyticsIcon}></img>
          ) : (
            <img className=" w-6 h-6 " src={analyticsIcon}></img>
          )}
          <h5 className="font-inter font-normal text-[18px]">Analytics</h5>
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
      <div className="min-[1300px]:mt-7 mt-22.5">
        <button className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#C0392B] rounded-xl ">
          <i className="fas fa-right-from-bracket font-extralight  text-[24px]"></i>
          <h5 className="font-inter font-normal text-[18px]">Logout</h5>
        </button>
      </div>
    </nav>
  );
}
export default LeftNevBar;
