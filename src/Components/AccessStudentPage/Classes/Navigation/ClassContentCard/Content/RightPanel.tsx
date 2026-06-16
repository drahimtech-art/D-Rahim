function RightPanel() {
  return (
    <div className="w-full h-full ">
      <div className="w-full flex flex-col gap-5">
        {/**heading */}
        <span>
          <h5 className="font-sans font-medium min18pxMax20px">Resources</h5>
        </span>
        {/**download content */}
        <div className="w-full h-full">
          {/**content */}
          <span className="flex gap-4 w-full items-center pl-0.75 pr-0.75 pt-2.5 pb-2.5">
            <i className="fa fa-file"></i>
            <h5 className="font-sans font-normal text-[16px]">
              Lecture Notes (PDF)
            </h5>
            <i className="fa fa-download"></i>
          </span>
          {/**content */}
          <span className="flex gap-4 w-full items-center pl-0.75 pr-0.75 pt-2.5 pb-2.5">
            <i className="fa fa-file"></i>
            <h5 className="font-sans font-normal text-[16px]">Slides (PDF)</h5>
            <i className="fa fa-download"></i>
          </span>
          {/**content */}
          <span className="flex gap-4 w-full items-center pl-0.75 pr-0.75 pt-2.5 pb-2.5">
            <i className="fa fa-file"></i>
            <h5 className="font-sans font-normal text-[16px]">
              Example File (Figma)
            </h5>
            <i className="fa fa-download"></i>
          </span>
        </div>
        {/**end content */}
        <div className="mt-49.5 flex flex-col gap-2.5">
          <span className="mt-2.5">
            <h5 className="font-sans font-medium min18pxMax20px">
              Join Live Session!
            </h5>
          </span>
          <h5>
            Access your live mentorship session and continue your learning
            journey
          </h5>
          {/**action button */}
          <span className="w-full flex justify-start">
            <button className="pl-3.75 pr-3.75 p-2.5 bg-[#11AC76] w-fit rounded-[30px]">
              <h5 className="font-sans font-medium text-[16px] text-[#FFFFFF]">
                Join Class
              </h5>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
export default RightPanel;
