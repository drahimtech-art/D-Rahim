import { useRef, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import homeIcon from "/images/HouseSimple_icon.png";
import lightHomeIcon from "/images/House.png";
import mentorshipIcon from "/images/StudentLight_icon.png";
import lightMentorshipIcon from "/images/Student.png";
import messagesIcon from "/images/Envelope_icon.png";
import lightMessagesIcon from "/images/Envelope.png";
import cummunityIcon from "/images/UsersThree_icon.png";
import lightcummunityIcon from "/images/UsersThree.png";
import settingsIcon from "/images/Sliders_icon.png";
import lightSettingsIcon from "/images/Sliders.png";
type NavigationControl = {
  toDashboard: () => void;
  toClasses: () => void;
  toMessages: () => void;
  toCummunity: () => void;
  toSettings: () => void;
  logout: () => void;
  //
  Dashboard: boolean;
  Messages: boolean;
  Classes: boolean;
  Cummunity: boolean;
  Settings: boolean;
};
function LeftNevBar(props: NavigationControl) {
  const [searchParems, setSearchParems] = useSearchParams();
  const isUserVerified = searchParems.get("verified");
  const userId = searchParems.get("id");
  const page = searchParems.get("page");
  const dashboardRef = useRef<HTMLButtonElement | null>(null);
  const classRef = useRef<HTMLButtonElement | null>(null);
  const messagesRef = useRef<HTMLButtonElement | null>(null);
  const communityRef = useRef<HTMLButtonElement | null>(null);
  const settingsRef = useRef<HTMLButtonElement | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  function toDashboard() {
    if (
      !dashboardRef.current ||
      !classRef.current ||
      !messagesRef.current ||
      !communityRef.current ||
      !settingsRef.current
    )
      return;
    //remove
    dashboardRef.current.classList.remove("text-[#757575]");
    classRef.current.classList.remove("bg-primary-green");
    classRef.current.classList.remove("text-white");
    classRef.current.classList.add("text-[#757575]");
    messagesRef.current.classList.remove("bg-primary-green");
    messagesRef.current.classList.remove("text-white");
    messagesRef.current.classList.add("text-[#757575]");
    communityRef.current.classList.remove("bg-primary-green");
    communityRef.current.classList.remove("text-white");
    communityRef.current.classList.add("text-[#757575]");
    settingsRef.current.classList.remove("bg-primary-green");
    settingsRef.current.classList.remove("text-white");
    settingsRef.current.classList.add("text-[#757575]");
    //add
    dashboardRef.current.classList.add("bg-primary-green");
    dashboardRef.current.classList.add("text-white");
    //func call
    props.toDashboard();
    if (page == "overview") return;
    setSearchParems({
      verified: `${isUserVerified}`,
      id: `${userId}`,
      page: "overview",
    });
  }
  function toClass() {
    if (
      !dashboardRef.current ||
      !classRef.current ||
      !messagesRef.current ||
      !communityRef.current ||
      !settingsRef.current
    )
      return;
    //remove
    classRef.current.classList.remove("text-[#757575]");
    dashboardRef.current.classList.remove("bg-primary-green");
    dashboardRef.current.classList.remove("text-white");
    dashboardRef.current.classList.add("text-[#757575]");
    messagesRef.current.classList.remove("bg-primary-green");
    messagesRef.current.classList.remove("text-white");
    messagesRef.current.classList.add("text-[#757575]");
    communityRef.current.classList.remove("bg-primary-green");
    communityRef.current.classList.remove("text-white");
    communityRef.current.classList.add("text-[#757575]");
    settingsRef.current.classList.remove("bg-primary-green");
    settingsRef.current.classList.remove("text-white");
    settingsRef.current.classList.add("text-[#757575]");
    //add
    classRef.current.classList.add("bg-primary-green");
    classRef.current.classList.add("text-white");
    //func call
    props.toClasses();
    if (page == "classes") return;
    setSearchParems({
      verified: `${isUserVerified}`,
      id: `${userId}`,
      page: "classes",
    });
  }
  function toMessages() {
    if (
      !dashboardRef.current ||
      !classRef.current ||
      !messagesRef.current ||
      !communityRef.current ||
      !settingsRef.current
    )
      return;
    //remove
    messagesRef.current.classList.remove("text-[#757575]");
    dashboardRef.current.classList.remove("bg-primary-green");
    dashboardRef.current.classList.remove("text-white");
    dashboardRef.current.classList.add("text-[#757575]");
    classRef.current.classList.remove("bg-primary-green");
    classRef.current.classList.remove("text-white");
    classRef.current.classList.add("text-[#757575]");
    communityRef.current.classList.remove("bg-primary-green");
    communityRef.current.classList.remove("text-white");
    communityRef.current.classList.add("text-[#757575]");
    settingsRef.current.classList.remove("bg-primary-green");
    settingsRef.current.classList.remove("text-white");
    settingsRef.current.classList.add("text-[#757575]");
    //add
    messagesRef.current.classList.add("bg-primary-green");
    messagesRef.current.classList.add("text-white");
    //func call
    props.toMessages();
    if (page == "messages") return;
    setSearchParems({
      verified: `${isUserVerified}`,
      id: `${userId}`,
      page: "messages",
    });
  }

  function toCummunity() {
    if (
      !dashboardRef.current ||
      !classRef.current ||
      !messagesRef.current ||
      !communityRef.current ||
      !settingsRef.current
    )
      return;
    communityRef.current.classList.remove("text-[#757575]");
    dashboardRef.current.classList.remove("bg-primary-green");
    dashboardRef.current.classList.remove("text-white");
    dashboardRef.current.classList.add("text-[#757575]");
    classRef.current.classList.remove("bg-primary-green");
    classRef.current.classList.remove("text-white");
    classRef.current.classList.add("text-[#757575]");
    messagesRef.current.classList.remove("bg-primary-green");
    messagesRef.current.classList.remove("text-white");
    messagesRef.current.classList.add("text-[#757575]");
    settingsRef.current.classList.remove("bg-primary-green");
    settingsRef.current.classList.remove("text-white");
    settingsRef.current.classList.add("text-[#757575]");
    //add
    communityRef.current.classList.add("bg-primary-green");
    communityRef.current.classList.add("text-white");
    //func call
    props.toCummunity();
    if (page == "community") return;
    setSearchParems({
      verified: `${isUserVerified}`,
      id: `${userId}`,
      page: "community",
    });
  }
  function toSettings() {
    if (
      !dashboardRef.current ||
      !classRef.current ||
      !messagesRef.current ||
      !communityRef.current ||
      !settingsRef.current
    )
      return;
    settingsRef.current.classList.remove("text-[#757575]");
    dashboardRef.current.classList.remove("bg-primary-green");
    dashboardRef.current.classList.remove("text-white");
    dashboardRef.current.classList.add("text-[#757575]");
    classRef.current.classList.remove("bg-primary-green");
    classRef.current.classList.remove("text-white");
    classRef.current.classList.add("text-[#757575]");
    messagesRef.current.classList.remove("bg-primary-green");
    messagesRef.current.classList.remove("text-white");
    messagesRef.current.classList.add("text-[#757575]");
    communityRef.current.classList.remove("bg-primary-green");
    communityRef.current.classList.remove("text-white");
    communityRef.current.classList.add("text-[#757575]");
    //add
    settingsRef.current.classList.add("bg-primary-green");
    settingsRef.current.classList.add("text-white");
    //func call
    props.toSettings();
    if (page == "settings") return;
    setSearchParems({
      verified: `${isUserVerified}`,
      id: `${userId}`,
      page: "settings",
    });
  }
  useEffect(() => {
    const paremsPage = searchParems.get("page");
    if (!paremsPage) return;
    if (!isMounted) return;
    switch (paremsPage) {
      case "overview":
        toDashboard();
        break;
      case "classes":
        toClass();
        break;
      case "messages":
        toMessages();
        break;

      case "community":
        toCummunity();
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

  console.log(
    props.Dashboard,
    props.Classes,
    props.Messages,
    props.Cummunity,
    props.Settings,
  );

  return (
    <div className="flex flex-col w-full h-full">
      {/**navber */}
      <div className=" flex flex-col gap-4">
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
          ref={classRef}
          onClick={toClass}
        >
          {props.Classes ? (
            <img className=" w-6 h-6 " src={lightMentorshipIcon}></img>
          ) : (
            <img className=" w-6 h-6 " src={mentorshipIcon}></img>
          )}
          <h5 className="font-inter font-normal text-[18px]">My Classes</h5>
        </button>
        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl transition-all pointer"
          ref={messagesRef}
          onClick={toMessages}
        >
          {props.Messages ? (
            <img className=" w-6 h-6 " src={lightMessagesIcon}></img>
          ) : (
            <img className=" w-6 h-6 " src={messagesIcon}></img>
          )}
          <h5 className="font-inter font-normal text-[18px]">Messages</h5>
        </button>
        <button
          className="w-full h-12 flex items-center gap-2.5 p-3 pl-2.5 pr-2.5  text-[#757575] rounded-xl transition-all pointer"
          ref={communityRef}
          onClick={toCummunity}
        >
          {props.Cummunity ? (
            <img className=" w-6 h-6 " src={lightcummunityIcon}></img>
          ) : (
            <img className=" w-6 h-6 " src={cummunityIcon}></img>
          )}
          <h5 className="font-inter font-normal text-[18px]">community</h5>
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
