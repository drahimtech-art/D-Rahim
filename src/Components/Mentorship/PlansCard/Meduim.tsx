function Meduim() {
  return (
    <div className=" flex flex-col p-10 gap-3 w-full h-full bg-[#2563EB] text-white rounded-2xl paymentCardShadow">
      <span className="flex flex-col gap-1.5">
        <h5 className="fontPoppins font-semibold text-[40px]">Standard Plan</h5>
        <h5 className="fontPoppins  text-[20px] -mt-2">Most popular</h5>
      </span>
      <span className="fontPoppins flex items-center gap-0.5 font-bold  text-[50px] pl-1.5">
        <h5 className="font-medium text-[35px] ">&#8358;</h5>
        <h5>100,000</h5>
      </span>
      <span className="flex flex-col gap-2.5">
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-clock text-[20px] text-[#FFFFFF] -ml-1"></i>
          </span>
          <h5 className="font-inter font-medium text-[20px] -mt-2">
            Duration: 8 Week
          </h5>
        </span>
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-check absolute text-[12px] text-[#FFFFFF]  -mt-[0.2rem] ml-2 min-[800px]:-mt-0.75 min-[800px]:ml-1.5"></i>
            <span className="block  w-4.5 h-4.5  bg-[#FFFFFF] relative rounded-full">
              <i className="fa fa-check absolute text-[12px] text-[#2563EB] mt-0.3 min-[800px]:mt-0.5 ml-[0.32rem] min-[800px]:ml-0.75"></i>
            </span>
          </span>
          <h5 className="font-inter font-medium text-[20px]  -mt-2">
            2 live session per week
          </h5>
        </span>
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-check absolute text-[12px] text-[#FFFFFF]  -mt-[0.2rem] ml-2 min-[800px]:-mt-0.75 min-[800px]:ml-1.5"></i>
            <span className="block  w-4.5 h-4.5  bg-[#FFFFFF] relative rounded-full">
              <i className="fa fa-check absolute text-[12px] text-[#2563EB] mt-0.3 min-[800px]:mt-0.5 ml-[0.32rem] min-[800px]:ml-0.75"></i>
            </span>
          </span>
          <h5 className="font-inter font-medium text-[20px] -mt-2">
            Hands-on projects
          </h5>
        </span>
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-check absolute text-[12px] text-[#FFFFFF]  -mt-[0.2rem] ml-2 min-[800px]:-mt-0.75 min-[800px]:ml-1.5"></i>
            <span className="block  w-4.5 h-4.5  bg-[#FFFFFF] relative rounded-full">
              <i className="fa fa-check absolute text-[12px] text-[#2563EB] mt-0.3 min-[800px]:mt-0.5 ml-[0.32rem] min-[800px]:ml-0.75"></i>
            </span>
          </span>
          <h5 className="font-inter font-medium text-[20px] -mt-2">
            Portfolio guidance
          </h5>
        </span>
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-check absolute text-[12px] text-[#FFFFFF]  -mt-[0.2rem] ml-2 min-[800px]:-mt-0.75 min-[800px]:ml-1.5"></i>
            <span className="block  w-4.5 h-4.5  bg-[#FFFFFF] relative rounded-full">
              <i className="fa fa-check absolute text-[12px] text-[#2563EB] mt-0.3 min-[800px]:mt-0.5 ml-[0.32rem] min-[800px]:ml-0.75"></i>
            </span>
          </span>
          <h5 className="font-inter font-medium text-[20px] -mt-2">
            Group mentorship access
          </h5>
        </span>
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-check absolute text-[12px] text-[#FFFFFF]  -mt-[0.2rem] ml-2 min-[800px]:-mt-0.75 min-[800px]:ml-1.5"></i>
            <span className="block  w-4.5 h-4.5  bg-[#FFFFFF] relative rounded-full">
              <i className="fa fa-check absolute text-[12px] text-[#2563EB] mt-0.3 min-[800px]:mt-0.5 ml-[0.32rem] min-[800px]:ml-0.75"></i>
            </span>
          </span>
          <h5 className="font-inter font-medium text-[20px] -mt-2">
            Weekly feedback
          </h5>
        </span>
      </span>
      <div className="flex w-full justify-center pb-5 mt-2">
        <span className="w-fit h-fit pl-7.5 pr-7.5 pt-2.5 pb-2.5 bg-[#FFFFFF] rounded-full pointer">
          <h5 className="font-inter font-medium text-[20px] text-[#2563EB]">
            Select Plan
          </h5>
        </span>
      </div>
    </div>
  );
}
export default Meduim;
