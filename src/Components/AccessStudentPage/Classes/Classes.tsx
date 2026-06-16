import HeadContent from "./HeadContent";
//
/*
import classImge1 from "/images/class1.png";
import classImge2 from "/images/class2.png";
import classImge3 from "/images/class5.png";
import classImge4 from "/images/class6.png";
import classImge5 from "/images/class3.png";
import classImge6 from "/images/class7.png";
import classImge7 from "/images/class4.png";
*/
import ClassProgressBar from "./ClassProgressCard";
function Classes() {
  return (
    <div className="w-full h-full">
      {/**head content */}
      <HeadContent />
      {/**content body*/}
      <div className="flex flex-col gap-6.25">
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
        {/**content */}
        <ClassProgressBar />
      </div>
    </div>
  );
}
export default Classes;
