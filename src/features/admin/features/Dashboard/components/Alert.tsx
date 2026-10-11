import jobInquiresIcon from "/images/icons/BriefcaseLight_icon.png";
function Alert() {
  return (
    <section className="w-[40%] h-full bg-[#FFFFFF] rounded-[20px] p-4">
      <article className="w-full h-full ">
        {/**head */}
        <section className="w-full h-fit p-2  flex">
          <h5 className="font-medium text-[16px] font-inter">
            Needs Your Attention
          </h5>
          <button className="ml-auto pointer">
            <h5 className=" font-medium text-[16px] text-black font-inter">
              See All
            </h5>
          </button>
        </section>
        {/**alert data body */}
        <section className="grid grid-rows-3 mt-3.75 gap-[15px] w-full">
          {/**alert data card */}
          <div className="flex gap-2 items-center w-full border-b-2 border-[#eeeded] pb-2">
            <img className="w-[24px] h-[24px]" src={jobInquiresIcon}></img>
            <h5 className="font-medium font-inter text-[16px]">
              2 new job requst
            </h5>
          </div>
          {/**alert data card */}
          <div className="flex gap-2 items-center w-full border-b-2 border-[#eeeded] pb-2">
            <img className="w-[24px] h-[24px]" src={jobInquiresIcon}></img>
            <h5 className="font-medium font-inter text-[16px]">
              3 pending bookings
            </h5>
          </div>
          {/**alert data card */}
          <div className="flex gap-2 items-center w-full border-b-2 border-[#eeeded] pb-2">
            <img className="w-[24px] h-[24px]" src={jobInquiresIcon}></img>
            <h5 className="font-medium font-inter text-[16px]">
              5 unread messages
            </h5>
          </div>
          {/**alert data card */}
          <div className="flex gap-2 items-center w-full border-b-2 border-[#eeeded] pb-2">
            <img className="w-[24px] h-[24px]" src={jobInquiresIcon}></img>
            <h5 className="font-medium font-inter text-[16px]">
              3 pending payments
            </h5>
          </div>
        </section>
      </article>
    </section>
  );
}
export default Alert;
