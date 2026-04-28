import basicPlanImg from "/images/31.png";
import standardPlanImg from "/images/30.png";
import premiumPlanImg from "/images/29.png";
function MentorshipPlan() {
  return (
    <div className="pl-10 pr-10">
      <span className="block">
        <h5 className="text-[80px] font-semibold fontPoppins font-size-heading">
          Ready? Choose Mentorship Plan
        </h5>
      </span>
      <div className="h-158.75 mt-15 flex gap-8.75 justify-around">
        <span className="w-111.25 h-141.75 mt-17">
          <img className="w-full h-full" src={basicPlanImg}></img>
        </span>
        <span className="w-111.25 h-151.25 mt-7.5">
          <img className="w-full h-full" src={standardPlanImg}></img>
        </span>
        <span className="w-111.25 h-158.75 ">
          <img className="w-full h-full" src={premiumPlanImg}></img>
        </span>
      </div>
    </div>
  );
}
export default MentorshipPlan;
