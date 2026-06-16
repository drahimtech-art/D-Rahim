import videoDisplayImg from "/images/vidoDisplay.png";
function MainContent() {
  return (
    <div className="w-full h-full  relative">
      {/**heading */}
      <span>
        <h5 className="font-sans font-medium min18pxMax20px">
          Module 1: Ux Fundamentals
        </h5>
      </span>
      {/**content */}
      <div className="mt-7.5">
        {/**content display video */}
        <span className="block w-full  max-w-121 h-78.75 rounded-2xl bg-gray-500">
          <img className="w-full h-full" src={videoDisplayImg}></img>
        </span>
        {/**end content */}
        <div className="mt-7.5 flex flex-col gap-2.5">
          <h5 className="font-sans font-medium min18pxMax20px">
            About this lesson
          </h5>
          <h5 className="font-sans font-normal text-[16px]">
            Introduction to the core principle of User Experience Design
          </h5>
          {/**action button */}
          <span className="w-full flex justify-start">
            <button className="w-fit pl-3.75 p-2.5 pr-3.75 rounded-[30px] bg-[#11AC76] text-[#FFFFFF] flex justify-center items-center">
              <h5 className="font-sans font-medium text-[16px]">
                Mark as Completed
              </h5>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
export default MainContent;
