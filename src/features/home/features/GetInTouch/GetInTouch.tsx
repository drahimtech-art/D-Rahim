import End from "../../shared/Footer/Footer";
import Top from "../../shared/Top/Top";
import EnterDetailsAndMap from "./components/EnterDetailsAndMap";
import GetInTouchHeadText from "./components/GetInTouchHeadText";
import { useEffect, useState } from "react";
import { PagesConfigDataApi } from "../../../../storage/PagesConfig";
import LoadingAnimation from "../../shared/LoadingState/LoadingAnimation";
function GetInTouch() {
  const pagesConfigData = PagesConfigDataApi();
  const { setContactPage, contactPage } = pagesConfigData;
  const [shouldLoad, setShouldLoad] = useState(!contactPage);
  useEffect(() => {
    const removeLoadinigAnimationTimeOut = setTimeout(() => {
      (() => {
        setContactPage(true);
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
        <GetInTouchHeadText />
        <EnterDetailsAndMap />
      </main>
      <End />
      {shouldLoad && <LoadingAnimation shouldFadeOut={shouldLoad} />}
    </>
  );
}
export default GetInTouch;
