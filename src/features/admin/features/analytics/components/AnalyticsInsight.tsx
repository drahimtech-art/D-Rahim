import usersThreeIcon from "/images/icons/UsersThree1.png";
import eyeIcon from "/images/icons/Eye.png";
function AnalyticsInsight() {
  return (
    <article className="w-full h-fit mt-[23px] grid grid-cols-4 gap-[29px]">
      {/**content */}
      <section className="flex flex-col   w-full h-[100px] pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[14px]">
        <span>
          <h5 className="font-inter font-medium text-[12px] text-[#1C1C1E]">
            Live Visitors
          </h5>
        </span>
        <span className="flex w-full items-center gap-3.25">
          <h5 className="font-inter font-semibold text-[#004A3C] text-[24px]">
            420
          </h5>
          <img className="w-[24px] h-[24px]" src={usersThreeIcon}></img>
        </span>
        <h5 className="font-inter text-[11px] font-normal">
          vs May 26 - Jun 01
        </h5>
      </section>
      {/**content */}
      <section className="flex flex-col   w-full h-[100px] pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[14px]">
        <span>
          <h5 className="font-inter font-medium text-[12px] text-[#1C1C1E]">
            Page view
          </h5>
        </span>
        <span className="flex w-full items-center gap-3.25">
          <h5 className="font-inter font-semibold text-[#004A3C] text-[24px]">
            35
          </h5>
          <img className="w-[24px] h-[24px]" src={eyeIcon}></img>
        </span>
        <h5 className="font-inter text-[11px] font-normal">
          vs May 26 - Jun 01
        </h5>
      </section>
      {/**content */}
      <section className="flex flex-col   w-full h-[100px] pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[14px]">
        <span>
          <h5 className="font-inter font-medium text-[12px] text-[#1C1C1E]">
            New Users
          </h5>
        </span>
        <span className="flex w-full items-center gap-3.25">
          <h5 className="font-inter font-semibold text-[#004A3C] text-[24px]">
            101
          </h5>
          <span className="flex justify-center items-center bg-[#DFFEF6] p-1.5 rounded-[10px]">
            <i className="fa fa-arrow-up font-normal text-[#11AC76] text-[11px]"></i>
            <h5 className="text-[#11AC76] font-inter font-normal text-[11px]">
              10%
            </h5>
          </span>
        </span>
        <h5 className="font-inter text-[11px] font-normal">
          vs May 26 - Jun 01
        </h5>
      </section>
      {/**content */}
      <section className="flex flex-col   w-full h-[100px] pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[14px]">
        <span>
          <h5 className="font-inter font-medium text-[12px] text-[#1C1C1E]">
            Returning Users
          </h5>
        </span>
        <span className="flex w-full items-center gap-3.25">
          <h5 className="font-inter font-semibold text-[#004A3C] text-[24px]">
            337
          </h5>
          <span className="flex justify-center items-center bg-[#FFE0EB] p-1.5 rounded-[10px]">
            <i className="fa fa-arrow-down text-[#F31260] text-[11px]"></i>
            <h5 className="text-[#F31260] font-inter font-normal text-[11px]">
              3%
            </h5>
          </span>
        </span>
        <h5 className="font-inter text-[11px] font-normal">
          vs May 26 - Jun 01
        </h5>
      </section>
    </article>
  );
}

export default AnalyticsInsight;
