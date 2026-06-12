function Alert() {
  return (
    <div className="w-[70%] h-full  pl-5 pr-5 p-3.5 bg-[#FFFFFF] rounded-[20px]">
      <span>
        <h5 className="font-inter font-medium min18pxMax20px">Alerts</h5>
      </span>
      <div className="mt-3.75 flex flex-col h-49.5 overflow-y-auto scroll-container">
        {/**content */}
        <div className="border-b border-gray-500 flex pb-2 pt-2">
          <span className="mr-2 w-10 h-10 rounded-2xl bg-[#FFF9E5] text-[#D4AF37] flex justify-center items-center ">
            <i className="fas fa-exclamation-circle  text-[20px]"></i>
          </span>
          <span className="flex flex-col gap-2.5 mr-auto ">
            <h5 className="font-inter font-medium text-[16px]">
              Payments Pending
            </h5>
            <h5 className="font-inter font-normal text-[14px] -mt-1">
              2 mentorship payments pending
            </h5>
          </span>
          <span className="flex justify-center items-center w-fit min-h-full">
            <h5 className="font-inter font-light text-[14px] pointer border-b ">
              View
            </h5>
          </span>
        </div>
        {/**content */}
        <div className="border-b border-gray-500 flex pb-2 pt-2">
          <span className="mr-2 w-10 h-10 rounded-2xl bg-[#FFEDE3] text-[#ED722F] flex justify-center items-center ">
            <i className="fas fa-question-circle  text-[20px]"></i>
          </span>
          <span className="flex flex-col gap-2.5 mr-auto ">
            <h5 className="font-inter font-medium text-[16px]">
              Job Inquiries
            </h5>
            <h5 className="font-inter font-normal text-[14px] -mt-1">
              1 new job request
            </h5>
          </span>
          <span className="flex justify-center items-center w-fit min-h-full">
            <h5 className="font-inter font-light text-[14px] pointer border-b ">
              View
            </h5>
          </span>
        </div>
        {/**content */}
        <div className="border-b border-gray-500 flex pb-2 pt-2">
          <span className="mr-2 w-10 h-10 rounded-2xl bg-[#FFF9E5] text-[#D4AF37] flex justify-center items-center ">
            <i className="fas fa-exclamation-triangle  text-[20px]"></i>
          </span>
          <span className="flex flex-col gap-2.5 mr-auto ">
            <h5 className="font-inter font-medium text-[16px]">
              Bookings Pending
            </h5>
            <h5 className="font-inter font-normal text-[14px] -mt-1">
              4 bookings pending approval
            </h5>
          </span>
          <span className="flex justify-center items-center w-fit min-h-full">
            <h5 className="font-inter font-light text-[14px] pointer border-b ">
              View
            </h5>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Alert;
