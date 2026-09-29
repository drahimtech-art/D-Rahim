import End from "../../shared/Footer/Footer";
import Top from "../../shared/Top/Top";
/*
import EnterDetails from "./components/EnterDetails";
import MentorshipHeadText from "./components/MentorshipHeadText";
import MentorshipPlan from "./components/MentorshipPlan";
import OurStudents from "./components/OurStudents";
*/
import ComingSoon from "./components/comingSoon/ComingSoon";
function Mentorship() {
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
