import { useRef } from "react";
type NavigationControl = {
  toAllClasses: () => void;
  toActiveClasses: () => void;
  toCompletedClasses: () => void;
};
function HeadContent(props: NavigationControl) {
  const allClassRef = useRef<HTMLSpanElement | null>(null);
  const activeRef = useRef<HTMLSpanElement | null>(null);
  const completedRef = useRef<HTMLSpanElement | null>(null);
  //
  function toAllClass() {
    if (!allClassRef.current || !activeRef.current || !completedRef.current)
      return;
    //remove all active ui
    activeRef.current.classList.remove("border-[#11AC76]");
    activeRef.current.classList.remove("text-[#11AC76]");
    completedRef.current.classList.remove("border-[#11AC76]");
    completedRef.current.classList.remove("text-[#11AC76]");
    //added inactive ui
    activeRef.current.classList.add("border-white");
    activeRef.current.classList.add("text-black");
    completedRef.current.classList.add("border-white");
    completedRef.current.classList.add("text-black");
    //remove inactive for target element
    allClassRef.current.classList.remove("text-black");
    allClassRef.current.classList.remove("border-white");
    //add active ui for target element
    allClassRef.current.classList.add("border-[#11AC76]");
    allClassRef.current.classList.add("text-[#11AC76]");
    //render func call
    props.toAllClasses();
  }
  function toActiveClass() {
    if (!allClassRef.current || !activeRef.current || !completedRef.current)
      return;
    //remove all active ui
    allClassRef.current.classList.remove("border-[#11AC76]");
    allClassRef.current.classList.remove("text-[#11AC76]");
    completedRef.current.classList.remove("border-[#11AC76]");
    completedRef.current.classList.remove("text-[#11AC76]");
    //added inactive ui
    allClassRef.current.classList.add("border-white");
    allClassRef.current.classList.add("text-black");
    completedRef.current.classList.add("border-white");
    completedRef.current.classList.add("text-black");
    //remove inactive for target element
    activeRef.current.classList.remove("text-black");
    activeRef.current.classList.remove("border-white");
    //add active ui for target element
    activeRef.current.classList.add("border-[#11AC76]");
    activeRef.current.classList.add("text-[#11AC76]");
    //render func call
    props.toActiveClasses();
  }
  function toCompletedClass() {
    if (!allClassRef.current || !activeRef.current || !completedRef.current)
      return;
    //remove all active ui
    activeRef.current.classList.remove("border-[#11AC76]");
    activeRef.current.classList.remove("text-[#11AC76]");
    allClassRef.current.classList.remove("border-[#11AC76]");
    allClassRef.current.classList.remove("text-[#11AC76]");
    //added inactive ui
    activeRef.current.classList.add("border-white");
    activeRef.current.classList.add("text-black");
    allClassRef.current.classList.add("border-white");
    allClassRef.current.classList.add("text-black");
    //remove inactive for target element
    completedRef.current.classList.remove("text-black");
    completedRef.current.classList.remove("border-white");
    //add active ui for target element
    completedRef.current.classList.add("border-[#11AC76]");
    completedRef.current.classList.add("text-[#11AC76]");
    //render func call
    props.toCompletedClasses();
  }
  return (
    <div className="w-full min-w-full">
      <span>
        <h5 className="font-medium font-sans min18pxMax20px">My Classes</h5>
      </span>
      <div className="flex items-center mt-7.5 mb-7.5 pr-20">
        {/**fliter content */}
        <div className="flex gap-12.5 items-center">
          {/**content */}
          <span
            className="font-sans font-medium min18pxMax20px pointer border-b border-[#11AC76] text-[#11AC76]"
            ref={allClassRef}
            onClick={toAllClass}
          >
            <h5>All Classes</h5>
          </span>
          {/**content */}
          <span
            className="font-sans font-medium min18pxMax20px pointer border-b border-white"
            ref={activeRef}
            onClick={toActiveClass}
          >
            <h5>Active</h5>
          </span>
          {/**content */}
          <span
            className="font-sans font-medium min18pxMax20px pointer border-b border-white"
            ref={completedRef}
            onClick={toCompletedClass}
          >
            <h5>Completed</h5>
          </span>
        </div>
        {/**search bar */}
        <div className="ml-auto">
          <span className=" w-73.25 h-9.5 flex  items-center border border-gray-500 p-1 pl-3.25 pr-3.5 rounded-[30px]">
            <i className="fa fa-search text-2xl"></i>
            <input
              className="w-full h-full pl-2"
              placeholder="Search..."
            ></input>
          </span>
        </div>
      </div>
    </div>
  );
}
export default HeadContent;
