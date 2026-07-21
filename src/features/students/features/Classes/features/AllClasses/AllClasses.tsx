import type React from "react";
import ClassProgressBar from "../../shared/ClassProgressCard";
type EnterClassControl = {
  setIsClassActive: React.Dispatch<React.SetStateAction<boolean>>;
};
function AllClasses(props: EnterClassControl) {
  return (
    <div className="flex flex-col gap-6.25">
      {/**content */}
      <ClassProgressBar setIsClassActive={props.setIsClassActive} />
      {/**content */}
      <ClassProgressBar />
      {/**content */}
      <ClassProgressBar />
      {/**content */}
      <ClassProgressBar />
      {/**content */}
      <ClassProgressBar />
      {/**content */}
      <ClassProgressBar />
    </div>
  );
}
export default AllClasses;
