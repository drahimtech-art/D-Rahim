import Lowest from "./PlansCard/Lowest";
import Meduim from "./PlansCard/Meduim";
import High from "./PlansCard/High";
function MentorshipPlan() {
  //
  return (
    <div className="lg:pl-10 lg:pr-10 pr-5 pl-5 sm:mt-20 mt-10">
      <span className="block">
        <h5 className=" font-semibold fontPoppins font-size-heading">
          Ready? Choose Mentorship Plan
        </h5>
      </span>
      <div className="sm:h-158.75 sm:mt-15 mt-10 flex flex-col gap-10 sm:flex-row sm:gap-8.75 justify-around">
        <span className="w-full sm:w-111.25 h-141.75 sm:mt-17">
          <Lowest />
        </span>
        <span className="w-full sm:w-111.25 h-151.25 sm:mt-7.5">
          <Meduim />
        </span>
        <span className="w-full sm:w-111.25 h-158.75 ">
          <High />
        </span>
      </div>
    </div>
  );
}
export default MentorshipPlan;
