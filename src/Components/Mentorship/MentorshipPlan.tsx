import Lowest from "./PlansCard/Lowest";
import Meduim from "./PlansCard/Meduim";
import High from "./PlansCard/High";
function MentorshipPlan() {
  //
  return (
    <div className="lg:pl-10 lg:pr-10 pr-5 pl-5 lg:mt-20 mt-10">
      <span className="block">
        <h5 className=" font-semibold fontPoppins font-size-heading">
          Ready? Choose Mentorship Plan
        </h5>
      </span>
      <div className="lg:h-158.75 lg:mt-15 mt-10 flex flex-col gap-10 lg:flex-row lg:gap-8.75 justify-around">
        <span className="w-full lg:w-111.25 h-141.75 lg:mt-17">
          <Lowest />
        </span>
        <span className="w-full lg:w-111.25 h-151.25 lg:mt-7.5">
          <Meduim />
        </span>
        <span className="w-full lg:w-111.25 h-158.75 ">
          <High />
        </span>
      </div>
    </div>
  );
}
export default MentorshipPlan;
