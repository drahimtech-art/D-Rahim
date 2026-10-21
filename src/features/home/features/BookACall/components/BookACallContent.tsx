import { useState } from "react";
import Head from "./Head";
import CalendarUi from "./Calender";
import Time from "./Time";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../../../shared/LoadingState/LoadingAnimation";
function BookACallContent() {
  const routeNavigator = useNavigate();
  const [shouldLoad, setShouldLoad] = useState(false);

  function toCallPage(): void {
    routeNavigator("/schedule/call", { replace: false });
    setShouldLoad(true);
  }
  return (
    <>
      <div className="min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5  min-[1000px]:mt-20 mt-10 flex flex-col min-[1000px]:flex-row min-[1000px]:gap-10 gap-5 justify-around">
        {/**head */}
        <Head />
        {/**calender */}
        <CalendarUi />
        {/**time */}
        <Time toCallPage={toCallPage} />
      </div>
      {shouldLoad && <LoadingAnimation shouldFadeOut={false} />}
    </>
  );
}
export default BookACallContent;
