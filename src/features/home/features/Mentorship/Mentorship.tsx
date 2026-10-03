import End from "../../shared/Footer/Footer";
import Top from "../../shared/Top/Top";
/*
import EnterDetails from "./components/EnterDetails";
import MentorshipHeadText from "./components/MentorshipHeadText";
import MentorshipPlan from "./components/MentorshipPlan";
import OurStudents from "./components/OurStudents";
*/
import ComingSoon from "./components/comingSoon/ComingSoon";
import { useEffect } from "react";
import { PagesConfigDataApi } from "../../../../storage/PagesConfig";
function Mentorship() {
  const pagesConfigData = PagesConfigDataApi();
  const { setMentorshipPage } = pagesConfigData;
  useEffect(() => {
    (() => {
      setMentorshipPage(true);
    })();
  }, []);
  return (
    <>
      <Top />
      {/**<main>
        <MentorshipHeadText />
        <OurStudents />
        <MentorshipPlan />
        <div className="sm:block hidden w-full ">
          <EnterDetails />
        </div>
      </main> */}
      <ComingSoon />
      <End />
    </>
  );
}
export default Mentorship;
