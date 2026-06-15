import classImge1 from "/images/class1.png";
import classImge2 from "/images/class2.png";
import classImge3 from "/images/class5.png";
import classImge4 from "/images/class6.png";
import classImge5 from "/images/class3.png";
import classImge6 from "/images/class7.png";
import classImge7 from "/images/class4.png";
function Content() {
  return (
    <div className="w-full h-full mt-7.5 grid grid-cols-2 gap-5.25">
      {/**first content */}
      <div className="w-full   border border-[#9AA1A2] min-h-106 h-fit  bg-[#FFFFFF] rounded-[20px] p-5">
        <span className="flex">
          <h5 className="font-medium font-sans min18pxMax20px">
            Your Active Classes
          </h5>
          <span className="ml-auto">
            <h5 className="font-sans text-[16px] font-normal pointer">
              View all
            </h5>
          </span>
        </span>
        {/**content */}
        <div className="mt-7.5 flex flex-col gap-6.25">
          {/**sub content */}
          <div className="flex w-full items-center gap-3.25 grow">
            {/**image */}
            <span className="min-w-20.5 h-16.75 grow">
              <img className="min-w-20.5 h-16.75 " src={classImge1}></img>
            </span>
            <div className="flex gap-3.25 w-full">
              {/**heading and progress bar */}
              <div className="w-full grid grid-rows-2">
                <h5 className="font-medium text-[16px] line-clamp-1 font-sans">
                  Ui/Ux Design Mentorship Bootcamp
                </h5>
                {/**progress bar */}
                <div className="w-full flex items-center gap-2.5">
                  <h5 className="font-sans text-[16px] font-normal">
                    Progress
                  </h5>
                  <span className="block w-full h-1.5 bg-[#787878] rounded-[3px]">
                    <span className="block w-[75%] h-full bg-[#0088FF] rounded-[3px]"></span>
                  </span>
                  <h5 className="font-sans text-[16px] font-normal">75%</h5>
                </div>
              </div>
              {/**action button */}
              <button className="flex p-2.5 pointer justify-center items-center bg-[#11AC76] rounded-[30px]">
                <h5 className="font-sans text-[16px] font-normal text-[#FFFFFF]">
                  Continue
                </h5>
              </button>
            </div>
          </div>
          {/**sub content */}
          <div className="flex w-full items-center gap-3.25 grow">
            {/**image */}
            <span className="min-w-20.5 h-16.75 grow">
              <img className="min-w-20.5 h-16.75 " src={classImge2}></img>
            </span>
            <div className="flex gap-3.25 w-full">
              {/**heading and progress bar */}
              <div className="w-full grid grid-rows-2">
                <h5 className="font-medium text-[16px] line-clamp-1 font-sans">
                  Product Design Master Class
                </h5>
                {/**progress bar */}
                <div className="w-full flex items-center gap-2.5">
                  <h5 className="font-sans text-[16px] font-normal">
                    Progress
                  </h5>
                  <span className="block w-full h-1.5 bg-[#787878] rounded-[3px]">
                    <span className="block w-[40%] h-full bg-[#0088FF] rounded-[3px]"></span>
                  </span>
                  <h5 className="font-sans text-[16px] font-normal">40%</h5>
                </div>
              </div>
              {/**action button */}
              <button className="flex p-2.5 pointer justify-center items-center bg-[#11AC76] rounded-[30px]">
                <h5 className="font-sans text-[16px] font-normal text-[#FFFFFF]">
                  Continue
                </h5>
              </button>
            </div>
          </div>
          {/**sub content */}
          <div className="flex w-full items-center gap-3.25 grow">
            {/**image */}
            <span className="min-w-20.5 h-16.75 grow">
              <img className="min-w-20.5 h-16.75 " src={classImge3}></img>
            </span>
            <div className="flex gap-3.25 w-full">
              {/**heading and progress bar */}
              <div className="w-full grid grid-rows-2">
                <h5 className="font-medium text-[16px] line-clamp-1 font-sans">
                  Figma For Beginners
                </h5>
                {/**progress bar */}
                <div className="w-full flex items-center gap-2.5">
                  <h5 className="font-sans text-[16px] font-normal">
                    Progress
                  </h5>
                  <span className="block w-full h-1.5 bg-[#787878] rounded-[3px]">
                    <span className="block w-[30%] h-full bg-[#0088FF] rounded-[3px]"></span>
                  </span>
                  <h5 className="font-sans text-[16px] font-normal">30%</h5>
                </div>
              </div>
              {/**action button */}
              <button className="flex p-2.5 pointer justify-center items-center bg-[#11AC76] rounded-[30px]">
                <h5 className="font-sans text-[16px] font-normal text-[#FFFFFF]">
                  Continue
                </h5>
              </button>
            </div>
          </div>
          {/**sub content */}
          <div className="flex w-full items-center gap-3.25 grow">
            {/**image */}
            <span className="min-w-20.5 h-16.75 grow">
              <img className="min-w-20.5 h-16.75 " src={classImge4}></img>
            </span>
            <div className="flex gap-3.25 w-full ">
              {/**heading and progress bar */}
              <div className="w-full grid grid-rows-2">
                <h5 className="font-medium text-[16px] line-clamp-1 font-sans">
                  Design System Bootcamp
                </h5>
                {/**progress bar */}
                <div className="w-full flex items-center gap-2.5">
                  <h5 className="font-sans text-[16px] font-normal">
                    Progress
                  </h5>
                  <span className="block w-full h-1.5 bg-[#787878] rounded-[3px]">
                    <span className="block w-[1%] h-full bg-[#0088FF] rounded-[3px]"></span>
                  </span>
                  <h5 className="font-sans text-[16px] font-normal">0%</h5>
                </div>
              </div>
              {/**action button */}
              <button className="flex p-2.5 pointer justify-center items-center bg-[#11AC76] rounded-[30px]">
                <h5 className="font-sans text-[16px] font-normal text-[#FFFFFF]">
                  Continue
                </h5>
              </button>
            </div>
          </div>
          {/**end sub content */}
        </div>
      </div>
      {/**second content */}
      <div className="w-full h-full flex flex-col gap-7.5">
        {/**second first content */}
        <div className="w-full  border border-[#9AA1A2] min-h-83.75 h-fit bg-[#FFFFFF] rounded-[20px] p-5">
          <span className="flex">
            <h5 className="font-medium font-sans min18pxMax20px">
              Upcoming Live Sessions
            </h5>
            <span className="ml-auto">
              <h5 className="font-sans text-[16px] font-normal pointer">
                View all
              </h5>
            </span>
          </span>
          {/**content */}
          <div className="mt-7.5 flex flex-col gap-6.25">
            {/**sub content */}
            <div className="flex items-center gap-3.25 grow">
              <span className="min-w-20.5 h-16.75">
                <img className="w-full h-full" src={classImge5}></img>
              </span>
              <div className="flex items-center w-full">
                {/**heading & time */}
                <div className="w-full flex flex-col min-fit max-w-60.75">
                  <h5 className="font-medium text-[16px] line-clamp-1 font-sans">
                    DUx Research Deep Dive
                  </h5>
                  {/**time */}
                  <h5 className="font-normal text-[16px] line-clamp-1 font-sans">
                    10:00Am - 12:00Pm
                  </h5>
                </div>
                {/**action button */}
                <button className="flex p-2.5 pointer justify-center items-center bg-[#11AC76] rounded-[30px] ml-auto min-w-27">
                  <h5 className="font-sans text-[16px] font-normal text-[#FFFFFF]">
                    Join Session
                  </h5>
                </button>
              </div>
            </div>
            {/**sub content */}
            <div className="flex items-center gap-3.25 grow">
              <span className="min-w-20.5 h-16.75">
                <img className="w-full h-full" src={classImge6}></img>
              </span>
              <div className="flex items-center w-full">
                {/**heading & time */}
                <div className="w-full flex flex-col min-fit max-w-60.75">
                  <h5 className="font-medium text-[16px] line-clamp-1 font-sans">
                    Ux Research Deep Dive
                  </h5>
                  {/**time */}
                  <h5 className="font-normal text-[16px] line-clamp-1 font-sans">
                    10:00Am - 12:00Pm
                  </h5>
                </div>
                {/**action button */}
                <button className="flex p-2.5 pointer justify-center items-center bg-[#11AC76] rounded-[30px] ml-auto min-w-27">
                  <h5 className="font-sans text-[16px] font-normal text-[#FFFFFF]">
                    Join Session
                  </h5>
                </button>
              </div>
            </div>
            {/**sub content */}
            <div className="flex items-center gap-3.25 grow">
              <span className="min-w-20.5 h-16.75">
                <img className="w-full h-full" src={classImge7}></img>
              </span>
              <div className="flex items-center w-full">
                {/**heading & time */}
                <div className="w-full flex flex-col min-fit max-w-60.75">
                  <h5 className="font-medium text-[16px] line-clamp-1 font-sans">
                    DUx Research Deep Dive
                  </h5>
                  {/**time */}
                  <h5 className="font-normal text-[16px] line-clamp-1 font-sans">
                    10:00Am - 12:00Pm
                  </h5>
                </div>
                {/**action button */}
                <button className="flex p-2.5 pointer justify-center items-center bg-[#11AC76] rounded-[30px] ml-auto min-w-27">
                  <h5 className="font-sans text-[16px] font-normal text-[#FFFFFF]">
                    Join Session
                  </h5>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/**second sub content */}
        <div className="w-full  border border-[#9AA1A2] min-h-31.5 h-fit bg-[#FFFFFF] rounded-[20px] p-5 flex flex-col gap-2.5">
          <h5 className="font-sans font-medium min18pxMax20px">
            Announcements
          </h5>
          <span className="text-[16px] font-sans font-normal">
            <h5>New class recording is now available.</h5>
            <h5>Check the Ui/Ux Bootcamp - Week 2</h5>
          </span>
          <h5 className="text-[13px] font-sans font-normal">2 days ago</h5>
        </div>
      </div>
    </div>
  );
}
export default Content;
