import Logo1 from "/images/logo1.png";
import clockIcon from "/images/icons/Clock.png";
import videoCameraIcon from "/images/icons/VideoCamera.png";
function Head(): React.ReactElement {
  return (
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
        <span className=" flex gap-2 ">
          <img
            className="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]"
            src={videoCameraIcon}
          ></img>
          <h5 className="font-inter  text-[20px] text-[#5e5d5d]">
            Web conferencing details provided upon confirmation
          </h5>
        </span>
        <span className="flex flex-col gap-12">
          <h5 className="font-inter font-medium text-[20px] text-[#5e5d5d]">
            Please, pick the time that works best for you.
          </h5>
          <h5 className="font-inter font-medium text-[20px] text-[#5e5d5d]">
            Let’s make the conversation Count!
          </h5>
        </span>
      </div>
    </section>
  );
}
export default Head;
