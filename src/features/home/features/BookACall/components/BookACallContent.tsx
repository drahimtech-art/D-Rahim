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
      <article className="lg:pl-10 lg:pr-10 pl-5 pr-5 min-[1000px]:mt-30 mt-10">
        <span className="block">
          <h5 className="font-size-heading fontPoppins font-semibold">
            Need Help With a Project?
          </h5>
        </span>
        <span className="block min-[1000px]:mt-12.5 mt-10">
          <h5 className="min16pxMax35px w-full font-medium min-[1000px]:w-[80%] max-w-[839px] ">
            If you want to reach us faster, please schedule a meeting on{" "}
            <strong className="text-green-400 border-b-2 border-green-400 pointer">
              <a>Whatsapp</a>
            </strong>{" "}
          </h5>
        </span>
      </article>
      <div className="min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5  min-[1000px]:mt-20 mt-12 flex flex-col min-[1000px]:flex-row min-[1000px]:gap-10 gap-5 justify-around">
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
