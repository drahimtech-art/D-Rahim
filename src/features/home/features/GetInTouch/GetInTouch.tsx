import End from "../../shared/Footer/Footer";
import Top from "../../shared/Top/Top";
import EnterDetailsAndMap from "./components/EnterDetailsAndMap";
import GetInTouchHeadText from "./components/GetInTouchHeadText";
function GetInTouch() {
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
