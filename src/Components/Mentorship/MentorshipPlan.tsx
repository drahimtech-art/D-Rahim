import Lowest from "./PlansCard/Lowest";
import Meduim from "./PlansCard/Meduim";
import High from "./PlansCard/High";
function MentorshipPlan() {
  //
  return (
    <div className="min-[1000px]:pl-10 min-[1000px]:pr-10 pr-5 pl-5 min-[1000px]:mt-20 mt-10">
      <span className="block">
        <h5 className=" font-semibold fontPoppins font-size-heading">
          Ready? Choose Mentorship Plan
        </h5>
      </span>
      <div className="min-[1000px]:h-158.75 min-[1000px]:mt-15 mt-10 flex flex-col gap-10 min-[1000px]:flex-row min-[1000px]:gap-8.75 justify-around">
        <span className="w-full min-[1000px]:w-111.25 min-[1000px]:h-141.75 h-fit min-[1000px]:mt-17 sm:max-w-117 sm:mr-auto min-[1000px]:mr-0">
          <Lowest />
        </span>
        <span className="w-full min-[1000px]:w-111.25 min-[1000px]:h-151.25 h-fit min-[1000px]:mt-7.5 sm:max-w-117 sm:mr-auto min-[1000px]:mr-0">
          <Meduim />
        </span>
        <span className="w-full min-[1000px]:w-111.25 min-[1000px]:h-158.75 h-fit sm:max-w-117 sm:mr-auto min-[1000px]:mr-0">
          <High />
        </span>
      </div>
    </div>
  );
}
export default MentorshipPlan;
