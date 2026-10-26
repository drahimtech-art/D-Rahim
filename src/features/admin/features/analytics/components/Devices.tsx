import desktopIcon from "/images/icons/Desktop.png";
import mobileIcon from "/images/icons/DeviceMobile.png";
import tabletIcon from "/images/icons/tablet.png";
import otherIcon from "/images/icons/CalendarDots_icon.png";
function Devices({
  desktop,
  mobile,
  tablet,
  other,
}: {
  desktop: number;
  mobile: number;
  tablet: number;
  other: number;
}): React.ReactElement {
  return (
    <article className="w-[90%] h-fit mt-[20px]  bg-[#FFFFFF] rounded-[20px] p-4 ">
      <article className="w-[70%] h-full ">
        {/**head */}
        <section className="w-full h-fit p-2  flex">
          <h5 className="font-medium text-[14px] font-inter">Devices</h5>
        </section>
        {/**device data body */}
        <section className="grid grid-rows-4 mt-2.5 gap-[15px] w-full">
          {/**device data card */}
          <div className="flex gap-3.25 w-full border-b border-[#eeeded]">
            <img className="w-[24px] h-[24px]" src={desktopIcon}></img>
            <span className="flex flex-col gap-0.5 pb-3.25 w-full ">
              <h5 className="font-medium font-inter text-[16px]">Desktop</h5>
              <h5 className="font-inter font-normal text-[14px] ">{desktop}</h5>
            </span>
          </div>
          {/**device data card */}
          <div className="flex gap-3.25 w-full border-b border-[#eeeded]">
            <img className="w-[24px] h-[24px]" src={mobileIcon}></img>
            <span className="flex flex-col gap-0.5 pb-3.25 w-full ">
              <h5 className="font-medium font-inter text-[16px]">Mobile</h5>
              <h5 className="font-inter font-normal text-[14px] ">{mobile}</h5>
            </span>
          </div>
          {/**device data card */}
          <div className="flex gap-3.25 w-full border-b border-[#eeeded]">
            <img className="w-[22px] h-[14px]" src={tabletIcon}></img>
            <span className="flex flex-col gap-0.5 pb-3.25 w-full ">
              <h5 className="font-medium font-inter text-[16px]">Tablet</h5>
              <h5 className="font-inter font-normal text-[14px] ">{tablet}</h5>
            </span>
          </div>
          {/**device data card */}
          <div className="flex gap-3.25 w-full border-b border-[#eeeded]">
            <img className="w-[24px] h-[24px]" src={otherIcon}></img>
            <span className="flex flex-col gap-0.5 pb-3.25 w-full ">
              <h5 className="font-medium font-inter text-[16px]">Others</h5>
              <h5 className="font-inter font-normal text-[14px] ">{other}</h5>
            </span>
          </div>
        </section>
      </article>
    </article>
  );
}
export default Devices;
