import { useState, lazy } from "react";
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
import AllClasses from "./Navigation/AllClasses/AllClasses";
const ActiveClass = lazy(
  () => import("./Navigation/ActiveClasses/ActiveClass"),
);
import ClassContentCard from "./Navigation/ClassContentCard/ClassContentCard";
function Classes() {
  const [isClassActive, setIsClassActive] = useState<boolean>(false); // for testing am going to prop drill
  const [renderAllClasses, setRenderAllClasses] = useState<boolean>(true);
  const [renderActiveClasses, setRenderActiveClasses] =
    useState<boolean>(false);
  const [renderCompletedClasses, setRenderCompletedClasses] =
    useState<boolean>(false);
  function toAllClass() {
    setRenderActiveClasses(false);
    setRenderCompletedClasses(false);
    setRenderAllClasses(true);
  }
  function toActiveClass() {
    setRenderAllClasses(false);
    setRenderCompletedClasses(false);
    setRenderActiveClasses(true);
  }
  function toCompletedClass() {
    setRenderAllClasses(false);
    setRenderActiveClasses(false);
    setRenderCompletedClasses(true);
  }
  return (
    <div className="min-w-full h-full">
      {/**head content */}
      {!isClassActive ? (
        <>
          <HeadContent
            toAllClasses={toAllClass}
            toActiveClasses={toActiveClass}
            toCompletedClasses={toCompletedClass}
          />
          {/**content body*/}
          {renderAllClasses && (
            <AllClasses setIsClassActive={setIsClassActive} />
          )}
          {renderActiveClasses && <ActiveClass />}
        </>
      ) : (
        <ClassContentCard setIsClassActive={setIsClassActive} />
      )}
    </div>
  );
}
export default Classes;
