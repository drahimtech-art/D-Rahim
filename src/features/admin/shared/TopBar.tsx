import calendarIcon from "/images/icons/CalendarDots_icon.png";
import searchIcon from "/images/icons/search_icon.png";
import bellIcon from "/images/icons/bell_icon.png";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Calender from "./Calender";
import { AdminConfigApi } from "../../../storage/AdminConfig";
import TopBarNotificationCard from "./TopBarNotificationCard";
import type { NotificationData } from "../../../storage/SocketApi";
import { SocketApi } from "../../../storage/SocketApi";
import { postValidateNotificationsIsViewed } from "./api/Api";
type Heading = {
  heading: string;
  subHeading: string;
  isFirstRequstSent?: boolean;
  fetchAnalyticsData?: () => void;
};

function TopBar(props: Heading) {
  const socketApi = SocketApi();
  const { socket } = socketApi;
  const adminConfigApi = AdminConfigApi();
  const { filterDateList, setFilterDateList, filterDateRangeText } =
    adminConfigApi;
  const [searchParems] = useSearchParams();
  const [renderFilterCalender, setRenderFilterCalender] =
    useState<boolean>(false);
  const [renderNotification, setRenderNotification] = useState<boolean>(false);
  const [isNewNotification, setIsNewNotification] = useState<boolean>(false);
  const [isFirstMount, setIsFirstMount] = useState<boolean>(true);
  const [notificationsDataList, setNotificationDataList] = useState<
    NotificationData[]
  >([]);
  const page = searchParems.get("page");
  function getIsFirstMount(): boolean {
    return isFirstMount;
  }
  useEffect(() => {
    const firstMount = getIsFirstMount();
    if (renderFilterCalender || firstMount) return;
    if (props.fetchAnalyticsData) {
      props.fetchAnalyticsData();
    }
  }, [filterDateList, renderFilterCalender]);
  useEffect(() => {
    if (!props.isFirstRequstSent) return;
    setIsFirstMount(false);
  }, [props.isFirstRequstSent]);
  //
  function handleRenderNotification() {
    if (!renderNotification && isNewNotification) {
      const notificationsNotViewedIdList: string[] = [];
      notificationsDataList.forEach((e) => {
        if (!e.isViewed) {
          notificationsNotViewedIdList.push(e._id);
        }
      });
      if (notificationsNotViewedIdList.length !== 0) {
        postValidateNotificationsIsViewed(notificationsNotViewedIdList)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.warn(err);
          });
      }
    }
    setRenderNotification(!renderNotification);
    setIsNewNotification(false);
  }
  useEffect(() => {
    if (!socket) return;
    socket.emit("admin-get-all-notifications");
    function handleAllNotificationsRes(data: {
      ok: boolean;
      message: string;
      isNewNotification: boolean;
      notificationsList: NotificationData[];
    }) {
      console.log(data);
      setIsNewNotification(data.isNewNotification);
      setNotificationDataList(data.notificationsList);
    }
    socket.on(
      "admin-response-to-get-all-notifications",
      handleAllNotificationsRes,
    );
    const getAllNotificationsAfter5Min = setInterval(
      () => {
        socket.on(
          "admin-response-to-get-all-notifications",
          handleAllNotificationsRes,
        );
      },
      60 * 5 * 1000,
    );
    return () => {
      clearInterval(getAllNotificationsAfter5Min);
      socket.off(
        "admin-response-to-get-all-notifications",
        handleAllNotificationsRes,
      );
    };
  }, []);
  function totalTimePassed(timePased: Date) {
    const [date, time] = new Date(timePased).toISOString().split("T");
    const [newDate, newTime] = new Date().toISOString().split("T");
    const newHour = Number(newTime.split(":")[0]);
    const newMinites = Number(newTime.split(":")[1]);
    const newMonth = Number(newDate.split("-")[1]);
    const newDay = Number(newDate.split("-")[2]);
    const newYear = newDate.split("-")[0];
    //
    const oldMonth = Number(date.split("-")[1]);
    const oldDay = Number(date.split("-")[2]);
    const oldYear = date.split("-")[0];
    let oldHour = Number(time.split(":")[0]);
    let oldMinites = Number(time.split(":")[1]);
    let timePassed;
    //minites passed
    if (
      oldHour === newHour &&
      oldMonth === newMonth &&
      oldDay === newDay &&
      oldYear === newYear
    ) {
      timePassed = newMinites - oldMinites;
      return timePassed > 1 ? `${timePassed} min ago` : `few seconds ago`;
    }
    //hours passed
    if (
      oldHour !== newHour &&
      oldMonth === newMonth &&
      oldDay === newDay &&
      oldYear === newYear
    ) {
      timePassed = newHour - oldHour;
      return timePassed > 1 ? `${timePassed} hours ago` : `${timePassed} hour`;
    }
    //days passed
    if (oldMonth === newMonth && oldYear === newYear && oldDay !== newDay) {
      timePassed = newDay - oldDay;
      return timePassed > 1 ? `${timePassed} days ago` : `${timePassed} day`;
    }
    //months passed
    if (oldMonth !== newMonth && oldYear === newYear) {
      timePassed = newMonth - oldMonth;
      return timePassed > 1
        ? `${timePassed} months ago`
        : `${timePassed} month`;
    }
    //years
    if (oldYear !== newYear) {
      timePassed = newMonth - oldMonth;
      return timePassed > 1 ? `${timePassed} years ago` : `${timePassed} year`;
    }
  }
  return (
    <>
      <article className="w-full flex p-3.5 pl-5 pr-5 bg-[#FFFFFF] h-[100px] items-center rounded-[10px]">
        <section className="flex flex-col min22Max26px gap-2    mr-auto overflow-hidden">
          <h5 className="font-inter font-semibold text-[22px] ">
            {props.heading}
          </h5>
          <h5 className="font-inter font-normal text-[18px]">
            {props.subHeading}
          </h5>
        </section>
        {/**search bar */}
        {page === "overview" && (
          <section className="flex gap-8 items-center">
            <div className="">
              <button
                className="pointer flex p-3.25 gap-3.25 text-[#757575] items-center rounded-[10px] border-[0.5px] border-[#D9D9D9] "
                onClick={() => setRenderFilterCalender(!renderFilterCalender)}
              >
                <img className="w-[24px] h-[24px]" src={calendarIcon}></img>
                <h5 className="text-[#757575] font-normal text-[14px]">
                  {filterDateRangeText}
                </h5>
                <i className="fa fa-angle-down"></i>
              </button>
              {renderFilterCalender && (
                <div className="flex w-full justify-center">
                  <article className="absolute w-[280px] flex flex-col gap-[8px] z-50 h-fit bg-yellow-50 rounded-[10px]  mt-[0.5px] ">
                    <Calender
                      filterDateList={filterDateList}
                      setFilterDateList={setFilterDateList}
                    />
                  </article>
                </div>
              )}
            </div>
            <span className="h-full flex">
              <span className="ml-5 mr-5 flex justify-center items-center w-12.5 h-12.5 border border-[#D9D9D9] rounded-full">
                <img className="w-[24px] h-[24px]" src={searchIcon}></img>
              </span>
              <div className="mr-5 relative">
                <span
                  className=" relative  flex justify-center items-center w-12.5 h-12.5 border border-[#D9D9D9] rounded-full pointer"
                  onClick={handleRenderNotification}
                >
                  {isNewNotification && (
                    <div className="bg-red-600 absolute w-[7px] h-[7px] rounded-full ml-2 -mt-3"></div>
                  )}
                  <img className="w-[24px] h-[24px]" src={bellIcon}></img>
                </span>
                {renderNotification && (
                  <article className="w-[360px] h-[355px] overflow-hidden z-50 absolute -right-15   ">
                    <div className="flex flex-col h-full pb-5 gap-[10px] overflow-y-auto">
                      {notificationsDataList.map((e, i) => {
                        return (
                          <TopBarNotificationCard
                            title={e.title}
                            content={e.content}
                            time={`${totalTimePassed(e.date)}`}
                            isAction={e.isAction}
                            key={`notification-bar-key-${i}`}
                          />
                        );
                      })}
                    </div>
                  </article>
                )}
              </div>
            </span>
          </section>
        )}
      </article>
      {renderFilterCalender && (
        <div
          className="w-full h-screen fixed bodyMaxSizing bg-[#41404028] top-0 left-0 right-0 z-10"
          onClick={() => setRenderFilterCalender(!renderFilterCalender)}
        ></div>
      )}
      {renderNotification && (
        <div
          className="w-full h-screen fixed bodyMaxSizing bg-[#41404028] top-0 left-0 right-0 z-10"
          onClick={() => setRenderNotification(false)}
        ></div>
      )}
    </>
  );
}
export default TopBar;
