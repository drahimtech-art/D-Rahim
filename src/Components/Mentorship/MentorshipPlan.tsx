import basicPlanImg from "/images/31.png";
import standardPlanImg from "/images/30.png";
import premiumPlanImg from "/images/29.png";
function MentorshipPlan() {
  return (
    <div className="lg:pl-10 lg:pr-10 pr-5 pl-5 sm:mt-20 mt-10">
      <span className="block">
        <h5 className=" font-semibold fontPoppins font-size-heading">
          Ready? Choose Mentorship Plan
        </h5>
      </span>
      <div className="sm:h-158.75 sm:mt-15 mt-10 flex flex-col gap-10 sm:flex-row sm:gap-8.75 justify-around">
        <span className="w-full sm:w-111.25 h-141.75 sm:mt-17">
          <img className="w-full h-full" src={basicPlanImg}></img>
        </span>
        <span className="w-full sm:w-111.25 h-151.25 sm:mt-7.5">
          <img className="w-full h-full" src={standardPlanImg}></img>
        </span>
        <span className="w-full sm:w-111.25 h-158.75 ">
          <img className="w-full h-full" src={premiumPlanImg}></img>
        </span>
      </div>
    </div>
  );
}
export default MentorshipPlan;
