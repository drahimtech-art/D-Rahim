import End from "../../shared/Footer/Footer";
import Top from "../../shared/Top/Top";
import EnterDetailsAndMap from "./components/EnterDetailsAndMap";
import GetInTouchHeadText from "./components/GetInTouchHeadText";
import { useEffect } from "react";
import { PagesConfigDataApi } from "../../../../storage/PagesConfig";
function GetInTouch() {
  const pagesConfigData = PagesConfigDataApi();
  const { setContactPage } = pagesConfigData;
  useEffect(() => {
    (() => {
      setContactPage(true);
    })();
  }, []);
  return (
    <>
      <Top />
      <main>
        <GetInTouchHeadText />
        <EnterDetailsAndMap />
      </main>
      <End />
    </>
  );
}
export default GetInTouch;
