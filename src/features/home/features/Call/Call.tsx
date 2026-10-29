import Top from "../../shared/Top/Top";
import Head from "./components/Head";
import PageContent from "./components/PageContent";
import End from "../../shared/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { PagesConfigDataApi } from "../../../../storage/PagesConfig";
import { ClientBookingInfoApi } from "../../../../storage/ClientBookingInfo";
import LoadingAnimation from "../../shared/LoadingState/LoadingAnimation";
import { useState, useEffect } from "react";
function Call(): React.ReactElement {
  const routeNavigator = useNavigate();
  const pagesConfigData = PagesConfigDataApi();
  const { setCallPage, callPage, bookACallPage } = pagesConfigData;
  const clientBookingData = ClientBookingInfoApi();
  const { bookingInfo, setBookingInfo } = clientBookingData;
  const [shouldLoad, setShouldLoad] = useState<boolean>(!callPage);
  const [shouldAppLoad, setShouldAppLoad] = useState<boolean>(false);
  function bookACall() {
    routeNavigator("/book/call", { replace: true });
    if (!bookACallPage) {
      setShouldAppLoad(true);
    }
  }
  useEffect(() => {
    if (!bookingInfo) {
      bookACall();
      return;
    }
    const removeLoadinigAnimationTimeOut = setTimeout(() => {
      (() => {
        setCallPage(true);
        setShouldLoad(false);
      })();
    }, 1000);
    return () => {
      clearTimeout(removeLoadinigAnimationTimeOut);
    };
  }, []);
  return (
    <>
      <Top />
      <main>
        <Head
          date={bookingInfo?.date.toDateString()}
          time={bookingInfo?.time}
        />
        <PageContent
          bookingInfo={bookingInfo}
          setBookingInfo={setBookingInfo}
        />
      </main>
      <End />
      {shouldLoad && <LoadingAnimation shouldFadeOut={shouldLoad} />}
      {shouldAppLoad && <LoadingAnimation shouldFadeOut={false} />}
    </>
  );
}
export default Call;
