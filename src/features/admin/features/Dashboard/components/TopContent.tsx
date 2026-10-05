import walletIcon from "/images/icons/Wallet.png";
import usersThreeIcon from "/images/icons/UsersThree1.png";
import eyeIcon from "/images/icons/Eye.png";
import refreashIcon from "/images/icons/ArrowClockwise.png";
function TopContent() {
  return (
    <article className="w-full h-fit grid grid-cols-4 gap-[29px]">
      {/**content */}
      <section className="flex flex-col   w-full h-[100px] pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[14px]">
        <span>
          <h5 className="font-inter font-medium text-[12px] text-[#1C1C1E]">
            Revenue
          </h5>
        </span>
        <span className="flex w-full items-center gap-3.25">
          <h5 className="font-inter font-semibold text-[#004A3C] text-[24px]">
            N71,000
          </h5>
          <img className="w-[24px] h-[24px]" src={walletIcon}></img>
        </span>
        <h5 className="font-inter text-[11px] font-normal">
          vs May 26 - Jun 01
        </h5>
      </section>
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
            Bounce rate
          </h5>
        </span>
        <span className="flex w-full items-center gap-3.25">
          <h5 className="font-inter font-semibold text-[#004A3C] text-[24px]">
            101
          </h5>
          <img className="w-[24px] h-[24px]" src={refreashIcon}></img>
        </span>
        <h5 className="font-inter text-[11px] font-normal">
          vs May 26 - Jun 01
        </h5>
      </section>
    </article>
  );
}
export default TopContent;
