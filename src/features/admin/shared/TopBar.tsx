import calendarIcon from "/images/icons/CalendarDots_icon.png";
import searchIcon from "/images/icons/search_icon.png";
import bellIcon from "/images/icons/bell_icon.png";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Calender from "./Calender";
import { AdminConfigApi } from "../../../storage/AdminConfig";
import TopBarNotificationCard from "./TopBarNotificationCard";
type Heading = {
  heading: string;
  subHeading: string;
  isFirstRequstSent?: boolean;
  fetchAnalyticsData?: () => void;
};
function TopBar(props: Heading) {
  const adminConfigApi = AdminConfigApi();
  const { filterDateList, setFilterDateList, filterDateRangeText } =
    adminConfigApi;
  const [searchParems] = useSearchParams();
  const [renderFilterCalender, setRenderFilterCalender] =
    useState<boolean>(false);
  const [renderNotification, setRenderNotification] = useState<boolean>(true);
  const [isFirstMount, setIsFirstMount] = useState<boolean>(true);
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
  const notifications = [
    {
      title: "New Booking",
      content: "UI/UX consultation booked for Sep 8",
      time: "5 mins ago",
      isAction: false,
    },
    {
      title: "Payment Received",
      content: "N320,000 payment received from ABC Ltd",
      time: "1 hour ago",
      isAction: false,
    },
    {
      title: "Email failed to send from server",
      content: "",
      time: "",
      isAction: true,
    },
  ];
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
                  className="  flex justify-center items-center w-12.5 h-12.5 border border-[#D9D9D9] rounded-full pointer"
                  onClick={() => setRenderNotification(!renderNotification)}
                >
                  <img className="w-[24px] h-[24px]" src={bellIcon}></img>
                </span>
                {renderNotification && (
                  <article className="w-[360px] h-[355px] overflow-hidden z-50 absolute -right-15   ">
                    <div className="flex flex-col h-full pb-5 gap-[10px] overflow-y-auto">
                      {notifications.map((e, i) => {
                        return (
                          <TopBarNotificationCard
                            title={e.title}
                            content={e.content}
                            time={e.time}
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
          onClick={() => setRenderNotification(!renderNotification)}
        ></div>
      )}
    </>
  );
}
export default TopBar;
