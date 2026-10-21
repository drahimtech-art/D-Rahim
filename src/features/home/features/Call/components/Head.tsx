import Logo1 from "/images/logo1.png";
import clockIcon from "/images/icons/Clock.png";
//import videoCameraIcon from "/images/icons/VideoCamera.png";
import calenderIcon from "/images/icons/CalendarBlank.png";
import worldIcon from "/images/icons/GlobeHemisphereWest.png";
function Head(): React.ReactElement {
  return (
    <div className="min-[1000px]:pl-10 min-[1000px]:pr-10 pl-5 pr-5  min-[1000px]:mt-20 mt-10 flex flex-col min-[1000px]:flex-row min-[1000px]:gap-10 gap-5 justify-around">
      <section className="flex flex-col min-[1000px]:mr-auto min-[1000px]:w-[32%]">
        <div className="flex flex-col gap-2 min-[1000px]:mt-6">
          <div className="flex justify-center min-[1000px]:pr-20">
            <span className="w-35 h-35 rounded-full ">
              <img className="w-full h-full rounded-full" src={Logo1}></img>
            </span>
          </div>
          <h5 className="font-inter font-semibold text-[20px] text-gray-500">
            Hello from D'rahim Tech Innovation👋!
          </h5>
          <h5 className="font-inter font-semibold text-[24px]">Let’s Meet!</h5>
        </div>
        <div className="flex flex-col mt-2 gap-5">
          <span className=" flex gap-2 items-center">
            <img
              className="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]"
              src={clockIcon}
            ></img>
            <h5 className="font-inter  text-[20px] text-[#5e5d5d]">48 mins</h5>
          </span>
          <span className=" flex gap-2 items-center">
            <img
              className="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]"
              src={calenderIcon}
            ></img>
            <h5 className="font-inter  text-[20px] text-[#5e5d5d]">
              7:00am-7:48am, Tuesday, September 9, 2026
            </h5>
          </span>
          <span className="flex flex-col gap-12">
            <span className=" flex gap-2 items-center">
              <img
                className="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]"
                src={worldIcon}
              ></img>
              <h5 className="font-inter  text-[20px] text-[#5e5d5d]">
                West Africa Time
              </h5>
            </span>
          </span>
        </div>
      </section>
    </div>
  );
}
export default Head;
