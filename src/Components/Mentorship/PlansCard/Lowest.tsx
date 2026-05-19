function Lowest() {
  return (
    <div className=" flex flex-col p-10 gap-3 w-full h-full bg-[#F8FAFC]  rounded-2xl paymentCardShadow border-2 border-[black]">
      <span className="flex flex-col gap-1.5">
        <h5 className="fontPoppins font-semibold text-[40px] ">Basic Plan</h5>
        <h5 className="fontPoppins  text-[20px] -mt-2 ">Starter level</h5>
      </span>
      <span className="fontPoppins flex items-center gap-0.5 font-bold  text-[50px]  pl-1.5">
        <h5 className="font-medium text-[35px] ">&#8358;</h5>
        <h5>50,000</h5>
      </span>
      <span className="flex flex-col gap-2.5">
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-clock text-[20px] -ml-1"></i>
          </span>
          <h5 className="font-inter font-medium text-[20px] -mt-1 ">
            Duration: 4 Week
          </h5>
        </span>
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-check absolute text-[12px] text-[#191919]  -mt-[0.2rem] ml-2 min-[800px]:-mt-0.75 min-[800px]:ml-1.5"></i>
            <span className="block  w-4.5 h-4.5  bg-[#191919] relative rounded-full">
              <i className="fa fa-check absolute text-[12px] text-white mt-0.3 min-[800px]:mt-0.5 ml-[0.32rem] min-[800px]:ml-0.75"></i>
            </span>
          </span>
          <h5 className="font-inter font-medium text-[20px]  -mt-2 ">
            1 live session per week
          </h5>
        </span>
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-check absolute text-[12px] text-[#191919]  -mt-[0.2rem] ml-2 min-[800px]:-mt-0.75 min-[800px]:ml-1.5"></i>
            <span className="block  w-4.5 h-4.5  bg-[#191919] relative rounded-full">
              <i className="fa fa-check absolute text-[12px] text-white mt-0.3 min-[800px]:mt-0.5 ml-[0.32rem] min-[800px]:ml-0.75"></i>
            </span>
          </span>
          <h5 className="font-inter font-medium text-[20px] -mt-2 ">
            Access to recorded lessons
          </h5>
        </span>
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-check absolute text-[12px] text-[#191919]  -mt-[0.2rem] ml-2 min-[800px]:-mt-0.75 min-[800px]:ml-1.5"></i>
            <span className="block  w-4.5 h-4.5  bg-[#191919] relative rounded-full">
              <i className="fa fa-check absolute text-[12px] text-white mt-0.3 min-[800px]:mt-0.5 ml-[0.32rem] min-[800px]:ml-0.75"></i>
            </span>
          </span>
          <h5 className="font-inter font-medium text-[20px] -mt-2">
            Basic design tasks
          </h5>
        </span>
        <span className="flex  items-center">
          <span className="relative block  w-9.5 h-9.5  p-1.5  rounded-full">
            <i className="fa fa-check absolute text-[12px] text-[#191919]  -mt-[0.2rem] ml-2 min-[800px]:-mt-0.75 min-[800px]:ml-1.5"></i>
            <span className="block  w-4.5 h-4.5  bg-[#191919] relative rounded-full">
              <i className="fa fa-check absolute text-[12px] text-white mt-0.3 min-[800px]:mt-0.5 ml-[0.32rem] min-[800px]:ml-0.75"></i>
            </span>
          </span>
          <h5 className="font-inter font-medium text-[20px] -mt-2 ">
            Community support
          </h5>
        </span>
      </span>
      <div className="flex w-full justify-center pb-5 mt-5">
        <span className="w-fit h-fit pl-7.5 pr-7.5 pt-2.5 pb-2.5 bg-[#191919] rounded-full pointer">
          <h5 className="font-inter font-medium text-[20px] text-[#FFFFFF]">
            Select Plan
          </h5>
        </span>
      </div>
    </div>
  );
}
export default Lowest;
