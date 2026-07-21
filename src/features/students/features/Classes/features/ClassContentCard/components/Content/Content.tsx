import LeftPanelBar from "./features/LeftPanelBar";
import MainContent from "./features/MainContent";
import RightPanel from "./features/RightPanel";
function Content() {
  return (
    <div className="mt-10 w-full h-full flex items-center  gap-10">
      {/**left panel bar */}
      <div className="w-[30%] h-full max-w-50.5">
        <LeftPanelBar />
      </div>
      {/**main content */}
      <div className="w-[40%] h-full ">
        <MainContent />
      </div>
      {/**right panel bar */}
      <div className="w-[25%] h-full max-w-60.5  ml-auto">
        <RightPanel />
      </div>
    </div>
  );
}
export default Content;
