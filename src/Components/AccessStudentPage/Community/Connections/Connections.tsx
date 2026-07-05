import PeopleYouMayKnow from "./PeopleYouMayKnow/PeopleYouMayKnow";
import RecommendGroups from "./RecommendGroups/RecommendGroups";
function Connections() {
  return (
    <div className="w-full h-full max-h-fit min-w-[320px]   bg-[#FFFFFF] overflow-y-auto">
      <span>
        <h5 className="font-medium font-sans min20Max24px">Connections</h5>
      </span>
      {/**content */}
      <div className="flex flex-col gap-2.5">
        <PeopleYouMayKnow />
        <RecommendGroups />
      </div>
    </div>
  );
}
export default Connections;
