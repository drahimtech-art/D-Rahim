import classImge1 from "/images/class1.png";
type EnterClassControl = {
  setIsClassActive?: React.Dispatch<React.SetStateAction<boolean>>;
};
function ClassProgressBar(props: EnterClassControl) {
  return (
    <div className="flex items-center w-full gap-25.75">
      <div className="flex items-center gap-3.25 w-full">
        <span className="min-w-20.5 h-16.75">
          <img className="w-full h-full" src={classImge1}></img>
        </span>
        {/**heading & sub heading */}
        <span className="w-full h-full flex flex-col gap-1.25">
          <h5 className="line-clamp-1 font-sans font-medium text-[16px]">
            Ui/Ux Design Mentorship Bootcamp
          </h5>
          <h5 className="line-clamp-1 font-sans font-normal text-[16px]">
            12 Modules - 24 Lessons
          </h5>
        </span>
      </div>
      {/**progress bar */}
      <div className="flex flex-col w-full gap-1">
        <h5 className="line-clamp-1 font-sans font-normal text-[16px]">
          Progress
        </h5>
        <div className="w-full flex items-center  gap-2.5">
          <span className="block w-full max-w-72.5 h-1.5 rounded-[3px] bg-[#787878]">
            <span className="block w-[70%] h-full bg-[#0088FF] rounded-[3px]"></span>
          </span>
          <h5 className=" font-sans font-normal text-[16px]">75%</h5>
        </div>
      </div>
      {/**action button */}
      <button
        className="pointer p-2.5 min-w-26.75 flex justify-center items-center bg-[#11AC76] rounded-[30px]"
        onClick={() => {
          if (props.setIsClassActive) return props.setIsClassActive(true);
        }}
      >
        <h5 className=" font-sans font-medium text-[16px] text-[#FFFFFF]">
          View Class
        </h5>
      </button>
    </div>
  );
}
export default ClassProgressBar;
