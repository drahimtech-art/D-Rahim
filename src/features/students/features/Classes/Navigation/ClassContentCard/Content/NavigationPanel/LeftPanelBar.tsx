function LeftPanelBar() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      {/**action button */}
      <button className="w-full flex flex-col p-2.5 rounded-2xl bg-[#11AC76] text-[#FFFFFF] ">
        <h5 className="w-fit font-sans font-normal text-[16px]">Module 1</h5>
        <h5 className="w-fit text-start font-sans line-clamp-1 font-normal text-[16px]">
          Ux Fundamentals
        </h5>
      </button>
      {/**action button */}
      <button className="w-full flex flex-col p-2.5 rounded-2xl  ">
        <h5 className="w-fit font-sans font-normal text-[16px]">Module 2</h5>
        <h5 className="w-fit font-sans line-clamp-1 font-normal text-[16px]">
          User Research
        </h5>
      </button>
      {/**action button */}
      <button className="w-full flex flex-col p-2.5 rounded-2xl  ">
        <h5 className="w-fit font-sans font-normal text-[16px]">Module 3</h5>
        <h5 className="w-full  font-sans text-start line-clamp-1 font-normal text-[16px]">
          Information Architecture
        </h5>
      </button>
      {/**action button */}
      <button className="w-full flex flex-col p-2.5 rounded-2xl  ">
        <h5 className="w-fit font-sans font-normal text-[16px]">Module 4</h5>
        <h5 className="w-fit text-start font-sans font-normal text-[16px] line-clamp-1">
          WireFraming
        </h5>
      </button>
      {/**action button */}
      <button className="w-full flex flex-col p-2.5 rounded-2xl  ">
        <h5 className="w-fit font-sans font-normal text-[16px]">Module 5</h5>

        <h5 className="w-fit text-start font-sans font-normal text-[16px] line-clamp-1">
          Ui Design
        </h5>
      </button>
      {/**action button */}
      <button className="w-full flex flex-col p-2.5 rounded-2xl  ">
        <h5 className="w-fit font-sans font-normal text-[16px]">Module 6</h5>

        <h5 className="w-fit text-start font-sans font-normal text-[16px] line-clamp-1">
          Prototyping
        </h5>
      </button>
    </div>
  );
}
export default LeftPanelBar;
