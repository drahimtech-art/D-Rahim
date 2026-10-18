import End from "../../shared/Footer/Footer";
import Top from "../../shared/Top/Top";
/*
import EnterDetails from "./components/EnterDetails";
import MentorshipHeadText from "./components/MentorshipHeadText";
import MentorshipPlan from "./components/MentorshipPlan";
import OurStudents from "./components/OurStudents";
*/
import ComingSoon from "./components/comingSoon/ComingSoon";
import { useEffect, useState } from "react";
import { PagesConfigDataApi } from "../../../../storage/PagesConfig";
import LoadingAnimation from "../../shared/LoadingState/LoadingAnimation";
function Mentorship() {
  const pagesConfigData = PagesConfigDataApi();
  const { setMentorshipPage, mentorshipPage } = pagesConfigData;
  const [shouldLoad, setShouldLoad] = useState(!mentorshipPage);
  useEffect(() => {
    const removeLoadinigAnimationTimeOut = setTimeout(() => {
      (() => {
        setMentorshipPage(true);
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
      {shouldLoad && <LoadingAnimation shouldFadeOut={shouldLoad} />}
    </>
  );
}
export default Mentorship;
