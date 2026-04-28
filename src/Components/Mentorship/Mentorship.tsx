import End from "../End/End";
import Top from "../Top/Top";
import EnterDetails from "./EnterDetails";
import MentorshipHeadText from "./MentorshipHeadText";
import MentorshipPlan from "./MentorshipPlan";
import OurStudents from "./OurStudents";

function Mentorship() {
  return (
    <>
      <Top />
      <MentorshipHeadText />
      <OurStudents />
      <MentorshipPlan />
      <EnterDetails />
      <End />
    </>
  );
}
export default Mentorship;
