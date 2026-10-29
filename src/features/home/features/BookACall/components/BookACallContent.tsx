import { useEffect, useState } from "react";
import Head from "./Head";
import CalendarUi from "./CalenderUi";
import Time from "./Time";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../../../shared/LoadingState/LoadingAnimation";
import { PagesConfigDataApi } from "../../../../../storage/PagesConfig";
import { ClientBookingInfoApi } from "../../../../../storage/ClientBookingInfo";
function BookACallContent() {
  const routeNavigator = useNavigate();
  const pagesConfigData = PagesConfigDataApi();
  const { callPage } = pagesConfigData;
  const clientBookingData = ClientBookingInfoApi();
  const { bookingInfo } = clientBookingData;
  const [shouldLoad, setShouldLoad] = useState(false);
  const [bookingDate, setBookingDate] = useState<Date>(new Date());
  const [staticCurrentDate, setStaticCurrentDate] = useState<Date>(new Date());
  const [bookingTime, setBookingTime] = useState<string>("your time!");
  //
  useEffect(() => {
    (() => {
      setStaticCurrentDate(bookingDate);
    })();
  }, []);
  //
  useEffect(() => {
    if (!bookingInfo) return;
    setBookingDate(bookingInfo.date);
    setBookingTime(bookingInfo.time);
  }, []);
  //
  function toCallPage(): void {
    routeNavigator("/schedule/call", { replace: false });
    if (!callPage) {
      setShouldLoad(true);
    }
  }
  /**
   function moveOpenDateToTomorrow() {
    const currentSplitDate = bookingDate.toDateString().split(" ");
    const newDate = `${currentSplitDate[1]} ${40} ${currentSplitDate[3]}`;
    console.log(new Date(newDate));
  }
  */
  return (
    <>
      <div className="min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5  min-[1000px]:mt-20 mt-10 flex flex-col min-[1000px]:flex-row min-[1000px]:gap-10 gap-5 justify-around">
        {/**head */}
        <Head date={bookingDate.toDateString()} time={bookingTime} />
        {/**calender */}
        <CalendarUi
          bookingDate={bookingDate}
          setBookingDate={setBookingDate}
          staticCurrentDate={staticCurrentDate}
        />
        {/**time */}
        <Time
          toCallPage={toCallPage}
          bookingDate={bookingDate}
          staticCurrentDate={staticCurrentDate}
          setBookingTime={setBookingTime}
        />
      </div>
      {shouldLoad && <LoadingAnimation shouldFadeOut={false} />}
    </>
  );
}
export default BookACallContent;
